import "./Sidebar.scss";
import {BsSearch } from "react-icons/bs";
import {BiLibrary, BiHeartSquare} from "react-icons/bi";
import {AiOutlinePlusSquare, AiOutlineHome} from "react-icons/ai";
import { Link } from "react-router-dom"
import { useEffect, useState } from "react";

const Sidebar = () => {

    const [featuredPlaylist, setFeaturedPlaylist] = useState([]);

    useEffect(() => {
      fetch("https://api.spotify.com/v1/browse/featured-playlists",
      {
        headers:{
          "Authorization": localStorage.getItem('token') //"Bearer BQADooYJCIQ8oHR_hOTnSZ8Xx0CjUf2vRI3xI2nehUnVrawtYPpBNgTvJLuTy0dKDYK545t5wo_QTf4KT5Yb_J55i7Yak8S7cVBU6wUe3KfvYMuE89o"
        }
      }
      )
      .then(response => response.json())
      .then(data => setFeaturedPlaylist(data.playlists.items))
      .catch(err => console.log(err))
    },[])

  
  return (
      <div className="sidebar">
        <ul className="sidebar-menu">
          <li className="sidebar-menu-item"><Link to="/"><AiOutlineHome/>Home</Link></li>
          <li className="sidebar-menu-item"> <BsSearch/> Search</li>
          <li className="sidebar-menu-item"><BiLibrary/> Your Library</li>
          <li className="sidebar-menu-item"><AiOutlinePlusSquare/> Create Playlist</li>
          <Link to="/liked-songs" className="sidebar-menu-item"><li className="sidebar-menu-item"><BiHeartSquare/> Liked Songs </li></Link>
        </ul>

        <div className="names-wrapper">
          {
            featuredPlaylist.map((title,i) => (
              <Link to="/playlist" className="category" key={i}>{title.name.length >20 ?title.name.slice(0,20) + "..." : title.name}</Link>
            ))
          }

        </div>
      </div>
  )
}

export  {Sidebar}
