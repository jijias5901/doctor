/*
* @Author: TomChen
* @Date:   2019-04-09 19:29:30
* @Last Modified by:   TomChen
* @Last Modified time: 2019-04-10 20:43:50
*/

import React,{ Component,Fragment } from 'react'
import { Button } from 'antd';

import Item from './Item.js'
import './App.css'
// import 'antd/dist/antd.css'; 

class App extends Component{
	constructor(props){
		/*
		super(props);
		this.state = {
			list:["吃饭"],
			val:''
		}
		this.handleChange = this.handleChange.bind(this)
		this.handleAdd = this.handleAdd.bind(this)
		*/
	}
	handleAdd(){
		this.setState(preState=>({
			list:[...preState.list,preState.val],
			val:''			
		}));
	}
	handleChange(ev){
		const val = ev.target.value
		this.setState(()=>({
			val
		}));
	}
	handleDel(index){
		const list = [...this.state.list]
		list.splice(index,1)
		this.setState(()=>({
			list
		}));
	}
	render(){
		return( 
			<div className="App">
				<Row>
					<Col span={12}>
						<Input 
							onChange={this.handleChange} 
							value={this.state.val}
						/>
					</Col>
					<Col span={12}>
						<Button type="primary" onClick={this.handleAdd}>新增</Button>
					</Col>
				</Row>
				<List
					style={{marginTop:10}}
				  	bordered
				  	dataSource={this.state.list}
				  	renderItem={(item,index) => (<List.Item onClick={this.handleDel.bind(this,index)}>{item}</List.Item>)}
				/>				
			</div>
		)
	}
}

export default App