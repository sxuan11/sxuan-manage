import React from 'react';
import { Buttonn ,Card ,Spin ,Icon  } from 'antd';
const antIcon = <Icon type="loading" style={{ fontSize: 24 }} spin />;

const tabList = [
    {
      key: 'tab1',
      tab: '普通加载',
    },
    { 
      key: 'tab2',
      tab: '各种大小',
    },
    {
      key: 'tab3',
      tab: '旋转',
    },
  ];

  const contentList = {
    tab1: <Spin></Spin>,
    tab2:<div>
    <Spin size="small" />
    <Spin />
    <Spin size="large" />
    </div>,
    tab3:<Spin indicator={antIcon}/>,
  }

class loadings extends React.Component {
    
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
              title="加载中"
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
 
export default loadings;