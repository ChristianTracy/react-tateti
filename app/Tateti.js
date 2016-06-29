import React from 'react';
import GameCell from './components/GameCell';
import _ from 'lodash';

const successCombinations = [[0,1,2],[0,3,6],[1,4,7],[2,5,8],[3,4,5],[6,7,8],[0,4,8],[2,4,6]];

class Tateti extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      cells: [
          {playedBy: '?'}, {playedBy: '?'}, {playedBy: '?'}, {playedBy: '?'}, {playedBy: '?'}, {playedBy: '?'},
          {playedBy: '?'}, {playedBy: '?'}, {playedBy: '?'}
      ],
      currentPlayer: 'x',
      winner: null
    }
  }

  getWinnerIfExist(){
    var count;
    var winner = null;
    var x = [];
    var o = [];

    _.forEach(this.state.cells, function(cell, idx){
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


  cellClicked(position){
    if (this.state.winner === null){
      if(this.state.cells[position].playedBy !== '?'){
        return;
      }
      var self = this;
      var cells = this.state.cells.map(function(cell, idx){
        if(idx === position){
          cell.playedBy = self.state.currentPlayer
        }
        return cell;
      });

      this.setState({
        cells: cells,
        currentPlayer: (this.state.currentPlayer === 'x') ? 'o' : 'x',
        winner: this.getWinnerIfExist()
      });
    }
  }

  render(){
    return (
      <div>
        <div className="col-xs-12">
          <div className="row">
            <GameCell handleCellClicked={this.cellClicked.bind(this)} player={this.state.cells[0]} position={0}/>
            <GameCell handleCellClicked={this.cellClicked.bind(this)} player={this.state.cells[1]} position={1}/>
            <GameCell handleCellClicked={this.cellClicked.bind(this)} player={this.state.cells[2]} position={2}/>
          </div>
          <div className="row">
            <GameCell handleCellClicked={this.cellClicked.bind(this)} player={this.state.cells[3]} position={3}/>
            <GameCell handleCellClicked={this.cellClicked.bind(this)} player={this.state.cells[4]} position={4}/>
            <GameCell handleCellClicked={this.cellClicked.bind(this)} player={this.state.cells[5]} position={5}/>
          </div>
          <div className="row">
            <GameCell handleCellClicked={this.cellClicked.bind(this)} player={this.state.cells[6]} position={6}/>
            <GameCell handleCellClicked={this.cellClicked.bind(this)} player={this.state.cells[7]} position={7}/>
            <GameCell handleCellClicked={this.cellClicked.bind(this)} player={this.state.cells[8]} position={8}/>
          </div>
        </div>
        <div className="row text-center player-info">
          <p>Next player: <span>{this.state.currentPlayer}</span></p>
        </div>
        <div className="row text-center winner-info">
          <p>winner: <span>{this.state.winner}</span></p>
        </div>
      </div>
    )
  }

}

export default Tateti;
