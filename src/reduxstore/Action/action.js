
export const increment=()=>{
    return{
        type:"increment"
    }
}


export const decrement=()=>{
    return{
        type:"decrement"
    }
}

export const add=(id)=>{
    return{
        type:"add",
        id:id

    }
}

export const remove=(id)=>{
    return{
        type:"remove",
        id:id

    }
}
