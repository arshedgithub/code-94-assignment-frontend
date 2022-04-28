import { Navigate, Route, Routes } from "react-router-dom";

// components
import UserAppBar from "./components/UserAppBar";

// pages
import Products from "./pages/Products";
import NewProduct from "./pages/NewProduct";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <div className="App">
      <UserAppBar />
      <div className="main">
        <Routes>
          <Route path="/products" element={<Products />} />
          <Route path="/new-product" element={<NewProduct />} />
          {/* <Route path="/edit-product" element={<EditProduct />} /> */}
          <Route path="/not-found" element={<NotFound />} />
          <Route path="/" element={<Navigate replace to="/products" />} />
          <Route path="*" element={<Navigate replace to="/not-found" />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
