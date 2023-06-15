import { AppBar, Box, Button, IconButton, Link, Toolbar, Typography } from "@mui/material"
import MenuIcon from '@mui/icons-material/Menu';
import NextLink from 'next/link';
import Image from 'next/image';
import Cookies from "js-cookie";
import { IUser } from "@/interfaces/Users";
import { useEffect, useState } from 'react'


export const NavBar = () => {
    let user: IUser;
  return (
    <AppBar>
        <Toolbar>
            <Image src="/zapato.png" width={80} height={60} alt="logo"/>
            <IconButton
                size="large"
                edge="start"
                aria-label="menu"
                color="inherit"
                sx={{  }}
            >
                <MenuIcon />
            </IconButton>
            <Link href='/admin' passHref component={ NextLink }>
                    <Button sx={{ color: 'white'}}>Home</Button>
            </Link>
            <Box flex={1} />
            
            <Box component="nav" 
                 sx= {{ display: { xs: 'none', sm: 'flex' }}} >
                    
                <Link href='/clientes' passHref component={ NextLink }>
                    <Button sx={{ color: 'white'}}>Clientes</Button>
                </Link>
                <Link href='/user' component={ NextLink }>
                    <Button sx={{ color: 'white'}}>Usuarios</Button>
                </Link>
                <Link href='/empleados' component={ NextLink }>
                    <Button sx={{ color: 'white'}}>Empleados</Button>
                </Link>
                <Link href='/materiales' component={ NextLink }>
                    <Button sx={{ color: 'white'}}>Materiales</Button>
                </Link>
                <Link href='/pedido' component={ NextLink }>
                    <Button sx={{ color: 'white'}}>Pedidos</Button>
                </Link>
                <Link href='/admin/zapatos' component={ NextLink }>
                    <Button sx={{ color: 'white'}}>Zapatos</Button>
                </Link>
            </Box>
            <Box flex={1} />
            <Box>
                <Typography>{Cookies.get('usuario')}</Typography>
                <Link href='/' passHref component={ NextLink }>
                    <Button sx={{ color: 'white'}}>Logout</Button>
                </Link>
            </Box>
        </Toolbar>
    </AppBar>
  )

  }