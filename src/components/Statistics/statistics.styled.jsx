import styled from '@emotion/styled';

export const StatSection = styled.section`
  background-color: #fff;
  width: 450px;
  border-radius: 4px;
  box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
  border: 1px solid #000;
  margin-bottom: 20px;

  & h2 {
    padding: 25px;
    text-align: center;
    font-weight: 500;
  }
`;

export const StatList = styled.ul`
  display: flex;
  justify-content: space-around;
`;
