export const TOGGLE_LIKE = "TOGGLE_LIKE";

export const toggleLike = (playlist) => {
  const likedSongs = JSON.parse(localStorage.getItem('likedSongs')) || [] ;
  const updatedLikedSongs = likedSongs.some((likedSong) => likedSong.id === playlist.id) 
  ? likedSongs.filter((likedSong) => likedSong.id !== likedSong.id)
  : [...likedSongs, song];
  localStorage.setItem('likedSongs', JSON.stringify(updatedLikedSongs));
  return {
    type: TOGGLE_LIKE,
    payload: updatedLikedSongs
  };
};
