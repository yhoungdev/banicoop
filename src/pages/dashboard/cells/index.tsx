import DashboardLayout from "../../../layout/dashboardLayout";
import BoardContainer from "../../../layout/boardContainer";
import DefaultTable from "../../../components/essentials/defaultTable";

const CellsTableheader = [
  "Customers ",
  "Amount",
  "Receivers Name",
  "Date",
  "Status",
];

const CellsPage = () => {
  return (
    <DashboardLayout>
      <BoardContainer title="Transaction Details">
        <DefaultTable tableHeader={CellsTableheader}></DefaultTable>
      </BoardContainer>
    </DashboardLayout>
  );
};
export default CellsPage;
