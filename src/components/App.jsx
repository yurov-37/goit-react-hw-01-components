import UserProfile from './User-Profile/user-profile';
import userData from 'user';
import Statistics from './Statistics/statistics';
import data from 'data';
import FriendList from './Friends-List/friends-list';
import friends from 'friends';
import TransactionHistory from './Transaction History/transaction-history';
import transactions from 'transactions';

const App = () => {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        fontSize: 20,
        color: '#010101',
      }}
    >
      <UserProfile
        avatar={userData.avatar}
        tag={userData.tag}
        location={userData.location}
        name={userData.username}
        stats={userData.stats}
      />
      <Statistics title="Upload stats" stats={data} />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
    </div>
  );
};

export default App;
