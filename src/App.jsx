import { RouterProvider } from "react-router-dom";
import { route } from "./routes";

export const App = () => {
  //<div className="bg-red-500 md:bg-green-500 lg:bg-orange-500 xl:bg-blue-500">Hello Ecommerce</div>
   return (
    <>
      <RouterProvider router={route} />
    </>

  );
};


