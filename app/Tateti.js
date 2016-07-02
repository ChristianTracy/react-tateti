import React from 'react';
import GameCell from './components/GameCell';
import _ from 'lodash';
import {clickCell} from './actions';

class Tateti extends React.Component {

  constructor(props){
    super(props);
    this.cellClicked = this.cellClicked.bind(this);
    this.store = props.store;
    this.state = this.store.getState();
  }

  componentWillMount() {
    let store = this.store;
    store.subscribe(() => this.setState(store.getState()));
  }

  cellClicked(position){
    this.store.dispatch(clickCell(position));
  }

  render(){
    return (
      <div>
        <div className="col-xs-12">
          <div className="row">
            <GameCell handleCellClicked={this.cellClicked} player={this.state.cells[0]} position={0}/>
            <GameCell handleCellClicked={this.cellClicked} player={this.state.cells[1]} position={1}/>
            <GameCell handleCellClicked={this.cellClicked} player={this.state.cells[2]} position={2}/>
          </div>
          <div className="row">
            <GameCell handleCellClicked={this.cellClicked} player={this.state.cells[3]} position={3}/>
            <GameCell handleCellClicked={this.cellClicked} player={this.state.cells[4]} position={4}/>
            <GameCell handleCellClicked={this.cellClicked} player={this.state.cells[5]} position={5}/>
          </div>
          <div className="row">
            <GameCell handleCellClicked={this.cellClicked} player={this.state.cells[6]} position={6}/>
            <GameCell handleCellClicked={this.cellClicked} player={this.state.cells[7]} position={7}/>
            <GameCell handleCellClicked={this.cellClicked} player={this.state.cells[8]} position={8}/>
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
