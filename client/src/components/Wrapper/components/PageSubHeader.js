import React from 'react';
import MenuIcon from '@material-ui/icons/Menu';
import Search from '../../Material-UI/Search';
import {Button, IconButton, Grid} from '@material-ui/core';



const PageSubHeader = props => {

  return (
    <Grid item xs={12} className="wrapper-grid__nav">
        <div className="wrapper-grid__nav--left-side">
          <div className="wrapper-grid__nav--left-side__icon" onClick={() => props.toggleTabsDrawer()}>
            <IconButton>
              <MenuIcon className="menu-icon" />
            </IconButton>
          </div>
          <div className="wrapper-grid__nav--left-side__button">
            <Button variant="outlined" className="sub-menu-create-email-button">
              New Email
            </Button>
          </div>
        </div>
        {/* <div className='sub-menu-search'>
          <Search placeholder='Search for Emails...'/>
        </div> */}
    </Grid>
  );
};

export default PageSubHeader;