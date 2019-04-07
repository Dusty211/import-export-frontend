import React, {Component} from 'react';
import Art from '../components/Art.js'
import ship from '../images/ship1.jpg'

export default class ArtPane extends Component {


  render() {
    return(
      <div>
      <Art imageSrc={ship}/>
      </div>
    )
  }
}
