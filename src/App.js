import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";
import Cart from "./components/Cart/Cart";
import { useState, useEffect} from "react";
import CartProvider from "./store/CartProvider";

function App() {
  const [cart, setCart] = useState(false);
  


  const showCartHandler = () => {
   
    setCart(true);
    console.log('working')
  }
  const hideCartHandler = () => {
    setCart(false)
  }
  return (
    <CartProvider>
      {cart && <Cart onClose={hideCartHandler} />}
      <Header onShowCartHandler={ showCartHandler} />
      <main>
        <Meals/>
      </main>
		</CartProvider>
	);
}

export default App;
