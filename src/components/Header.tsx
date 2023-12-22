import { useCart } from '../context/CartContext';
import { AwesomeButton } from 'react-awesome-button';
import 'react-awesome-button/dist/styles.css';
import '../index.css';
import { Link } from 'react-router-dom';
const Header = () => {
  const { getCartTotal } = useCart();
  return (
    <div className="border-b-4 border-bubblegum-shadow bg-bubblegum-pink">
      <div className="flex justify-between sm:p-4 ">
        <div className=" flex gap-0 sm:gap-4">
          <div className="hidden sm:block font-orbitron text-center text-cream text-6xl justify-between">
            BB
          </div>
          <Link className="scale-75 sm:scale-100" to={'/'}>
            <AwesomeButton type="primary">HOME</AwesomeButton>
          </Link>
        </div>
        <div className="flex gap-0 sm:gap-4 ">
          <Link className="scale-75 sm:scale-100" to={'/shop'}>
            <AwesomeButton type="primary">SHOP</AwesomeButton>
          </Link>
          <Link className="scale-75 sm:scale-100" to={'/cart'}>
            <AwesomeButton type="secondary">
              CART {' '}
              {getCartTotal() > 0 ? (
                <div className=" bg-strawberry px-2 rounded-xl font-asap font-bold text-cream relative left-2">
                  {getCartTotal()}
                </div>
              ) : null}
            </AwesomeButton>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
