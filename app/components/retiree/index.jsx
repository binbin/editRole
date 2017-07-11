import React from 'react';


// import { Router, Route, Link, browserHistory } from 'react-router'

import Home from './Home'
import Result from './Result'


export default class  Retiree extends React.Component{
      constructor(props) {
        super(props);
        this.state = {page:'init',resultData:{}};
        this.onSub=this.onSub.bind(this)
        this.onBack=this.onBack.bind(this)
      }

      onSub(resultData){
        this.setState({
          page:'result',
          resultData
        })

      }
      onBack(){
        this.setState({
          page:'init'
        })
        // this.refs.home.clearInput()
      }

	render(){
            if(this.state.page=='init'){
                return (<Home onSub={this.onSub} ref='home'/>)
            }else if(this.state.page=='result'){
                return (<Result onBack={this.onBack} resultData={this.state.resultData}/>)
            }
		
	}
}