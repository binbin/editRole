import React from 'react';

import {
  Container,
  View,
  Grid,
  Col,
  Group,
  Icon,
  List,
  Field,
  Button,
  Switch,
  NavBar,
  OffCanvas,
  OffCanvasTrigger,
} from 'amazeui-touch';


export default class  Result extends React.Component{
      constructor(props) {
          super(props);

          this.state = {};
        }




      render(){

        const itemLeft = {
          href: 'javascript:void(0)',
          // title: 'Left'
        };
        const dataNav = {
          title: '查询结果',
          leftNav: [{...itemLeft, icon: 'left-nav'}],
          onAction: this.props.onBack,
        };
        let resultData=this.props.resultData
        if(resultData.reason_for_without_pay=='年审未通过'){
          resultData.reason_for_without_pay='年审未通过,请到社保局进行年审'
        }
        return (
                    <div>
                        
                          <NavBar {...dataNav} amStyle="primary"/>
                          <Group>
                            <h2>离退休人员基本信息</h2>
                            <table className="am-table am-table-bordered am-table-radius am-table-striped">
                            <tbody>
                            <tr>
                              <td>姓名</td>
                              <td id="user_name">{resultData.user_name||''}</td>
                            </tr>
                            <tr>
                              <td>性别</td>
                              <td id="user_sex">{resultData.user_sex||''}</td>
                            </tr>
                            <tr>
                              <td>个人编号</td>
                              <td id="user_pid">{resultData.user_pid||''}</td>
                            </tr>
                            <tr>
                              <td>身份证号</td>
                              <td id="user_cid">{resultData.user_cid||''}</td>
                            </tr>
                            <tr>
                              <td>档案出生时间</td>
                              <td id="d_date">{resultData.d_date||''}</td>
                            </tr>
                            <tr>
                              <td>参加工作时间</td>
                              <td id="g_date">{resultData.g_date||''}</td>
                            </tr>
                            <tr>
                              <td>离退休时间</td>
                              <td id="t_date">{resultData.t_date||''}</td>
                            </tr>
                            <tr>
                              <td>原月待遇金额</td>
                              <td id="total">{resultData.total||''}</td>
                            </tr>
                            <tr>
                              <td>2017年调整</td>
                              <td id="raise_wages">{resultData.raise_wages||''}</td>
                            </tr>
                            <tr>
                              <td>2017年月待遇合计</td>
                              <td id="count_amount">{resultData.count_amount||''}</td>
                            </tr>
                            <tr>
                              <td>单位名称</td>
                              <td id="company">{resultData.company||''}</td>
                            </tr>
                            <tr>
                              <td>发放状态</td>
                              <td id="user_status">{resultData.user_status||''}</td>
                            </tr>
                            <tr>
                              <td>暂停原因</td>
                              <td id="reason_for_without_pay">{resultData.reason_for_without_pay||''}</td>
                            </tr>
                            </tbody>
                            </table>
                          </Group>
            </div>)
      }
}