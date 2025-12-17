import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { AddBox } from "./Pages/AddBox";
import { InputList } from "./Pages/InputList";
import { Layout } from "./components/Layout";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      children: [
        {
          path: "/",
          element: (
            <Layout>
              <AddBox />
            </Layout>
          ),
        },

        {
          path: "add-box",
          element: (
            <Layout>
              <AddBox />
            </Layout>
          ),
        },
        {
          path: "input-list",
          element: (
            <Layout>
              <InputList />
            </Layout>
          ),
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
