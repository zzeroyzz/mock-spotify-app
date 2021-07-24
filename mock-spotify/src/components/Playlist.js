import React from 'react'
import { ReactComponent as PlayIcon } from "../svgs/playIcon.svg";
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
const Playlist = props =>{
    const dataPlaylists =[
        {
            id:101,
            category_id:3,
            name:"Home playlist 1",
            img:"https://images.pexels.com/photos/7275417/pexels-photo-7275417.jpeg?cs=srgb&dl=pexels-dziana-hasanbekava-7275417.jpg&fm=jpg",
            desc:"Lorem ipsum"
        },
        {
            id:102,
            category_id:3,
            name:"Home playlist 2",
            img:"https://images.pexels.com/photos/4030087/pexels-photo-4030087.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
            desc:"Lorem ipsum"
        },
        {
            id:103,
            category_id:3,
            name:"Home playlist 3",
            img:"https://images.pexels.com/photos/6579103/pexels-photo-6579103.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
            desc:"Lorem ipsum"
        },
        {
            id:104,
            category_id:1,
            name:"Focus playlist 1",
            img:"https://images.pexels.com/photos/7129040/pexels-photo-7129040.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
        },
        {
            id:105,
            category_id:4,
            name:"Sunday Playlist",
            img:"https://images.pexels.com/photos/4825743/pexels-photo-4825743.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
            desc:"Lorem ipsum"
        },
        {
            id:106,
            category_id:2,
            name:"Mood Playlist 1",
            img:"https://images.pexels.com/photos/4406662/pexels-photo-4406662.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
            desc:"Lorem ipsum"
        },
        {
            id:107,
            category_id:2,
            name:"Mood Playlist 2",
            img:"https://images.pexels.com/photos/4576085/pexels-photo-4576085.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
            desc:"Lorem ipsum"
        },
        
    ]

    const matchedPlaylists = dataPlaylists.filter(
        (playlist) => playlist.category_id === props.category_id
        )

    
    return(
<div className="cardsWrapInner">
    {matchedPlaylists.map((playlist,id) => (
        <Link to={`/playlist/`+playlist.id} key={id}>
          <div className="card" key={id}>
          <div className="cardImage">
  <img src={playlist.img}/>
    </div>
          <div className="cardContent">
          <h2>{playlist.name}</h2> 
          <span >{playlist.desc}</span>
         
          </div>
          <span className="playIcon">
         <PlayIcon/>
          </span>
        </div></Link>
    ))}

         
        </div>
    )
}
export default Playlist