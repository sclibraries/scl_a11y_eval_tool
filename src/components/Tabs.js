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
    if(display === '5'){
      return(
        <ul className="nav nav-tabs">
        <li className="nav-item">
          <a className={this.state.active === 'basic' ? "nav-link active" : "nav-link"} href="/basic" onClick={(e) => this.handleClick(e, 'basic')}>Basic</a>
        </li>
        <li className="nav-item">
          <a className={this.state.active === 'detailed' ? "nav-link active" : "nav-link"} href="/detailed" onClick={(e) => this.handleClick(e, 'detailed')}>Detailed</a>
        </li>
        <li className="nav-item">
          <a className={this.state.active === 'detailed_xpath' ? "nav-link active" : "nav-link"} href="/detailed_xpath" onClick={(e) => this.handleClick(e, 'detailed_xpath')}>Detailed + XPath</a>
        </li>
        <li className="nav-item">
          <a className={this.state.active === 'detailed_css' ? "nav-link active" : "nav-link"} href="/detailed_css" onClick={(e) => this.handleClick(e, 'detailed_css')}>Detailed + CSS Selectors</a>
        </li>
      </ul>
      )
    }else if(display === '3'){
      return(
      <ul className="nav nav-tabs">
        <li className="nav-item">
          <a className={this.state.active === 'basic' ? "nav-link active" : "nav-link"} href="/basic" onClick={(e) => this.handleClick(e, 'basic')}>Basic</a>
        </li>
        <li className="nav-item">
          <a className={this.state.active === 'detailed_xpath' ? "nav-link active" : "nav-link"} href="/detailed_xpath" onClick={(e) => this.handleClick(e, 'detailed_xpath')}>Detailed + XPath</a>
        </li>
      </ul>
      )
    }else if(display === '4'){
      return(
      <ul className="nav nav-tabs">
        <li className="nav-item">
          <a className={this.state.active === 'basic' ? "nav-link active" : "nav-link"} href="/basic" onClick={(e) => this.handleClick(e, 'basic')}>Basic</a>
        </li>
        <li className="nav-item">
          <a className={this.state.active === 'detailed_css' ? "nav-link active" : "nav-link"} href="/detailed_css" onClick={(e) => this.handleClick(e, 'detailed_css')}>Detailed + CSS Selectors</a>
        </li>
      </ul>
      )
    } else if(display === '2') {
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
