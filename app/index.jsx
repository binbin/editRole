import React from 'react';
import { render } from 'react-dom'

import { createStore } from 'redux'
import { Provider } from 'react-redux';


// import Home from './components/Home'

import Worker from './components/worker/'

import Retiree from './components/retiree/'
import Home from './components/Home'



import { RouteTransition } from 'react-router-transition';


import {
  HashRouter as Router,
  Route,
  Link
} from 'react-router-dom'


import default_reducer from './reducers'

let store = createStore(default_reducer)



// import './reset.scss'










const app = document.createElement('div')
// document.body.className='edit locale-zh-CN product-sxl'
document.body.id='sites'
app.setAttribute('style','min-height: 100%;position: relative;height: 100%;overflow: auto;')
document.body.appendChild(app)

// const app document.body



// render(<Provider store={store}>
//     <Home miniBarClick={()=>store.dispatch({type:'HIDE'})&&console.log('click'+(+new Date))}  asideClass={store.getState()} />
// </Provider>,app)

// render(
//     <Page />
// ,app)



render((
    <Provider store={store}>
       <Router>
        <div>
          <Route exact path="/" render={({ location })=>{
                return (<RouteTransition 
                            pathname={location.pathname}
                            atEnter={{ translateX: -100 }}
                            atLeave={{ translateX: 100 }}
                            atActive={{ translateX: 0 }}
                            mapStyles={styles => ({ transform: `translateX(${styles.translateX}%)` })}
                          >
                            <Home/>
                         </RouteTransition> )
            }}/>
          <Route path="/retiree"  render={({ location })=>{
                return (<RouteTransition 
                            pathname={location.pathname}
                            atEnter={{ translateX: 100 }}
                            atLeave={{ translateX: -100 }}
                            atActive={{ translateX: 0 }}
                            mapStyles={styles => ({ transform: `translateX(${styles.translateX}%)` })}
                          >
                            <Retiree/>
                         </RouteTransition> )
            }}/>
          <Route path="/worker" render={({ location })=>{
                return (<RouteTransition 
                            pathname={location.pathname}
                            atEnter={{ translateX: 100 }}
                            atLeave={{ translateX: -100 }}
                            atActive={{ translateX: 0 }}
                            mapStyles={styles => ({ transform: `translateX(${styles.translateX}%)` })}
                          >
                            <Worker/>
                         </RouteTransition> )
            }}/>
        </div>
      </Router>
    </Provider>
  ),app)

