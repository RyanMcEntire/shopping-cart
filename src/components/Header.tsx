import { AwesomeButton } from 'react-awesome-button';
import 'react-awesome-button/dist/styles.css';
import { Link } from 'react-router-dom';
const Header = () => {
  return (
    <div className="border-b-4 border-bubblegum-shadow bg-bubblegum-pink">
      <div className="flex justify-between p-4">
        <Link to={'/'}>
          <AwesomeButton type="primary">HOME</AwesomeButton>
        </Link>

        <div className="flex gap-4">
          <Link to={'about'}>
            <AwesomeButton type="primary">ABOUT</AwesomeButton>
          </Link>
          <AwesomeButton type="secondary">CART</AwesomeButton>
        </div>
      </div>
    </div>
  );
};

export default Header;
