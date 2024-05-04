import { useState } from "react";
import logo from "./assets/logo.png";
import Searchbox from "./components/Searchbox";
import Cart from "./components/Cart";
import { Home } from "./pages";
import { Product } from "./types/types";

const MainPage = () => {
  const [showCart, setShowCart] = useState(false);
  const [search, setSearch] = useState("");
  const [cartProducts, setCartProducts] = useState<Product[]>([]);

  const createCartProduct = (product: Product) => {
    const newProduct: Product = {
      id: product.id,
      title: product.title,
      image: product.image,
      price: product.price,
      quantity: 1,
      total: product.price,
    };
    if (!cartProducts.some((item) => item.id === product.id)) {
      setCartProducts([...cartProducts, newProduct]);
    }
  };

  const cartProductsUpdater = () => {
    const updatedCartProducts = cartProducts.filter(
      (product) => product.quantity > 0
    );
    setCartProducts(updatedCartProducts);
  };

  return (
    <div className="flex flex-col items-center w-full ">
      <div className="flex p-[20px] px-[40px] items-start justify-between wfull h-[460px] bg-[url('./assets/cover.png')] bg-cover w-full ">
        <div className=" w-3/12 flex top-3 left-14 justify-center items-center gap-5">
          <img src={logo} alt="logo" className="" />
          <span className="text-3xl font-bold uppercase">Thu Pyn Ma Lr Pr</span>
        </div>
        <Searchbox search={search} setSearch={setSearch} />
        <div className="w-3/12 flex justify-end items-center">
          <button
            className=" text-white relative"
            onClick={() => {
              setShowCart(true);
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-8 h-8 "
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
              />
            </svg>
            <span className="p-2 text-sm bg-red-600 text-white rounded-full w-[10px] h-[10px] flex items-center justify-center absolute top-0 right-0 -translate-y-[30%] translate-x-[50%] shadow-sm shaodw-red-700">
              {cartProducts.length}
            </span>
          </button>
        </div>
      </div>
      <Home
        search={search}
        createCartProduct={createCartProduct}
        cartProducts={cartProducts}
      />
      <Cart
        showCart={showCart}
        setShowCart={setShowCart}
        cartProductsUpdater={cartProductsUpdater}
        setCartProducts={setCartProducts}
        cartProducts={cartProducts}
      />
    </div>
  );
};

export default MainPage;
