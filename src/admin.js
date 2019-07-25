import React from 'react';
import { Row, Col } from 'antd';
import Headers from './components/Header';
import Footer from './components/Footer';
import NavLeft from './components/NavLeft';
import Home from './pages/home/index';
import './style/common.less'

class Admin extends React.Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <Row >
                <Col span={3} className="nav-left"> 
                    <NavLeft />
                </Col>

                <Col span={21} className="main">
                    <Headers/>
                    <Row className="content">
                        {this.props.children}
                        {/* <Home/> */}
                    </Row>
                    <Footer className="footer" />
                </Col>
            </Row>
         );
    }
}
 
export default Admin;