import useFetchProducts from "../hooks/useProductsApi";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { MdStarRate } from "react-icons/md";

const ProductDetails = () => {
  const { id } = useParams();
  const { data: products } = useFetchProducts();
  console.log(products);
  return (
    <div className=" p-5">
      {products &&
        products.map((product) => {
          if (product.id === Number(id))
            return (
              <div className="flex flex-col gap-3 items-start" key={product.id}>
                <div className="flex flex-col gap-2 items-start md:flex-row md:items-start md:gap-20">
                  <div className=" flex items-center justify-center mb-5">
                    <img
                      className=" w-40 h-52 border border-gray-500 p-5 rounded-lg"
                      src={product.image}
                      alt={product.title}
                    />
                  </div>

                  <div className="flex flex-col gap-2">
                    <p className=" uppercase text-xl font-bold">
                      {product.category}
                    </p>
                    <p className="text-lg">{product.title}</p>
                    <div className="flex items-center gap-1">
                      <MdStarRate className=" text-yellow-500  " />
                      <p className="font-semibold">{product.rating.rate}</p>
                    </div>
                    <p className="font-semibold">$ : {product.price}</p>
                  </div>
                </div>
                <p>{product.description}</p>

                <button>
                  <Link
                    to={"/"}
                    className=" bg-yellow-500 py-1 px-2 rounded-lg hover:text-white"
                  >
                    Back
                  </Link>
                </button>
              </div>
            );
        })}
    </div>
  );
};

export default ProductDetails;
