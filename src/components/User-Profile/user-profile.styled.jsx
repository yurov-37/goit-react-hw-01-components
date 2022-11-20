import styled from '@emotion/styled';

export const Profile = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 350px;
  border-radius: 4px;
  background-color: #fff;
  box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
  border: 1px solid #000;
  margin-bottom: 20px;
`;

export const ProfileDescription = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
`;

export const ProfileAvatar = styled.img`
  border-radius: 50%;
  margin-bottom: 20px;
  border: 1px solid #000;
`;

export const ProfileName = styled.p`
  font-size: 24px;
  font-weight: 700;
  margin-bottom: 10px;
`;

export const ProfileInfo = styled.p`
  &:not(:last-child) {
    margin-bottom: 5px;
  }

  font-weight: 500;
  color: #8d8c86;
`;

export const ProfileStats = styled.ul`
  display: flex;
  width: 100%;
  justify-content: space-around;
  background-color: #d9dadb;

  & li {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    outline: 1px solid #000;
    padding: 10px 0;
  }
`;

export const ProfileLabel = styled.span``;

export const ProfileQuantity = styled.span`
  font-size: 24px;
  font-weight: 700;
`;
