import React, { useState } from 'react';

function App(){ 
   const [cep, setCep] = useState('');
   const [endereco, setEndereco] = useState(null);
  
const buscaCep = async () =>{
   const response = await fetch(`https://viacep.com.br/ws/${cep}/json`);
   const  data = await response.json();
   setEndereco(data);
};
return (
   <div>
      <h1>Consultar Cep</h1>
      <input type="text" value={cep} onChange={(e) => setCep(e.target.value)} placeholder="Digite o CEP"/>
       <button onClick={buscaCep}>Busca</button>  
       
       {endereco &&(
      <div>
         <h2>Endereco localizado:</h2>
         <p>Cep: <input type='text' value={endereco.cep}/></p>
         <p>Logradouro: <input type='text' value={endereco.logradouro}/></p>
         <p>Bairro: <input type='text' value={endereco.bairro}/></p>
         <p>Estado: <input type='text' value={endereco.uf}/></p>
         </div>
         

       )}

       </div>  
      

    );              
}

export default App
