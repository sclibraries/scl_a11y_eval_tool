import React, {Component} from 'react'
import SearchForm from '../components/Form'
import ContentSearch from '../util/search'
import Results from '../components/Results'
import Detailed from '../components/Detailed'
import Tabs from '../components/Tabs'

export default class Main extends Component {

  state = {
    data: [],
    display: 'basic',
    loading: false,
    error: false,
    errorText: ''
  }

  handleSearch = async (items) => {

    const urls = items.urls.split(/\s+/);
    this.setState({
      loading: true,
      data: []
    })
    for (let i = 0; i < urls.length; i++) {
      const entry = urls[i].replace(/.*?:\/\//g, '').trim();
      let search = await ContentSearch.webAim(entry, items.api, items.credits)
      if(search.categories) {
      this.setState({
          data: this.state.data.concat(search),
      })
    } else {
      this.setState({
        error: true,
        errorText: search.error
      })
    }
    }
    this.setState({loading: false})
  }

  handleDisplay = (value) => {
    this.setState({
      display: value
    })
  }

  removeError = () => {
    this.setState({
      error: false
    })
  }

  render() {
    const display = this.state.display
    return (
      <div className="container-fluid">
      {this.state.loading
          ?
          <div className="loading">Loading&#8230;</div>
          : ''
      }
      {this.state.error
        ?
          <div className="alert alert-danger alert-dismissible fade show" role="alert">{this.state.errorText}
          <button type="button" className="close" data-dismiss="alert" aria-label="Close" onClick={this.removeError}>
            <span aria-hidden="true">&times;</span>
          </button>
          </div>
        : ''
      }
        <div className="row">
          <nav className="col-sm-4 col-md-3 d-none d-sm-block bg-dark sidebar">
            <SearchForm
              handleSearch={this.handleSearch}
              credits={this.state.data}
            />
          </nav>
          <main className="col-sm-8 ml-sm-auto col-md-9 pt-3" role="main">
            <Tabs
              display={this.handleDisplay}
            />
            {
              display === 'basic' ? <Results data={this.state.data} /> :
              display === 'detailed' ? <Detailed data={this.state.data} /> :
              <Results data={this.state.data} />
            }
          </main>
        </div>
      </div>
    )
  }
}
