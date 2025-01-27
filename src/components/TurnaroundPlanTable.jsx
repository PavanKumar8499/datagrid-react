//all working

// import React, { useState } from "react";
// import { DataGrid } from "@mui/x-data-grid";
// import { Button } from "@mui/material";
// import { DatePicker } from "@mui/x-date-pickers/DatePicker";
// import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
// import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";

// const TurnaroundPlanTable = () => {
//   const [rows, setRows] = useState([
//     {
//       id: 1,
//       activities: "Preheater cleaning",
//       taFrom: new Date("2024-09-03"),
//       taTo: new Date("2024-09-04"),
//       durationHrs: 120,
//       period: "",
//       remark: "",
//     },
//     {
//       id: 2,
//       activities: "Strippers inspection",
//       taFrom: new Date("2024-09-04"),
//       taTo: new Date("2024-09-05"),
//       durationHrs: 144,
//       period: "7.5",
//       remark: "",
//     },
//   ]);

//   const handleDateChange = (id, field, date) => {
//     setRows((prevRows) =>
//       prevRows.map((row) => (row.id === id ? { ...row, [field]: date } : row))
//     );
//   };

//   const columns = [
//     { field: "id", headerName: "Sr. No.", width: 100 },
//     {
//       field: "activities",
//       headerName: "Activities",
//       width: 300,
//       editable: true,
//       cellClassName: "with-border",
//     },
//     {
//       field: "taFrom",
//       headerName: "TA - From",
//       width: 150,
//       editable: false,
//       cellClassName: "with-border",
//       renderCell: (params) => (
//         <LocalizationProvider dateAdapter={AdapterDateFns}>
//           <DatePicker
//             value={params.row.taFrom}
//             onChange={(newValue) =>
//               handleDateChange(params.row.id, "taFrom", newValue)
//             }
//             renderInput={({ inputRef, inputProps, InputProps }) => (
//               <div ref={inputRef} {...inputProps}>
//                 {InputProps?.endAdornment}
//               </div>
//             )}
//           />
//         </LocalizationProvider>
//       ),
//     },
//     {
//       field: "taTo",
//       headerName: "TA - To",
//       width: 150,
//       editable: false,
//       cellClassName: "with-border",
//       renderCell: (params) => (
//         <LocalizationProvider dateAdapter={AdapterDateFns}>
//           <DatePicker
//             value={params.row.taTo}
//             onChange={(newValue) =>
//               handleDateChange(params.row.id, "taTo", newValue)
//             }
//             renderInput={({ inputRef, inputProps, InputProps }) => (
//               <div ref={inputRef} {...inputProps}>
//                 {InputProps?.endAdornment}
//               </div>
//             )}
//           />
//         </LocalizationProvider>
//       ),
//     },
//     {
//       field: "durationHrs",
//       headerName: "Duration Hrs",
//       width: 150,
//       editable: true,
//       cellClassName: "with-border",
//     },
//     {
//       field: "period",
//       headerName: "Period between turnarounds in Months",
//       width: 250,
//       editable: true,
//       cellClassName: "with-border",
//     },
//     {
//       field: "remark",
//       headerName: "Remark",
//       width: 200,
//       editable: true,
//       cellClassName: "with-border",
//     },
//   ];

//   const handleAddRow = () => {
//     const newRow = {
//       id: rows.length + 1,
//       activities: "",
//       taFrom: null,
//       taTo: null,
//       durationHrs: "",
//       period: "",
//       remark: "",
//     };
//     setRows([...rows, newRow]);
//   };

//   return (
//     <LocalizationProvider dateAdapter={AdapterDateFns}>
//       <div style={{ height: 400, width: "100%", padding: 20 }}>
//         <span style={{ color: "#FFF", textAlign: "center" }}>
//           <h3 style={{ backgroundColor: "#1976d2" }}>
//             Turnaround Plan Details
//           </h3>
//         </span>
//         <DataGrid
//           rows={rows}
//           columns={columns}
//           pageSize={5}
//           checkboxSelection
//           disableSelectionOnClick
//           sx={{
//             "& .with-border": {
//               border: "1px solid rgba(224, 224, 224, 1)",
//             },
//           }}
//         />
//         <Button
//           variant="contained"
//           style={{ marginTop: 20 }}
//           onClick={handleAddRow}
//         >
//           + Add Rows
//         </Button>
//       </div>
//     </LocalizationProvider>
//   );
// };

