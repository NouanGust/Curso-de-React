import './App.css';

import Img2 from "./assets/img2.jpg";
import ManageData from './components/ManageData';

function App() {
  return (
    <div className="App">
      <h1>Inico da Seção 3 :D</h1>
      <p>Avançando em React.</p>
      {/* 
        Imagem em public 
        Bom para quando são imagens que não vão mudar, o proprio react já faz o link para usar.
      */}
      <div>
        <img src="/img1.jpg" alt="background" />
      </div>

      {/* 
        Imagem em asset 
        Precisam ser importadas, mas podemos da um nome como se fosse uma variavel e caso o caminho da imagem mude, basta mudar na importação.
      
      */}
      <div>
        <img src={Img2} alt="baground 2" />
      </div>

      <ManageData />
    </div>
  );
}

export default App;
