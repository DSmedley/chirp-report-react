import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import ThemeSwitch from '../../components/ThemeSwitch/ThemeSwitch';
import {MenuLink} from './model/MenuLink';
import {Link} from '@mui/material';
import {useNavigate} from 'react-router-dom';

const Navigation = () => {
  const navigate = useNavigate();
  const pages = [
    new MenuLink(() => navigate('/'), 'Home'),
    new MenuLink(() => navigate('/'), 'Analyze'),
    new MenuLink(() => navigate('/'), 'Compare'),
    new MenuLink(() => navigate('/about'), 'About')
  ];
  const settings = ['Profile', 'Logout'];
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(null);

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar position='static' data-testid='Navigation'>
      <Container maxWidth='xl'>
        <Toolbar disableGutters>
          <Box
            component='img'
            sx={{
              height: 50,
              width: 200,
              display: {xs: 'none', md: 'flex'}
            }}
            title='Chirp Report'
            alt='Chirp Report'
            src='/chirpreport.svg'
          />

          <Box sx={{flexGrow: 1, display: {xs: 'flex', md: 'none'}}}>
            <IconButton
              size='large'
              aria-label='account of current user'
              aria-controls='menu-appbar'
              aria-haspopup='true'
              onClick={handleOpenNavMenu}
              color='inherit'
            >
              <MenuIcon/>
            </IconButton>
            <Menu
              id='menu-appbar'
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: {xs: 'block', md: 'none'},
              }}
            >
              {pages.map((page) => (
                <Link key={page.name} onClick={page.onClick} underline='none'>
                  <MenuItem onClick={handleCloseNavMenu}>
                    <Typography textAlign='center'>{page.name}</Typography>
                  </MenuItem>
                </Link>
              ))}
              <MenuItem>
                <ThemeSwitch/>
              </MenuItem>
            </Menu>
          </Box>
          <Box
            component='img'
            sx={{
              height: 50,
              width: '100%',
              display: {xs: 'flex', md: 'none'}
            }}
            title='Chirp Report'
            alt='Chirp Report'
            src='/chirpreport-logo.svg'
          />
          <Box sx={{flexGrow: 1, display: {xs: 'none', md: 'flex'}}}>
            {pages.map((page) => (
              <Link key={page.name} onClick={page.onClick} underline='none'>
                <Button
                  onClick={handleCloseNavMenu}
                  sx={{my: 2, color: 'white', display: 'block'}}
                >
                  {page.name}
                </Button>
              </Link>
            ))}
          </Box>

          <Box sx={{pr: '.5em', display: {xs: 'none', md: 'flex'}}}>
            <ThemeSwitch/>
          </Box>
          <Box sx={{flexGrow: 0}}>
            <Tooltip title='Open settings'>
              <IconButton onClick={handleOpenUserMenu} sx={{p: 0}}>
                <Avatar alt='Remy Sharp' src='/static/images/avatar/2.jpg'/>
              </IconButton>
            </Tooltip>
            <Menu
              sx={{mt: '45px'}}
              id='menu-appbar'
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseNavMenu}>
                  <Typography textAlign='center'>{setting}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default Navigation;