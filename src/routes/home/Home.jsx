import "./Home.scss";
import { BsChevronRight, BsChevronLeft } from "react-icons/bs";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Home = ({playlist}) => {

  const [featuredPlaylist, setFeaturedPlaylist] = useState([]);

  useEffect(() => {
    fetch("https://api.spotify.com/v1/browse/featured-playlists",
      {
        headers: {
          "Authorization": localStorage.getItem('token')
        }
      }
    )
      .then(response => response.json())
      .then(data => setFeaturedPlaylist(data.playlists.items))
      .catch(err => console.log(err))
  }, [])

  const [topMixex, setTopMixes] = useState([]);

  useEffect(() => {
    fetch("https://api.spotify.com/v1/browse/categories/toplists/playlists",
      {
        headers: {
          "Authorization": localStorage.getItem('token')
        }
      }
    )
      .then(response => response.json())
      .then(data => setTopMixes(data.playlists.items))
      .catch(err => console.log(err))
  }, [])

  const [forMe, setForMe] = useState([]);

  useEffect(() => {
    fetch(" https://api.spotify.com/v1/browse/categories/0JQ5DAqbMKFHOzuVTgTizF/playlists",
      {
        headers: {
          "Authorization": localStorage.getItem('token')
        }
      }
    )
      .then(response => response.json())
      .then(data => setForMe(data.playlists.items))
      .catch(err => console.log(err))
  }, [])

  const [recentlyPlayed, setRecentlyPlayed] = useState([]);

  useEffect(() => {
    fetch(" https://api.spotify.com/v1/browse/categories/0JQ5DAqbMKFQ00XGBls6ym/playlists",
      {
        headers: {
          "Authorization": localStorage.getItem('token')
        }
      }
    )
      .then(response => response.json())
      .then(data => setRecentlyPlayed(data.playlists.items))
      .catch(err => console.log(err))
  }, [])

  const[jumpBack, setJumpBack] = useState([])
  useEffect(() =>{
    fetch("https://api.spotify.com/v1/browse/categories/0JQ5DAqbMKFLVaM30PMBm4/playlists",{
      headers:{
        "Authorization": localStorage.getItem('token')
      }
    })
    .then(response => response.json())
    .then(data => setJumpBack(data.playlists.items))
    .catch(err => console.log(err))
  },[])

  const[uniquelyYours, setUniquelyYours] = useState([])
  useEffect(() => {
    fetch("https://api.spotify.com/v1/browse/categories/0JQ5DAqbMKFCbimwdOYlsl/playlists",{
      headers:{
        "Authorization" : localStorage.getItem('token')
      }
    })
    .then(res => res.json())
    .then(data => setUniquelyYours(data.playlists.items))
    .catch(err => console.log(err))
  },[])

  return (
    <div className="home-between">
      <div className="before-after">
        <div><BsChevronRight /></div>
        <div><BsChevronLeft /></div>
      </div>

      <h2>Good afternoon</h2>
      <div className="featuredPlaylist-wrapper">
        {
          featuredPlaylist.slice(5, 11).map((title, i) => (
            <Link  className="home-category" key={i}>
              <img className="home_img" src={title.images[0].url} alt="img" />
              <p> {title.name.length > 20 ? title.name.slice(0, 20) + "..." : title.name}</p>
            </Link>
          ))
        }
      </div>

      <h2>Your top mixes</h2>
      <div className="playlist-wrapper">
        {
          topMixex.slice(2, 6).map((playlist, i) => (
            <div className="playlist-card">
              <Link to={`/playlist/${playlist.id}`} key={i}>
                <img className="playlist__img" src={playlist.images[0].url} alt="img" />
              </Link>
              <h3 className="playlist-title" >{playlist.name}</h3>
              <p> {playlist.description.length > 30 ? playlist.description.slice(0, 35) + "..." : playlist.description}</p>
            </div>
          ))
        }
      </div>

      <h2>Made for you</h2>
      <div className="playlist-wrapper">
        {
          forMe.slice(0, 4).map((playlist, i) => (
            <div className="playlist-card">
              <Link to={`/playlist/${playlist.id}`} key={i}>
                <img className="playlist__img" src={playlist.images[0].url} alt="img" />
              </Link>
              <h3 className="playlist-title" >{playlist.name}</h3>
              <p> {playlist.description.length > 30 ? playlist.description.slice(0, 40) + "..." : playlist.description}</p>
            </div>
          ))
        }
      </div>

      <h2>Recently played</h2>
      <div className="playlist-wrapper">
        {
          recentlyPlayed.slice(2, 6).map((playlist, i) => (
            <div className="playlist-card">
              <Link to={`/playlist/${playlist.id}`} key={i}>
                <img className="playlist__img" src={playlist.images[0].url} alt="img" />
              </Link>
              <h3 className="playlist-title" >{playlist.name}</h3>
              <p> {playlist.description.length > 30 ? playlist.description.slice(0, 40) + "..." : playlist.description}</p>
            </div>
          ))
        }
      </div>

      <h2>Jump back in</h2>
      <div className="playlist-wrapper">
        {
          jumpBack.slice(2, 6).map((playlist, i) => (
            <div className="playlist-card">
              <Link to={`/playlist/${playlist.id}`} key={i}>
                <img className="playlist__img" src={playlist.images[0].url} alt="img" />
              </Link>
              <h3 className="playlist-title" >{playlist.name}</h3>
              <p> {playlist.description.length > 30 ? playlist.description.slice(0, 40) + "..." : playlist.description}</p>
            </div>
          ))
        }
      </div>

      <h2>Uniquely yours</h2>
      <div className="playlist-wrapper">
        {
          uniquelyYours.slice(3,7).map((playlist,i) => (
            <div className="playlist-card">
              <Link to={`/playlist/${playlist.id}`}>
              <img  className="playlist__img" src={playlist.images[0].url} alt="img" />
              </Link>
              <h3 className="playlist-title">{playlist.name}</h3>
              <p>{playlist.description.length > 30 ? playlist.description.slice(0,40) + "..." : playlist.description}</p>
            </div>
          ))
        }
      </div>
    </div>

  )
}

export default Home






