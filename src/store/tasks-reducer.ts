
import {FilterValuesType, TasksStateType, TodolistType} from '../AppWithReduxAgain';
import {v1} from "uuid";
import {AddAcType, RemoveAcType, todolistId1, todolistId2} from "./todolist-reducer";
import {act} from "react-dom/test-utils";

export type removeAcType = {
    type: 'REMOVE_TASK'
    todolistId: string
    taskId: string
}

export type addAcType = {
    type: 'ADD_TASK'
    title: string
    todolistId: string

}
export type changeAcType = {
    type: 'CHANGE_TASK_STATUS'
    taskId: string
    todolistId: string
    isDone: boolean

}


export type changeTitleAcType = {
    type: 'CHANGE_TASK_TITLE'
    taskId: string
    todolistId: string
     title: string

}


const initialState: TasksStateType  = {}
  /*  [todolistId1]: [
        {id: v1(), title: "HTML&CSS", isDone: true},
        {id: v1(), title: "JS", isDone: true}
    ],
    [todolistId2]: [
        {id: v1(), title: "Milk", isDone: true},
        {id: v1(), title: "React Book", isDone: true}
    ]*/


type ActionsTypes = removeAcType | addAcType | changeAcType | changeTitleAcType | AddAcType | RemoveAcType

export const tasksReducer = (state: TasksStateType = initialState, action: ActionsTypes ): TasksStateType => {
    switch (action.type) {
        case 'REMOVE_TASK':{
                const stateCopy = {...state};
                const tasks = state[action.todolistId];
                const filteredTask = tasks.filter( t => t.id !== action.taskId);
            stateCopy[action.todolistId] = filteredTask;
            return stateCopy}

        case 'ADD_TASK': {
            const stateCopy = {...state};
            const tasksAdd = stateCopy[action.todolistId];
            const newTask = {id: v1(), title: action.title, isDone: false};
            const newtasks = [newTask,...tasksAdd];
            stateCopy[action.todolistId] = newtasks;
            return stateCopy }

        case 'CHANGE_TASK_STATUS': {
            const tasks = state[action.todolistId];
            const tasksFind = tasks.map(t => t.id === action.taskId ? {...t, isDone: action.isDone} : t)
            state[action.todolistId] = tasksFind
            return  ({...state})
        }

        case 'CHANGE_TASK_TITLE': {
            const tasks = state[action.todolistId];
            console.log("tok",tasks )
            const tasksFind = tasks.map(t => t.id === action.taskId ? {...t, title: action.title} : t)
            state[action.todolistId] = tasksFind
            return  ({...state})
        }


        case 'ADD-TODOLIST': {
           const stateCopy = {...state}
           stateCopy[action.todolistId] = [];
           return stateCopy
        }


        case 'REMOVE-TODOLIST': {
            const  stateCopy = {...state};
            delete stateCopy[action.id];
            return stateCopy;
        }



        default: //throw new Error("Sorry, I go away")
            return state
    }
}



export const removeTaskAC = (taskId: string, todolistId: string):  removeAcType => {
    return { type: 'REMOVE_TASK',  taskId, todolistId,}
}

export const addTaskAC = (title: string, todolistId: string ): addAcType   => {
    return { type: 'ADD_TASK', title: title, todolistId }
}

export const changeTaskStatusAC = (taskId: string, isDone: boolean, todolistId: string): changeAcType  => {
    return { type: 'CHANGE_TASK_STATUS', taskId, todolistId, isDone}
}

export const changeTaskTitleAC = (taskId: string, title: string, todolistId: string): changeTitleAcType  => {
    return { type: 'CHANGE_TASK_TITLE', taskId, todolistId, title}
}
