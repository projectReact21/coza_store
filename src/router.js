import Features from "./pages/Features/Features";
import Home from "./pages/home/Home";

const router = [
  { path: "/*", component: <Home /> },
  { path: "/feature", component: <Features /> },
];

export default router;
