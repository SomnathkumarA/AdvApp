import  { useState, useEffect, useRef } from 'react';
import '../../assets/css/NavBar.css';
import logo from '../../images/logo.jpg';
import avatar from '../../images/avatar.png';
import ClickAwayListener from '@mui/material/ClickAwayListener';
import Grow from '@mui/material/Grow';
import Paper from '@mui/material/Paper';
import Popper from '@mui/material/Popper';
import MenuItem from '@mui/material/MenuItem';
import MenuList from '@mui/material/MenuList';
import Footer from './Footer';
import RefreshIcon from '@mui/icons-material/Refresh';

const NavbarPage = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  const [dropdownPosition, setDropdownPosition] = useState({ top: 1, right: 1 }); // Initialize dropdownPosition state
  const anchorRef = useRef(null);

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  useEffect(() => {
    const updateDropdownPosition = () => {
      const profileButton = document.getElementById('profile-button');
      if (profileButton) {
        const rect = profileButton.getBoundingClientRect();
        const top = rect.bottom;
        const right = window.innerWidth - rect.right;
        setDropdownPosition({ top, right });
      }
    };

    window.addEventListener('resize', updateDropdownPosition);

    return () => {
      window.removeEventListener('resize', updateDropdownPosition);
    };
  }, []);

  const handleProfileClick = (e) => {
    e.stopPropagation(); // Prevent click event propagation
    toggleDropdown();
  };

  const handleProfileNavigation = () => {
    window.location.href = '/profile';
    setShowDropdown(false); // Close dropdown after navigation
  };

  const handlePaymentNavigation = () => {
    window.location.href = '/payment';
    setShowDropdown(false); // Close dropdown after navigation
  };

  const handleLogout = () => {
    window.location.href = '/login';
    setShowDropdown(false); // Close dropdown after navigation
  };

  const handleAboutUs = () => {
    window.location.href = '/about';
  };

  const handleContactUs = () => {
    window.location.href = '/contact';
  };
  const handleEvents = () => {
    window.location.href = '/event';
  };

  const handleCloseDropdown = () => {
    setShowDropdown(false);
  };

  function handleListKeyDown(event) {
    if (event.key === 'Tab') {
      event.preventDefault();
      setShowDropdown(false);
    } else if (event.key === 'Escape') {
      setShowDropdown(false);
    }
  }

  return (
    <div className="navbar-container">
      <div className="logo-container">
        <img src={logo} alt="Logo" className="logo" />
        <span className="company-name">DECO-RATE-EVE</span>
      </div>
      <div className="buttons-container">
        <button className="nav-button" onClick={() => window.location.reload()}><RefreshIcon style={{fontSize:'18'}}/></button>
        <button className="nav-button" onClick={handleAboutUs}>About Us</button>
        <button className="nav-button" onClick={handleContactUs}>Contact Us</button>
        <button className="nav-button" onClick={handleEvents}>Events</button>
        <div className="profile-container" ref={anchorRef}>
          <img
            id="profile-button"
            src={avatar}
            alt="Profile"
            className="profile"
            onClick={handleProfileClick} // Call handleProfileClick instead of toggleDropdown
          />
          {showDropdown && (
            <div>
              <Popper
                open={showDropdown}
                anchorEl={anchorRef.current}
                role={undefined}
                placement="bottom-start"
                transition
                disablePortal
              >
                {({ TransitionProps, placement }) => (
                  <Grow
                    {...TransitionProps}
                    style={{
                      transformOrigin:
                        placement === 'bottom-start' ? 'left top' : 'left bottom',
                    }}
                  >
                    <Paper>
                      <ClickAwayListener onClickAway={handleCloseDropdown}>
                        <MenuList
                          autoFocusItem={showDropdown}
                          id="composition-menu"
                          aria-labelledby="composition-button"
                          onKeyDown={handleListKeyDown}
                        >
                          <MenuItem onClick={handleProfileNavigation}>Profile</MenuItem>
                          <MenuItem onClick={handlePaymentNavigation}>Payment</MenuItem>
                          <MenuItem onClick={handleLogout}>Logout</MenuItem>
                        </MenuList>
                      </ClickAwayListener>
                    </Paper>
                  </Grow>
                )}
              </Popper>
            </div>
          )}
        </div>
      </div>
      <Footer/>
    </div>
  );
};

export default NavbarPage;
