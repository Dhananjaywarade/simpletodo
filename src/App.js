import { useState } from 'react';
import './App.css';

function App() {
  const [data, setdata] = useState("");
const [todo, settodo] = useState([]);

  const changedata=(event)=>{
    setdata(event.target.value);
  }

  const handleSubmit=(event)=>{
    event.preventDefault();
    settodo([...todo,data]);
    setdata('');
  }

  const handleDelete=(index)=>{
    const newtodo=[...todo];
    newtodo.splice(index,1);
    settodo(newtodo);
  }
  
  return (
    <div className="App">
      <h1>To Do List</h1>
      
     <input type="text"
            value={data}
            placeholder='Add text here'
            onChange={changedata}

     />
     <button className='btn' onClick={handleSubmit}>Add</button>
     
     <ul>
     {
        todo.map((todo,index)=>{
        return <h1><li className='li'  key={todo}>{todo} <button className='delete' onClick={()=>{handleDelete(index)}}>Delete</button></li></h1> 
        })
      }
     </ul>
    </div>
  );
}

export default App;
