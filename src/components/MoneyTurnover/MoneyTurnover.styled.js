import styled from "styled-components";

export const Table = styled.table`
  padding: 14px;
  border: 1px solid rgba(29, 30, 33, 0.1);
  border-top: none;
`;

export const TableCaption = styled.caption`
  padding: 14px;
  background-color: var(--background);
  border-radius: 8px 8px 0 0;
  text-align: left;
  font-weight: 600;
  font-size: 16px;
  line-height: 125%;
  color: var(--main-black);
`;

export const Day = styled.th`
  padding-top: 14px;
  padding-bottom: 14px;
  border-bottom: 1px solid rgba(29, 30, 33, 0.1);
  text-align: left;
  font-family: var(--font-family);
  font-weight: 500;
  font-size: 14px;
  line-height: 129%;
  color: rgba(29, 30, 33, 0.4);
`;

export const TransactionType = styled.th`
  font-weight: 500;
  font-size: 12px;
  letter-spacing: -0.05em;
  text-align: center;

  &.expense {
    color: var(--accent-2);
    background-color: rgba(232, 80, 80, 0.1);
  }
`;
export const TransTypeWrapper = styled.td`
  width: 80px;
  padding-top: 14px;
  padding-bottom: 14px;
`;

export const TransType = styled.div`
  padding-top: 4px;
  padding-bottom: 4px;
  border-radius: 40px;
  font-weight: 500;
  font-size: 12px;
  letter-spacing: -0.05em;
  text-align: center;

  &.expense {
    color: var(--accent-2);
    background-color: rgba(232, 80, 80, 0.1);
  }
  &.income {
    color: var(--accent);
    background-color: rgba(89, 177, 122, 0.1);
  }
  &.error {
    color: var(--main-black);
    background-color: rgba(29, 30, 33, 0.1);
  }
`;

export const ComName = styled.th`
  padding-top: 14px;
  padding-bottom: 14px;
  font-weight: 500;
  font-size: 14px;
  line-height: 129%;
  color: var(--main-black);
`;

export const Amount = styled.th`
  padding-top: 14px;
  padding-bottom: 14px;
  font-weight: 500;
  font-size: 14px;
  line-height: 129%;
  color: var(--accent-2);

  &.expense {
    color: var(--accent-2);
  }
  &.income {
    color: var(--accent);
  }
  &.error {
    color: var(--main-black);
  }
`;
