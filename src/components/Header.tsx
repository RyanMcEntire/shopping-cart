import { AwesomeButton } from 'react-awesome-button';
import 'react-awesome-button/dist/styles.css';
import '../index.css';
import { Link } from 'react-router-dom';
const Header = () => {
  return (
    <div className="border-b-4 border-bubblegum-shadow bg-bubblegum-pink">
      <div className="flex justify-between p-2 sm:p-4 max-w-6xl m-auto">
        <div className="scale-75 sm:scale-100 flex">
          <div className='font-orbitron text-cream text-6xl'>BB</div>
          <Link className="" to={'/'}>
            <AwesomeButton type="primary">HOME</AwesomeButton>
          </Link>
        </div>
        <div className="flex gap-0 sm:gap-4 ">
          <Link className="scale-75 sm:scale-100" to={'/shop'}>
            <AwesomeButton type="primary">SHOP</AwesomeButton>
          </Link>
          <Link className="scale-75 sm:scale-100" to={'/'}>
            <AwesomeButton type="secondary">CART</AwesomeButton>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
