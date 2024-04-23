
const first=0
const changeCartItem=( state=first,action )=>{

    switch(action.type){
        case 'increment':return state+1
        case 'decrement':return state-1
        default:return state;


    }

}

export default changeCartItem;