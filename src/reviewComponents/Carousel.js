import React,{ Component } from 'react'

import './Carousel.css'
import { Carousel } from 'antd';
import 'antd/dist/antd.css';


export default class ImageCarousel extends Component{
    render(){
        const { homework } = this.props;
        // console.log(homework.photos)
        function photoDisplay(arrays) {
            return arrays.map((array,idx )=>{
              return (<img key={idx} className="image" src ={array} />)
            })
        }
        return(

              //  {/*<div className="images">*/}
                    // {photoDisplay(homework.photos)}
                // </div>
            <div  >
                <Carousel  fade>
                    {
                        homework.photos.map((src,idx) => {
                            return <div key={idx}><img  className="image" src={src} alt="" /></div>
                        })
                    }
                </Carousel>
            </div>


        )
    }

}