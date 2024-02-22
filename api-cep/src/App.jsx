import { useState } from 'react'
import './App.css'

function App() {
  const [cep, setCep] = useState('');
  const [endereco, setEndereco] = useState(null);

  const handleBuscaCep = async (event) => {
    try {
      const response = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
      if (!response.ok) {
        throw new error("Cep não encontrado");
      }
      setEndereco(await response.json());
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <>
      <div className='container'>
        <h1>Busca de Endereço</h1>
        <input
        type="number" 
        placeholder='Digite seu CEP'
        value={cep}
        onChange={(e) => setCep(e.target.value)}
        />
      <button className='button2' onClick={handleBuscaCep}> 
        Buscar
      </button>
      

        <div className='endereco'>
          {endereco ?(<>
              <p>Logradouro: {(endereco.logradouro)}</p>
              <p>Complemento: {endereco.complemento}</p>
              <p>Bairro: {endereco.bairro}</p>
              <p>Localidade: {endereco.localidade}</p>
              <p>UF: {endereco.uf}</p>
              <p>IBGE: {endereco.ibge}</p>
              <p>Gia: {endereco.gia}</p>
              <p>DDD: {endereco.ddd}</p>
              <p>Siafi: {endereco.siafi}</p>
          </>): null}
        </div>
      </div>
    </>
  )
}

export default App
