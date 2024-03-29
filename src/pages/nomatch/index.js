import { Button, Result } from 'antd';
import React from 'react';
import router from './../../router'

// 这里应该使用 antd 的 404 result 组件，
// 但是还没发布，先来个简单的。


class noFoundPage extends React.Component {
    render(){
        return(
            <Result
            status="404"
            title="404"
            subTitle="Sorry, the page you visited does not exist."
            extra={
              <Button type="primary" onClick={() => router.push('/')}>
                Back Home
              </Button>
            }
          ></Result>
        );
    }
 
}

export default noFoundPage;
