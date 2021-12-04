import Blog from "./pages/blog/Blog";
import BlogDetail from "./pages/blog/BlogDetail";
import Features from "./pages/Features/Features";
import Home from "./pages/home/Home";
// import Login from "./pages/login/Login";

const router = [
  { path: "/*", component: <Home /> },
  { path: "/feature", component: <Features /> },
  // { path: "/login", component: <Login /> },
  { path: "/blog", component: <Blog /> },
  { path: "/blog/:id", component: <BlogDetail /> },
];

export default router;
