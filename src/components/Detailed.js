import React, { Component } from 'react'
import DetailedTabs from './DetailedTabs'
import DetailedDisplay from './DetailedDisplay'
import DetailedDisplaySimple from './DetailedDisplaySimple'

export default class Detailed extends Component {

  state = {
    display: 'error'
  }

  setDisplay = (value) => {
    this.setState({
      display: value
    })
  }

  renderDisplay = (key) => {
    const data = this.props.data[key]
    const display = this.state.display
    return(
      <div className="card" key={key}>
        <div className="card-header">
          <a href={data.statistics.waveurl} target="_blank">{data.statistics.pageurl}</a>
        </div>     
      <div className="card-body">
        <div className="table-responsive">
            <DetailedDisplaySimple data={data.categories} />
        </div>
      </div>
    </div>
    )
  }

  render() {
    return(
      <div>
         {
           Object
            .keys(this.props.data)
            .map(this.renderDisplay)
          }
      </div>
    )
  }
}
