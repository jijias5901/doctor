import React,{ Component } from 'react'
import { Layout, Menu, Breadcrumb, Icon, Dropdown } from 'antd';

import { getUserName } from 'util';
import './index.css';

const { SubMenu } = Menu;
const { Header, Content, Sider } = Layout;


class AdminHeader extends Component {
	render(){
		const menu = (
			<Menu>
				<Menu.Item key="0">
					<Icon type="logout" />退出
				</Menu.Item>
			</Menu>
		);
		return (
			<div className="AdminHeader">
			    <Header className="header">
					<div className="logo">KMALL</div>
					<Dropdown overlay={menu} trigger={['click']}>
						<a className="ant-dropdown-link" href="#">
							{getUserName()} <Icon type="down" />
						</a>
					</Dropdown>
			    </Header>
			</div>
		)
	}
}



export default AdminHeader;