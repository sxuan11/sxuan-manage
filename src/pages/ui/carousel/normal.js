import { Carousel } from 'antd';
import React from 'react';
import './normal.less'

function onChange(a, b, c) {
  console.log(a, b, c);
}


class normal extends React.Component{
    render(){
        return(
            <div>
                <Carousel afterChange={onChange}>
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


export default normal;