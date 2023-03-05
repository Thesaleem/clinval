import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./components/pages/Home";
import Root from "./components/pages/Roots";
import ErrorPage from "./components/pages/ErrorPage";
import Calculator from "./components/Medical Calculator/Calculator";
import AnionGap from "./components/Medical Calculator/Calculators/AnionGap";
import Chadsvasc from "./components/Medical Calculator/Calculators/Chadsvasc";
import Cpp from "./components/Medical Calculator/Calculators/Cpp";
import Curb65 from "./components/Medical Calculator/Calculators/Curb65";
import DukeEndo from "./components/Medical Calculator/Calculators/DukeEndo";
import HollidaySegar from "./components/Medical Calculator/Calculators/HollidaySegar";
import Map from "./components/Medical Calculator/Calculators/Map";
import Parkland from "./components/Medical Calculator/Calculators/Parkland";
import Potassium from "./components/Medical Calculator/Calculators/Potassium";
import SmokingYears from "./components/Medical Calculator/Calculators/SmokingYears";
import Wallace from "./components/Medical Calculator/Calculators/Wallace";
import WeightEstimate from "./components/Medical Calculator/Calculators/WeightEstimate";
import Wells from "./components/Medical Calculator/Calculators/Wells";



const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <Home /> },
      {
        path: "calculator",
        children: [
          {index: true, element: <Calculator />},
          { path: "anion-gap", element: <AnionGap /> },
          { path: "cha2ds2-vasc-score", element: <Chadsvasc /> },
          { path: "cerebral-perfusion-pressure", element: <Cpp /> },
          { path: "curb-65", element: <Curb65 /> },
          { path: "duke-criteria", element: <DukeEndo /> },
          { path: "holliday-segar-rule", element: <HollidaySegar /> },
          { path: "mean-arterial-pressure", element: <Map /> },
          { path: "parkland-formula", element: <Parkland /> },
          { path: "potassium-calculator", element: <Potassium /> },
          { path: "smoking-pack-years", element: <SmokingYears /> },
          { path: "rule-of-nine", element: <Wallace /> },
          { path: "weight-estimation", element: <WeightEstimate /> },
          { path: "wells-criteria", element: <Wells /> },
        ],
      },
      {
        path: "dose-converter",
        children: [{ index: true, element: "" }],
      },
    ],
  },
]);

function App() {
  return (
    <div className="font-inter min-h-screen">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
