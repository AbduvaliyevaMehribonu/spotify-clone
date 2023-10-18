import "./LikedSongs.scss";
import { BsChevronRight, BsChevronLeft, BsDownload, BsThreeDots } from "react-icons/bs";
import { AiOutlineHeart } from "react-icons/ai"
import { GoTriangleRight } from "react-icons/go";
import { AiOutlineCaretDown } from "react-icons/ai"
import likeimg from "../../components/images/like.png"
import my from "../../components/images/david.png"

const likedSongs = () => {
  return (
    <div className="Like">
      <div className="before-after">
        <div><BsChevronRight /></div>
        <div><BsChevronLeft /></div>
        <div className="cabinet">
          <img src={my} alt="" />
          <p>davedirect3</p>
          <AiOutlineCaretDown />
        </div>
      </div>
      <div className="likeBanner">
        <img src={likeimg} alt="" />
        <div className="like-page-banner-title">
          <p>Public playlist</p>
          <h1>Liked Songs</h1>
          <div className="singer">
            <img src={my} alt="" />
            <p>davedirect3</p>
            <b>.  34 songs</b>
          </div>
        </div>

      </div>
      <div className="play-music">
        <button className="play-pause"><GoTriangleRight /></button>
        <AiOutlineHeart className="icon" />
        <BsDownload className="icon" />
        <BsThreeDots className="icon" />
      </div>
    </div>
  )
}

export default likedSongs