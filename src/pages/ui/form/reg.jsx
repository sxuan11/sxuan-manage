import React, { Component } from 'react'
import { Form, Input, Cascader, AutoComplete, Row ,Col, Button,Checkbox} from 'antd';

export class reg extends Component {
    //数据验证成功后的回调
    handleSubmit = e=>{
        e.preventDefault()
        this.props.form.validateFieldsAndScroll((err,values)=>{
            if (!err) {
                console.log('Received values of form: ', values);
              }
        })
    }

    render() {

     
        const formItemLayout = {
            labelCol: {
                xs: { span: 24 },
                sm: { span: 8 },
            },
            wrapperCol: {
                xs: { span: 24 },
                sm: { span: 16 },
            },
            };

        return (
            <div>
                <Form {...formItemLayout} onSubmit={this.handleSubmit}>
                    <Form.Item label='E-mail'>
                    {    <Input/>}
                    </Form.Item>
                    <Form.Item label='Password'>
                        <Input type='password'/>
                    </Form.Item>
                    <Form.Item label='Confirm Password'>
                        <Input type='password'/>
                    </Form.Item>
                    <Form.Item label='NickName'>
                        <Input />
                    </Form.Item>
                    <Form.Item label='Habitual Residence'>
                        <Cascader/>
                    </Form.Item>
                    <Form.Item label='Phone Number'>
                        <Input addonBefore=''/>
                    </Form.Item>
                    <Form.Item label='Website'>
                        <AutoComplete/>
                    </Form.Item>
                    <Form.Item label='Captcha'>
                        <Row>
                            <Col>
                                <Input/>
                            </Col>
                            <Col>
                                <Button>
                                Get captcha
                                </Button>
                            </Col>
                        </Row>
                    </Form.Item>
                    <Form.Item >
                        <Checkbox>
                        I have read the <a href="">agreement</a>
                        </Checkbox>
                    
                    </Form.Item>
                    <Form.Item >
                    <Button type="primary" htmlType="submit">
                        Register
                    </Button>
                    </Form.Item>
                </Form>
            </div>
        )
    }
}

export default reg
