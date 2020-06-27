`npm start`
`npm test`
`npm run build`
`npm run eject`

# React 笔记
## 1. 同级组件的传值  
-> pubsub-js库
eg: New.js emit Old.js



## 2. json-server 模拟数据
npm i json-server -g
启动： cd mock下，json-server xxx.json（文件名） --port 4000(端口号)



## 3. 解决代理
1. 正向代理 -- 开发环境： 为了获取到目标服务器的内容，客户端向代理服务器发送一个请求，代表/帮助我们去目标服务器里面获取数据并且返回给我们 【前端开发的时候要做】
2. 反向代理 -- 上线环境： 可以通过代理服务器接收网络上的请求连接，然后将请求转发给内部的网络服务器上，并把这个服务器上得到的请求的客户端。【后端人员负责配置服务器】
-> node_modules/react-scripts/config/webpackDevServer.config.js下的【L112】proxy 进行修改
proxy: {
    "/api": {
        target: "http://www.weather.com.cn/data/cityinfo",    
        // 只需要修改target这个地址就ok，直接复制其他
        changeOrigin: true,
        "pathRewriter": {
            "^/api":"/"
        }
    }
}
use: Home.js中的proxyHTTP函数请求 -> node_modules/react-scripts/config/webpackDevServer.config.js中proxy进行正向代理 ->实际地址：http://www.weather.com.cn/data/cityinfo/101320101.html
-> 在Vue中可以通过设置webpack.dev.config.js类似的配置文件，设置before



## 4. 路由
cnpm i -S react-router-dom
### 模式
- hash HashRouter -> hash 模式，  带#, 刷新的时候页面不会消失
- browser BrowserRouter -> 历史记录模式，  无#， 通过历史记录api来进行路由切换，刷新则丢失，但本地模式不会

### 方式
+ 方式一 路由导航
- <Router path="/xxx" Component={xxx}>  声明渲染的位置

+ 下面是两种链接路由的方法
- <Link to="/xxx" >  去哪里
- <NavLink to="/xxx"> 可以动态的给选中的导航添加active的类名，可修改样式

+ 方式二 编程式导航
props.history.push("/xxx")

### 还可有二级/多级路由 

### 高阶组件withRouter
+ withRouter 可让不是路由切换组件（无状态组件）也具有路由切换组件的三个属性（location match history） 
- 可用于： 监控路由变化 -> history.listen((link) => {
    link.pathname // 得到切换路径
})
- withRouter 高阶组件（参数是一个组件，返回值也是一个组件，称为高阶组件）
- App.js中：withRouter(App);   // 此时APP(props)的props带有那三个路由参数，本来props是undefined的

### 传参
- 路由规则中传参    :xxx
引用： <NavLink to="/xxx/2">    -->   <Router path="/xxx/:id" Component={xxx}>
接收：组件通过： this.props.math.params.id 接收
优点：刷新仍存在
缺点：只能传字符串，且不利于参数多的情况

- query方式
引用：<NavLink to={ { pathname:'/xxx/2', query: {name: 'Sharry'} } } />
接收：通过this.props.location.query.xxx获取
优点：不需要在<Router>去定义，可对象


### Hook
作用：让无状态组件可以使用状态，React中状态的管理必不可少，以前需要使用类组件或者redux等管理
类组件：
class App extends React.Component{
    render() {
        return <div></div>
    }
}
无状态组件：
function App() {
    return <Home />
}

useState是定义状态，与类组件不同，它返回的是数组，
第一个参数为当前状态值，第二个为对象表面用于更改状态的函数（类似于setState）
eg： NoState.js中