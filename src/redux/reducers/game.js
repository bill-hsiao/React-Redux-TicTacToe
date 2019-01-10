const initialState = {
  game: Array(9).fill(null)
};

export default function(state = initialState, action) {
  switch (action.type) {
    case 'MOVE': {
      const game = state.slice();
      let turns = 0;
      game.forEach((val) => {
        if (typeof val === 'string') {
          turns ++
        }
      })
      const index = action.payload;
        if (game[index] !== null) {
          return Object.assign({}, { game: [...game] }).game
        } else {
          game[index] = (turns % 2 === 0 ? 'O' : 'X')
          return Object.assign({}, { game: [...game] }).game
        }
      }
    case 'RESET': {
      const game = Array(9).fill(null);
      return Object.assign({}, { game: [...game] }).game
    }
    default:
      return state;
  }
}
