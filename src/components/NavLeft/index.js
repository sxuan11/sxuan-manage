import React from 'react';
import { Menu, Icon, Button ,Switch} from 'antd';
import MenuConfig from './../../config/menuConfig'
import "./index.less"

const { SubMenu } = Menu;

class NavLeft extends React.Component {

    rootSubmenuKeys = ['/home', '/ui', '/form','/table','/rich','/city','/order','/user','/bikeMap','/charts','/permission'];
    componentWillMount(){
       const menuTreeNode =  this.renderMenu(MenuConfig);
       this.setState({
        menuTreeNode
       })
    }
    //菜单渲染
    renderMenu=(data)=>{
        return data.map((item)=>{
            if(item.children){
                return (
                    <SubMenu 
                    title={
                            <span>
                              <Icon type={item.icon} />
                              <span>{item.title}</span>
                            </span>
                        } key={item.key} >
                        {this.renderMenu(item.children)}
                    </SubMenu>
                )
            }
            return <Menu.Item title={item.title} key={item.key}  >
                {
                    <span>
                    <Icon type={item.icon} />
                    <span>{item.title}</span>
                    </span>
                }
            </Menu.Item>;
        })
    }

    constructor(props) {
        super(props);
        this.state = { 
            collapsed: false,
            theme: 'dark',
            themed:false,
            openKeys: ['/home'],
         }
    }
    //   toggleCollapsed = () => {
    //     this.setState({
    //       collapsed: !this.state.collapsed,
    //     });
    //   };
    //   changeTheme = value => {
    //     const { theme } = this.state;
    //     this.setState({
    //       theme: theme === 'dark' ? 'light' : 'dark',
    //       themed:!this.state.themed,
    //     });
      
    // };
    onOpenChange = openKeys => {
        const latestOpenKey = openKeys.find(key => this.state.openKeys.indexOf(key) === -1);
        if (this.rootSubmenuKeys.indexOf(latestOpenKey) === -1) {
          this.setState({ openKeys });
        } else {
          this.setState({
            openKeys: latestOpenKey ? [latestOpenKey] : [],
          });
        }
      };
    


    render() { 
        return ( 
            <div style={{ width: 256 }}>
                <div
                className="logo"
                >
                    <a href="/">
                    <img src="/assets/logo.svg" alt="sxuan"></img>
                    <p>sxuan MS</p>
                    </a>
                    {/* <Button className="btn1"  onClick={this.toggleCollapsed} style={{ marginBottom: 16 }}>
                    <Icon type={this.state.collapsed ? 'right' : 'left'} />
                    </Button>
                    <Button className="btn2"  onClick={this.changeTheme} style={{ marginBottom: 16 }}>
                    <Icon type={this.state.themed ? 'menu-unfold' : 'menu-fold'} />
                    </Button> */}
                </div>
                <Menu
                    className='menu'
                    theme={this.state.theme}
                    inlineCollapsed={this.state.collapsed}
                    defaultSelectedKeys={['1']}
                    defaultOpenKeys={['sub1']}
                    mode="inline"
                    openKeys={this.state.openKeys}
                    onOpenChange={this.onOpenChange}
                >
                    { this.state.menuTreeNode }
                </Menu>
          </div>
        );
    }
}
 
export default NavLeft;