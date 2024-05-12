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
import AdbIcon from '@mui/icons-material/Adb';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { Settings } from '@mui/icons-material';

import DarkModeIcon from '@mui/icons-material/DarkMode';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import TwilightIcon from '@mui/icons-material/WbTwilight';
import { useTheme, Themes } from '@/hooks/ThemeContext';

const pages = [['Home', '/home'], ['Work History', '/history'], ['Education', '/education'], ['Contact', '/contact'],];
const settings = ['(Dev) Go Todo Page', '(Dev)Font Size +/-', '(Dev)Light/Dark Mode', '(Dev)Language',];

function LightModeContainer() {

  const { theme, toggleTheme } = useTheme();

  const onIconClick = () => {
    toggleTheme();
  }

  const getIcon = React.useCallback(() => {
    let ThemeComponentIcon;
    let tooltipTitle;

    switch (theme) {
      case Themes.LIGHT:
        ThemeComponentIcon = <Brightness7Icon />;
        tooltipTitle = 'Light Mode';
        break;
      case Themes.TWILIGHT:
        ThemeComponentIcon = <TwilightIcon />;
        tooltipTitle = 'Twilight Mode';
        break;
      default:
        ThemeComponentIcon = <DarkModeIcon />;
        tooltipTitle = 'Dark Mode';
    }
    return [ThemeComponentIcon, tooltipTitle]
  }, [theme]);

  const [Icon, tooltipTitle] = getIcon();

  return (
    <Tooltip title={tooltipTitle}>
      <IconButton
        onClick={onIconClick}
        // size="small"
        // sx={{ ml: 2 }}
        style={{ color: 'white' }}
        aria-label="switch theme"
      >
        {Icon}
      </IconButton>
    </Tooltip>
  )
};

function ResponsiveAppBar() {
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

  const onPageClick = (page) => {
    handleCloseNavMenu();
  }

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const pathname = usePathname();

  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <AdbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/home"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            D&apos;s Portfolio
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
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
                display: { xs: 'block', md: 'none' },
              }}
            >
              {pages.map(([pageName, pathnamez]) => (
                <MenuItem key={pageName} onClick={() => onPageClick(pathnamez)}>
                  <Link key={pageName} href={pathnamez}>
                    <Typography style={{
                      textDecoration: pathnamez.includes(pathname) ? 'underline 4px' : '',
                      fontWeight: pathnamez.includes(pathname) ? 'bolder' : '',
                      textUnderlineOffset: pathnamez.includes(pathname) ? '6px' : '',
                    }}
                      textAlign="center">{pageName}</Typography>
                  </Link>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <AdbIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
          <Typography
            variant="h5"
            noWrap
            component="a"
            href="/home"
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            D&apos;s Portfolio
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {pages.map(([pageName, pathnamez]) => (
              <Link key={pageName} href={pathnamez}>
                <Button
                  key={pageName}
                  onClick={() => onPageClick(pathnamez)}
                  sx={{ my: 2, color: 'white', display: 'block' }}
                  style={{
                    // color: pathnamez === pathname ? '#19B5FE': '',
                    textDecoration: pathnamez === pathname ? 'underline 4px' : '',
                    fontWeight: pathnamez === pathname ? 'bolder' : '',
                    textUnderlineOffset: pathnamez === pathname ? '6px' : '',
                  }}
                >
                  {pageName}
                </Button>
              </Link>
            ))}
          </Box>

          <LightModeContainer />

          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                {/* <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" /> */}
                <Settings />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
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
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                  <Typography textAlign="center">{setting}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default ResponsiveAppBar;
