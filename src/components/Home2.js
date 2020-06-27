import React, { Component } from 'react'
import {store } from '../redux/store'
import * as action from '../redux/action'

export default class Home2 extends Component {
    constructor(props) {
        super(props) 
        this.state = {
            num: store.getState()
        }
    }
    componentDidMount() {
        store.subscribe(() => {
            this.setState({
                num: store.getState()
            })
        })
    }
    render() {
        return (
            <div>
                Home2  -- {this.state.num}
                <button onClick={()=>{store.dispatch(action.add(4))}}>add</button>
            </div>
        )
    }
}