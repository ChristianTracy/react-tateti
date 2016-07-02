import {getWinnerIfExist} from './services';
import expect from 'expect';

describe('Check winner', () => {
  let board;

  it('should return winner in a row', () => {
    board = [
        {playedBy: 'x'}, {playedBy: 'x'}, {playedBy: 'x'},
        {playedBy: 'o'}, {playedBy: '?'}, {playedBy: '?'},
        {playedBy: '?'}, {playedBy: '?'}, {playedBy: 'o'}
    ]
    expect(getWinnerIfExist(board)).toEqual('x');
  });

  it('should return winner in a column', () => {
    board = [
        {playedBy: 'o'}, {playedBy: 'x'}, {playedBy: 'x'},
        {playedBy: 'o'}, {playedBy: '?'}, {playedBy: '?'},
        {playedBy: 'o'}, {playedBy: 'x'}, {playedBy: 'o'}
    ]
    expect(getWinnerIfExist(board)).toEqual('o');
  });

  it('should return winner in a diagonal', () => {
    board = [
        {playedBy: 'x'}, {playedBy: 'o'}, {playedBy: 'x'},
        {playedBy: 'o'}, {playedBy: 'x'}, {playedBy: '?'},
        {playedBy: 'x'}, {playedBy: '?'}, {playedBy: 'o'}
    ]
    expect(getWinnerIfExist(board)).toEqual('x');
  });

  it('should return no winner', () => {
    board = [
        {playedBy: 'x'}, {playedBy: 'o'}, {playedBy: 'x'},
        {playedBy: 'o'}, {playedBy: 'o'}, {playedBy: 'x'},
        {playedBy: 'x'}, {playedBy: 'x'}, {playedBy: 'o'}
    ]
    expect(getWinnerIfExist(board)).toEqual(null);
  });
})
