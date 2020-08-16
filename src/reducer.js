export const initialState = {
  user: null,
  playlists: [],
  spotify: null,
  discover_weekly: null,
  top_artists: null,
  playing: false,
  item: null,
  //remove after developing
  token:
    "BQAU2Z2JVTJHJCj-FBC4ZgBHDcB84IZTnWS6-QZaLMLCAZnUdvjtOlhZEjcxSGLsUoiFEx-nZq9LH14Owwbhalc4AtJXk1xSroK9M9RFA1PaYyT5fLkCLJXoWdI7WuunhP02UcTpURTUYzcU277gOUJX91H7_c9p2eLUf2dWUPZtdeFT5F8l",
};

const reducer = (state, action) => {
  console.log(action);
  switch (action.type) {
    case "SET_USER":
      return {
        ...state,
        user: action.user,
      };
    case "SET_TOKEN":
      return {
        ...state,
        token: action.token,
      };
    case "SET_PLAYLISTS":
      return {
        ...state,
        playlists: action.playlists,
      };

    default:
      return state;
  }
};
export default reducer;
