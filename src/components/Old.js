import React, { Component } from 'react'
import PubSub from 'pubsub-js'
export default class Old extends Component {
    constructor(props) {
        super(props)
        this.state = {
            innerData : "I'm old.",
            count: 1
        }
    }
    pubsub() {
        console.log('asdf');
        
        PubSub.publish("sendOld", this.state.innerData)
    }
    render() {
        return (
            <div style={ {border: "1px solid #000", margin: "30px"}}>
                Old组件
                <button onClick={() => {this.pubsub()}}>发送到同级的New组件</button>
            </div>
        )
    }
}
