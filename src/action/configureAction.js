export const addTask = (task) => {
    return {
        type:"ADD_TASK",
        payload:task,
    }
}

export const removeTask = (id) => {
    return {
        type:"REMOVE_TASK",
        payload:id
    }
}
export const editTask = (data) => {
    return {
        type:"EDIT_DATA",
        payload:data
    }
}