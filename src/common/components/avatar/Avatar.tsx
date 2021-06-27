import React, { useEffect } from 'react';
import { Box, Menu } from 'grommet';
import { Gremlin } from 'grommet-icons';
import { AvatarProps } from './Avatar.types';
import useLogout from '../../hooks/useLogout';
import DarkModeSwitch from '../darkModeSwitch/DarkModeSwitch';
import useUserInfo from '../../hooks/useUserInfo';

const Avatar: React.FC<AvatarProps> = (props) => {
  const logout = useLogout();
  const userInfo = useUserInfo();

  useEffect(() => console.log(userInfo));
  return (
    <Box>
      <Menu
        // alignSelf='center'
        icon={false}
        items={[
          {
            label: <b>{userInfo.given_name}</b>,
            onClick: () => {},
          },
          {
            label: 'dashboard',
            onClick: () => {},
          },
          {
            label: 'logout',
            onClick: () => logout(),
          },
          {
            label: <DarkModeSwitch />,
            onClick: () => {},
          },
        ]}
        margin={{ vertical: 'small' }}
        // dropContent={<AvatarDropdown />}
        dropProps={{
          align: {
            top: 'bottom',
          },
        }}
      >
        <Box direction='row-responsive' gap='small'>
          <Gremlin />
          {userInfo.given_name}
        </Box>
      </Menu>
    </Box>
  );
};

export default Avatar;
