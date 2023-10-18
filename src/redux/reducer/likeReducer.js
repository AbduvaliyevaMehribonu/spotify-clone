


  const initialState = {
    likedSongs: JSON.parse(localStorage.getItem('likedSongs')) || [],
  };
  
  const likeReducer = (state = initialState, action) => {
    console.log(action)
    switch (action.type) {
      case "ADD_TO_LIKED":
        return ({
          likeProducts: [...state.likeProducts,action.product]
        })
      default:
        return state
    }
  }
  
  export {likeReducer}