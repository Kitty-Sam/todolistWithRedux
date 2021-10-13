
import {FilterValuesType, TodolistType} from '../AppWithReduxAgain';
import {v1} from "uuid";

export type RemoveAcType = {
    type: 'REMOVE-TODOLIST'
    id: string
}

export type AddAcType = {
    type: 'ADD-TODOLIST'
    title: string
    todolistId :string

}

export type ChangeTitleAcType = {
    type: 'CHANGE-TODOLIST-TITLE'
    id: string
    title: string
}

export type ChangeFilterAcType = {
    type: 'CHANGE-TODOLIST-FILTER'
    id: string
    filter: FilterValuesType

}

type ActionsTypes = RemoveAcType | AddAcType | ChangeTitleAcType | ChangeFilterAcType;

export let todolistId1 = v1();
export let todolistId2 = v1();

const initialState: TodolistType[] = []
  /*  {id: todolistId1, title: "What to learn", filter: "all"},
    {id: todolistId2, title: "What to buy", filter: "all"}*/




export const todolistsReducer = (state: TodolistType[] = initialState, action: ActionsTypes ): TodolistType[] => {
    switch (action.type) {
        case 'REMOVE-TODOLIST': {
            return  state.filter(tl => tl.id != action.id)
        }
        case 'ADD-TODOLIST': {
            return [{id: action.todolistId, title: action.title, filter: "all"},...state ]
        }
        case 'CHANGE-TODOLIST-TITLE': {
            const newTodolist = state.map(t => t.id === action.id ? {...t, title: action.title} : t);
            return [...newTodolist]
        }
        case 'CHANGE-TODOLIST-FILTER': {
            const todolist = state.find(td => td.id === action.id)
            if (todolist) {
                todolist.filter = action.filter
            }
            return [...state]
        }


        default: //throw new Error("Sorry, I go away")
           return   state
    }
}



export const RemoveTodolistAC = (todolistId: string): RemoveAcType => {
    return { type: 'REMOVE-TODOLIST', id: todolistId }
}

export const AddTodolistAC = (title: string): AddAcType  => {
    return { type: 'ADD-TODOLIST', title, todolistId: v1() }
}

export const ChangeTodoTitleAC = (title: string, todolistId: string): ChangeTitleAcType  => {
    return { type: 'CHANGE-TODOLIST-TITLE',title, id: todolistId }
}

export const ChangeTodoFilterAC = (filter: FilterValuesType, todolistId: string): ChangeFilterAcType  => {
    return { type: 'CHANGE-TODOLIST-FILTER',filter, id: todolistId }
}
