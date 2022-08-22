// jshint esversion:6

/* Import specific components to facilitate React rendering. */
import { Routes, Route } from "react-router-dom";

import Navigation from "./routes/navigation/navigation.component";
import Home from "./routes/home/home.component";
import Shop from "./routes/shop/shop.component";
import SignUpPage from "./routes/sign-up/sign-up.component";
import SignInPage from "./routes/sign-in/sign-in.component";

/**
 *
 * App - This component covers the entire viewport
 *
 * Return: List of different category items
 */
function App() {
  return (
    /*Routes container helps for intelligent rendering based on best match to path*/
    <Routes>
      <Route path="/" element={<Navigation />}>
        {/*Index attribute renders component when no matching url is parsed to parent*/}
        <Route index element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/sign-up" element={<SignUpPage />} />
        <Route path="/sign-in" element={<SignInPage />} />
      </Route>
    </Routes>
  );
}

export default App;
