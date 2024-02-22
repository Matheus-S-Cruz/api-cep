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
              <p>{(endereco.logradouro)}</p>
              <p>{endereco.complemento}</p>
              <p>{endereco.bairro}</p>
              <p>{endereco.localidade}</p>
              <p>{endereco.uf}</p>
              <p>{endereco.ibge}</p>
              <p>{endereco.gia}</p>
              <p>{endereco.ddd}</p>
              <p>{endereco.siafi}</p>
          </>): null}
        </div>
      </div>
    </>
  )
}

export default App
