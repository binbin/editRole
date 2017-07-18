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
        const listItems = resultData.rows.map((r) =>
          <tr><td>{r.user_name}</td><td>{r.company}</td><td>{r.range_year}</td><td>{r.count_months}</td><td>{r.count_radix}</td></tr>
        );

        return (<div>
                          <NavBar {...dataNav} amStyle="primary"/>
                          <Group>
                            <h2>参保人员基本信息</h2>
                            <table className="am-table am-table-bordered am-table-radius am-table-striped">
                            <thead>
                            <tr>
                              <th>姓名</th>
                              <th>单位名称</th>
                              <th>年度(自然年度)</th>
                              <th>缴费月数</th>
                              <th>缴费基数和</th>
                            </tr>
                            </thead>
                            <tbody>
                             {listItems}
                            </tbody>
                            </table>
                          </Group>
            </div>)
      }
}