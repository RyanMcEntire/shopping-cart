import Header from './components/Header';
import TextShadow from './components/TextShadow';
import { color } from './consts/color';
import './index.css';

function App() {

  return (
    <>
      <Header />

      <div
        title="BASSBOOK "
        className="text-6xl md:text-7xl lg:text-7xl xl:text-8xl text-center mt-11 font-orbitron text-cream"
      >
        <TextShadow letter="B" shadowColor={color.bubblegumPink} />
        <TextShadow letter="A" shadowColor={color.lightGreen} />
        <TextShadow letter="S" shadowColor={color.aquaBlue} />
        <TextShadow letter="S" shadowColor={color.butterscotch} />
        <TextShadow letter="B" shadowColor={color.lilac} />
        <TextShadow letter="O" shadowColor={color.darkOrange} />
        <TextShadow letter="O" shadowColor={color.waterBlue} />
        <TextShadow letter="K" shadowColor={color.mediumGreen} />
      </div>
    </>
  );
}

export default App;
