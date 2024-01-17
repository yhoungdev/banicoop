import DashboardLayout from "../../../layout/dashboardLayout";
import BoardContainer from "../../../layout/boardContainer";
import DefaultTable from "../../../components/essentials/defaultTable";

const transactionHeader = [
  "Customers ",
  "Amount",
  "Receivers Name",
  "Date",
  "Status",
];

const TransactionsPage = () => {
  return (
    <DashboardLayout>
      <BoardContainer title="Transaction Details">
        <DefaultTable tableHeader={transactionHeader}></DefaultTable>
      </BoardContainer>
    </DashboardLayout>
  );
};
export default TransactionsPage;
