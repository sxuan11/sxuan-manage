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
                <Col span={4} >
                    <NavLeft className="nav-left"/>
                </Col>

                <Col span={20} className="main">
                    <Headers/>
                    <Row className="content">
                        {/* {this.props.children} */}
                        <Home/>
                    </Row>
                    <Footer className="footer" />
                </Col>
            </Row>
         );
    }
}
 
export default Admin;