import { Box } from "@mui/material";
import { styled } from "@mui/material/styles";

import { BrowserRouter as Router } from "react-router-dom";
import AppRouters from "../Routers";
import { Colors, DrawerWidth } from "../styles/theme";
import { useState } from "react";
import NavDrawer, { DrawerHeader } from "./NavDrawer";

const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })(
    ({ theme, open }) => ({
      flexGrow: 1,
      padding: theme.spacing(3),
      transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
      marginLeft: `-${DrawerWidth}px`,
      ...(open && {
        transition: theme.transitions.create('margin', {
          easing: theme.transitions.easing.easeOut,
          duration: theme.transitions.duration.enteringScreen,
        }),
        marginLeft: 0,
      }),
    }),
  );

function AdminApp() {
    const [open, setOpen] = useState(true)
    return ( 
    <Box 
        sx={{
            display: 'flex',
            background: Colors.background,
            height: '100vh'
        }}>
        <Router>
            <NavDrawer open={open} setOpen={setOpen}>
                <Main open={open}>
                  <DrawerHeader/>
                    <AppRouters/>
                </Main>
            </NavDrawer>
        </Router>
    </Box>);
}

export default AdminApp;