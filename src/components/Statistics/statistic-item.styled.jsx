import styled from '@emotion/styled';

function getRandomColor() {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

export const Item = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 15px;
  color: #fff;
  width: 100%;
  background-color: ${props => getRandomColor(props.index)};
`;
