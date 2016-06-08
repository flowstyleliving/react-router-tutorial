import React from 'react'
import { Link } from 'react-router'
import NavLink from './NavLink'

export default React.createClass({
  render() {
    return (
      <div>
        <h2>About</h2>

        <ul>
          <li><NavLink to="/about/holla/force">Holla</NavLink></li>
          <li><NavLink to="/about/atcha/power">Atcha</NavLink></li>
        </ul>
        {this.props.children}
      </div>
    )
  }
})
