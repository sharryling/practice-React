import { createStore } from 'redux'
import { data } from './reducer'
export const store = createStore(data)