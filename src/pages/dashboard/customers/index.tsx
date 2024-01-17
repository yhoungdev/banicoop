import DefaultTable from "../../../components/essentials/defaultTable";
import BoardContainer from "../../../layout/boardContainer";
import DashboardLayout from "../../../layout/dashboardLayout";

const customerheader = [
  "Customer Name",
  "Email Address",
  "Phone Number",
  "Date joined",
  "Action",
];

const CustomersPage = () => {
  return (
    <DashboardLayout>
      <BoardContainer title="Customer List">
        <DefaultTable tableHeader={customerheader}></DefaultTable>
      </BoardContainer>
    </DashboardLayout>
  );
};
export default CustomersPage;
