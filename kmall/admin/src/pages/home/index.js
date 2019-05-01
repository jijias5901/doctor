import React,{ Component } from 'react';
import { Card, Col, Row } from 'antd';

import Layout from 'common/layout';

class Home extends Component{
	render(){
		return (
			<div className='Home'>
				<Layout>
					<Row gutter={16}>
						<Col span={8}>
							<Card title="用户数量" bordered={false}>1</Card>
						</Col>
						<Col span={8}>
							<Card title="商品数量" bordered={false}>2</Card>
						</Col>
						<Col span={8}>
							<Card title="订单数量" bordered={false}>3</Card>
						</Col>
					</Row>
				</Layout>
			</div>
		)
	}
}


export default Home;