import {combineReducers, createStore} from "redux";
import {todolistsReducer} from "./todolist-reducer";
import {tasksReducer} from "./tasks-reducer";
import {v1} from "uuid";


const rootReducer = combineReducers({
    todolists: todolistsReducer,
    tasks: tasksReducer
})

/*type AppRootState = {
    todolists: Array<TodolistType>
    tasks: TasksStateType
}*/

export type AppRootState = ReturnType<typeof rootReducer>

export const store = createStore(rootReducer, {
    todolists: [
        {id: "todolistId1", title: "What to learn", filter: "all"},
        {id: "todolistId2", title: "What to buy", filter: "all"}],

    tasks: {
        "todolistId1": [
            {id: v1(), title: "HTML&CSS", isDone: true},
            {id: v1(), title: "JS", isDone: true}
        ],
        "todolistId2": [
            {id: v1(), title: "Milk", isDone: true},
            {id: v1(), title: "React Book", isDone: true}
        ]
    }
})
// @ts-ignore
window.store = store