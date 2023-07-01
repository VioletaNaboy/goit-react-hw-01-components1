import user from './user.json';
import data from './data.json';
import friends from './friends.json';
import { Profile } from './Profile/profile.jsx';
import { Statistics } from './Statistics/statistics.jsx';
import { FriendList } from './FriendsList/friends-list.jsx';
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
      <Statistics stats={data} />
      <FriendList friends={friends} />
    </>
  );
};
