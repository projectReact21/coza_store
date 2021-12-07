import Features from "./pages/Features/Features";
import Home from "./pages/home/Home";
import Shop from "./pages/shop/Shop";
import Blog from "./pages/blog/Blog";
import BlogDetail from "./pages/blog/BlogDetail";

const router = [
  { path: "/home/*", component: <Home /> },
  { path: "/about", component: <Features /> },
  { path: "/shop", component: <Shop /> },
  { path: "/feature", component: <Features /> },
  { path: "/blog", component: <Blog /> },
  { path: "/blog/:id", component: <BlogDetail /> },
];

export default router;
