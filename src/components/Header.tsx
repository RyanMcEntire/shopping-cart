import { AwesomeButton } from 'react-awesome-button';
import 'react-awesome-button/dist/styles.css';
const Header = () => {
  return (
    <div className="flex justify-between p-4">
      <AwesomeButton type="primary">HOME</AwesomeButton>
      <div className="flex gap-4">
        <AwesomeButton type='primary'>SHOP</AwesomeButton>
        <AwesomeButton type='secondary'>CART</AwesomeButton>
      </div>
    </div>
  );
};

export default Header;
