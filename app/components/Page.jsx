import React from 'react';
import { connect } from 'react-redux';

import {Header,Button} from 'amazeui-react'


var props = {
  title: 'Amaze UI',
  link: '#title-link',
  data: {
    left: [
      {
        link: '#left-link',
        icon: 'home'
      }
    ],
    right: [
      {
        link: '#right-link',
        icon: 'bars'
      }
    ]
  },
  onSelect: function(nav, e) {
    e.preventDefault();
    console.log('你点击了', nav);
    // do something
  }
};



export default class  Page extends React.Component{
	render(){
		return (<Header {...props} />)
	}
}