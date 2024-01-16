import React from 'react';
import '../Components/style.css';

const VideoTitle = ({title, overview}) => {
  return (
    <div>
    <div className='mt-5 container title-container position-absolute text-white ms-5 pt-5'>
    <h1 className='text-bold w-75'>{title}</h1>
    <p className='overview-text'>{overview}</p>

    <div>
        <button className='btn btn-light me-3 ps-4 pe-4'> Play</button>
        <button className='btn btn-secondary ps-4 pe-4'>More Info</button>
    </div>
    </div>

    </div>
  )
}

export default VideoTitle
