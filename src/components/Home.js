import React, { Component } from 'react'

import New from './New'
export default class Home extends Component {
    sonComp() {
        return (
            <div style={ {border: "1px solid pink", margin: "30px"}}>
                <p>这是一个无状态的组件</p>
            </div>
        )
    }
    render() {
        return (
            <div>
                <New  data="hahaha"/>
                {this.sonComp()}
                Home组件{Math.random()}
               {/* <img alt="asdf" src={require("../assets/dog.jpg") }></img>  */}
            </div>
        )
    }
}