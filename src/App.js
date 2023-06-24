import './App.css';
import { ThemeProvider } from './Components/ContextAPI/ThemeContext';
import SiblingComponentA from './Components/ContextAPI/SiblingComponentA';
import SiblingComponentB from './Components/ContextAPI/SiblingComponentB';
import SiblingComponentC from './Components/ContextAPI/SiblingComponentC';
import ThemeButton from './Components/ContextAPI/ThemeButton';

function App() {
  return (
    <div className="App">
      <ThemeProvider>
        <SiblingComponentA />
        <SiblingComponentB />
        <SiblingComponentC />
        <ThemeButton />
      </ThemeProvider>
      
    </div>
  );
}

export default App;
