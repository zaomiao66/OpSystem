import React,{ Component } from 'react'

import './Carousel.css'

export default class ImageCarousel extends Component{
    render(){
        const { homework } = this.props;
        // console.log(homework.photos)
        return(

                <div className="images">
                    <img className="image" src ={homework.photos[0]} />
                    <img className="image" src ={homework.photos[1]} />
                    <img className="image" src ={homework.photos[2]} />
                    <img className="image" src ={homework.photos[3]} />
                    <img className="image" src ={homework.photos[4]} />
                </div>

        )
    }

}