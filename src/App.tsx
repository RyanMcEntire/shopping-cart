import Header from './components/Header';
import TextShadow from './components/TextShadow';
import { color } from './consts/color';
import './index.css';
import { useFetch } from './hooks/useFetch';

const url = `/discogs/lists/1410808`;
const fetchOptions: RequestInit = {
  mode: 'cors',
  headers: {
    'Authorization': `Discogs key=${
  import.meta.env.VITE_API_KEY
}, secret=${import.meta.env.VITE_API_SECRET}`,
    'User-Agent': 'bassbook/0.1',
  },
};


function App() {
  const { data, error } = useFetch(url, fetchOptions);

  if (error) return <p>There is an error: {error.message}</p>;
  if (!data) return <p>Loading...</p>;

  console.log(data);

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
