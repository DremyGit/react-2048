import React from 'react';
import AnimationGroup from 'react-addons-css-transition-group'

export default  class Game2048 extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {

    var lattices = [];
    for (var i = 0; i < 4; i++)
      for (var j = 0; j < 4; j++) {
        var lattice = this.props.lattices[i][j];
        if (lattice.num == 0) {
          continue;
        }
        //var className = 'i-' + (i + 1) + ' j-' + (j + 1);
        var className = 'p-' + (i + 1) + '-' + (j + 1) + ' ' + 'n-' + lattice.num;
        lattices[lattice.id] = <div className={className} key={lattice.id}>{lattice.num}</div>
      }
    return (
      <div>
        <table className="back-table">
          <tbody>
            <tr><td></td><td></td><td></td><td></td></tr>
            <tr><td></td><td></td><td></td><td></td></tr>
            <tr><td></td><td></td><td></td><td></td></tr>
            <tr><td></td><td></td><td></td><td></td></tr>
          </tbody>
        </table>
        <div className="lattice">
          <AnimationGroup
            transitionName="lattice-anima"
            transitionEnterTimeout={500}
            transitionLeaveTimeout={1000}
          >
            {lattices}
          </AnimationGroup>
        </div>
      </div>

    )
  }
}