import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"; // Updated import
import HomePage from "./Home";
import TurnaroundPlanTable from "./components/TurnaroundPlanTable";
import ProductMixTable from "./components/ProductMixTable";
// import FullFeaturedCrudGrid from "./components/DataGridSample";
// import FullFeaturedCrudGrid from "./components/";
// import GridRowsProp from "./components/DataGridSample";

const App = () => {
  return (
    <Router>
      <Routes>
        {" "}
        {/* Use Routes instead of Switch */}
        <Route path="/" element={<HomePage />} />{" "}
        {/* Use element prop instead of component */}
        <Route path="/table1" element={<TurnaroundPlanTable />} />
        <Route path="/table2" element={<ProductMixTable />} />
        {/* <Route path="/table3" element={<FullFeaturedCrudGrid />} /> */}
      </Routes>
    </Router>
  );
};

export default App;
