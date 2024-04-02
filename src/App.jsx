import { useState } from 'react'
import './App.css'

function App(){ 
   const [text, setText] = useState('');
   const [tarefas,setTarefas] = useState([]);

const criarTarefas = () =>{
   if(text !== '' ){
      setTarefas([...tarefas,{ text: text }]);
      setText('');
   }  
};
return (
   <div className='App'>
      <h1>Lista de tarefas</h1>
      <input type='text'
      value={text}
      onChange={(e)=>setText(e.target.value)}
      placeholder="digite texto"/>

      <button onClick={criarTarefas}>Add tarefa</button>
      <ol>
         {tarefas.map((tarefas,index) =>(
            <li key={index}>{tarefas.text}</li>
            ))}
      </ol>

   </div>
)   
           
}
export default App