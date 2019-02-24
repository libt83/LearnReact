// Action Creator
// "export" keyword creates a named vs default export
export const selectSong = song => {
  // Returns an Action
  return {
    type: 'SONG_SELECTED',
    payload: song
  };
};