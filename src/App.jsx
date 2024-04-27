import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import "./App.css";
import Draw from "./Draw/Draw";
import Test from "./Test/Test";
import Color from "./Color/Color";
import BarChart from "./BarChart/BarChart"
function App() {
  let router = createBrowserRouter(
    createRoutesFromElements(
      <Route>
        <Route element={<Draw />} path=""></Route>
        <Route element={<BarChart/>} path="barchart"></Route>
        <Route element={<Color />} path="color"></Route>
        <Route element={<Test />} path="test"></Route>
      </Route>
    )
  );
  return <RouterProvider router={router} />;
}

export default App;
