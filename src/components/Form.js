import React, { Component } from 'react'
import {Form, FormGroup, FormControl, ControlLabel} from 'react-bootstrap'

export default class SearchForm extends Component {

  componentDidMount(){
    this.api.focus();
  }

  state = {
    credits: 0
  }

  handleSubmit = (e) => {
    e.preventDefault()
    const items = {
      api: this.api.value,
      credits: this.credits.value,
      urls: this.urls.value,
      viewport: this.viewport.value
    }
    this.props.handleSearch(items)
  }

  changeDisplay = (e) => {
    this.props.display(e.target.value)
  }

  render() {
    return (
      <div className="col-md-3 form-wrapper">
      <Form onSubmit={(e) => this.handleSubmit(e)}>
      <FormGroup controlId="formCreditSelect">
          <ControlLabel>Previous Reports</ControlLabel>
            <FormControl
              componentClass="select"
              placeholder="select"
              onChange={e => this.props.handleReports(e.target.value)}
            >
            <option value="select">select</option>
            {this.props.reports.map(items =>
              <option value={items}>{items}</option>
            )}
          </FormControl>
        </FormGroup>
        <FormGroup controlId="formApiKey">
          <ControlLabel>API Key</ControlLabel>
          <FormControl
            type="text"
            placeholder="Ender API Key"
            id="formApiKey"
            name="api"
            inputRef={(input) => this.api = input}
          />
        </FormGroup>
        <FormGroup controlId="formCreditSelect">
          <ControlLabel>Credits ({this.props.credits} remaining)</ControlLabel>
            <FormControl
              componentClass="select"
              placeholder="select"
              inputRef={(input) => this.credits = input}
              onChange={(e) => this.changeDisplay(e)}
            >
            <option value="select">select</option>
            <option value="1">Summary (1 credit)</option>
            <option value="2">Summary and Detail (2 credits)</option>
            <option value="3">Summary and Detail and XPath (3 credits)</option>
            <option value="4">Summary and Detail and CSS Selectors (3 credits)</option>
          </FormControl>
        </FormGroup>
        <FormGroup controlId="formCreditSelect">
          <ControlLabel>Viewports (test different screen sizes)</ControlLabel>
            <FormControl
              componentClass="select"
              placeholder="select"
              inputRef={(input) => this.viewport = input}
            >
            <option value="1200">Default(1200)</option>
            <option value="480">480</option>
            <option value="600">600</option>
            <option value="840">840</option>
            <option value="960">960</option>
            <option value="1280">1280</option>
            <option value="1440">1440</option>
            <option value="1600">1600</option>
          </FormControl>
        </FormGroup>
        <FormGroup controlId="formURLs">
          <ControlLabel>Websites</ControlLabel>
          <p><strong>Paging login and delayed evaluation</strong></p>
          <p>To test pages that need to login add username and password to the end of url.  Example: google.com&username=xxxx&password=xxxx</p>
          <p>To delay page loads add evaldelay to the end of url.  Example google.com&evaldelay=350 (default 250 milliseconds)</p>
          <FormControl
            componentClass="textarea"
            placeholder="urls"
            rows="7"
            inputRef={(input) => this.urls = input}
          />
        </FormGroup>
        <button id="submit" type="submit" className="btn btn-primary">Submit</button>
      </Form>
      </div>
    )
  }
}
