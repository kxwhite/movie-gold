import React from 'react';
import { useParams } from 'react-router-dom';
import ReactPlayer from 'react-player';
import './Trailer.css';

export default function Trailer() {
  let params = useParams();
  const key = params.ytTrailerId;

  return (
    <div className='react-player-container'>
      {key != null ?
        <ReactPlayer className="react-player" controls={true} playing={true} url={`https://www.youtube.com/watch?v=${key}`} width="100%" height="100%"/>
        :
        null
      }
    </div>
  )
}
