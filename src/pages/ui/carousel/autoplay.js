import { Carousel } from 'antd';
import React from 'react';
import './normal.less'

class autoplay extends React.Component{
    render(){
        return(
            <div>
                <Carousel autoplay>
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


export default autoplay;