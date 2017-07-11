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
  Modal
} from 'amazeui-touch';

import { Router, Route, Link, browserHistory } from 'react-router'


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
                <h3 className="margin">更多内容</h3>
                <List>
                  <List.Item
                    linkComponent={Link}
                    linkProps={{
                      to: `/`,
                      onClick: this.onDismiss,
                    }}
                    title="组件"
                  />
                  <List.Item
                    linkComponent={Link}
                    linkProps={{
                      to: '/about',
                      onClick: this.onDismiss,
                    }}
                    title="关于"
                  />
                  <List.Item
                    href="https://github.com/amazeui/amazeui-touch"
                    title="GitHub"
                    target="_blank"
                    onClick={this.onDismiss}
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
          fetch('/sto_search',{
            method:'GET',
            body:'cid='+cid+'&pid='+pid
          }).then(function(response) {
            return response.json();
          }).then(function(data) {
            if(data.error&&data.error==1){
              alert('1、请检查输入 \n 2、请确认您是在我局退休人员')
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
                  title: '个人查询',
                  leftNav: [{
                    icon: 'bars',
                    // title: 'Menu',
                    component: OffCanvasTrigger,
                    isClone: true, // IMPORTANT
                    offCanvas: this.renderOC(),
                  }],
                }
        return (<View><Container transition="sfl">
                           <NavBar  {...withOffCanvas} amStyle="primary"/>
                            <Group>
                              <Field
                                label="身份证号"
                                placeholder="您的身份证号"
                                type="text"
                                ref="cid"
                              />

                              <Field
                                label="个人编号"
                                placeholder="您的个人编号"
                                type="number"
                                ref="pid"
                              />
                              <Button amStyle="primary" onClick={this.handleButton}>查询</Button>
                            </Group>
                          </Container>
                          <Modal
                                ref="loading"
                                isOpen={this.state.modalOpenStatus}
                                title= "正在查询中..."
                                role= "loading"/>
                          </View>)
      }
}
