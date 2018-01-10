import React, { Component } from 'react'
import DetailedTabs from './DetailedTabs'
import DetailedDisplay from './DetailedDisplay'

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
        <div className="card-header">
          <DetailedTabs
            counts={data}
            display={this.setDisplay}
          />
        </div>
      <div className="card-body">
        <div className="table-responsive">
          {
            display === 'error' ? <DetailedDisplay data={data.categories.error} /> :
            display === 'alerts' ? <DetailedDisplay data={data.categories.alert} /> :
            display === 'features' ? <DetailedDisplay data={data.categories.feature} /> :
            display === 'structure' ? <DetailedDisplay data={data.categories.structure} /> :
            display === 'html5' ? <DetailedDisplay data={data.categories.html5} /> :
            display === 'contrast' ? <DetailedDisplay data={data.categories.contrast} /> :
            <DetailedDisplay data={data.categories} />
          }
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
