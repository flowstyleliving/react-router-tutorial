import { Router, Route, browserHistory, IndexRoute } from 'react-router'
import React from 'react'
import { render } from 'react-dom'
import App from './App'
import About from './About'
import Repos from './Repos'
import Repo from './Repo'
import Sig from './Sig'
import Home from './Home'

module.exports = (
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Home}/>
      <Route path="/repos" component={Repos}>
        <Route path="/repos/:userName/:repoName" component={Repo}/>
      </Route>
      {/* add the new route */}
      <Route path="/about" component={About}/>
        <Route path="/about/:user/:sig" component={Sig}/>
    </Route>
  </Router>
)
