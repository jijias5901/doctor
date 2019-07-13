import React,{ Component } from 'react';
import { Layout, Menu, Icon } from 'antd';
import { NavLink } from 'react-router-dom';

const { SubMenu } = Menu;
const { Sider } = Layout;

import './index.css';

class AdminSider extends Component {
	render(){
		return (
			<div className="AdminSider">
				<Sider width={200} style={{ background: '#fff' }}>
			        <Menu
			          mode="inline"
			          style={{ minHeight: 880, borderRight: 0 }}
			        >
			            <Menu.Item key="1">
			            	<NavLink exact to="/">首页</NavLink>
			            </Menu.Item>
			            <Menu.Item key="2">
			            	<NavLink to="/user">用户管理</NavLink>
			            </Menu.Item>		         
			        </Menu>
			    </Sider>
			</div>
		)
	}
}


export default AdminSider;