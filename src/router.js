import Features from "./pages/Features/Features";
import Home from "./pages/home/Home";

const router = [
  { path: "/home*", component: <Home /> },
  { path: "/feature", component: <Features /> },
];

export default router;
