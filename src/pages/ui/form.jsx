import React from 'react';
import Login from './form/login';
import Register from './form/register';
import Reg from './form/reg';
import Advancedsearch from './form/advancedsearch';
import Createform from './form/createform';
import { Card   } from 'antd';

const tabList = [
    {
      key: 'tab1',
      tab: '登陆',
    },
    { 
      key: 'tab2',
      tab: '注册',
    },
    {
      key: 'tab3',
      tab: '注册（中文）',
    },
    {
      key: 'tab4',
      tab: '高级搜索',
    },
    {
      key: 'tab5',
      tab: '弹出式表单',
    },
    {
      key: 'tab6',
      tab: '校验组件',
    },
  ];

  const contentList = {
    tab1: <Login/>,
    tab2: <Register/>,
    tab3: <Reg/>,
    tab4: 
    <div>
    <Advancedsearch />
    <div className="search-result-list">Search Result List</div>
    </div>,
    tab5: <Createform/>,
    tab6: 123,
  } 

class form extends React.Component {
    
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
            //   style={{ width: '100%' }}
              title="表单"
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
 
export default form;