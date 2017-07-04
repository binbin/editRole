import React from 'react';
import { connect } from 'react-redux';

import Item from './Item'


export default class  Home extends React.Component{
	render(){
		return (<div>
			<Item defaultValue={['1.1','1.2']}/>
			<hr/>
			<Item defaultValue={['2.1','2.2']}/>
		</div>)
	}
}