import React from 'react';
import GameCell from './components/GameCell';

class Tateti extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      cells: [
          {playedBy: '?'}, {playedBy: '?'}, {playedBy: '?'}, {playedBy: '?'}, {playedBy: '?'}, {playedBy: '?'},
          {playedBy: '?'}, {playedBy: '?'}, {playedBy: '?'}
      ],
      currentPlayer: 'x'
    }
  }

  gameFinished(){
    var equalFields = _.filter();
  }


  cellClicked(position){
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
      currentPlayer: (this.state.currentPlayer === 'x') ? 'o' : 'x'
    });



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
        <div class="row text-center player-info">
          <p>Next player: <span>{this.state.currentPlayer}</span></p>
        </div>
      </div>
    )
  }


}

export default Tateti;
