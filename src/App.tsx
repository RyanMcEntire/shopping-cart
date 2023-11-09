import Header from './components/Header';
import TextShadow from './components/TextShadow';
import { color } from './consts/color';
import './index.css';

function App() {
  return (
    <>
      <Header />

      <div className="text-5xl md:text-6xl lg:text-7xl 2xl:text-8xl text-center mt-14 font-orbitron text-cream">
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
