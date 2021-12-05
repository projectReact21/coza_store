import Features from "./pages/Features/Features";
import Home from "./pages/home/Home";
import Shop from "./pages/shop/Shop";
import About from "./pages/about/about";
import Blog from "./pages/blog/Blog";
import BlogDetail from "./pages/blog/BlogDetail";
const router = [
  { path: "/*", component: <Home /> },
  { path: "/home", component: <Home /> },
  { path: "/shop", component: <Shop /> },
  { path: "/about", component: <About /> },
  { path: "/feature", component: <Features /> },
  { path: "/shop", component: <Shop /> },
  { path: "/blog", component: <Blog /> },
  { path: "/blog/:id", component: <BlogDetail /> },
];

export default router;
