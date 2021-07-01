import React, { useEffect } from 'react';
import { Box, Menu } from 'grommet';
import { Dashboard, Gremlin, Logout } from 'grommet-icons';
import { AvatarProps } from './Avatar.types';
import useLogout from '../../hooks/useLogout';
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
            label: (
              <Box border='bottom' width='small'>
                <b> {userInfo.given_name} </b>
              </Box>
            ),
            onClick: () => {},
          },
          {
            label: (
              <Box direction='row' gap='small'>
                <Dashboard />
                dashboard
              </Box>
            ),
            onClick: () => {},
          },
          {
            label: (
              <Box direction='row' gap='small'>
                <Logout />
                logout
              </Box>
            ),
            onClick: () => logout(),
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
