import React, { useEffect, useState } from "react";
import { createClient } from "pexels";
const Context = React.createContext();
function ContextProvader({ children }) {
  const apiKey = "4rgeXM9DqvJxRPnCb62gMP1s8NZR8NAEP6GATLQPbfAhTnfJbgjDoSua";
  const [photoData, setnewArr] = useState([]);
  useEffect(() => {
    if (!JSON.parse(localStorage.getItem("Allphotos"))) {
      fetch("https://api.pexels.com/v1/curated?page=1&per_page=80")
        .then((res) => res.json())
        .then((res) => setnewArr(res.photos));
    } else {
      setnewArr(JSON.parse(localStorage.getItem("Allphotos")));
    }
  }, []);

  function lik(id) {
    setnewArr((prev) => {
      return prev.map((ele) => {
        return ele.id === id ? { ...ele, liked: !ele.liked } : ele;
      });
    });
  }
  useEffect(() => {
    localStorage.setItem("Allphotos", JSON.stringify(photoData));
  }, [photoData]);

  const [newVideo, setNewVideo] = useState([]);
  useEffect(() => {
    if (!JSON.parse(localStorage.getItem("videos"))) {
      fetch("https://api.pexels.com/videos/popular?per_page=80")
        .then((res) => res.json())
        .then((res) =>
          setNewVideo(
            res.videos.map((ele) => {
              return { ...ele, liked: false };
            })
          )
        );
    } else {
      setNewVideo(JSON.parse(localStorage.getItem("videos")));
    }
  }, []);
  function vlike(id) {
    setNewVideo((prev) => {
      return prev.map((el) => {
        return el.id === id ? { ...el, liked: !el.liked } : el;
      });
    });
  }
  useEffect(() => {
    localStorage.setItem("videos", JSON.stringify(newVideo));
  }, [newVideo]);

  function remove(id) {
    setnewArr((prev) => {
      return prev.map((el) => {
        return el.id === id ? { ...el, liked: !el.liked } : el;
      });
    });
    setNewVideo((prev) => {
      return prev.map((ele) => {
        return ele.id === id ? { ...ele, liked: !ele.liked } : ele;
      });
    });
  }
  return (
    <Context.Provider
      value={{ apiKey, photoData, lik, remove, newVideo, vlike }}
    >
      {children}
    </Context.Provider>
  );
}

export { ContextProvader, Context };
