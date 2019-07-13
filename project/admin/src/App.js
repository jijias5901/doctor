/*
* @Author: TomChen
* @Date:   2019-04-09 19:29:30
* @Last Modified by:   TomChen
* @Last Modified time: 2019-04-14 15:54:33
*/

import React,{ Component,Fragment } from 'react';
import { BrowserRouter as Router, Route, Redirect, Switch } from "react-router-dom";


import Login from 'pages/login';
import Home from 'pages/home';
import User from 'pages/user';

import { getUserName } from 'util';

import './App.css';

class App extends Component{
	render(){
		const ProtectRoute = ({component:Component,...rest})=>(
			<Route
				{...rest}
				render = {(props)=>{
					return getUserName() 
					? <Component {...props} /> 
					: <Redirect to="/login" />
				}} 
			/>
		)
		const LoginRoute = ({component:Component,...rest})=>{
			return getUserName() 
			? <Redirect to="/" />
			: <Component {...rest} />
		}
		return(
			<Router>
				<div className="App">
					<Switch>
						<ProtectRoute exact path="/" component={Home} />
						<LoginRoute path="/login" component={Login} />
						<ProtectRoute exact path="/user" component={User} />
					</Switch>
				</div>

			</Router>
		)
	}
}


export default App;