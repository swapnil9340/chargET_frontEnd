import React from 'react';
import { Drawer, List, ListItem, ListItemIcon, ListItemText, Avatar, Divider } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import AdIcon from '@mui/icons-material/Campaign';
import MediaIcon from '@mui/icons-material/PermMedia';
import SettingsIcon from '@mui/icons-material/Settings';
import { styled } from '@mui/material/styles';
import styless from '@/styles/style.module.scss'
const CustomListItem = styled(ListItem)(({ theme }) => ({
  display: 'grid',
  alignItems: 'center',
  padding: theme.spacing(1, 2),
  borderRadius: theme.shape.borderRadius,
  '&:hover': {
    backgroundColor: theme.palette.action.hover,
  },
}));


const Sidebar = () => {
  return (
    <div className={styless.sidebar}>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        {/* Logo */}
        <ListItem sx={{ justifyContent: 'center', paddingBottom: 4 }}>
          <img src="/logo.png" alt="Logo" style={{ width: 30 }} />
        </ListItem>

        <List >
          <CustomListItem button sx={{ justifyContent: 'center' }}>
            <ListItemIcon  sx={{ justifyContent: 'center' }}>
              <HomeIcon />
            </ListItemIcon>
            <ListItemText primary="Home" sx={{ color: '#333', fontSize: 12  , textAlign:"center"}} />
          </CustomListItem>
          <CustomListItem button sx={{ justifyContent: 'center' }}>
            <ListItemIcon sx={{ justifyContent: 'center' }}>
              <AdIcon />
            </ListItemIcon>
            <ListItemText primary="Publish" sx={{ color: '#333', fontSize: 12,  textAlign:"center" }} />
          </CustomListItem>
          <CustomListItem button sx={{ justifyContent: 'center' }}>
            <ListItemIcon sx={{ justifyContent: 'center' }}>
              <MediaIcon />
            </ListItemIcon>
            <ListItemText primary="Media" sx={{ color: '#333', fontSize: 12 ,  textAlign:"center" }} />
          </CustomListItem>
          <CustomListItem button sx={{ justifyContent: 'center' }}>
            <ListItemIcon sx={{ justifyContent: 'center' }}>
              <SettingsIcon />
            </ListItemIcon>
            <ListItemText primary="Settings" sx={{ color: '#333', fontSize: 12 ,  textAlign:"center" }} />
          </CustomListItem>
        </List>
      </div>

      
      <Avatar
        src="/user-avatar.jpg"
        alt="Aser Avatar"
        sx={{
          width: 40,
          height: 40,
          marginBottom: 2,
        }}
      />
    </div>
  );
};

export default Sidebar;
