import React, { Component } from 'react'
import "../css/New.css"
export default class New extends Component {
    constructor(props) {
        super(props)
        this.state = {
            innerData : "I'm son."
        }
    }
    render() {
        return (
            <div className="NewStyle">
                New组件 --- {this.props.data} --- {this.state.innerData}
                
            </div>
        )
    }
}
