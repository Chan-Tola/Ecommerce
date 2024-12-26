import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./pages/HomePage";
import RootLayouts from "./Layout/RootLayouts";

const App = () => {
  const Routes = createBrowserRouter([
    {
      path: "/",
      element: <RootLayouts />,
      children: [
        {
          index: true,
          element: <HomePage />,
        },
        {
          path: "login",
          element: <h2>login path</h2>,
        },
        {
          path: "men",
          element: <h2>men path</h2>,
        },
        {
          path: "women",
          element: <h2>women path</h2>,
        },
      ],
    },
  ]);
  return <RouterProvider router={Routes} />;
};

export default App;
