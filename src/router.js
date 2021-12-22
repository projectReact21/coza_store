import Features from "./pages/Features/Features";
import Home from "./pages/home/Home";
import Shop from "./pages/shop/Shop";
import Blog from "./pages/blog/Blog";
import BlogDetail from "./pages/blog/BlogDetail";
import About from "./pages/about/about";
import Contact from "./pages/contact/Contact";
import Signup from "./pages/login/Signup";
import ShopDetail from "./pages/shop/ShopDetail";
import Order from "./pages/order/Order";
import OrderDetail from "./pages/order/OrderDetail";

const router = [
  { path: "/*", component: <Home /> },
  { path: "/home", component: <Home /> },
  { path: "/about", component: <About /> },
  { path: "/shop", component: <Shop /> },
  { path: "/feature", component: <Features /> },
  { path: "/blog", component: <Blog /> },
  { path: "/blog/:id", component: <BlogDetail /> },
  { path: "/contact", component: <Contact /> },
  { path: "/order", component: <Order /> },
  { path: "/order/:id", component: <OrderDetail /> },
  { path: "/shopdetail/:id", component: <ShopDetail /> },
];

export default router;
