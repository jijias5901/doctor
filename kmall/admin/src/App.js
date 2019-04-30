/*
* @Author: TomChen
* @Date:   2019-04-09 19:29:30
* @Last Modified by:   TomChen
* @Last Modified time: 2019-04-14 17:17:05
*/

import React,{ Component,Fragment } from 'react';
import { BrowserRouter as Router, Route, Redirect  } from 'react-router-dom';

import Login from 'pages/login';
import Home from 'pages/Home';

import { getUserName } from 'util';

import './App.css';


class App extends Component{
	render(){
		const ProtectRoute = ({component:Component,...rest})=>(
			<Route 
				{...rest}
				render={(props)=>{					
					return getUserName()
					? <Component {...props} />
					: <Redirect to="/login" />
				}}
			/>
		)
		return(
			<Router>
				<div className="App">
					<ProtectRoute exact path='/' component={ Home } />
					{
						//当匹配到路由'/login'后,渲染Login组件
					}
					<Route path='/login' component={ Login } />
				</div>
			</Router>
		)
	}
}


export default App;