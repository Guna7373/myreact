import { useReducer } from 'react';
function Reducer(state,action)
{
    switch(action.type){
        case "increment":
            return{count:state.count+2};
        case "decrement":
            return{count:state.count-1};
        case "reset":
            return{count:0};
        default:
            throw Error("invalid action");
        }      
}
 function Red() {
    const [state,dispatch]=useReducer(Reducer,{count:0});
  return (
    <div>
        <h1 className='f2'>{state.count}</h1>
        <button className='f1' onClick={()=>dispatch({type:"increment"})}> +</button>
        <button  className='f1'  onClick={()=>dispatch({type:"decrement"})}> -</button>
        <button  className='f1'  onClick={()=>dispatch({type:"reset"})}>reset</button>
    </div>
  )
}
export default Red;
