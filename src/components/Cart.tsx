import { useCart } from '../context/CartContext';
import { useAlbumData } from '../context/AlbumDataContext';
import Header from './Header';

const Cart = () => {
  const { cart, assignCartQuantity, getCartTotal, removeFromCart } = useCart();
  const albums = useAlbumData();

  const handleQuantityChange = (albumId: number, value: string) => {
    const quantity = parseInt(value, 10);
    if (!isNaN(quantity)) {
      assignCartQuantity(albumId, quantity);
    }
  };

  return (
    <>
      <Header />
      <div className="h-10"></div>
      <div className="flex flex-col p-4 gap-4 bg-water-blue text-cream font-asap font text-xl w-11/12  sm:w-2/3 2xl:w-1/2 m-auto rounded-lg">
        {cart.map((item) =>
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
                        className="w-10 pl-1 text-slate-500 rounded-md"
                        type="number"
                        step="1"
                        value={item.quantity}
                        onChange={(e) =>
                          handleQuantityChange(item.albumId, e.target.value)
                        }
                      />
                    </div>
                    <div className="text">
                      subtotal: ₿{''} {item.quantity * 99}
                    </div>
                  </div>
                </div>
              );
            }
          })
        )}
        <div className="flex place-self-center">
          Cart Total: ₿ {getCartTotal() * 99}
        </div>
      </div>
    </>
  );
};

export default Cart;
