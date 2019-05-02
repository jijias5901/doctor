import React,{ Component } from 'react';
import { Card, Col, Row } from 'antd';
import { connect } from 'react-redux';

import Layout from 'common/layout';

class Home extends Component{ 
	render(){
		return (
			<div className='Home'>
				<Layout>
					<Row gutter={16}>
						<Col span={8}>
							<Card title="用户数量" bordered={false}>{this.props.usernum}</Card>
						</Col>
						<Col span={8}>
							<Card title="商品数量" bordered={false}>{this.props.productnum}</Card>
						</Col>
						<Col span={8}>
							<Card title="订单数量" bordered={false}>{this.props.ordernum}</Card>
						</Col>
					</Row>
				</Layout>
			</div>
		)
	}
}

const mapStateToProps = (state)=>{
	return {
		usernum:
		productnum:
		ordernum:
	}
}
const mapDispatchToProps = (dispatch)=>{
	return {

	}
}
export default connect(mapStateToProps,mapDispatchToProps)(Home);