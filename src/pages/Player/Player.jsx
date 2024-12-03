import React, { useEffect, useState } from 'react'
import './Player.css'
import back_arrow_icon from '../../assets/back_arrow_icon.png'
import { useParams } from 'react-router-dom'

const Player = () => {

  const {id} = useParams();

  const [apiData, setApiData] =useState({
    name :"",
    key:"",
    published_at:"",
    type:""
  })

  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkZjdiY2QxMDEzZGEwYWMyZDMyNjZiYzBlNzJmMWNkNSIsIm5iZiI6MTczMzE4ODU2NC4zNDMwMDAyLCJzdWIiOiI2NzRlNWJkNDc5OWJjMDQ3MmRlZTljZmYiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.cKepMIfjKNTHdD_qlu68RQeSeHWPSAQ4uWTqq9sHPYQ'
    }
  };

  useEffect(()=>{
    fetch(`https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`, options)
      .then(res => res.json())
      .then(res => setApiData(res.results[0]))
      .catch(err => console.error(err));

  },[])
  

  return (
    <div className='player'>
      <img src={back_arrow_icon} alt="" />
      <iframe width='90%' height='90%' src={`https://www.youtube.com/embed/${apiData.key}`} 
      title='trailer' frameborder="0" allowFullScreen></iframe>
      <div className="player-info">
        <p>{apiData. published_at.slice(0,10)}</p>
        <p>{apiData.name}</p>
        <p>{apiData.type}</p>
      </div>
    </div>
  )
}

export default Player