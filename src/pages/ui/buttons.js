import React from 'react';
import { Button,Card,Icon  } from 'antd';
import Loading from './buttons/loading'

const ButtonGroup = Button.Group;
const tabList = [
    {
      key: 'tab1',
      tab: '普通按钮',
    },
    {
      key: 'tab2',
      tab: '图标按钮',
    },
    {
      key: 'tab3',
      tab: '加载中状态',
    },
    {
      key: 'tab4',
      tab: '按钮组合',
    },
    {
      key: 'tab5',
      tab: '幽灵按钮',
    },
    {
      key: 'tab6',
      tab: 'block 按钮',
    },
  ];
  
  const contentList = {
    tab1: 
    <div>
    <Button type="primary">Primary</Button>
    <Button>Default</Button>
    <Button type="dashed">Dashed</Button>
    <Button type="danger">Danger</Button>
    <Button type="link">Link</Button>
    </div>,
    tab2:  
    <div>
    <Button type="primary" shape="circle" icon="search" />
    <Button type="primary" icon="search">
      Search
    </Button>
    <Button shape="circle" icon="search" />
    <Button icon="search">Search</Button>
    <br />
    <Button shape="circle" icon="search" />
    <Button icon="search">Search</Button>
    <Button type="dashed" shape="circle" icon="search" />
    <Button type="dashed" icon="search">
      Search
    </Button>
     </div>,
    tab3: <Loading/>,
    tab4: <div>
    <h4>Basic</h4>
    <ButtonGroup>
      <Button>Cancel</Button>
      <Button>OK</Button>
    </ButtonGroup>
    <ButtonGroup>
      <Button disabled>L</Button>
      <Button disabled>M</Button>
      <Button disabled>R</Button>
    </ButtonGroup>
    <ButtonGroup>
      <Button>L</Button>
      <Button>M</Button>
      <Button>R</Button>
    </ButtonGroup>

    <h4>With Icon</h4>
    <ButtonGroup>
      <Button type="primary">
        <Icon type="left" />
        Go back
      </Button>
      <Button type="primary">
        Go forward
        <Icon type="right" />
      </Button>
    </ButtonGroup>
    <ButtonGroup>
      <Button type="primary" icon="cloud" />
      <Button type="primary" icon="cloud-download" />
    </ButtonGroup>
  </div>,
  tab5:<div style={{ background: 'rgb(190, 200, 200)', padding: '26px 16px 16px' }}>
  <Button type="primary" ghost>
    Primary
  </Button>
  <Button ghost>Default</Button>
  <Button type="dashed" ghost>
    Dashed
  </Button>
  <Button type="danger" ghost>
    danger
  </Button>
  <Button type="link" ghost>
    link
  </Button>
</div>,
    tab6: <div>
    <Button type="primary" block>
      Primary
    </Button>
    <Button block>Default</Button>
    <Button type="dashed" block>
      Dashed
    </Button>
    <Button type="danger" block>
      Danger
    </Button>
    <Button type="link" block>
      Link
    </Button>
  </div>,
  };
  

  


class buttons extends React.Component {

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
              title="按钮"
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
 
export default buttons;