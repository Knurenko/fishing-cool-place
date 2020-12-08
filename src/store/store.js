import {rootReduser} from '../redux/rootReduser'
import {createStore} from 'redux'

export const store = createStore(rootReduser)