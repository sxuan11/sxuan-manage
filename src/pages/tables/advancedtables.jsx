import React, { Component } from 'react'
import { Button,Card,Icon  } from 'antd';
import Tab1 from './advancedtables/sorttable.jsx'
import Tab2 from './advancedtables/searchtable.jsx'
import Tab3 from './advancedtables/ajaxtable.jsx'

const tabList = [
    {
      key: 'tab1',
      tab: '排序筛选表格',
    },
    {
      key: 'tab2',
      tab: '带搜索的表格',
    },
    {
      key: 'tab3',
      tab: 'ajax表格',
    },
  ];
  
  const contentList = {
      tab1:<Tab1/>,
      tab2:<Tab2/>,
      tab3:<Tab3/>,
  }


export class advancedtables extends Component {
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
              title="高级表格"
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

export default advancedtables
