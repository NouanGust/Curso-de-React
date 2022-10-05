// components
import FirstComponent from './components/FirstComponent';
import TemplateExpressions from './components/TemplateExpressions';
import MyComponent from './components/MyComponent';
import Events from './components/Events';
import Challenge from './components/Challenge';


// styles
import './App.css';

function App() {

  // Essa área é a área de funções do JS, eventos, dados... etc.

  return (
    <div className="App">
      <h1>Fundamentos do React</h1>

      {/* Comentários em JSX. JSX é como usamos HTML com JS, algumas coisas são diferentes como o "className" */}
      <FirstComponent />
      <TemplateExpressions />
      <MyComponent />
      <Events />
      < Challenge />
    </div>
  );
}

export default App;

