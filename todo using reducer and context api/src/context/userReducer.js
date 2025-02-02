import { ADD_TODO,REMOVE_TODO } from "./action";

const userReducer =  (state,action)=>{
    switch(action.type){
        case ADD_TODO:
            // console.log(action.payload)
            return [...state,action.payload];
        case REMOVE_TODO:
            return state.filter(todo => todo.id !== action.payload);
        default:
            return state;
    }
};

export default userReducer;