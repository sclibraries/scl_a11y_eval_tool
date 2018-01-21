import React, { Component } from 'react'
import { Table } from 'react-bootstrap'

export default class DetailedDisplay extends Component {

  renderDisplay = (key) => {
    const data = this.props.data[key]
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
    return(
      <tbody>
      {
        Object
         .keys(data)
         .map(this.renderDisplay)
       }
      </tbody>
    )
  }
}
