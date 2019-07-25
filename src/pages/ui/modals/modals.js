import React from 'react';
import { Modal, Button } from 'antd';


const { confirm } = Modal;


  

function showConfirm() {
    confirm({
      title: 'Do you want to delete these items?',
      content: '当点击这个按钮的时候，对话框将会在一秒后消失，通过promise实现',
      onOk() {
        return new Promise((resolve, reject) => {
          setTimeout(Math.random() > 0.5 ? resolve : reject, 1000);
        }).catch(() => console.log('Oops errors!'));
      },
      onCancel() {},
    });
  }



class Modals extends React.Component {
  state = { 
      visible: false ,
      ModalText: 'Content of the modal',
      confirmLoading: false,
    };

  showModal = () => {
    this.setState({
      visible: true,
    });
  };

  handleOk = e => {
    this.setState({
      visible: false,
    });
  };

  handleOk2 = () => {
    this.setState({
      ModalText: '这个对话框两秒后将会关闭',
      confirmLoading: true,
    });
    setTimeout(() => {
      this.setState({
        visible: false,
        confirmLoading: false,
      });
    }, 2000);
  };

  handleCancel = e => {
    this.setState({
      visible: false,
    });
  };

  render() {
    const { visible, confirmLoading, ModalText } = this.state;
    return (
      <div>
            <div>
                <Button type="primary" onClick={this.showModal}>
                    基本
                </Button>
                <Modal
                title="第一个对话框"
                visible={this.state.visible}
                onOk={this.handleOk}
                onCancel={this.handleCancel}
                >
                <p>来学习React了</p>
                </Modal>
            </div>
            <div>
                <Button type="primary" onClick={this.showModal}>
                异步关闭
                </Button>
                <Modal
                title="点击确定后异步关闭对话框，例如提交表单。"
                visible={visible}
                onOk={this.handleOk2}
                confirmLoading={confirmLoading}
                onCancel={this.handleCancel}
                >
                <p>{ModalText}</p>
                </Modal>
            </div>
            <div>
                <Button onClick={showConfirm}>确认</Button>
            </div>
      </div>
    );
  }
}


export default Modals;