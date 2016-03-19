import React from 'react';
import AppBar from 'material-ui/lib/app-bar';
import Card from 'material-ui/lib/card/card';
import CardTitle from 'material-ui/lib/card/card-title';

const Swipeable = require('react-swipeable');
const Game2048 = require('../components/2048-lattices.jsx');

export default class GamePage extends React.Component {

  constructor(props) {
    super(props);
    document.onkeydown = this.keyDownHandle.bind(this);

    var lattices = [[],[],[],[]];
    for (var i = 0; i < 4; i++) {
      for (var j = 0; j < 4; j++) {
        lattices[i][j] = {
          num: 0,
          id: i * 4 + j
        };
      }
    }
    var num = [
      [2, 2, 2, 2],
      [2, 2, 2, 2],
      [2, 2, 2, 2],
      [2, 2, 2, 2]
    ];
    for (i = 0; i < 4; i++) {
      for (j = 0; j < 4; j++) {
        lattices[i][j].num = num[i][j];
      }
    }
    this.state = {
      lattices: lattices,
      nextId: 16,
      soccer: 100
    }
  }


  controlLeft() {
    var i, j, k, breakFlag = true, isMoved = false;
    for (i = 0; i < 4; i++) {
      for (j = 0; j < 4; j++) {
        for (k = 3; k > j; k--) {
          if (this.state.lattices[i][k].num != 0 && this.state.lattices[i][k - 1].num == 0) {
            this.move(i, k, i, k - 1);
            isMoved = true;
          }
        }
      }
    }

    for (i = 0; i < 4; i++) {
      for (j = 1; j < 4; j++) {
        if (this.state.lattices[i][j].num != 0 && this.state.lattices[i][j - 1].num == this.state.lattices[i][j].num) {
          this.merge(i, j, i, j - 1);
          isMoved= true;
          j++;
          breakFlag = false;
        }
      }
    }

    if (breakFlag) {
      return isMoved;
    }

    for (i = 0; i < 4; i++) {
      for (j = 0; j < 4; j++) {
        for (k = 3; k > j; k--) {
          if (this.state.lattices[i][k].num != 0 && this.state.lattices[i][k - 1].num == 0) {
            this.move(i, k, i, k - 1);
            isMoved = true;
          }
        }
      }
    }
    return isMoved;
  }

  controlRight() {
    var i, j, k, breakFlag = true, isMoved = false;
    for (i = 0; i < 4; i++) {
      for (j = 3; j > 0; j--) {
        for (k = 0; k < j; k++) {
          if (this.state.lattices[i][k].num != 0 && this.state.lattices[i][k + 1].num == 0) {
            this.move(i, k, i, k + 1);
            isMoved = true;
          }
        }
      }
    }

    for (i = 0; i < 4; i++) {
      for (j = 2; j >= 0; j--) {
        if (this.state.lattices[i][j].num != 0 && this.state.lattices[i][j + 1].num == this.state.lattices[i][j].num) {
          this.merge(i, j, i, j + 1);
          isMoved = true;
          j--;
          breakFlag = false;
        }
      }
    }

    if (breakFlag) {
      return isMoved;
    }

    for (i = 0; i < 4; i++) {
      for (j = 3; j > 0; j--) {
        for (k = 0; k < j; k++) {
          if (this.state.lattices[i][k].num != 0 && this.state.lattices[i][k + 1].num == 0) {
            this.move(i, k, i, k + 1);
            isMoved = true;
          }
        }
      }
    }
    return isMoved;
  }

  controlUp() {
    var i, j, k, breakFlag = true, isMoved = false;
    for (j = 0; j < 4; j++) {
      for (i = 0; i < 4; i++) {
        for (k = 3; k > i; k--) {
          if (this.state.lattices[k][j].num != 0 && this.state.lattices[k - 1][j].num == 0) {
            this.move(k, j, k - 1, j);
            isMoved = true;
          }
        }
      }
    }

    for (j = 0; j < 4; j++) {
      for (i = 1; i < 4; i++) {
        if (this.state.lattices[i][j].num != 0 && this.state.lattices[i - 1][j].num == this.state.lattices[i][j].num) {
          this.merge(i, j, i - 1, j);
          i++;
          breakFlag = false;
          isMoved = true;
        }
      }
    }

    if (breakFlag) {
      return isMoved;
    }

    for (j = 0; j < 4; j++) {
      for (i = 0; i < 4; i++) {
        for (k = 3; k > i; k--) {
          if (this.state.lattices[k][j].num != 0 && this.state.lattices[k - 1][j].num == 0) {
            this.move(k, j, k - 1, j);
            isMoved = true;
          }
        }
      }
    }
    return isMoved;
  }

  controlDown() {
    var i, j, k, breakFlag = true, isMoved = false;
    for (j = 0; j < 4; j++) {
      for (i = 3; i > 0; i--) {
        for (k = 0; k < i; k++) {
          if (this.state.lattices[k][j].num != 0 && this.state.lattices[k + 1][j].num == 0) {
            this.move(k, j, k + 1, j);
            isMoved = true;
          }
        }
      }
    }

    for (j = 0; j < 4; j++) {
      for (i = 2; i >= 0; i--) {
        if (this.state.lattices[i][j].num != 0 && this.state.lattices[i + 1][j].num == this.state.lattices[i][j].num) {
          this.merge(i, j, i + 1, j);
          i--;
          breakFlag = false;
          isMoved = true;
        }
      }
    }

    if (breakFlag) {
      return isMoved;
    }

    for (j = 0; j < 4; j++) {
      for (i = 3; i > 0; i--) {
        for (k = 0; k < i; k++) {
          if (this.state.lattices[k][j].num != 0 && this.state.lattices[k + 1][j].num == 0) {
            this.move(k, j, k + 1, j);
            isMoved = true;
          }
        }
      }
    }
    return isMoved;
  }

