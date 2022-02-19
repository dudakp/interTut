import React from 'react';
import { Avatar as PicAvatar, Box, Menu } from 'grommet';
import { Dashboard, Logout } from 'grommet-icons';
import { useHistory } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';
import { AvatarProps } from './Avatar.types';
import useLogout from '../../hooks/useLogout';

const Avatar: React.FC<AvatarProps> = (props) => {
  const logout = useLogout();
  const { user } = useAuth0();
  const history = useHistory();

  return (
    <Box>
      <Menu
        // alignSelf='center'
        icon={false}
        items={[
          {
            label: (
              <Box border='bottom' width='small'>
                <b>
                  {user?.name} ({user?.nickname})
                </b>
              </Box>
            ),
          },
          {
            label: (
              <Box direction='row' gap='small'>
                <Dashboard />
                dashboard
              </Box>
            ),
            onClick: () => history.push('/dashboard'),
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
        <Box direction='row-responsive' gap='medium'>
          <PicAvatar src={user?.picture} size='medium' />
        </Box>
      </Menu>
    </Box>
  );
};

export default Avatar;
