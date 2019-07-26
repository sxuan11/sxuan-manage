import React, { Component } from 'react'
import { Checkbox } from 'antd';

const plainOptions = ['Apple', 'Pear', 'Orange'];
const defaultCheckedList = ['Apple'];
const CheckboxGroup = Checkbox.Group;

export class check extends Component {

    state = {
        checkedList: defaultCheckedList,
        indeterminate: true,
        checkAll: false,
      };

    onChange = checkedList => {
    this.setState({
        checkedList,
        indeterminate: !!checkedList.length && checkedList.length < plainOptions.length,
        checkAll: checkedList.length === plainOptions.length,
    });
    };
    
    onCheckAllChange = e => {
    this.setState({
        checkedList: e.target.checked ? plainOptions : [],
        indeterminate: false,
        checkAll: e.target.checked,
    });
    };
    
    render() {
        return (
            <div>
                <div>
                <div style={{ borderBottom: '1px solid #E9E9E9' }}>
                <Checkbox
                    indeterminate={this.state.indeterminate}
                    onChange={this.onCheckAllChange}
                    checked={this.state.checkAll}
                >
                    Check all
                </Checkbox>
                </div>
                <br />
                <CheckboxGroup
                options={plainOptions}
                value={this.state.checkedList}
                onChange={this.onChange}
                />
            </div>
            </div>
        )
    }
}

export default check;
