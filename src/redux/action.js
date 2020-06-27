export const add = (num) => {
    return {type : "ADD", data: num}
}

export const del = (num) => {
    return {type : "DEL", data: num}
}