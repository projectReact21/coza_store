import Features from "./pages/Features/Features";
import Home from "./pages/home/Home";
import Shop from "./pages/shop/Shop";
<<<<<<< HEAD
=======
import Blog from "./pages/blog/Blog";
import BlogDetail from "./pages/blog/BlogDetail";
>>>>>>> a740401045807372dad33ccd56f5f73c69547f7f
s
const router = [
  { path: "/home", component: <Home /> },
  { path: "/about", component: <Features /> },
  { path: "/shop", component: <Shop /> },
  { path: "/feature", component: <Features /> },
<<<<<<< HEAD
  { path: "/shop", component: <Shop /> },
=======
  { path: "/blog", component: <Blog /> },
  { path: "/blog/:id", component: <BlogDetail /> },
>>>>>>> a740401045807372dad33ccd56f5f73c69547f7f
];

export default router;
