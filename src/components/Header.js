import React from 'react';
import { Grid } from '@material-ui/core';
import Avatar from '../static/images/avatar.svg';
import Button from '@material-ui/core/Button';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import Grow from '@material-ui/core/Grow';
import Paper from '@material-ui/core/Paper';
import Popper from '@material-ui/core/Popper';
import MenuItem from '@material-ui/core/MenuItem';
import MenuList from '@material-ui/core/MenuList';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  paper: {
    // marginRight: theme.spacing(2),
  },
}));

export default function Header(props) {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const anchorRef = React.useRef(null);

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const handleClose = (event) => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }

    setOpen(false);
  };

  function handleListKeyDown(event) {
    if (event.key === 'Tab') {
      event.preventDefault();
      setOpen(false);
    }
  }

  const prevOpen = React.useRef(open);
  React.useEffect(() => {
    if (prevOpen.current === true && open === false) {
      anchorRef.current.focus();
    }

    prevOpen.current = open;
  }, [open]);
  return (
    <Grid
      container
      direction='row'
      justify='flex-start'
      alignItems='center'
      className='header-nav'
      style={{ width: '100%' }}
    >
      <Grid item xs={6} md={6}>
        <a href='#'>
          <img src={Avatar} alt='ICON' height={props.ImageHeight}></img>
        </a>
      </Grid>
      <Grid item xs={6} md={6}>
        <Grid
          container
          direction='row'
          justify='flex-end'
          alignItems='flex-start'
        >
          <Grid item className={classes.root}>
            <Button
              ref={anchorRef}
              aria-controls={open ? 'menu-list-grow' : undefined}
              aria-haspopup='true'
              onClick={handleToggle}
            >
              <svg
                width='40px'
                height='20px'
                viewBox='0 0 512 384'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  d='M464.883 0.266968H47.117C21.137 0.266968 0 21.403 0 47.416C0 73.396 21.137 94.533 47.117 94.533H464.883C490.863 94.533 512 73.396 512 47.416C512 21.403 490.863 0.266968 464.883 0.266968Z'
                  fill='#08ACA3'
                />
                <path
                  d='M464.883 144.867H47.117C21.137 144.867 0 166.003 0 192.016C0 217.996 21.137 239.133 47.117 239.133H464.883C490.863 239.133 512 217.996 512 192.016C512 166.003 490.863 144.867 464.883 144.867V144.867Z'
                  fill='#08ACA3'
                />
                <path
                  d='M464.883 289.467H47.117C21.137 289.467 0 310.604 0 336.616C0 362.596 21.137 383.733 47.117 383.733H464.883C490.863 383.733 512 362.596 512 336.616C512 310.604 490.863 289.467 464.883 289.467Z'
                  fill='#08ACA3'
                />
              </svg>
            </Button>
            {/* <Popper
              open={open}
              anchorEl={anchorRef.current}
              role={undefined}
              transition
              disablePortal
            >
              {({ TransitionProps, placement }) => (
                <Grow
                  {...TransitionProps}
                  style={{
                    transformOrigin:
                      placement === 'bottom' ? 'center top' : 'center bottom',
                  }}
                >
                  <Paper>
                    <ClickAwayListener onClickAway={handleClose}>
                      <MenuList
                        autoFocusItem={open}
                        id='menu-list-grow'
                        onKeyDown={handleListKeyDown}
                      >
                        <MenuItem onClick={handleClose}>
                          <Link to='/work'>Work</Link>
                        </MenuItem>
                        <MenuItem onClick={handleClose}>
                          <Link to='/Resume'>Resume</Link>
                        </MenuItem>
                        <MenuItem onClick={handleClose}>
                          <Link to='/Contact'>Contact</Link>
                        </MenuItem>
                      </MenuList>
                    </ClickAwayListener>
                  </Paper>
                </Grow>
              )}
            </Popper> */}
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}
