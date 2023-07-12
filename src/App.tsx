import Header from './components/Header';
import TextShadow from './components/TextShadow';

const bubblegumPink = '#FF89D3';
const mediumGreen = '#6ADB6B';
const lightGreen = '#78EB9D';
const waterBlue = '#36B3E8';
const lilac = '#C38EFA';
const paleMuave = '#FDC5FA';
const butterscotch = '#FBBA57';
const aquaBlue = '#27D7E7';
const darkOrange = '#F76E35';
const offYellow = '#FBF845';
const redPink = '#EC1D51';
const strawberry = '#FF2745';
const cream = '#FEFBEA';

function App() {
  return (
    <>
      <div className="border-b-4 border-bubblegum-shadow bg-bubblegum-pink">
        <Header />
      </div>
      <div className="text-8xl text-center mt-14 font-orbitron text-cream">
        <TextShadow letter="B" shadowColor={bubblegumPink} />
        <TextShadow letter="A" shadowColor={lightGreen} />
        <TextShadow letter="S" shadowColor={aquaBlue} />
        <TextShadow letter="S" shadowColor={butterscotch} />
        <TextShadow letter="B" shadowColor={lilac} />
        <TextShadow letter="O" shadowColor={darkOrange} />
        <TextShadow letter="O" shadowColor={waterBlue} />
        <TextShadow letter="K" shadowColor={mediumGreen} />
      </div>
    </>
  );
}

export default App;
