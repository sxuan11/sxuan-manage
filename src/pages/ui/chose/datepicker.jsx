import React, { Component } from 'react'
import { DatePicker } from 'antd';

const { MonthPicker, RangePicker, WeekPicker } = DatePicker;

function onChange(date, dateString) {
    console.log(date, dateString);
  }

export class datepicker extends Component {
    render() {
        return (
            <div>
                <DatePicker />
                <RangePicker/>
                <br/>
                <DatePicker  showTime />
                <RangePicker
                showTime={{format:'HH:mm'}}
                /> 
            </div>
        )
    }
}

export default datepicker
