import UiCard from "../Ui/UiCard/UiCard";
import UiCardItem from "../Ui/UiCardItem/UiCardItem";
import './App.css';

function App() {
  return (
    <div className='app'>

      <UiCard 
        title="Button Add to cart (Atc)"
        description="The Button comes with three variants: primary, secondary, and neutral."
        codesnippet="<ButtonAtc color='primary' size='large'>"
        codesnippet1="<ButtonAtc color='secondary' size='large'>"
      >
        <UiCardItem title="Primary" component="ButtonAtc2"></UiCardItem>
        <UiCardItem title="Secondary" component="ButtonAtc3"></UiCardItem>
      </UiCard>

    </div>
  );
}

export default App;
