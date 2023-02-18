import React from 'react'

function Modul({url , files}) {
  return (
    <div className='mudul'>
        <video >
            <source src={url} type={files.file_type} />
        </video>
    </div>
  )
}

export default Modul
