import React from "react";
import { useNavigate } from "react-router-dom";

const HomePage = () => {
  const history = useNavigate(); // useNavigate instead of useHistory

  const handleTable1Click = () => {
    history("/table1"); // Navigate to the URL for Table 1
  };

  const handleTable2Click = () => {
    history("/table2"); // Navigate to the URL for Table 2
  };
  const handleTable3Click = () => {
    history("/table3"); // Navigate to the URL for Table 2
  };

  return (
    <div>
      <h1>Welcome to the Home Page</h1>
      <button onClick={handleTable1Click}>Table 1</button>
      <button onClick={handleTable2Click}>Table 2</button>
      <button onClick={handleTable3Click}>Table 3</button>
    </div>
  );
};

export default HomePage;
