import React from 'react'
import {useSelector , useDispatch } from 'react-redux'
import  {incnumber,decnumber} from './actions/index'
import './app.css'

 

function App() 
{
   const mystate  = useSelector( (state) => state.changethenumber);
   const dispatch = useDispatch();
  return <div className='app'>
       <ul>
       <li>
       <h1>Increment and Decrement Counter</h1></li>
       <li>
       <h1>Using React and Redux</h1></li>
       </ul>

       <div className='funbox'>
       <a onClick={() => dispatch(incnumber(5))}><span className='plus'>+</span></a>
        <input type = "text" value ={mystate}/>
       <a onClick={() => dispatch(decnumber())}><span className='minus'>-</span></a>
       </div>
    </div>
}

 export default App;

