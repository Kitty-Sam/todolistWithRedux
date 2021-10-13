import React, {ChangeEvent, useCallback} from "react";
import {FilterValuesType} from './AppWithReduxAgain';
import {AddItemForm} from './AddItemForm/AddItemForm';
import {EditableSpan} from './EditableSpan/EditableSpan';
import {Button, Checkbox, IconButton} from '@material-ui/core';
import {Delete} from '@material-ui/icons';
import {useDispatch, useSelector} from "react-redux";
import {AppRootReducer} from "./store/storeagain";
import {addTaskAC, changeTaskStatusAC, changeTaskTitleAC, removeTaskAC} from "./store/tasks-reducer";
import {Task} from "./Task/Task";

export type TaskType = {
    id: string
    title: string
    isDone: boolean
}

type PropsType = {
    id: string
    title: string
    tasks: Array<TaskType>
 /*  /!* changeTaskStatus: (id: string, isDone: boolean, todolistId: string) =*!/> void*/
    removeTodolist: (id: string) => void
    changeTodolistTitle: (id: string, newTitle: string) => void
    changeFilter: (value: FilterValuesType, todolistId: string) => void
    filter: FilterValuesType
}


export const Todolist = React.memo((props: PropsType) => {
    const dispatch = useDispatch()
  /*  const tasks = useSelector<AppRootReducer, TaskType[]>(state => state.tasks[props.id])*/

    const removeTodolist = useCallback( () => {
        props.removeTodolist(props.id);
    }, [props.removeTodolist, props.id])
    const changeTodolistTitle = useCallback((title: string) => {
        props.changeTodolistTitle(props.id, title);
    }, [props.changeTodolistTitle,props.id])

    let allTodolistTasks = props.tasks;
    let tasksForTodolist = allTodolistTasks;

    if (props.filter === "active") {
        tasksForTodolist = allTodolistTasks.filter(t => t.isDone === false);
    }
    if (props.filter === "completed") {
        tasksForTodolist = allTodolistTasks.filter(t => t.isDone === true);
    }




    const onAllClickHandler = useCallback (() => props.changeFilter("all", props.id),[props.changeFilter, props.id]);
    const onActiveClickHandler = useCallback(() => props.changeFilter("active", props.id),[props.changeFilter, props.id]);
    const onCompletedClickHandler = useCallback(() => props.changeFilter("completed", props.id),[props.changeFilter, props.id]);

    return <div>
        <h3> <EditableSpan value={props.title} onChange={changeTodolistTitle} />
            <IconButton onClick={removeTodolist}>
                <Delete />
            </IconButton>
        </h3>
        <AddItemForm

            addItem={useCallback((title) => {dispatch(addTaskAC(title, props.id))},[dispatch])}
        />
        <div>
            {
           //но это не точно
                tasksForTodolist.map(t => <Task key={t.id}  taskId={t.id} todolistId={props.id}/>)
            }
        </div>
        <div style={{paddingTop: "20  ь px"}}>
            <Button variant={props.filter === 'all' ? 'outlined' : 'text'}
                    onClick={onAllClickHandler}
                    color={'default'}
            >All
            </Button>
            <Button variant={props.filter === 'active' ? 'outlined' : 'text'}
                    onClick={onActiveClickHandler}
                    color={'primary'}>Active
            </Button>
            <Button variant={props.filter === 'completed' ? 'outlined' : 'text'}
                    onClick={onCompletedClickHandler}
                    color={'secondary'}>Completed
            </Button>
        </div>
    </div>
})

