import { AwesomeButton, AwesomeButtonSocial } from 'react-awesome-button';
import Header from './Header';

const Socials = () => {
  return (
    <>
      <Header />
      <div className="flex flex-col max-w-md gap-4 m-auto mt-20 text-cream">
        <div className='text-2xl text-center font-semi-bold font-asap'>Thanks for checking this out</div>
        <AwesomeButtonSocial
        className='m-4'
          type="github"
          href="https://github.com/RyanMcEntire/shopping-cart"
        >
          GitHub
        </AwesomeButtonSocial>
      </div>
    </>
  );
};

export default Socials;
