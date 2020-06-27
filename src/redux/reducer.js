
const list = [{
    id: 'sadf',
    name: 'Lucy',
    num: 4
}]
export function data(state= list[0].num, action) {   // 不能管理整个只返回对象，而是字符串/数字
    switch( action.type) {

        case "ADD" :
            return state + action.data;
        case "DEL":
            return state - action.data
        default: 
            return state;
    }
}