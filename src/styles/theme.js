import { createTheme} from '@mui/material'
export const DrawerWidth = 250

export const Colors =  {
    primary: '#f06292',
    secondary: '#ba68c8',
    success: '#4caf50',
    info: '#00a2ff',
    danger: '#ff5722',
    warning: '#ffc107',
    dark: '#0e1b20',
    light : '#aaa',
    muted: '#abafb3',
    border: '#dddfe1',
    inserse: '#2f3d4a',
    shaft: '#333',
    transparent: '#000000',
    // GREY
    background: '#F5F5F5',
    dim_grey: '#696969',
    dove_gray: '#d5d5d5',
    body_bg: '#f3f6f9',
    light_gray: 'rgb(230, 230, 230)',
    // SOLID
    white: '#fff',
    black: '#000'
}

// css util
export const cssUtils =  {
    boxShadow : 'rgba(149, 157, 165, 0.2) 0px 8px 24px'
}

const theme = createTheme({
    palette: {
        primary: {
            main: Colors.primary
        },
        secondary: {
            main: Colors.secondary
        } 
    },
     components:  {
        MuiAppBar: {
            styleOverrides: {
                root: {
                    background: Colors.background//.transparent
                }
            }
        },
        MuiButton: {
            defaultProps: {
                disableRipple: true,
                disableElevation: true
            }
        },
        // MuiTooltip: {
        //     defaultProps: {
        //         arrow: true
        //     },
        //     styleOverrides : {
        //         tooltip: {
        //             background: Colors.primary
        //         },
        //         arrow: {
        //             color: Colors.primary
        //         }
        //     }
        // },
        MuiDrawer: {
            styleOverrides: {
                paper: {
                    width: DrawerWidth,
                    background:  Colors.background,//.transparent
                    color: Colors.light,
                    // borderRadius:  '0px 100px 0px 0px',
                    // borderRight: `1px solid ${Colors.primary}`
                }
            }       
        },
        // MuiDivider: {
        //     styleOverrides: {
        //         root: {
        //             borderColor: lighten(Colors.primary, 0.2 )
        //         },
        //     }
        // },
        // MyShopButton: {
        //     styleOverrides: {
        //         root: {
        //             color: Colors.white
        //         },
        //         primary : {
        //             background: Colors.primary,
        //             '&:hover' : {
        //                 background: lighten(Colors.primary, 0.05)

        //             } 
        //         },
        //         secondary : {
        //             background: Colors.secondary,
        //             '&:hover' : {
        //                 background: lighten(Colors.primary, 0.05) 
        //             } 
        //         }
        //     }
        // }
     }

})
export default theme;
