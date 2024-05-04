import useFetchProducts from "../hooks/useProductsApi";
import { Product } from "../components";
interface Product {
  id: string;
  title: string;
  image: string;
  price: number;
  quantity: number; // Add quantity property
  total: number; // Add total property
  category: string;
}

const Home = (props: any) => {
  const { data, isLoading } = useFetchProducts();

  if (isLoading) {
    return <div>Loading</div>;
    return <div>Loading</div>;
  }

  return (
    <div>
      <section className="py-16">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-[30px] max-w-sm mx-auto md:max-w-none md:mx-0">
            {(data as Product[])
              .filter((item: Product) => {
                return props.search.toLowerCase() === ""
                  ? item
                  : item.title
                      .toLowerCase()
                      .includes(props.search.toLowerCase());
              })
              .map((item) => {
                return (
                  <Product
                    product={item}
                    key={item.id}
                    createCartProduct={props.createCartProduct}
                    cartProducts={props.cartProducts}
                  />
                );
              })}
          </div>
        </div>
      </section>
    </div>
  );
};
  );
};

export default Home;

export default Home;
