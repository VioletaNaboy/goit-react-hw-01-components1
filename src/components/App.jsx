import user from './Profile/user.json';
import data from './Statistics/data.json';
import friends from './FriendsList/friends.json';
import transactions from './TransactionHistory/transactions.json';
import { Profile } from './Profile/Profile.jsx';
import { Statistics } from './Statistics/Statistics.jsx';
import { FriendList } from './FriendsList/FriendsList.jsx';
import { TransactionHistory } from './TransactionHistory/TransactionHistory.jsx';
export const App = () => {
  return (
    <>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics title="Upload stats" stats={data} />
      <Statistics stats={data} />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
    </>
  );
};
export default App;
