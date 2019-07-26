import React from 'react';
import { Card,Button ,message ,notification } from 'antd';
import Modals from './modals/modals'

const info = () => {
    message.info('This is a normal message');
  };

  const success = () => {
    message.success('This is a success message');
  };
  
  const error = () => {
    message.error('This is an error message');
  };
  
  const warning = () => {
    message.warning('This is a warning message');
  };

  const success1 = () => {  
    const hide = message.loading('Action in progress..', 0);
    // Dismiss manually and asynchronously
    setTimeout(hide, 2500);
  };
  const success2 = () => {
    message
      .loading('Action in progress..', 2.5)
      .then(() => message.success('Loading finished', 2.5))
      .then(() => message.info('Loading finished is finished', 2.5));
  };

  const openNotification = () => {
    notification.open({
      message: 'Notification Title',
      description:
        'This is the content of the notification. This is the content of the notification. This is the content of the notification.',
      onClick: () => {
        console.log('Notification Clicked!');
      },
    });
  };

const tabList = [
    {
      key: 'tab1',
      tab: '对话框',
    },
    {
      key: 'tab2',
      tab: '全局提示',
    },
    {
      key: 'tab3',
      tab: '通知提醒框',
    },
  ];

  const contentList = {
    tab1: <Modals/>,
    tab2:
    <div>
    <Button type="primary" onClick={info}>
    Display normal message
    </Button>
    <Button onClick={success}>Success</Button>
    <Button onClick={error}>Error</Button>  
    <Button onClick={warning}>Warning</Button>
    <Button onClick={success1}>进行全局 loading，异步自行移除</Button>
    <Button onClick={success2}>Promise 接口</Button>
  </div>,

    tab3:
    <div>
         <Button type="primary" onClick={openNotification}>
            Open the notification box
         </Button>,
    </div> ,
}

class modals extends React.Component {
    
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
              title="交互"
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
 
export default modals;