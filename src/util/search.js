import {Component} from 'react'
import { webaim } from '../config/endpoint'

class ContentSearch extends Component {


  webAim = async (url, key, credit, viewport) => {
      let search = await this.search(webaim + `?key=${key}&url=${url}&reporttype=${credit}&viewportwidth=${viewport && viewport !== '' ? viewport : 1200}`)
      return search
  }


  search = async (searchType) => {
    try {
        let response = await fetch(searchType);
        return await response.json();
    } catch (e) {
        console.log(e)
    }
  }

}

const contentSearch = new ContentSearch();

export default contentSearch;
