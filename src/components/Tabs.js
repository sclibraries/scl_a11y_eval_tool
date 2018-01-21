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
    const display = this.props.tabDisplay
    console.log(display)
    if(display === '2') {
    return(
      <ul className="nav nav-tabs">
        <li className="nav-item">
          <a className={this.state.active === 'basic' ? "nav-link active" : "nav-link"} href="/basic" onClick={(e) => this.handleClick(e, 'basic')}>Basic</a>
        </li>
        <li className="nav-item">
          <a className={this.state.active === 'detailed' ? "nav-link active" : "nav-link"} href="/detailed" onClick={(e) => this.handleClick(e, 'detailed')}>Detailed</a>
        </li>
      </ul>
    )
  } else {
    return(
    <ul className="nav nav-tabs">
      <li className="nav-item">
        <a className={this.state.active === 'basic' ? "nav-link active" : "nav-link"} href="/basic" onClick={(e) => this.handleClick(e, 'basic')}>Basic</a>
      </li>
    </ul>
  )
  }
  }
}
