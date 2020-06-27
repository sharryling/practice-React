import React, { Component } from 'react'

import New from './New'
import Old from './Old'
import axios from 'axios'
export default class Home extends Component {
    constructor(props) {
        super(props)
        this.state = {
            sonData: '',
            jsonData: [],
            weatherData: {}
        }
    }
    componentDidMount() {
        // this.axiosfunc()
        this.proxyHTTP()
    }
    axiosfunc() {
        // jonp-server 模拟请求
        axios.get("http://localhost:4000/arr").then(res => {
            console.log(res.data);
            this.setState({
                jsonData: res.data
            })
        })
    }
    proxyHTTP() {
        // 正向代理
        axios.get("/api/101320101.html").then(res => {
            this.setState({
                weatherData: res.data
            })
        })
    }
    sonComp() {
        const { weatherinfo} = this.state.weatherData
        console.log(weatherinfo);
        
        return (
            <div style={ {border: "1px solid pink", margin: "30px"}}>
                <p>这是一个无状态的组件</p>
                {this.state.jsonData.map(item => {
                    return <h3>name: {item.name} --- id: {item.id}</h3>
                })}
                {(weatherinfo && weatherinfo.city)}
            </div>
        )
    }
    getInData(data) {
        this.setState({
            sonData: data
        })
    }
    render() {
        return (
            <div>
                <Old/>
                <New  data="hahaha"  sendInData={(data) => this.getInData(data)}/>
                {this.sonComp()}
                Home组件:
                {this.state.sonData}
               {/* <img alt="asdf" src={require("../assets/dog.jpg") }></img>  */}
            </div>
        )
    }
}