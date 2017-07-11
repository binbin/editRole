import React from 'react';

import { render } from 'react-dom'


// import Home from './components/Home'

import Worker from './components/worker/'

import Retiree from './components/retiree/'
import Home from './components/Home'


import {
  HashRouter as Router,
  Route,
  Link
} from 'react-router-dom'



// import './reset.scss'










const app = document.createElement('div')
document.body.className='edit locale-zh-CN product-sxl'
document.body.id='sites'
app.setAttribute('style','min-height: 100%;position: relative;')
document.body.appendChild(app)

// const app document.body



// render(<Provider store={store}>
//     <Home miniBarClick={()=>store.dispatch({type:'HIDE'})&&console.log('click'+(+new Date))}  asideClass={store.getState()} />
// </Provider>,app)

// render(
//     <Page />
// ,app)



render((
   <Router>
    <div>

      <Route exact path="/" component={Home}/>
      <Route path="/retiree" component={Retiree}/>
      <Route path="/worker" component={Worker}/>
    </div>
  </Router>
  ),app)

