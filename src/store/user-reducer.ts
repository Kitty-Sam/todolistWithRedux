type StateType = {
    age: number
    childrenCount: number
    name: string
}
type ActionType = {
    type: string
    [key: string]: any
   newName: string
}



export  const userReduser = (state:StateType , action: ActionType):StateType => {
    switch (action.type) {
        case 'INCREMENT-AGE':
            let newState = {...state}
            newState.age = state.age + 1;
            return newState;
        case 'INCREMENT-CHILDREN-COUNT':
            return {...state, childrenCount: state.childrenCount + 1}
        case 'CHANGE-NAME':
            return {...state, name: action.newName}
        default:
            throw new Error("I don't understand this type")


    }
 }