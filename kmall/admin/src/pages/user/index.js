import React,{ Component } from 'react';
import { Table, Divider, Tag } from 'antd';

import Layout from 'common/layout';

import './index.css'

const dataSource = [{
	key: '1',
	username: 'admin',
	isAdmin: true,
	emall: 'test@kuazhu.com',
	phone:"13621233122",
	createdAt:'2019-10-11 14:14:14'
}];

const columns = [{
	title: '用户名',
	dataIndex: 'username',
	key: 'nusernameame',
}, {
	title: '是否管理员',
	dataIndex: 'isAdmin',
	key: 'isAdmin',
	render:isAdmin=>isAdmin ? '是' : '否'
}, {
	title: 'emall',
	dataIndex: 'emall',
	key: 'emall',
}, {
	title: '手机',
	dataIndex: 'phone',
	key: 'phone',
}, {
	title: '注册时间',
	dataIndex: 'createdAt',
	key: 'createdAt',
}];
class Home extends Component{
	render(){
		return (
			<div className='Home'>
				<Layout>
					<Table dataSource={dataSource} columns={columns} />
				</Layout>
			</div>
		)
	}
}


export default Home;