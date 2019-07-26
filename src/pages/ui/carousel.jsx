import React from 'react';
import { Button,Card,Icon  } from 'antd';
import Normal from './carousel/normal';
import PositionCarouselDemo from './carousel/PositionCarouselDemo';
import Autoplay from './carousel/autoplay';
import Effect from './carousel/effect';


const tabList = [
    {
      key: 'tab1',
      tab: '基本',
    },
    {
      key: 'tab2',
      tab: '位置',
    },
    {
      key: 'tab3',
      tab: '自动切换',
    },
    {
      key: 'tab4',
      tab: '渐显',
    }
  ];


  const contentList = {
    tab1: <Normal/>,
    tab2:<PositionCarouselDemo/>,
    tab3:<Autoplay/>,
    tab4:<Effect/>
  }
  
  class carousel extends React.Component {
    
    onTabChange = (key, type) => {
        this.setState({ [type]: key });
      };
    

    state = { 
        key: 'tab3',
     }
    render() { 
        return ( 
            <div>
            <Card
              style={{ width: '100%' }}
              title="走马灯"
              tabList={tabList}
              activeTabKey={this.state.key}
              onTabChange={key => {
                this.onTabChange(key, 'key');
              }}
            >
              {contentList[this.state.key]}
            </Card>
          </div>
            
         )
    }
}
 
export default carousel;