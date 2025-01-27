import data from "../../data/Income-Expenses.json";
import {
  Table,
  TableCaption,
  Day,
  TransTypeWrapper,
  TransType,
  ComName,
  Amount,
} from "./MoneyTurnover.styled";

const MoneyTurnover = () => {
  return (
    <>
      <Table>
        <TableCaption>Income/Expenses</TableCaption>
        <thead>
          <tr>
            <Day colSpan="3">Today</Day>
          </tr>
        </thead>
        <tbody>
          {data.map((d, ind) => (
            <tr key={ind}>
              <TransTypeWrapper>
                <TransType
                  className={
                    d.type === "Income"
                      ? "income"
                      : d.type === "Expense"
                      ? "expense"
                      : "error"
                  }
                >
                  {d.type}
                </TransType>
              </TransTypeWrapper>
              <ComName>{d.name}</ComName>
              <Amount
                className={
                  d.type === "Income"
                    ? "income"
                    : d.type === "Expense"
                    ? "expense"
                    : "error"
                }
              >
                {d.amount}
              </Amount>
            </tr>
          ))}
        </tbody>
      </Table>
    </>
  );
};

export default MoneyTurnover;
