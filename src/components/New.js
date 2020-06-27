import React, { Component } from 'react'
import PubSub from 'pubsub-js'
import "../css/New.css"
export default class New extends Component {
    constructor(props) {
        super(props)
        PubSub.subscribe("sendOld", (msg, data) => {
            console.log('Old传过来的数据：', data);
        })
        this.state = {
            innerData : "I'm son.",
            count: 1
        }
    }
    add(N) {
        this.setState({
            count: this.state.count + N
        })
    }
    render() {
        return (
            <div className="NewStyle">
                New组件 --- {this.props.data} --- {this.state.count}
                <button onClick={() => {this.add(3)}}>点我1</button>
                <button onClick={this.add.bind(this, 2)}>点我2</button>
                <button onClick={() => {this.props.sendInData(this.state.count)}}>发送给父组件</button>
            </div>
        )
    }
}
