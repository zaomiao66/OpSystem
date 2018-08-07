import React,{ Component } from 'react'

import './Carousel.css'

export default class ImageCarousel extends Component{
    render(){
        const { homework } = this.props;
        // console.log(homework.photos)
        function photoDisplay(arrays) {
            return arrays.map(array =>{
              return (<img className="image" src ={array} />)
            })
        }
        return(

                <div className="images">
                    {photoDisplay(homework.photos)}
                </div>

        )
    }

}