import {Component} from 'react'
import { webaim } from '../config/endpoint'

class ContentSearch extends Component {


  webAim = async (url, key, credit) => {
      let search = await this.search(webaim + `?key=${key}&url=${url}&reporttype=${credit}`)
      return search
  }


  search = async (searchType) => {
    try {
        let response = await fetch(searchType);
        return await response.json();
    } catch (e) {
        return {

        }
    }
  }

}

const contentSearch = new ContentSearch();

export default contentSearch;
