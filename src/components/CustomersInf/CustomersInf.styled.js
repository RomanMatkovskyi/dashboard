import styled from "styled-components";

export const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  padding: 14px;
  width: 100%;
`;

export const TableCaption = styled.caption`
  width: 100%;
  padding: 14px;
  border-radius: 8px 8px 0 0;
  text-align: left;
  background-color: var(--background);
  font-weight: 600;
  font-size: 16px;
  line-height: 125%;
  color: var(--main-black);
`;

export const TableHeaders = styled.td`
  padding: 14px;
  font-weight: 500;
  font-size: 12px;
  line-height: 117%;
  color: rgba(29, 30, 33, 0.4);

  &.EmailBorder {
    border: 1px solid rgba(29, 30, 33, 0.1);
    border-top: none;
  }
`;

export const CustomerInf = styled.td`
  padding-top: 30px;
  padding-bottom: 30px;
  padding-left: 10px;
  font-weight: 500;
  font-size: 12px;
  line-height: 117%;
  color: var(--main-black);

  border: 1px solid rgba(29, 30, 33, 0.1);

  &:first-child {
    border-left: none;
  }

  &:last-child {
    border-right: none;
  }
`;
