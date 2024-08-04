import { ReducerList, useLazyReducerImports } from 'shared/lib/hooks/useLazyReducerImport';
import { Profile, profileReducer } from 'entities/Profile';
import style from './style.module.scss';

const reducerList: ReducerList = {
  profile: profileReducer,
};

const ProfilePage = () => {
  useLazyReducerImports(reducerList);

  return (
    <div className={style['profile-page']}>
      <Profile />
    </div>
  );
};

export default ProfilePage;
