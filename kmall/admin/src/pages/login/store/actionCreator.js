/*
* @Author: TomChen
* @Date:   2019-04-11 20:15:26
* @Last Modified by:   TomChen
* @Last Modified time: 2019-04-12 20:09:18
*/
import * as types from './actionTypes.js'
import axios from 'axios';
import { message } from 'antd';


const getLoginRequestAction = ()=>{
	return {
		type:types.LOGIN_REQUEST
	}
}

const getLoginDonetAction = ()=>{
	return {
		type:types.LOGIN_DONE
	}
}

export const getLoginAction = (values)=>{
	return (dispatch)=>{
		dispatch(getLoginRequestAction());
		axios({
			method:'post',
			url:'http://127.0.0.1:3000/admin/login',
			data:values
		})
		.then(result=>{
			if(result.data.code == 0){//登录成功
				//跳转后台首页
				window.location.href = '/';
			}else if(result.data.code == 1){
				message.error(result.data.message);
			}
		})
		.catch(err=>{
			message.error('网络请求失败,请稍后再试');
		})
		.finally(()=>{
			dispatch(getLoginDonetAction());
		})
	}
}


