import { Carousel } from 'antd';
import React from 'react';
import './effect.less'

class effect extends React.Component{
    render(){
        return(
            <div>
                <Carousel effect='fade'>
                <div>
                <img src={require('./../../../resource/images/carousel/1.jpg')} alt=''></img>
                </div>
                <div>
                <img src={require('./../../../resource/images/carousel/2.jpg')} alt=''></img>
                </div>
                <div>
                <img src={require('./../../../resource/images/carousel/3.jpg')} alt=''></img>
                </div>
                <div>
                <img src={require('./../../../resource/images/carousel/4.jpg')} alt=''></img>
                </div>
                </Carousel>
            </div>
        )
    }
}


export default effect;