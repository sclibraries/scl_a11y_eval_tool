import React, {Component} from 'react'
import { Table } from 'react-bootstrap'

export default class Results extends Component {

  renderDisplay = (key) => {
    const data = this.props.data[key]
    return(
    <tr key={key}>
      <td className="col-md-3 page-url-column">
        <a href={data && data.statistics ? data.statistics.waveurl : ''} target="_blank">{data && data.statistics ? data.statistics.pageurl : ''}</a>
      </td>
      <td>{data && data.categories.error ? data.categories.error.count : 0}</td>
      <td>{data && data.categories.alert ? data.categories.alert.count : 0}</td>
      <td>{data && data.categories.feature ? data.categories.feature.count : 0}</td>
      <td>{data && data.categories.structure ? data.categories.structure.count : 0}</td>
      <td>{data && data.categories.aria ? data.categories.aria.count : 0}</td>
      <td>{data && data.categories.contrast ? data.categories.contrast.count : 0}</td>
    </tr>
  )
  }

  render() {
    return(
      <div className="table-responsive">
      <Table striped bordered condensed hover>
		    <thead>
			     <tr>
				      <th>Page Url</th>
				      <th scope="row" className="table-danger">Errors</th>
				      <th scope="row" className="table-warning">Alert</th>
				      <th scope="row" className="table-success">Feature</th>
              <th scope="row" className="table-primary">Structure</th>
              <th scope="row" className="table-info">ARIA</th>
              <th scope="row" className="table-secondary">Contrast</th>
			     </tr>
		     </thead>
         <tbody>
         {this.props.data && this.props.data.length ? Object.keys(this.props.data).map(this.renderDisplay) : <tr></tr>}
        </tbody>
	      </Table>
      </div>
    )
  }
}
