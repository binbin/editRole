import React from 'react';
import { connect } from 'react-redux';

import { Checkbox } from 'antd';
const CheckboxGroup = Checkbox.Group;

const options = [
  { label: '单位到帐_养老', value: '1.1' },
  { label: '单位到帐_工伤', value: '1.2' },
  { label: '单位到帐_生育', value: '1.3' },
  { label: '单位到帐_医疗', value: '1.4' },
  { label: '单位到帐_失业', value: '1.5' },
  { label: '个人到账_养老', value: '2.1' },
  { label: '个人到账_医疗', value: '2.2' },
  { label: '批量划帐', value: '3' },
  { label: '个人批量征集', value: '4' },
  { label: '城职个人查询', value: '5' },
  { label: '农保待遇申请', value: '7' },
  { label: '农保待遇核定', value: '8' },
];

//1 单位到帐 1.1养老 1.2工伤 1.3生育 1.4医疗 1.5失业
//2 个人到账 2.1养老 2.2 医疗
//3 批量划帐
//4 个人批量征集
//5 城职个人查询
//6 农保批量终止
//7 农保待遇申请
//8 农保待遇核定

export default class Item extends React.Component{
	render(){
		return (<div>
			<div>
				15040405,xxxx
			</div>
			<div>
			<CheckboxGroup options={options} defaultValue={this.props.defaultValue}/>
			</div>
		</div>)
	}
}