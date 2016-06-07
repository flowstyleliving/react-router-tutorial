import React from 'react'
import { Link } from 'react-router'

export default React.createClass({
  render() {
    return (
      <div>
        <h2>About</h2>

        <ul>
          <li><Link to="/about/holla/force">Holla</Link></li>
          <li><Link to="/about/atcha/power">Atcha</Link></li>
        </ul>
      </div>
    )
  }
})
