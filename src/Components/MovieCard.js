import React from 'react'
import { IMG_CDN_URL } from '../Utils/Constants'

const MovieCard = ({posterPath}) => {
  return (
    <div>
      <img alt='banner-image' src={IMG_CDN_URL+posterPath} width='260px' className='me-2'/>
    </div>
  )
}

export default MovieCard;
