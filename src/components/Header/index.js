import React from 'react';
import { Row, Col ,Avatar } from 'antd';
import { Menu, Dropdown , Button ,Icon} from 'antd';
import './index.less'
import util from './../../utils/utils'
import axios from './../../axios/'

const menu = (
    <Menu>
      <Menu.Item>
        <a target="_blank" rel="noopener noreferrer" href="#">
          1st menu item
        </a>
      </Menu.Item>
      <Menu.Item>
        <a target="_blank" rel="noopener noreferrer" href="#">
          2nd menu item
        </a>
      </Menu.Item>
      <Menu.Divider />
      <Menu.Item>
        <a  rel="noopener noreferrer" href="#">
          退出登录
        </a>
      </Menu.Item>
    </Menu>
  );
  

class Header extends React.Component {

    componentWillMount(){
        this.setState({
            userName:'sxuan'
        });
        setInterval(()=>{
            let sysTime = util.formateDate(new Date().getTime());
            this.setState({
                sysTime
            });
        },1000);
        this.getWeatherAPIData();
    }
    constructor(props) {
        super(props);
        this.state = { 
            user:'章盛轩',
            color:"rgb(24, 144, 255)",
            collapsed: false,
            theme: 'dark',
            themed:false,
         }
    };

    toggleCollapsed = () => {
        this.setState({
          collapsed: !this.state.collapsed,
        });
      };
      changeTheme = value => {
        const { theme } = this.state;
        this.setState({
          theme: theme === 'dark' ? 'light' : 'dark',
          themed:!this.state.themed,
        });
    };

    getWeatherAPIData(){
        axios.jsonp({
            url:'https://www.tianqiapi.com/api/?version=v1'
        }).then((res)=>{
            if(res.status == 'success'){
                let data = res.results[0].weather_data[0];
                this.setState({
                    dayPictureUrl:data.dayPictureUrl,
                    weather:data.weather
                })
            }
        })
    }
    
    render() { 
        return ( 
            <div className="header">
                <Row className="header-top">
                    <Col span="4" className="hleft">
                        <div>
                        <Button className="btn1"  onClick={this.toggleCollapsed} >
                        <Icon type={this.state.collapsed ? 'right' : 'left'} />
                        </Button>
                        <Button className="btn2"  onClick={this.changeTheme} >
                        <Icon type={this.state.themed ? 'menu-unfold' : 'menu-fold'} />
                        </Button>
                        </div>
                    </Col>
                    <Col span='20' className="hright">
                        <div>
                        <Dropdown overlay={menu} placement="bottomCenter">
                        <Button style={{width:"110px",height:"50px"}}><span>欢迎，<Avatar style={{ backgroundColor: this.state.color, verticalAlign: 'middle' }} size="large">
                        {this.state.user}
                        </Avatar></span></Button>
                        </Dropdown>
                        </div>
                    </Col>
                </Row>
                <Row className="breadcrumb">
                    <Col span="4" className='shouye'>
                        首页
                    </Col>
                    <Col span="20" className="detile">
                        <span className="time">{this.state.sysTime}</span>
                        <span className="weather">天气</span>
                    </Col>
                </Row>
            </div>
         );
    }
}
 
export default Header;