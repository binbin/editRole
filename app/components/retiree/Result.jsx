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
        let r=resultData.result[0]
        // if(resultData.reason_for_without_pay=='年审未通过'){
        //   resultData.reason_for_without_pay='年审未通过,请到社保局进行年审'
        // }
        // if(resultData.user_name){
        //   resultData.user_name=new Array(resultData.user_name.length-1).join('*')+resultData.user_name.substr(resultData.user_name.length-1)
        // }
        return (
                    <div>
                        
                          <NavBar {...dataNav} amStyle="primary"/>
                          <Group>
                            <h2>离退休人员基本信息</h2>
                            <table className="am-table am-table-bordered am-table-radius am-table-striped">
                            <tbody>
                            <tr>
                              <td>姓名</td>
                              <td id="user_name">{r.user_name||''}</td>
                            </tr>
                    
                            <tr>
                              <td>身份证号</td>
                              <td id="user_cid">{resultData.user_cid||''}</td>
                            </tr>
                            <tr>
                              <td>档案出生时间</td>
                              <td id="d_date">{r.d_date||''}</td>
                            </tr>
                            <tr>
                              <td>参加工作时间</td>
                              <td id="g_date">{r.g_date||''}</td>
                            </tr>
                            <tr>
                              <td>离退休时间</td>
                              <td id="t_date">{r.t_date||''}</td>
                            </tr>
                             <tr>
                              <td>单位名称</td>
                              <td id="company">{r.company||''}</td>
                            </tr>
                            <tr>
                              <td>发放状态</td>
                              <td id="user_status">{r.user_status||''}</td>
                            </tr>
                           
                           
                            </tbody>
                            </table>
                            <h2>以下是养老金明细</h2>
                            <table className="am-table am-table-bordered am-table-radius am-table-striped">
                            <tbody>
                               {resultData.result.map(function(n, i) {
                                return (<tr>
                                            <td>{n.pay_item_name}</td>
                                            <td>{n.pay_item_amount}</td>
                                          </tr>)
                              })}
                            </tbody>
                            </table>
                          </Group>
            </div>)
      }
}