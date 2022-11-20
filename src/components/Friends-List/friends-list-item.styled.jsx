import styled from '@emotion/styled';

export const Friend = styled.li`
  display: flex;
  align-items: center;
  background-color: #fff;
  margin-bottom: 10px;
  padding: 10px;
  border-radius: 4px;
  width: 200px;
  box-shadow: 0 14px 28px rgb(0 0 0 / 25%), 0 10px 10px rgb(0 0 0 / 22%);
`;

export const FriendStatus = styled.span`
  width: 13px;
  height: 13px;
  border-radius: 50%;
  background-color: ${props => (props.isOnline ? 'green' : 'red')};
  margin-right: 8px;
`;

export const FriendAvatar = styled.img`
  margin-right: 8px;
`;

export const FriendName = styled.p``;
