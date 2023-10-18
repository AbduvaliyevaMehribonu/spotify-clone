import "./PlaylistView.scss"
import { BsChevronRight, BsChevronLeft, BsDownload, BsThreeDots,BsHeart ,BsHeartFill} from 'react-icons/bs';
import { useDispatch } from "react-redux";
import { useSelector } from 'react-redux';
import { useState, useEffect, Fragment } from 'react';
import { useParams } from 'react-router-dom';
import { GoTriangleRight } from "react-icons/go";
import { AiOutlineHeart } from "react-icons/ai";
import { toggleLike } from '../action/action';


const PlaylistView = () => {
  const playlistInURL = useParams();
  const [playlistData, setPlaylistData] = useState([]);
  const dispatch = useDispatch();
  const likedSongs = useSelector(state => state.likedSongs) || [];

  useEffect(() => {
    fetch(`https://api.spotify.com/v1/playlists/${playlistInURL.id} `,
      {
        headers: {
          "Authorization": localStorage.getItem('token')
        }
      }
    )
      .then(response => response.json())
      .then(data => setPlaylistData(data))
      .catch(err => console.log(err))
  }, [playlistInURL.id])


  console.log(playlistData)

  return (
    <div className='Playlist'>
      <div className="before-after">
        <div><BsChevronRight /></div>
        <div><BsChevronLeft /></div>
      </div>

      <div className="single-playlist">

        {
          <Fragment key={playlistInURL.id}>
            <div className="playlist-banner">
              <img src={playlistData?.images?.[0].url} alt="" />
              <div className="playlist-banner-title">
                <b>Public playlist</b>
                <h2>{playlistData.name}</h2>
                {/* <p>Singers:{ playlistData?.track?.artists?.[0].name}</p> */}
              </div>
            </div>
            <div className="play-music">
              <button className="play-pause"><GoTriangleRight /></button>
              <AiOutlineHeart className="icon" />
              <BsDownload className="icon" />
              <BsThreeDots className="icon" />

            </div>
          </Fragment>
        }

        {
          playlistData?.tracks?.items.map((playlist, i) => (
            <div className="playlist-cards" key={i}>
              <div className="track-img">
                <span>{i + 1}</span>
                <img src={playlist?.track?.album?.images[0].url} alt="" />
              </div>
              <div className="music-info">
                <div className="music-name">
                  <p>{playlist.track.album.name.length > 16 ? playlist.track.album.name.slice(0, 16) + "..." : playlist.track.album.name}</p>
                  <b>{playlist?.track?.artists?.[0].name}</b>
                </div>
                <span>{playlist.track.album.name.length > 20 ? playlist.track.album.name.slice(0, 20) + "..." : playlist.track.album.name}</span>
                <BsHeart />
              </div>
            </div>
          ))
        }
        <div
          className="cursor-pointer flex items-center"
          onClick={() => dispatch(toggleLike(item.track))}
        >
          {likedSongs.some((likedSong) => likedSong.id === item.track.id) ? (
            <BsHeartFill className="w-7 h-7 text-secondary-5" />
          ) : (
            <BsHeart className="w-7 h-7 " />
          )}
        </div>

      </div>
    </div>
  )
}

export default PlaylistView