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
      <ul className="nav nav-tabs card-header-tabs" role="tablist">
        <li className="nav-item">
          <a className={this.state.active === 'error' ? "nav-link active" : "nav-link"} aria-selected={this.state.active === 'error' ? "true" : "false"} role="tab" aria-controls="error" href="/error" onClick={(e) => this.handleClick(e, 'error')}>Error</a>
        </li>
        <li className="nav-item">
          <a className={this.state.active === 'alerts' ? "nav-link active" : "nav-link"} aria-selected={this.state.active === 'alerts' ? "true" : "false"} role="tab" aria-controls="alerts" href="/alerts" onClick={(e) => this.handleClick(e, 'alerts')}>Alerts</a>
        </li>
        <li className="nav-item">
          <a className={this.state.active === 'features' ? "nav-link active" : "nav-link"} aria-selected={this.state.active === 'features' ? "true" : "false"} role="tab" aria-controls="features" href="/features" onClick={(e) => this.handleClick(e, 'features')}>Features</a>
        </li>
        <li className="nav-item">
          <a className={this.state.active === 'structure' ? "nav-link active" : "nav-link"} aria-selected={this.state.active === 'structure' ? "true" : "false"} role="tab" aria-controls="structure" href="/structure" onClick={(e) => this.handleClick(e, 'structure')}>Structure</a>
        </li>
        <li className="nav-item">
          <a className={this.state.active === 'html5' ? "nav-link active" : "nav-link"} aria-selected={this.state.active === 'html5' ? "true" : "false"} role="tab" aria-controls="html 5" href="/html5" onClick={(e) => this.handleClick(e, 'html5')}>Aria</a>
        </li>
        <li className="nav-item">
          <a className={this.state.active === 'contrast' ? "nav-link active" : "nav-link"} aria-selected={this.state.active === 'contrast' ? "true" : "false"} role="tab" aria-controls="contrast" href="contrast" onClick={(e) => this.handleClick(e, 'contrast')}>Contrast</a>
        </li>
      </ul>
    )
  }
}
