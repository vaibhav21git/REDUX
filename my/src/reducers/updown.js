const initialstate = 0;
const changethenumber =  (state = initialstate , action) =>
{
    switch(action.type)
    {
        case "INCREMENT" : return state + action.payload;
        case "DECREMENT" : return state - 1;
        default: return state;
    }
}

export default changethenumber;