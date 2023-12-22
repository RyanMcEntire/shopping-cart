import { useCart } from "../context/CartContext";
import { AwesomeButton } from "react-awesome-button";
import "react-awesome-button/dist/styles.css";
import "../index.css";
import { Link } from "react-router-dom";
const Header = () => {
  const { getCartTotal } = useCart();
  return (
    <div className="border-b-4 border-bubblegum-shadow bg-bubblegum-pink">
      <div className="flex justify-between sm:p-4 ">
        <div className="flex gap-0  sm:gap-4">
          <div className="justify-between hidden text-6xl text-center sm:block font-orbitron text-cream">
            BB
          </div>
          <Link className="scale-75 sm:scale-100" to={"/"}>
            <AwesomeButton type="primary">HOME</AwesomeButton>
          </Link>
        </div>
        <div className="flex gap-0 sm:gap-4 ">
          <Link className="scale-75 sm:scale-100" to={"/shop"}>
            <AwesomeButton type="primary">SHOP</AwesomeButton>
          </Link>
          <Link className="scale-75 sm:scale-100" to={"/cart"}>
            <AwesomeButton type="secondary">
              CART{" "}
              {getCartTotal() > 0 ? (
                <div className="relative px-2 font-bold  bg-strawberry rounded-xl font-asap text-cream left-2">
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
