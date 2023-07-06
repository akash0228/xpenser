import { ADD_EXPENSE, DELETE_EXPENSE,GETALL_EXPENSE,SEARCH_EXPENSE} from "../action-types/expenses";


export const expenseReducer=(state=[],action)=>{
    switch(action.type){
        case ADD_EXPENSE:
            return [action.payload,...state];
        case GETALL_EXPENSE:
            return action.payload;
        case SEARCH_EXPENSE:
            return action.payload;   
        case DELETE_EXPENSE:
            return state.filter(expense=>expense._id!==action.payload._id);

        default:
            return state;
    }
}