// export default TurnaroundPlanTable;
import React, { useState } from "react";
import { DataGrid } from "@mui/x-data-grid";
import { Button } from "@mui/material";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import DeleteIcon from "@mui/icons-material/Delete"; // Import the delete icon

const TurnaroundPlanTable = () => {
  const [rows, setRows] = useState([
    {
      id: 1,
      activities: "Preheater cleaning",
      taFrom: new Date("2024-09-03"),
      taTo: new Date("2024-09-04"),
      durationHrs: 120,
      period: "",
      remark: "",
    },
    {
      id: 2,
      activities: "Strippers inspection",
      taFrom: new Date("2024-09-04"),
      taTo: new Date("2024-09-05"),
      durationHrs: 144,
      period: "7.5",
      remark: "",
    },
  ]);

  // Function to handle date changes
  const handleDateChange = (id, field, date) => {
    setRows((prevRows) =>
      prevRows.map((row) => (row.id === id ? { ...row, [field]: date } : row))
    );
  };

  // Function to handle row deletion
  const handleDeleteRow = (id) => {
    setRows((prevRows) => prevRows.filter((row) => row.id !== id));
  };

  // Function to add a new row
  const handleAddRow = () => {
    const newRow = {
      id: rows.length + 1,
      activities: "",
      taFrom: null,
      taTo: null,
      durationHrs: "",
      period: "",
      remark: "",
    };
    setRows([...rows, newRow]);
  };

  const columns = [
    {
      field: "id",
      headerName: "Sr. No.",
      width: 100,
      cellClassName: "with-border",
    },
    {
      field: "activities",
      headerName: "Activities",
      width: 300,
      editable: true,
      cellClassName: "with-border",
    },
    {
      field: "taFrom",
      headerName: "TA - From",
      width: 150,
      editable: false,
      cellClassName: "with-border",
      renderCell: (params) => (
        <LocalizationProvider dateAdapter={AdapterDateFns}>
          <DatePicker
            value={params.row.taFrom}
            onChange={(newValue) =>
              handleDateChange(params.row.id, "taFrom", newValue)
            }
            renderInput={({ inputRef, inputProps, InputProps }) => (
              <div ref={inputRef} {...inputProps}>
                {InputProps?.endAdornment}
              </div>
            )}
          />
        </LocalizationProvider>
      ),
    },
    {
      field: "taTo",
      headerName: "TA - To",
      width: 150,
      editable: false,
      cellClassName: "with-border",
      renderCell: (params) => (
        <LocalizationProvider dateAdapter={AdapterDateFns}>
          <DatePicker
            value={params.row.taTo}
            onChange={(newValue) =>
              handleDateChange(params.row.id, "taTo", newValue)
            }
            renderInput={({ inputRef, inputProps, InputProps }) => (
              <div ref={inputRef} {...inputProps}>
                {InputProps?.endAdornment}
              </div>
            )}
          />
        </LocalizationProvider>
      ),
    },
    {
      field: "durationHrs",
      headerName: "Duration Hrs",
      width: 150,
      editable: true,
      cellClassName: "with-border",
    },
    {
      field: "period",
      headerName: "Period between turnarounds in Months",
      width: 250,
      editable: true,
      cellClassName: "with-border",
    },
    {
      field: "remark",
      headerName: "Remark",
      width: 200,
      editable: true,
      cellClassName: "with-border",
    },
    {
      field: "actions",
      headerName: "Actions",
      width: 120,
      cellClassName: "with-border",
      renderCell: (params) => (
        <Button
          variant="contained"
          color="primary"
          startIcon={<DeleteIcon />}
          onClick={() => handleDeleteRow(params.row.id)}
        >
          Delete
        </Button>
      ),
    },
  ];

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <div style={{ height: 400, width: "100%", padding: 20 }}>
        {/* Updated heading style */}
        <div
          style={{
            backgroundColor: "#e3f2fd",
            textAlign: "center",
            padding: "10px",
          }}
        >
          <h3>Turnaround Plan Details</h3>
        </div>
        <DataGrid
          rows={rows}
          columns={columns}
          pageSize={5}
          checkboxSelection
          disableSelectionOnClick
          sx={{
            "& .with-border": {
              border: "1px solid rgba(224, 224, 224, 1)",
            },
          }}
        />
        <Button
          variant="contained"
          style={{ marginTop: 20 }}
          onClick={handleAddRow}
        >
          + Add Rows
        </Button>
      </div>
    </LocalizationProvider>
  );
};

export default TurnaroundPlanTable;