  keyDownHandle(e) {
    var keynum = window.event ? e.keyCode : e.which;
    var KEY = {
      LEFT :    37,
      UP:       38,
      RIGHT:    39,
      DOWN:     40
    };
    var isMoved = false;
    switch (keynum) {
      case KEY.LEFT:
        console.log("左");
        isMoved = this.controlLeft();
        break;
      case KEY.RIGHT:
        console.log("右");
        isMoved = this.controlRight();
        break;
      case KEY.UP:
        console.log("上");
        isMoved = this.controlUp();
        break;
      case KEY.DOWN:
        console.log("下");
        isMoved = this.controlDown();
        break;
      default :
        return;
    }


    this.setState({lattices: this.state.lattices});
    //this.refs.game.setState({lattices: this.state.lattices});

    if (!isMoved) {
      return;
    }

    var _this = this;
    setTimeout(function () {
      _this.createNewLattice();
    }, 450)

  }

  handleSwiped(dire) {

    var isMoved = false;
    switch (dire) {
      case 1:
        isMoved = this.controlUp();
        break;

      case 2:
        isMoved = this.controlRight();
        break;

      case 3:
        isMoved = this.controlDown();
        break;

      case 4:
        isMoved = this.controlLeft();
        break;

    }

    this.setState({lattices: this.state.lattices});

    if (!isMoved) {
      return;
    }

    var _this = this;
    setTimeout(function () {
      _this.createNewLattice();
    }, 450)
  }
  handleSwipedUp(e) {
    this.handleSwiped(1);
    e.preventDefault();
  }
  handleSwipedRight(e) {
    this.handleSwiped(2);
    e.preventDefault();
  }
  handleSwipedDown(e) {
    this.handleSwiped(3);
    e.preventDefault();
  }
  handleSwipedLeft(e) {
    this.handleSwiped(4);
    e.preventDefault();
  }
  move(i, j, x, y) {
    //console.log("[move] i j x y: " + i + ' ' + j + ' ' + x + ' ' + y);
    this.state.lattices[x][y] = this.state.lattices[i][j];
    this.state.lattices[i][j] = this.createNewBlank();
  }

  merge(i, j, x, y) {
    //console.log('[merge] i j x y:'  + i + ' ' + j + ' ' + x + ' ' + y);
    //this.state.lattices[x][y] = this.state.lattices[i][j];
    var addSoccor = this.state.lattices[i][j].num * 10;
    this.state.lattices[x][y].id = this.state.lattices[i][j].id;
    this.state.lattices[x][y].num = this.state.lattices[i][j].num * 2;
    var newNum = this.state.lattices[i][j].num;
    this.state.lattices[i][j] = this.createNewBlank();
    this.state.soccer += addSoccor;


  }

  createNewBlank() {
    var blank = {
      num: 0,
      id: this.state.nextId
    };
    this.state.nextId++;
    return blank;
  }

  createNewLattice() {
    var randomLattices = [2, 4];
    var blanks = [];
    for (var i = 0; i < 4; i++) {
      for (var j = 0; j < 4; j++) {
        if (this.state.lattices[i][j].num == 0) {
          blanks.push({
            i: i,
            j: j
          })
        }
      }
    }
    var random = function (n) {
      return Math.floor(Math.random() * 100) % n;
    };
    var t = blanks[random(blanks.length)];
    var randomNum = randomLattices[random(2)];

    this.state.lattices[t.i][t.j] = {
      num: randomNum,
      id: this.state.nextId
    };

    //console.log('[new lattice] i j num:' +  t.i + ' ' + t.j + ' ' + randomNum);

    this.setState({lattices: this.state.lattices, nextId: this.state.nextId + 1});

  }

  handleTouchStart(e) {
    e.preventDefault();
  }

  render() {
    var title = 'Soccer : ' + this.state.soccer;
    return (
      <div style={{width: '100%', height: '100%', backgroundColor: '#1b91d1'}}>
        <div style={{maxWidth: '486px', margin: '0 auto', paddingTop: '100px'}}>
          <Card>
            <CardTitle
              title={title}  style={{color: '#fff'}} />
          </Card>
          <Card style={{marginTop: '50px'}}>
            <Swipeable
              onSwipedLeft={this.handleSwipedLeft.bind(this)}
              onSwipedRight={this.handleSwipedRight.bind(this)}
              onSwipedUp={this.handleSwipedUp.bind(this)}
              onSwipedDown={this.handleSwipedDown.bind(this)}
              onSwiping={this.handleTouchStart.bind(this)}
              flickThreshold={0.6}
              delta={1}
            >
              <Game2048  ref="game" lattices={this.state.lattices}/>
            </Swipeable>
          </Card>
        </div>
      </div>
    );
  }
}