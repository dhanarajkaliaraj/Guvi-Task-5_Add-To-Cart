import { useEffect } from "react";
import { useState } from "react";
import Slider from './Slider';
import Header from './Header';
import Modal from './Modal';
import Card from './Card';

function App() {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  const [total, setTotal] = useState(0);
  const [slide, setSlide] = useState(false);
  const [modal, setModal] = useState(false);

  let fetchProducts = async () => {
    const productsData = await fetch(
      "https://6461c1c2491f9402f4aa0565.mockapi.io/products"
    );
    const productResponse = await productsData.json();
    setProducts(productResponse);
  };

  let addToCart = (product) => {
    if (cart.some((item) => item.id == product.id)) {
      setModal(true);
    } else {
      setCart([...cart, product]);
      setTotal(total + parseInt(product.price));
    }
  };

  let removeCart = (item, index) => {
    cart.splice(index, 1)
    setCart([...cart])
    setTotal(total - parseInt(item.price))
  }


  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <>
      <Header handleSlider={() => setSlide((prevState) => (
        !prevState))} cartItemCount={cart.length} />
      <div className="h-screen bg-gray-100 ">
        <div className="flex flex-wrap justify-evenly items-center gap-6">
          {products.map((product, index) => {
            return (
              <Card key={index} product={product} index={index} handleAddToCart={addToCart} />
            );
          })}
        </div>

        <Slider slide={slide} handleSlider={() => setSlide((prevState) => (
          !prevState))}>
          <div>
            {cart.map((item, index) => {
              return (
                <div key={index} className="flex items-center justify-between">
                  <div>
                    <p className="font-medium">{item.name}</p>
                    <p className="text-gray-600">Rs.{item.price}</p>
                  </div>
                  <button onClick={() => {
                    removeCart(item, index)
                  }} className="text-red-500 hover:text-red-700">
                    Remove
                  </button>
                </div>
              );
            })}
            <div className="pt-4 mt-8 border-t">
              <div className="flex items-center justify-between">
                <span className="font-bold">Total:</span>
                <span className="font-bold">Rs.{total}</span>
              </div>
            </div>
          </div>
        </Slider>
      </div>
      <Modal modal={modal} handleModal={() => setModal(false)} />
    </>
  );
}

export default App;