import "./App.scss"
import { Routes, Route } from "react-router-dom"
import { Sidebar } from "./components/sideber/Sidebar"
import LikedSongs from "./routes/likedSongs/LikedSongs"
import Audio from "./components/audio/Audio"
import Home from "./routes/home/Home"
import { useEffect, useState } from "react"
import FriednActivity from "./components/friendActivity/FriednActivity"
import PlaylistView from "./routes/playlistView/PlaylistView"
import { useLocation } from "react-router-dom"


const App = () => {
  const location = useLocation()
  console.log(location.pathname)
  
  const [clientData, setClientData] = useState();

  const CLIENT_ID = '1ae65678c4fb4e79b29c82efa57a0279'
  const SECRET_ID = '42100134af3b4d569b4ff912585edc5b'

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('https://accounts.spotify.com/api/token', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
          'Authorization': 'Basic ' + btoa(CLIENT_ID + ':' + SECRET_ID)
        },
        body: 'grant_type=client_credentials'
      });
      const auth = await response.json();
      localStorage.setItem('token', `${auth.token_type} ${auth.access_token}`);
      setClientData(auth.access_token)
    }
    fetchData()
    console.log(clientData)
  }, [])

  return (
   <>
    <div className="App">
      <Sidebar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/liked-songs" element={<LikedSongs />} />
        <Route path="/playlist/:id" element={<PlaylistView />} />
      </Routes>
      <FriednActivity />
    </div>
    <Audio/>
   </>

  )
}

export default App





