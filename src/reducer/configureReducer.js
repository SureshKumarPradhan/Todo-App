const initialTask = []

const configureReducer = (state = initialTask,action) => {
    switch(action.type){
       case ("ADD_TASK") :{
           return [{...action.payload},...state]
       }
       case ("REMOVE_TASK"):{
           return state.filter(val=>{
               return val.id !== action.payload
           })
       }
       case ("EDIT_DATA") : {
           return state.map(val=>{
               if(val.id === action.payload.id){
                   return {...action.payload}
               }else{
                   return {...val}
               }
           })
       }
        default:{
            return [...state]
        }
    }
}

export default configureReducer