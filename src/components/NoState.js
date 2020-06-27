import React, {useState} from 'react'
// useState是定义状态，与类组件不同，它返回的是数组，
// 参数是初始值
// 返回的第一个参数为当前状态值，第二个为对象表面用于更改状态的函数（类似于setState）
function App(props) {
    const [val1, setVal1] = useState(0) 
    const [val2, setVal2] = useState('haha') 
    return (
        <div>
            使用数据：{val1} --- {val2}
            <button onClick={() => {setVal1(val1+1)}}>修改数据1</button>
            <button onClick={() => {setVal2(val2+'!')}}>修改数据2</button>
        </div>
    )
}

export default App