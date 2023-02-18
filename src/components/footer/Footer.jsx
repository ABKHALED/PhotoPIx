import { Link } from 'react-router-dom'
import './footer.css'
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import GitHubIcon from '@mui/icons-material/GitHub';
function Footer() {
  return (
    <footer className='  bg-light pt-5 text-center'>
      <div className="container">
        <div className="row">
            <div className="col-12 col-md-6 col-lg-4 mb-2 left">
                <h3 className='mb-3'>About Pixart</h3>
                <p className='text-black-50'>Catalog-Z is free Bootstrap 5 Alpha 2 HTML Template for video and photo websites. You can freely use this TemplateMo layout for a front-end integration with any kind of CMS website.</p>
            </div>
            <div className="col-12 col-md-6 col-lg-4 mb-2 mid">
                <h3 className='mb-3'>Our Links</h3>
                <ul>
                    <li>
                        <Link to='photos' >Photos</Link>
                    </li>
                    <li>
                    <Link to='videos' >Videos</Link>
                    </li>
                    <li>
                        <Link to='contact'>contact</Link>
                    </li>
                </ul>
            </div>
            <div className="col-12 col-md-6 col-lg-4 mb-2 right">
                <h3 className='mb-3'>social media</h3>
                <ul>
                    <li>
                        <a href="https://twitter.com/">
                            <TwitterIcon />
                        </a>
                    </li>
                    <li>
                    <a href="https://www.facebook.com/">
                            <FacebookIcon />
                        </a>
                    </li>
                    <li>
                    <a href="https://www.instagram.com/">
                            <InstagramIcon />
                        </a>
                    </li>
                    <li>
                    <a href="https://github.com/">
                            <GitHubIcon />
                        </a>
                    </li>
                </ul>
            </div>
            <div className='col-12 d-flex justify-content-between align-items-center pt-5 dd '>
                <p>Copyright 2020 Pixart Company. All rights reserved.</p>
                <p>Designed by TemplateMo</p>
            </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
