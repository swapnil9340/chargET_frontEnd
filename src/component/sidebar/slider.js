import React from 'react';
import { Drawer, List, ListItem, ListItemIcon, ListItemText, Avatar, Divider } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import AdIcon from '@mui/icons-material/Campaign';
import MediaIcon from '@mui/icons-material/PermMedia';
import SettingsIcon from '@mui/icons-material/Settings';
import PhotoLibraryIcon from '@mui/icons-material/PhotoLibrary';
import { styled } from '@mui/material/styles';
import styless from '@/styles/style.module.scss'
import Link from 'next/link';
import Image from 'next/image';
const CustomListItem = styled(ListItem)(({ theme }) => ({
  display: 'grid',
  alignItems: 'center',
  padding: theme.spacing(1, 1),
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
          <Image width={100}  height={100} src="/logo.png" alt="Logo" style={{ width: 25 , height : 45}} />
        </ListItem>

        <List >
          <CustomListItem button sx={{ justifyContent: 'center' }}>
            <Link href="/" style={{ textDecoration: 'none' }}>
            <ListItemIcon  sx={{ justifyContent: 'center' }}>
              <HomeIcon />
            </ListItemIcon>
            <ListItemText primary="Home" sx={{ color: '#333', fontSize: 12  , textAlign:"center"}} />
            </Link>
          </CustomListItem>
           <CustomListItem button sx={{ justifyContent: 'center' }}>
           <Link href="/campaign" style={{ textDecoration: 'none' }}>
            <ListItemIcon sx={{ display:'block', textAlign: 'center' , width:'100%' }}>
              <PhotoLibraryIcon />
            </ListItemIcon>
            <ListItemText primary="Campaign" sx={{ color: '#333', fontSize: 12,  textAlign:"center" }} />
            </Link>
          </CustomListItem>
          <CustomListItem button sx={{ justifyContent: 'center' }}>
            <ListItemIcon sx={{ justifyContent: 'center' }}>
              <AdIcon />
            </ListItemIcon>
            <ListItemText primary="Publish" sx={{ color: '#333', fontSize: 12,  textAlign:"center" }} />
          </CustomListItem>
          <CustomListItem button sx={{ justifyContent: 'center' }}>
            <Link href="/mediaupload" style={{ textDecoration: 'none' }}>
            <ListItemIcon sx={{ justifyContent: 'center' }}>
              <MediaIcon />
            </ListItemIcon>
            <ListItemText primary="Media" sx={{ color: '#333', fontSize: 12 ,  textAlign:"center" }} />
            </Link>
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
