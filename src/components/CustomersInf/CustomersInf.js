import {
  Table,
  TableCaption,
  TableHeaders,
  CustomerInf,
} from "./CustomersInf.styled";

const DATA = [
  {
    name: "Alex Shatov",
    email: "alexshatov@gmail.com",
    spend: "2,890.66",
  },
  {
    name: "Philip Harbach",
    email: "philip.h@gmail.com",
    spend: "2,767.04",
  },
  {
    name: "Mirko Fisuk",
    email: "mirkofisuk@gmail.com",
    spend: "2,996.00",
  },
];

const CustomersInf = ({ data }) => {
  return (
    <>
      <TableCaption>Recent Customers</TableCaption>
      <Table>
        <thead>
          <tr>
            <TableHeaders>Name</TableHeaders>
            <TableHeaders className="EmailBorder">Email</TableHeaders>
            <TableHeaders>Spend</TableHeaders>
          </tr>
        </thead>
        <tbody>
          {DATA.map((customer) => {
            return (
              <tr>
                <CustomerInf>{customer.name}</CustomerInf>
                <CustomerInf>{customer.email}</CustomerInf>
                <CustomerInf>{customer.spend}</CustomerInf>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </>
  );
};

export default CustomersInf;
