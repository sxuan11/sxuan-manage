import React, { Component } from 'react'
import { message, Select, Icon, Form, Input, Cascader, AutoComplete, Row ,Col, Button,Checkbox, Tooltip} from 'antd';

const {Option} = Select;
const AutoCompleteOption = AutoComplete.Option;

const success = () => {
    message
      .loading('正在发送中', 2.5) 
      .then(() => message.success('发送成功', 2.5))
      .then(() => message.info('验证码是123456', 5));
  };

const residences = [
    {
      value: 'guangdong',
      label: '广东',
      children: [
        {
          value: 'guangzhou',
          label: '广州',
          children: [
            {
                value: 'tianhe',
                label: '天河区',
            },
            {
                value: 'yuexiu',
                label: '越秀区',
            },
            {
                value: 'haizhu',
                label: '海珠区',
            },
            {
                value: 'baiyun',
                label: '白云区',
            },
          ],
        },
        {
            value: 'foshan',
            label: '佛山',
            children: [
              {
                  value: 'chanchen',
                  label: '禅城区',
              },
              {
                  value: 'nahai',
                  label: '南海区',
              },
              {
                  value: 'sanshui',
                  label: '三水区',
              }
            ],
          },
      ],
    },
    {
      value: 'shanghai',
      label: '上海',
      children: [
        {
          value: 'pudongxinqu',
          label: '浦东新区',
          children: [
            {
              value: 'lujiazui',
              label: '陆家嘴',
            },
          ],
        },
      ],
    },
  ];


export class reg extends Component {

    state = {
        confirmDirty:false,
        autoCompleteResult: [],
        loading: false,
        result: [],
    }


    handleSearch = value => {
        let result;
        if (!value || value.indexOf('@') >= 0) {
          result = [];
        } else {
          result = ['gmail.com', '163.com', 'qq.com'].map(domain => `${value}@${domain}`);
        }
        this.setState({ result });
      };

    //数据验证成功后的回调
    handleSubmit = e=>{
        e.preventDefault()
        this.props.form.validateFieldsAndScroll((err,values)=>{//校验完后，如果校验不通过的菜单域不在可见范围内，则自动滚动进可见范围
            if (!err) {
                console.log('Received values of form: ', values);
              }
        })
    }

    //验证两次密码
    validateToNextPassword = (rule,value,callback)=>{
        const { form } = this.props;
        if(value && this.state.confirmDirty){
            form.validateFields(['confirm',{force:true}]);
        }
        callback();
    }
    compareToFirstPassword = (rule,value,callback)=>{
        const { form } = this.props;
        if(value && value !== form.getFieldValue('password')){
            callback('两次输入的密码不一致')
        }else{
            callback();
        }
    }

    handleConfirmBlur=e =>{
        const {value}  = e.target;
        this.setState(
            {
                confirmDirty:this.state.confirmDirty || !!value
            }
        )
    }

    handleWebsiteChange = value=>{
        let autoCompleteResult;
        if(!value){
            autoCompleteResult= [];
        }else{
            autoCompleteResult =['.com','.org','.cn','.net'].map(domain=>`${value}${domain}`)
        }
        this.setState({autoCompleteResult})
    }
    getcaptcha(){

    }

