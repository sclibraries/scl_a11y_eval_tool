import React, { Component } from 'react'
import { Table } from 'react-bootstrap'

export default class DetailedDisplay extends Component {

  renderDisplay = (key) => {
    const data = this.props.data.items[key]
    return(
      <tr key={key}>
        <td>{data.id}</td>
        <td>{data.count}</td>
        <td>{data.description}</td>
      </tr>
    )
  }

  render() {
    const data = this.props.data
    if(data.items) {
    return(
      <Table striped bordered condensed hover>
        <thead>
          <tr>
          <th>Item</th>
          <th>Count</th>
          <th>Description</th>
       </tr>
     </thead>
     <tbody>
      {
        Object
         .keys(data.items)
         .map(this.renderDisplay)
       }
    </tbody>
    </Table>
    )
  } else {
    return(
      <div>
        <p>No data.  Did you run a detailed report?</p>
      </div>  
    )
  }
  }
}
