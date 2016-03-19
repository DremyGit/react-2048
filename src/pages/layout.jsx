import AppBar from 'material-ui/lib/app-bar';
import LeftNav from 'material-ui/lib/left-nav';
import MenuItem from 'material-ui/lib/menu/menu-item';
import { Router, Route, Link } from 'react-router'
import React from 'react';
import ReactDOM from 'react-dom';


export default class App extends React.Component {

  render() {
    return (
      <div style={{height: '100%'}}>
        <AppBar
          showMenuIconButton={false}
          style={{position: 'absolute'}}
          title='2048'/>

          {this.props.children}

      </div>
    );
  }
  handleLeftNav() {
    this.refs.leftNav.toggle();
  }

  handleClick() {
    ReactDOM.findDOMNode(this.refs.myTextInput).focus();
  }

};



