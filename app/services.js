import _ from 'lodash';

function getWinnerIfExist(board) {

  const successCombinations = [[0,1,2],[0,3,6],[1,4,7],[2,5,8],[3,4,5],[6,7,8],[0,4,8],[2,4,6]];
  var count;
  var winner = null;
  var x = [];
  var o = [];

  _.forEach(board, function(cell, idx){
    if(cell.playedBy === 'x'){
      x.push(idx);
    }
    else if (cell.playedBy === 'o'){
      o.push(idx);
    }
  });

  _.forEach(successCombinations, function(comb){
    count = 0;
    _.forEach(x, function(cell, idx){
      if(_.includes(comb, cell)){
        count++;
      }
    });
    if(count === 3){
      winner = 'x';
    }
    else{
      count = 0;
      _.forEach(o, function(cell, idx){
        if(_.includes(comb, cell)){
          count++;
        }
      });
      if(count === 3){
        winner = 'o';
      }
    }
  });
  return winner;
}

export {getWinnerIfExist}
