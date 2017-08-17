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
  Modal,
  Card
} from 'amazeui-touch';

import {
  HashRouter as Router,
  Route,
  Link
} from 'react-router-dom'


const re_cid=/^[1-9]\d{5}[1-9]\d{3}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}([0-9]|X)$/
const re_pid=/^\d\d\d\d+$/

export default class  Home extends React.Component{
      constructor(props) {
          super(props);

          this.onDismiss=this.onDismiss.bind(this)
          this.renderOC=this.renderOC.bind(this)


          this.state = {
            modalOpenStatus:false
          };
          this.handleButton=this.handleButton.bind(this)
        }

      renderOC() {
          return (
            <OffCanvas>
              <div>
                <h3 className="margin">功能列表</h3>
                <List>
                  <List.Item
                    linkComponent={Link}
                    linkProps={{
                      to: `/`,
                      onClick: this.onDismiss,
                    }}
                    title="首页"
                  />
                  <List.Item
                    linkComponent={Link}
                    linkProps={{
                      to: 'retiree',
                      onClick: this.onDismiss,
                    }}
                    title="养老待遇查询"
                  />
                  <List.Item
                    linkComponent={Link}
                    linkProps={{
                      to: 'worker',
                      onClick: this.onDismiss,
                    }}
                    title="历年缴费查询"
                  />
                </List>
              </div>
            </OffCanvas>
          )
        }
        onDismiss(e) {
          // 从 OffCanvas 内部元素关闭 OffCanvas
          // 紧耦合，需要重构 OffCanvas
          // this.refs.oct.close();
        }
        handleButton(){
          let cid=this.refs.cid.getValue().toUpperCase().replace(/\s/g,'')
          let pid=this.refs.pid.getValue().replace(/\s/g,'')
          if(!re_cid.test(cid)){
            alert('身份证号输入有误，请检查')
            return
          }
          if(!re_pid.test(pid)){
            alert('个人编号输入有误，请检查')
            return
          }

          this.setState({
            modalOpenStatus:true
          })
          var that = this
          fetch('/sto/worker?cid='+cid+'&pid='+pid,{
            method:'GET'
          }).then(function(response) {
            return response.json();
          }).then(function(data) {
            if(data.error&&data.error==1){
              alert('1、请检查输入 \n 2、请确认您是在我局参保人员')
            }else if(data.error&&data.error==2){
              alert('没有查询到可办事项')
            }else if(data.error&&data.error==500){
              alert('网络错误')
            }else{
               data['user_cid']=cid
               data['user_pid']=pid
               that.props.onSub(data)
            }
            that.setState({
              modalOpenStatus:false
            })
          }).catch(function(e) {
            alert('网络错误')
             that.setState({
              modalOpenStatus:false
            })
          });
          // this.refs.loading.open()
          
          // this.props.onSub({
          //   user_name:'xxx'
          // })
        }



      render(){
                var withOffCanvas = {
                  title: '历年缴费查询',
                  leftNav: [{
                    icon: 'bars',
                    // title: 'Menu',
                    component: OffCanvasTrigger,
                    isClone: true, // IMPORTANT
                    offCanvas: this.renderOC(),
                  }],
                }
        return (<div>
                         <NavBar  {...withOffCanvas} amStyle="primary"/>
                            <Card title="历年缴费自助查询">
                              <Field
                                label="身份证号"
                                placeholder="您的身份证号"
                                type="text"
                                ref="cid"
                              />

                              <Field
                                label="查询口令"
                                placeholder="您的查询口令"
                                type="number"
                                ref="pid"
                              />
                              <Button amStyle="primary" onClick={this.handleButton}>查询</Button>
                            </Card>
                            <Card title="关于查询口令">
                            1、可使用个人编号,企业参保人员请与<strong>所在企业人事</strong>联系索取
                            <br/>
                            2、灵活就业人员请使用<strong>2016年缴费税单</strong>上的<strong>纳税人编号</strong>
                           </Card>
                          <Modal
                                ref="loading"
                                isOpen={this.state.modalOpenStatus}
                                title= "正在查询中..."
                                role= "loading"/>
                          </div>)
      }
}
