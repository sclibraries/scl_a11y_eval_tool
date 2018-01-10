import React, { Component } from 'react'

export default class DetailedTabs extends Component {

  state = {
    active: 'error'
  }

  handleClick = (e, value) => {
    e.preventDefault()
    this.setState({ active: value })
    this.props.display(value)
  }

  render() {
    return(
      <ul className="nav nav-tabs card-header-tabs">
        <li className="nav-item">
          <a className={this.state.active === 'error' ? "nav-link active" : "nav-link"} href="#" onClick={(e) => this.handleClick(e, 'error')}>Error</a>
        </li>
        <li className="nav-item">
          <a className={this.state.active === 'alerts' ? "nav-link active" : "nav-link"} href="#" onClick={(e) => this.handleClick(e, 'alerts')}>Alerts</a>
        </li>
        <li className="nav-item">
          <a className={this.state.active === 'features' ? "nav-link active" : "nav-link"} href="#" onClick={(e) => this.handleClick(e, 'features')}>Features</a>
        </li>
        <li className="nav-item">
          <a className={this.state.active === 'structure' ? "nav-link active" : "nav-link"} href="#" onClick={(e) => this.handleClick(e, 'structure')}>Structure</a>
        </li>
        <li className="nav-item">
          <a className={this.state.active === 'html5' ? "nav-link active" : "nav-link"} href="#" onClick={(e) => this.handleClick(e, 'html5')}>HTML 5 + Aria</a>
        </li>
        <li className="nav-item">
          <a className={this.state.active === 'contrast' ? "nav-link active" : "nav-link"} href="#" onClick={(e) => this.handleClick(e, 'contrast')}>Contrast</a>
        </li>
      </ul>
    )
  }
}
