import Features from "./pages/Features/Features";
import Home from "./pages/home/Home";
import Shop from "./pages/shop/Shop";

const router = [
  { path: "/home", component: <Home /> },
  { path: "/feature", component: <Features /> },
  { path: "/shop", component: <Shop /> },
];

export default router;
