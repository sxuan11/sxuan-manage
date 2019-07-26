import React from 'react';
import Radio from './chose/radio'
import Check from './chose/check'
import Datepicker from './chose/datepicker'
import { Buttonn ,Card ,Spin ,Icon   } from 'antd';

const tabList = [
    {
      key: 'tab1',
      tab: '单选框',
    },
    { 
      key: 'tab2',
      tab: '多选框',
    },
    {
      key: 'tab3',
      tab: '日期选择框',
    },
  ];

  const contentList = {
    tab1: <Radio/>,
    tab2: <Check/>,
    tab3: <Datepicker/>,
  }

class chose extends React.Component {
    
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
              title="选择器"
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
 
export default chose;