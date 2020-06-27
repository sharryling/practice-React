import React from 'react';
// import logo from './logo.svg';
import './App.css';
import Home from './components/Home.js'
import Home2 from './components/Home2.js'
import NoState from './components/NoState'
import { Route, Link, NavLink, Switch, Redirect, withRouter } from 'react-router-dom'
function App(props) {
  return (
    <div className="App">
      <Home/>
      <Link to="/home">点我去home</Link>
      <NavLink to="/home2">点我去home2</NavLink>

      <Switch>  {/**Switch可防止下面16、17被重复渲染两次 */}
        <Route path="/h" component={Home} exact></Route>  {/**exact可防止/h路径与其他路径重复，即只有'/h'才被匹配到 */}
        <Route path="/home2" component={Home2}></Route>
        <Route path="/home2" component={Home2}></Route>
        <Redirect from="/" to="/home" component={Home}></Redirect>
      </Switch>
      <br/>
      <NoState/>
    </div>
  );
}

export default withRouter(App);   // withRouter 高阶组件  ，此时APP(props)的props带有那三个路由参数，本来props是undefined的
