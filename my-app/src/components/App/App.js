import AtomCard from "../Organisms/AtomCard/AtomCard"
import AtomDisplay from "../Molecules/AtomDisplay/AtomDisplay"
import './App.css';

function App() {
  return (
    <div className='app'>
      <AtomCard
        title="Button Add to cart (Atc)"
        description="The Button comes with three variants: primary, secondary, and neutral."
        codesnippet="<ButtonAtc color='neutral' size='large'>"
        codesnippet1="<ButtonAtc color='primary' size='large'>"
        codesnippet2="<ButtonAtc color='secondary' size='large'>"
      >
        <AtomDisplay title="Neutral" component="ButtonAtc1"/>
        <AtomDisplay title="Neutral" component="ButtonAtc2"/>
        <AtomDisplay title="Neutral" component="ButtonAtc3"/>
      </AtomCard>
    </div>
  );
}

export default App;
