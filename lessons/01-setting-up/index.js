import { Router, Route, hashHistory} from 'react-router'
import React from 'react'
import { render } from 'react-dom'
import App from './modules/App'
import About from './modules/About'
import Repos from './modules/Repos'
import Repo from './modules/Repo'
import Sig from './modules/Sig'

render((
  <Router history={hashHistory}>
    <Route path="/" component={App}>
      <Route path="/repos" component={Repos}/>
      {/* add the new route */}
      <Route path="/repos/:userName/:repoName" component={Repo}/>
      <Route path="/about" component={About}/>
      <Route path="/about/:user/:sig" component={Sig}/>
    </Route>
  </Router>
), document.getElementById('app'))
