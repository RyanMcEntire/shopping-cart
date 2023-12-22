import { useCart } from "../context/CartContext";
import { useAlbumData } from "../context/AlbumDataContext";
import Header from "./Header";
import { AwesomeButton } from "react-awesome-button";
import { Link } from "react-router-dom";

const Cart = () => {
  const { cart, assignCartQuantity, getCartTotal, removeFromCart, clearCart } = useCart();
  const albums = useAlbumData();


  const handleQuantityChange = (albumId: number, value: string) => {
    const quantity = parseInt(value, 10);
    if (!isNaN(quantity)) {
      assignCartQuantity(albumId, quantity);
    }
  };

  const handleClearCart = () => {
    clearCart();
  }

  return (
    <>
      <Header />
      <div className="h-10"></div>
      <div className="flex flex-col w-11/12 gap-4 p-4 m-auto text-xl rounded-lg bg-water-blue text-cream font-asap font sm:w-2/3 2xl:w-1/2">
        {cart.map(
          (item) =>
            albums?.map((album) => {
              if (album.id === item.albumId) {
                return (
                  <div className="flex gap-4 ">
                    <div className="flex flex-col justify-center align-middle">
                      <img
                        className="rounded-md max-h-20"
                        src={album.thumbnail}
                        alt=""
                      />
                      <button
                        onClick={() => removeFromCart(item.albumId)}
                        className="text-sm "
                      >
                        remove
                      </button>
                    </div>
                    <div className="flex flex-col">
                      <div>{album.title}</div>
                      <div>by {album.artistName}</div>
                      <div className="flex gap-2">
                        <div>quantity: </div>
                        <input
                          className="w-10 pl-1 rounded-md text-slate-500"
                          type="number"
                          step="1"
                          value={item.quantity}
                          onChange={(e) =>
                            handleQuantityChange(item.albumId, e.target.value)
                          }
                        />
                      </div>
                      <div className="text">
                        subtotal: ₿{""} {item.quantity * 99}
                      </div>
                    </div>
                  </div>
                );
              }
            }),
        )}
        <div className="flex place-self-center">
          Cart Total: ₿ {getCartTotal() * 99}
        </div>
      <Link className="flex justify-center" to="/Socials">
        <AwesomeButton onReleased={handleClearCart} type="danger">SPEND IT ALL</AwesomeButton>
      </Link>
      </div>
      
    </>
  );
};

export default Cart;