    render() {
        const { getFieldDecorator } = this.props.form;
        const {autoCompleteResult} = this.state;

        const prefixSelector = getFieldDecorator('prefix', {
            initialValue: '86',
            })(
            <Select style={{ width: 70 }}>
                <Option value="86">+86</Option>
                <Option value="87">+87</Option>
            </Select>,
            );

        //表单布局
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

        const tailFormItemLayout = {
            wrapperCol: {
                xs: {
                span: 24,
                offset: 0,
                },
                sm: {
                span: 16,
                offset: 8,
                },
            },
        };
        const websiteOptions = autoCompleteResult.map(website=>(
            <AutoCompleteOption key={website}>{website}</AutoCompleteOption>
        ))
        const { result } = this.state;
        const children = result.map(email => <Option key={email}>{email}</Option>);
     

        return (
            <div>
                <Form {...formItemLayout} onSubmit={this.handleSubmit}>
                    <Form.Item label='邮箱'>
                    {getFieldDecorator('email',{
                        rules:[//校验规则
                            {
                                type:'email',
                                message:'这不是一个有效的邮件地址'
                            },
                            {
                                required: true,
                                message: '请输入你的邮件地址',
                            },
                        ]
                    }
                    )(
                        <AutoComplete
                        dataSource={websiteOptions}
                        onSearch={this.handleSearch}
                    >
                        {children}
                    </AutoComplete>
                    )}
                    </Form.Item>
                    <Form.Item label='密码' hasFeedback>
                    {getFieldDecorator('password', {
                        rules: [
                        {
                            required: true,
                            message: '请输入你的密码',
                        },
                        {
                            validator:this.validateToNextPassword,
                        }
                        ],
                    })(<Input.Password />)}
                        
                    </Form.Item>
                    <Form.Item label='确认密码' hasFeedback>
                    {getFieldDecorator('confirm', {
                        rules: [
                        {
                            required: true,
                            message: '请确认你的密码',
                        },
                        {
                            validator:this.compareToFirstPassword,
                        }
                        ],
                    })(<Input.Password  onBlur={this.handleConfirmBlur} />)}
                    </Form.Item>
                    <Form.Item label={
                        <span>
                            用户名&nbsp;
                            <Tooltip title="你想别的用户怎么称呼你">
                            <Icon type="question-circle-o" />
                            </Tooltip>
                        </span>
                    }>
                    {getFieldDecorator('nickname', {
                        rules: [
                        {
                            required: true,
                            message: '请输入你的用户名',
                        }
                        ],
                    })(<Input/>)}
                 
                    </Form.Item>
                    <Form.Item label='常住地'>
                        {getFieldDecorator('residence',{
                            initialValue: ['guangdong', 'guangzhou', 'tianhe'],
                            rules:[
                                {
                                    type:'array',
                                    required:true,
                                    message:'请选择你的常住地'
                                }
                            ]
                        })(<Cascader options={residences}/>)}
                    </Form.Item>
                    <Form.Item label='手机号'>
                        {getFieldDecorator('phone',{
                            rules:[
                                {
                                    required:true,
                                    message:'请输入正确的手机号'
                                }
                            ]
                        })(<Input maxLength='11' addonBefore={prefixSelector}/>)}
                    </Form.Item>
                    <Form.Item label='网站'>
                        {getFieldDecorator('website',
                        {
                            rules:[
                                {
                                    required:true,
                                    message:'请输入正确的网站'
                                }
                            ]
                        }
                        )(<AutoComplete
                            dataSource={websiteOptions}
                            onChange={this.handleWebsiteChange}
                        >
                            <Input/>
                        </AutoComplete>)}
                        
                    </Form.Item>
                    <Form.Item label='验证码' extra="我们必须确保不是机器人所为">
                        <Row gutter={8}>
                            <Col span={12}>
                                {getFieldDecorator('captcha',{
                                    rules:[
                                        {
                                            required:true,
                                            message:'请输入你获得的验证码'
                                        }
                                    ]
                                })(<Input/>)}
                            </Col>
                            <Col span={12}>
                                <Button onClick={success} loading={this.state.loading}>
                                获取验证码
                                </Button>
                            </Col>
                        </Row>
                    </Form.Item>
                    <Form.Item {...tailFormItemLayout}>
                        {getFieldDecorator('agreement',{
                            valuePropName: 'checked',
                            rules:[
                                {
                                    required:true,
                                    message:'必须勾选用户协议'
                                }
                            ]
                        })(
                            <Checkbox>
                            我已经阅读了 <a href="#">用户协议</a>
                            </Checkbox>
                        )}
                        
                    
                    </Form.Item>
                    <Form.Item {...tailFormItemLayout}>
                    <Button type="primary" htmlType="submit">
                        注册
                    </Button>
                    </Form.Item>
                </Form>
            </div>
        )
    }
}

const WrappedRegistrationForm1 = Form.create({ name: 'register' })(reg);

export default WrappedRegistrationForm1

