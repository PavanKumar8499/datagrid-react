// import React from "react";
// import { DataGrid } from "@mui/x-data-grid";
// import { Button } from "@mui/material";

// const ProductMixTable = () => {
//   const months = [
//     "Apr-24",
//     "May-24",
//     "Jun-24",
//     "Jul-24",
//     "Aug-24",
//     "Sep-24",
//     "Oct-24",
//     "Nov-24",
//     "Dec-24",
//     "Jan-25",
//     "Feb-25",
//     "Mar-25",
//   ];

//   const columns = [
//     { field: "gradeName", headerName: "Grade Name", width: 200 },
//     ...months.map((month) => ({
//       field: month,
//       headerName: month,
//       width: 120,
//       editable: true,
//     })),
//     {
//       field: "averageTPH",
//       headerName: "Average TPH",
//       width: 150,
//       editable: true,
//     },
//     { field: "remark", headerName: "Remark", width: 200, editable: true },
//   ];

//   const rows = [
//     {
//       id: 1,
//       gradeName: "HDPE E52009",
//       "Apr-24": "",
//       "May-24": "",
//       "Jun-24": "",
//       "Jul-24": "",
//       "Aug-24": "",
//       "Sep-24": "",
//       "Oct-24": "",
//       "Nov-24": "",
//       "Dec-24": "",
//       "Jan-25": "",
//       "Feb-25": "",
//       "Mar-25": "",
//       averageTPH: "",
//       remark: "",
//     },
//     {
//       id: 2,
//       gradeName: "HDPE S46005",
//       "Apr-24": "",
//       "May-24": "",
//       "Jun-24": "",
//       "Jul-24": "",
//       "Aug-24": "",
//       "Sep-24": "",
//       "Oct-24": "",
//       "Nov-24": "",
//       "Dec-24": "",
//       "Jan-25": "",
//       "Feb-25": "",
//       "Mar-25": "",
//       averageTPH: "",
//       remark: "",
//     },
//   ];

//   return (
//     <div style={{ height: 600, width: "100%" }}>
//       <h3>Product Mix Entry (%)</h3>
//       <DataGrid
//         rows={rows}
//         columns={columns}
//         pageSize={10}
//         checkboxSelection
//         disableSelectionOnClick
//       />
//       <Button variant="contained" style={{ marginTop: 20 }}>
//         + Add Item
//       </Button>
//     </div>
//   );
// };

// export default ProductMixTable;
import React, { useState } from "react";
import { DataGrid } from "@mui/x-data-grid";
import { Button } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete"; // Import the delete icon

const ProductMixTable = () => {
  const months = [
    "Apr-24",
    "May-24",
    "Jun-24",
    "Jul-24",
    "Aug-24",
    "Sep-24",
    "Oct-24",
    "Nov-24",
    "Dec-24",
    "Jan-25",
    "Feb-25",
    "Mar-25",
  ];

  // Define initial rows
  const initialRows = [
    {
      id: 1,
      gradeName: "HDPE E52009",
      "Apr-24": "",
      "May-24": "",
      "Jun-24": "",
      "Jul-24": "",
      "Aug-24": "",
      "Sep-24": "",
      "Oct-24": "",
      "Nov-24": "",
      "Dec-24": "",
      "Jan-25": "",
      "Feb-25": "",
      "Mar-25": "",
      averageTPH: "",
      remark: "",
    },
    {
      id: 2,
      gradeName: "HDPE S46005",
      "Apr-24": "",
      "May-24": "",
      "Jun-24": "",
      "Jul-24": "",
      "Aug-24": "",
      "Sep-24": "",
      "Oct-24": "",
      "Nov-24": "",
      "Dec-24": "",
      "Jan-25": "",
      "Feb-25": "",
      "Mar-25": "",
      averageTPH: "",
      remark: "",
    },
  ];

  // State to manage rows
  const [rows, setRows] = useState(initialRows);

  // Function to add a new row
  const handleAddItem = () => {
    const newRow = {
      id: rows.length + 1, // Generate a new ID
      gradeName: "",
      "Apr-24": "",
      "May-24": "",
      "Jun-24": "",
      "Jul-24": "",
      "Aug-24": "",
      "Sep-24": "",
      "Oct-24": "",
      "Nov-24": "",
      "Dec-24": "",
      "Jan-25": "",
      "Feb-25": "",
      "Mar-25": "",
      averageTPH: "",
      remark: "",
    };
    setRows([...rows, newRow]); // Add the new row to the state
  };

  // Function to handle row deletion
  const handleDelete = (id) => {
    const updatedRows = rows.filter((row) => row.id !== id); // Filter out the row to delete
    setRows(updatedRows); // Update the state
  };

  const columns = [
    {
      field: "gradeName",
      headerName: "Grade Name",
      width: 200,
      editable: true, // Make Grade Name editable
      headerClassName: "header",
      cellClassName: "cell",
    },
    ...months.map((month) => ({
      field: month,
      headerName: month,
      width: 120,
      editable: true,
      headerClassName: "header",
      cellClassName: "cell",
    })),
    {
      field: "averageTPH",
      headerName: "Average TPH",
      width: 150,
      editable: true,
      headerClassName: "header",
      cellClassName: "cell",
    },
    {
      field: "remark",
      headerName: "Remark",
      width: 200,
      editable: true,
      headerClassName: "header",
      cellClassName: "cell",
    },
    {
      field: "actions",
      headerName: "Actions",
      width: 120,
      headerClassName: "header",
      cellClassName: "cell",
      renderCell: (params) => (
        <Button
          variant="contained"
          color="primary"
          startIcon={<DeleteIcon />}
          onClick={() => handleDelete(params.row.id)}
        >
          Delete
        </Button>
      ),
    },
  ];

  return (
    <div style={{ height: 600, width: "100%" }}>
      <div
        style={{
          backgroundColor: "#e3f2fd",
          textAlign: "center",
          padding: "10px",
        }}
      >
        <h3>Product Mix Entry (%)</h3>
      </div>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={10}
        checkboxSelection
        disableSelectionOnClick
        sx={{
          "& .header": {
            border: "1px solid #e0e0e0",
          },
          "& .cell": {
            border: "1px solid #e0e0e0",
          },
        }}
      />
      <Button
        variant="contained"
        style={{ marginTop: 20 }}
        onClick={handleAddItem}
      >
        + Add Item
      </Button>
    </div>
  );
};

export default ProductMixTable;
