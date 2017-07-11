import React from 'react';
import { connect } from 'react-redux';



import {
  HashRouter as Router,
  Route,
  Link
} from 'react-router-dom'

import {
  Container,
  Grid,
  Col,
  Icon,
  Group,
  NavBar,
} from 'amazeui-touch';


export default class  Home extends React.Component{
	/*render(){
		return (<div>
			 <ul>
			        <li><Link to="/">Home</Link></li>
			        <li><Link to="/retiree">退休人员</Link></li>
			        <li><Link to="/worker">在职人员</Link></li>
			      </ul>
		</div>)
	}*/
	render(){
		var withOffCanvas = {
		                  title: '赤峰市社保局',
		                  leftNav: [{
		                    icon: 'home'
		                    // title: 'Menu',
		                  }],
		                }
		return (<Container {...this.props}>
			 <NavBar  {...withOffCanvas} amStyle="primary"/>
			 <h2>功能索引</h2>
		            <Grid avg={2} bordered className="sk-icons text-center">
			    <Col key={1}>
				<Link to="/retiree" style={{display:'block',color:'#000'}}>
				    	<Icon name="bars" key={1}></Icon>
				            <div className="sk-icon-name text-truncate">
				                   退休查工资
				            </div>
				</Link>
		                </Col>
		                <Col key={2}>
		                  	<Link to="/worker" style={{display:'block',color:'#000'}}>
				    	<Icon name="bars" key={2}></Icon>
				            <div className="sk-icon-name text-truncate">
				                   在职查缴费
				            </div>
				</Link>
		                </Col>
			 </Grid>
			 
		</Container>)
	}
}