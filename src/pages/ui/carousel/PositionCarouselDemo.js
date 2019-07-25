import { Carousel, Radio } from 'antd';
import React from 'react';
import './PositionCarouselDemo.less'

class PositionCarouselDemo extends React.Component {
  state = {
    dotPosition: 'top',
  };

  handlePositionChange = ({ target: { value: dotPosition } }) => this.setState({ dotPosition });

  render() {
    const { dotPosition } = this.state;
    return (
      <div>
        <Radio.Group
          onChange={this.handlePositionChange}
          value={dotPosition}
          style={{ marginBottom: 8 }}
        >
          <Radio.Button value="top">Top</Radio.Button>
          <Radio.Button value="bottom">Bottom</Radio.Button>
          <Radio.Button value="left">Left</Radio.Button>
          <Radio.Button value="right">Right</Radio.Button>
        </Radio.Group>
        <Carousel dotPosition={dotPosition}>
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
    );
  }
}

export default PositionCarouselDemo;