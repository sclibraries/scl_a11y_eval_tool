import React, {Component} from 'react'
import { Table } from 'react-bootstrap'

export default class Results extends Component {

  renderDisplay = (key) => {
    const data = this.props.data[key]
    return(
    <tr key={key}>
      <td className="col-md-3 page-url-column">
        <a href={data.statistics.waveurl} target="_blank">{data.statistics.pageurl}</a>
      </td>
      <td>{data.categories.error.count}</td>
      <td>{data.categories.alert.count}</td>
      <td>{data.categories.feature.count}</td>
      <td>{data.categories.structure.count}</td>
      <td>{data.categories.html5.count}</td>
      <td>{data.categories.contrast.count}</td>
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
				      <th className="table-danger">Errors</th>
				      <th className="table-warning">Alert</th>
				      <th className="table-success">Feature</th>
              <th className="table-primary">Structure</th>
              <th className="table-info">HTML 5</th>
              <th className="table-secondary">Contrast</th>
			     </tr>
		     </thead>
         <tbody>
         {
           Object
            .keys(this.props.data)
            .map(this.renderDisplay)
          }
        </tbody>
	      </Table>
      </div>
    )
  }
}
