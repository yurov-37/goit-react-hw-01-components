import styled from '@emotion/styled';

export const TransactionTable = styled.table`
  width: 800px;
  background-color: #fff;
  border-collapse: collapse;
  box-shadow: 0 14px 28px rgb(0 0 0 / 25%), 0 10px 10px rgb(0 0 0 / 22%);

  & thead {
    background-color: #1e90ff;
  }

  & tbody {
    text-align: center;
  }

  & tr:nth-of-type(even) {
    background-color: #81d4fa;
  }

  & th,
  & td {
    padding: 5px;
  }
`;
