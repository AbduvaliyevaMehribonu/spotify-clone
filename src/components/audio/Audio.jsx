import "./Audio.scss";
import { AiOutlineRetweet } from "react-icons/ai";
import { IoPlay } from "react-icons/io5";
import { TbPlayerPauseFilled } from "react-icons/tb";
import {FaRandom} from "react-icons/fa"




const Audio = () => {
    return (
        <div className='Audio'>
            <div className="play-pause">
                <FaRandom />
                <button className="play"><IoPlay /></button>
                <AiOutlineRetweet />
            </div>
            <audio controls src="https://p.scdn.co/mp3-preview/42772b16b4e575d1b15b0ec7f94e335539390d2d?cid=1ae65678c4fb4e79b29c82efa57a0279"></audio>
           
        </div>
    )
}

export default Audio