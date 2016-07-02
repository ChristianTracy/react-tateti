import {CLICK_CELL} from './actions';
import {getWinnerIfExist} from './services';

function gameReducer(state, action) {
  let defaultState = {
    cells: [
        {playedBy: '?'}, {playedBy: '?'}, {playedBy: '?'}, {playedBy: '?'}, {playedBy: '?'}, {playedBy: '?'},
        {playedBy: '?'}, {playedBy: '?'}, {playedBy: '?'}
    ],
    currentPlayer: 'x',
    winner: null
  };
  let position = action.position;
  state = state || defaultState;
  switch (action.type) {
    case CLICK_CELL:

      if (state.winner === null && state.cells[position].playedBy === '?') {

        var cells = state.cells.map(function(cell, idx){
          if(idx === position){
            cell.playedBy = state.currentPlayer
          }
          return cell;
        });

        return {
          cells: cells,
          currentPlayer: (state.currentPlayer === 'x') ? 'o' : 'x',
          winner: getWinnerIfExist(state.cells)
        }
      }
      return state;

    default:
      return state;
  }
}

export {gameReducer};
