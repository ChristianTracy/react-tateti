import {gameReducer} from './reducers';
import {clickCell} from './actions';
import expect from 'expect';

describe('GameReducer() >', () => {
  describe('CLICK_CELL', () => {

    let newState;
    beforeEach(() => {
      newState = {
        cells: [
            {playedBy: '?'}, {playedBy: '?'}, {playedBy: '?'}, {playedBy: '?'}, {playedBy: '?'}, {playedBy: '?'},
            {playedBy: '?'}, {playedBy: '?'}, {playedBy: '?'}
        ],
        currentPlayer: 'x',
        winner: null
      }
    });

    it('First move', () => {
      let position = 5;
      newState.cells[position].playedBy = 'x';
      newState.currentPlayer = 'o';
      expect(gameReducer(undefined, clickCell(position)).cells[position].playedBy).toBe(newState.cells[position].playedBy);
      expect(gameReducer(undefined, clickCell(position)).currentPlayer).toBe(newState.currentPlayer);
    })

    it('Shouldnt allow a move on a played cell, keeping the same player', () => {
      let position = 2;
      gameReducer(undefined, clickCell(position));
      expect(gameReducer(undefined, clickCell(position)).cells[position].playedBy).toBe('x');
    })

    it('Winner is x', () => {
      let result = gameReducer(undefined, clickCell(0));
      result = gameReducer(result, clickCell(3));
      result = gameReducer(result, clickCell(1));
      result = gameReducer(result, clickCell(6));
      expect(gameReducer(result, clickCell(2)).winner).toBe('x');
    })
  })
})
