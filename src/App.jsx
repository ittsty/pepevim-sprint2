import { Outlet } from "react-router-dom";
import { CartProvider } from "@/contexts/CartContext";

function App() {
  return (
    <CartProvider>

      <div className="min-h-screen">
        <Outlet />
      </div>
    </CartProvider>
  );
}

export default App;
