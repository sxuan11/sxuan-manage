import React, { Component } from 'react'
import { Button,Card,Icon  } from 'antd';
import Tab1 from './basictables/normal.jsx'
import Tab2 from './basictables/selecttables.jsx'

const tabList = [
    {
      key: 'tab1',
      tab: '普通表格',
    },
    {
      key: 'tab2',
      tab: '带操作的tab',
    }
  ];
  
  const contentList = {
      tab1:<Tab1/>,
      tab2:<Tab2/>,
  }


export class normaltable extends Component {
    onTabChange = (key, type) => {
        this.setState({ [type]: key });
      };
    
    state = { 
        key: 'tab1',
     }
    render() { 
        return ( 
            <div>
            <Card
              style={{ width: '100%' }}
              title="普通表格"
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

export default normaltable
