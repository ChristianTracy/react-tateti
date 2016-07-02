import React from 'react';

class GameCell extends React.Component {
  constructor(props){
    super(props);
    this.getClassName = this.getClassName.bind(this);
    this.clickHandlrer = this.clickHandlrer.bind(this);
  }

  getClassName(){
    let player = this.props.player.playedBy;
    let bootstrapClass = 'default';

    if(player === 'o'){
      bootstrapClass = 'success disabled';
    }
    else if(player === 'x'){
      bootstrapClass = 'primary disabled';
    }
    return bootstrapClass;
  }

  clickHandlrer () {
    this.props.handleCellClicked(this.props.position);
  }

  render(){
    return (
      <div className="col-xs-4 game-cell">
        <button className={'btn btn-' + this.getClassName()}
        type="submit"
        onClick={this.clickHandlrer}
        >
          {this.props.player.playedBy}
        </button>
      </div>
    );
  }

}


export default GameCell;
