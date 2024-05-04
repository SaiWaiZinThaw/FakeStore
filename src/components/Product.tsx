import { BsPlus, BsEyeFill } from "react-icons/bs";
import { Link } from "react-router-dom";

interface ProductData {
  id: string;
  title: string;
  image: string;
  price: number;
  quantity: number;
  total: number;
  category: string;
}

interface ProductProps {
  product: ProductData;
  createCartProduct: (product: ProductData) => void;
  cartProducts: ProductData[];
}

const Product = ({ product, createCartProduct }: ProductProps) => {
  const buyBtnHandler = () => {
    addProduct(product);
  };

  const addProduct = (product: ProductData) => {
    createCartProduct(product);
  };

  return (
    <div className="mx-10">
      <div className="border border-[#e4e4e4] h-[300px] mb-4 relative overflow-hidden group transition">
        <div className="w-full h-full flex justify-center items-center">
          <div className="w-[200px] mx-auto flex justify-center items-center">
            <img
              className="max-h-[160px] group-hover:scale-110 transition duration-300"
              src={product.image}
              alt=""
            />
          </div>
          <div className="absolute top-6 -right-11 group-hover:right-5 p-2 flex flex-col items-center justify-center gap-y-2 opacity-0 group-hover:opacity-100 transition-all duration-300">
            <button
              onClick={() => {
                buyBtnHandler();
              }}
            >
              <div className="  flex justify-center items-center text-white w-12 h-12 bg-red-500">
                <BsPlus className="text-3xl" />
              </div>
            </button>
            <Link
              to={`/product/${product.id}`}
              className="w-12 h-12 bg-white flex justify-center items-center text-primary drop-shadow-xl"
            >
              <BsEyeFill />
            </Link>
          </div>
        </div>
      </div>

      <div>
        <div className="text-sm capitalize text-gray-500 mb-1">
          {product.category}
        </div>
        <Link to={`/product/${product.id}`}>
          <h2 className="font-semibold mb-1">{product.title}</h2>
        </Link>

        <div className="font-semibold">$ {product.price}</div>
      </div>
    </div>
  );
};

export default Product;
