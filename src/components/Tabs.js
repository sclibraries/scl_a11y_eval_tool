import React, { Component } from 'react'

export default class Tabs extends Component {

  state = {
    active: 'basic'
  }

  handleClick = (e, value) => {
    e.preventDefault()
    this.setState({ active: value })
    this.props.display(value)
  }

  render() {
    return(
      <ul className="nav nav-tabs">
        <li className="nav-item">
          <a className={this.state.active === 'basic' ? "nav-link active" : "nav-link"} href="#" onClick={(e) => this.handleClick(e, 'basic')}>Basic</a>
        </li>
        <li className="nav-item">
          <a className={this.state.active === 'detailed' ? "nav-link active" : "nav-link"} href="#" onClick={(e) => this.handleClick(e, 'detailed')}>Detailed</a>
        </li>
      </ul>
    )
  }
}
