import DataTable from "datatables.net-react";
import DT from "datatables.net-dt";



function App() {
    DataTable.use(DT);
  const columns = [
    { data: "name" },
    { data: "position" },
    { data: "office" },
    { data: "extn" },
    { data: "start_date" },
    { data: "salary" },
  ];

  return (
    <DataTable ajax="/data.json" columns={columns} className="display">
      <thead>
        <tr>
          <th>Name</th>
          <th>Position</th>
          <th>Office</th>
          <th>Extn.</th>
          <th>Start date</th>
          <th>Salary</th>
        </tr>
      </thead>
    </DataTable>
  );
}

export default App;
