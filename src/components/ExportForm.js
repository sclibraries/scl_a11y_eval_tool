import React, { Component } from 'react'
import {Form, FormGroup, FormControl, ControlLabel} from 'react-bootstrap'

export default class ExportForm extends Component {

  componentDidMount(){
    this.exportType.focus();
  }

  handleSubmit = (e) => {
    e.preventDefault()
    const exportItems = {
      type: this.exportType.value,
      name: this.fileName.value
    }
    this.props.handleExport(exportItems)
  }

  render() {
    return (
      <div className="export-form">
      <Form onSubmit={(e) => this.handleSubmit(e)}>
        <FormGroup controlId="formExportSelect">
          <ControlLabel>Export Type</ControlLabel>
            <FormControl
              componentClass="select"
              placeholder="select"
              inputRef={(input) => this.exportType = input}
            >
            <option value="select">select</option>
            <option value="CSV">CSV</option>
            <option value="HTML">HTML</option>
            <option value="JSON">JSON</option>
          </FormControl>
        </FormGroup>
        <FormGroup controlId="formFileName">
          <ControlLabel>File Name</ControlLabel>
          <FormControl
            type="text"
            label="file name"
            placeholder="File Name"
            inputRef={(input) => this.fileName = input}
          />
        </FormGroup>
        <button id="submit" type="submit" className="btn btn-primary">Submit</button>
      </Form>
      </div>
    )
  }
}
