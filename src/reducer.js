export const initialState = {
  user: null,
  playlists: [],
  playing: false,
  item: null,
  //token:
  //"BQCa-z0je0l_rtR98WuG--FIpgYxaTt9WoxhRqtbseJGFVfR4D2RDwC9vlMaT797ApwIT6R5KOsf83D5YH6eaAM2aVT_ZdjH7iN-_syJEb_xFZpsRJakSg5Y5SC9UV_NizZLtMqHNNL2BeqA1bvDVc7Czi9W4-zwdiDS9C0b81YEIspXed1J3N8fu6h-aNrXDVefHMPTd--LhdJsAuy-1w",
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

    case "SET_DISCOVER_WEEKLY":
      return {
        ...state,
        discover_weekly: action.discover_weekly,
      };

    default:
      return state;
  }
};

export default reducer;
