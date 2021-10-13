import {useDispatch, useSelector} from "react-redux";
import {changeTaskStatusAC, changeTaskTitleAC, removeTaskAC} from "../store/tasks-reducer";
import React, {ChangeEvent, useCallback} from "react";
import {Checkbox, IconButton} from "@material-ui/core";
import {EditableSpan} from "../EditableSpan/EditableSpan";
import {Delete} from "@material-ui/icons";

import {AppRootReducer} from "../store/storeagain";
import {TasksStateType} from "../AppWithReduxAgain";
import {TaskType} from "../Todolist";

export type TaskPropsType = {
  /*  t: TaskType*/
    taskId: string
    todolistId: string

}
export const Task = React.memo ((props: TaskPropsType) => {


    const dispatch = useDispatch()

    const task = useSelector<AppRootReducer, TaskType>(state =>
        state.tasks[props.todolistId].filter(el => el.id === props.taskId)[0])


    console.log("tasks", task)

    const onClickHandler = useCallback(() => dispatch(removeTaskAC)(props.todolistId, props.taskId),[dispatch])
    const onChangeHandler =  (e: ChangeEvent<HTMLInputElement>) => {
        let newIsDoneValue = e.currentTarget.checked;
        dispatch(changeTaskStatusAC(props.taskId, newIsDoneValue,props.todolistId));
       }
    const onTitleChangeHandler = (newValue: string) => {
        dispatch(changeTaskTitleAC(props.taskId, newValue, props.todolistId));
    }


    return <div key={task.id} className={task.isDone ? "is-done" : ""}>
        <Checkbox
            checked={task.isDone}
            color="primary"
            onChange={onChangeHandler}
        />

        <EditableSpan value={task.title} onChange={onTitleChangeHandler}/>
        <IconButton onClick={onClickHandler}>
            <Delete/>
        </IconButton>
    </div>
})