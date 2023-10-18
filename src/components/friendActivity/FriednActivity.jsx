import "./FriendActivity.scss";
import {IoPersonAddSharp} from "react-icons/io5";
import {RxCross1} from "react-icons/rx";
import  person from "../images/person.svg";
import union from "../images/union.svg"

const FriednActivity = () => {
  return (
    <div className="friendSection-wrapper">
      <div className="friend-act-title">
      <p>Friend Activity</p>
      <IoPersonAddSharp/>
      <RxCross1/>
      </div>
      <p>Let friends and followers on Spotify see what you’re listening to.</p>
      <div className="friends-wrapper">
        <div className="friend">
          <img className="person" src={person} alt="icons" />
          <img className="union" src={union} alt="" />
        </div>
        <div className="friend">
          <img className="person" src={person} alt="icons" />
          <img className="union" src={union} alt="" />
        </div>
        <div className="friend">
          <img className="person" src={person} alt="icons" />
          <img className="union" src={union} alt="" />
        </div>
        <p>Go to Settings {'>'} Social and enable “Share my listening activity on Spotify.’ You can turn this off at any time.</p>
      </div>
      <button>Settings</button>
    </div>
  )
}

export default FriednActivity