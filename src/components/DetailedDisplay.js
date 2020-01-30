import React, { Component } from 'react'
import { Table } from 'react-bootstrap'

export default class DetailedDisplay extends Component {

  renderDisplay = (key) => {
    const data = this.props.data[key]
    return(
      <tr key={key}>
        <td>{data ? data.id : ''}</td>
        <td>{data ? data.count : ''}</td>
        <td>{data ? data.description : ''}</td>
        {data && data.selectors ?
          <td>{data.selectors[0]}</td>  
        : ''}  
        {data && data.xpaths ?
          <td>{data.xpaths[0]}</td>  
        : ''}  
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
