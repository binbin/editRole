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

import {formatRMB} from '../../tools/cny.js'


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

        let amount=0
        let resultList=resultData.result
   

        resultList.forEach(function(n,i){
          if(n['pay_item_name']!='菜金取暖'){
            amount+=n['pay_item_amount']
          }
        })

        let cnyAmount=formatRMB(amount)

        let hasArray=['基础养老金','个人帐户养老金','过渡性养老金','过渡性调节金',
        '2017年养老调资金额']


        resultList=resultList.filter(function(n){
          return n['pay_item_name']!='菜金取暖'
        })

        let otherAmount=0
        resultList.forEach(function(n,i){
          if(hasArray.indexOf(n['pay_item_name'])<0){
            otherAmount+=n['pay_item_amount']
          }
        })
        resultList=resultList.filter(function(n){
          return hasArray.indexOf(n['pay_item_name'])>=0
        })
        if(resultList[resultList.length-1]['pay_item_name']=='2017年养老调资金额'){
          resultList.splice(resultList.length-1, 0, {
            pay_item_name:'其它养老金(历年增资等)',
            pay_item_amount:otherAmount
          })
        }else{
          resultList.push({
            pay_item_name:'其它养老金',
            pay_item_amount:otherAmount
          })
        }



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
                               {resultList.map(function(n, i) {
                                return (<tr>
                                            <td>{n.pay_item_name}</td>
                                            <td>{n.pay_item_amount}</td>
                                          </tr>)
                              })}
                               <tr>
                               <td colSpan="2">金额合计：￥{amount} (人民币{cnyAmount})</td>
                               </tr>
                            </tbody>
                            </table>
                          </Group>
            </div>)
      }
}