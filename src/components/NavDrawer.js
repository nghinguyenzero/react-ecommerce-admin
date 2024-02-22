import { useState } from 'react';
import { Typography } from '@mui/material';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';

import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import DashboardIcon from '@mui/icons-material/Dashboard';
import ReceiptIcon from '@mui/icons-material/Receipt';
import GroupIcon from '@mui/icons-material/Group';
import MailIcon from '@mui/icons-material/Mail';

import SettingsIcon from '@mui/icons-material/Settings';

import { Colors, DrawerWidth } from '../styles/theme';
import AppBar from './Appbar';
import { useNavigate } from 'react-router-dom';



export const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: 'flex-end',
}));

const MyListItemButton = ({ selected, icon, text, handleNavbarItemClicked}) => {
    return (
      <ListItemButton onClick={()=>handleNavbarItemClicked(text)}
        sx={{...(selected&&{
          background: Colors.white,
          borderRadius: 2,
           fontWeight: 'bold',
            color: Colors.black
        })}}
      >
        <ListItemIcon sx={{color: selected && Colors.primary}}>
          {icon}
        </ListItemIcon>
        <ListItemText primary={text} />
      </ListItemButton>
    )
}

export default function NavDrawer({open, setOpen}) {
  const [selectedItem, setSelectedItem] = useState('')
  const navigate = useNavigate()
    
  const theme = useTheme();
  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const handleNavbarItemClicked = (item) => {
    setSelectedItem(item)
    navigate(item)
    console.log({item});
  }

  const routerList = [
    { 
      text: 'dashboard',
      icon: <DashboardIcon/>,
      // selected: false
    },
    { 
      text: 'products',
      icon: <ReceiptIcon/>,
      // selected: true
    },
    { 
      text: 'messengers',
      icon: <MailIcon/>,
      // selected: true
    },
    { 
      text: 'settings',
      icon: <SettingsIcon/>,
      // selected: true
    },
    { 
      text: 'customers',
      icon: <GroupIcon/>,
      selected: true
    },

  ]

  

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar open={open} handleDrawerOpen={handleDrawerOpen}/>

      <Drawer
        sx={{
          width: DrawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: DrawerWidth,
            boxSizing: 'border-box',
          },
        }}
        variant="persistent"
        anchor="left"
        open={open}
      >
        <DrawerHeader>
        {!open && <Typography 
                      fontWeight={'bold'} color={Colors.black} variant="h6" noWrap component="div">
                    Admin dashboard
                    </Typography>
            }
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
          </IconButton>
        </DrawerHeader>
        <Divider />
        <List>
          { routerList.map((item, index) => (
              <ListItem disablePadding key={index}>
                <MyListItemButton 
                  text={item.text}
                  icon={item.icon}
                  handleNavbarItemClicked={handleNavbarItemClicked}
                  selected={selectedItem.includes(item.text)}
                />
              </ListItem>
          ))}
        </List>
        
      </Drawer>
    </Box>
  );
}
