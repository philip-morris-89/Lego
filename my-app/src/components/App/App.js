import { ButtonATC } from '../UI/Atoms/ButtonATC/ButtonATC';
import Button from '@mui/material/Button';
import './App.css';

function App() {
  return (
    <div className='app'>
      <h1>Hello, World!</h1>
      <br/>
      <br/>
      <ButtonATC />
      <br/>
      <br/>
      <Button variant="contained" size="large">Hello World</Button>
    </div>
  );
}

export default App;
