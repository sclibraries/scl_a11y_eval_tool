import React, { Component } from 'react'
import {Form, FormGroup, FormControl, ControlLabel} from 'react-bootstrap'

export default class SearchForm extends Component {

  state = {
    credits: 0
  }

  handleSubmit = (e) => {
    e.preventDefault()
    const items = {
      api: this.api.value,
      credits: this.credits.value,
      urls: this.urls.value
    }
    this.props.handleSearch(items)
  }

  render() {
    return (
      <div className="col-md-3 form-wrapper">
      <Form onSubmit={(e) => this.handleSubmit(e)}>
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
            >
            <option value="select">select</option>
            <option value="1">1 credit</option>
            <option value="2">2 credits</option>
          </FormControl>
        </FormGroup>
        <FormGroup controlId="formURLs">
          <ControlLabel>Websites</ControlLabel>
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
