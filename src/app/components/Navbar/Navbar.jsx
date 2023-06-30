"use client";
import '../../styles/navbar.css'
import * as React from 'react';
import Link from 'next/link'
import Divider from '@mui/material/Divider';
import CloseIcon from '@mui/icons-material/Close';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import MenuItem from '@mui/material/MenuItem';
import SearchIcon from '@mui/icons-material/Search';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import InputBase from '@mui/material/InputBase';
import GoogleTranslate from '../googleTranslate/GoogleTranslate';

export default function page2() {

  const [searchValue, setSearchValue] = React.useState("");
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);
  const [searchMenuOpen, setSearchMenuOpen] = React.useState(null);
  const [agriOutputMenuOpen, setAgriOutputMenuOpen] = React.useState(null);
  const [agriInputMenuOpen, setAgriInputMenuOpen] = React.useState(null);
  const [ruralProductMenuOpen, setRuralProductMenuOpen] = React.useState(null);
  const [marketOnGeecomMenuOpen, setMarketOnGeecomMenuOpen] = React.useState(null);
  const [sellOnGeecomMenuOpen, setSellOnGeecomMenuOpen] = React.useState(null);


  const handleInputChange = (event) => {
    setSearchValue(event.target.value);
  };

  const handleMobileMenuOpen = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const handleMobileMenuClose = () => {
    setMobileMenuOpen(false);
  };

  const handleSearchMenuOpen = (event) => {
    setSearchMenuOpen(event.currentTarget);
  };

  const handleSearchMenuClose = (event) => {
    setSearchMenuOpen(null)
  }

  const handleAgriOutputMenuOpen = (event) => {
    setAgriOutputMenuOpen(event.currentTarget);
  };

  const handleAgriOutputMenuClose = () => {
    setAgriOutputMenuOpen(null);
  };

  const handleAgriInputMenuOpen = (event) => {
    setAgriInputMenuOpen(event.currentTarget);
  };

  const handleAgriInputMenuClose = () => {
    setAgriInputMenuOpen(null);
  };

  const handleRuralProductMenuOpen = (event) => {
    setRuralProductMenuOpen(event.currentTarget);
  };

  const handleRuralProductMenuClose = (event) => {
    setRuralProductMenuOpen(null);
  };

  const handleMarketOnGeecomMenuOpen = (event) => {
    setMarketOnGeecomMenuOpen(event.currentTarget);
  };

  const handleMarketOnGeecomMenuClose = (event) => {
    setMarketOnGeecomMenuOpen(null);
  };

  const handleSellOnGeecomMenuOpen = (event) => {
    setSellOnGeecomMenuOpen(event.currentTarget);
  };

  const handleSellOnGeecomMenuClose = (event) => {
    setSellOnGeecomMenuOpen(null);
  };

  return (
    <Box>
      <AppBar className='MainNav' position="fixed" sx={{ bgcolor: 'white' }}>
        <Container >
          <Toolbar>
            <Typography component="a" href="/" variant="h6" noWrap>
              <img src="/logo.png" alt="Logo" className='image-width geecom-logo-style' />
            </Typography>

            {/* Desktop */}
            <Box sx={{ flexGrow: 1 }} />
            <Box sx={{ display: { xs: 'none', sm: 'flex' } }}>
              <Box className='searchBox-size' sx={{
                p: "2px",
                display: "flex",
                alignItems: "center",
                border: "1px solid #ccc",
                borderRadius: 50,
              }}>
                <InputBase
                  sx={{ ml: 1, flex: 1 }}
                  placeholder="Connect with Farmers and Rural India....."
                  inputProps={{ "aria-label": "search google maps" }}
                  value={searchValue}
                  onChange={handleInputChange}
                />
                <IconButton type="button" sx={{ p: "10px" }} aria-label="search">
                  <SearchIcon />
                </IconButton>
                <IconButton
                  color="primary"
                  sx={{ p: "10px" }}
                  aria-label="directions"
                ></IconButton>
              </Box>

              <Button
                color="inherit"
                sx={{
                  ml: 1,
                  textTransform: 'none',
                  '&:hover': {
                    textDecoration: "underline"
                  }
                }}
              >
                <Typography color='black'>About</Typography>
              </Button>

              <Button
                color="inherit"
                sx={{
                  ml: 1,
                  textTransform: 'none',
                  '&:hover': {
                    textDecoration: "underline"
                  }
                }}
              >
                <Typography color='black' >Login</Typography>
              </Button>

              <Button
                color="inherit"
                sx={{
                  ml: 1,
                  textTransform: 'none',
                  
                }}
              >
                {/* <GoogleTranslate  sx={{width:"200px"}} /> */}
              </Button>
            </Box>

            {/* Component Mobile */}
            <Box sx={{ display: { xs: 'block', sm: 'none' } }}>
              <Box className='searchBox-size'
                component="form"
                sx={{

                  display: "flex",
                  alignItems: "center",
                  border: "1px solid #ccc",
                  borderRadius: 50,
                  mr: '-1rem'
                }}
              >
                <InputBase
                  sx={{ ml: 1, flex: 1 }}
                  placeholder="Search Products....."
                  inputProps={{ "aria-label": "search google maps" }}
                />
                <IconButton type="button" sx={{ p: "10px" }} aria-label="search">
                  <SearchIcon />
                </IconButton>
                <IconButton
                  color="primary"
                  sx={{ p: "10px" }}
                  aria-label="directions"
                ></IconButton>
              </Box>
            </Box>

            <Box sx={{ display: { xs: 'block', sm: 'none' } }}>
              <IconButton
                size="large"
                edge="end"
                color="black"
                aria-label="open drawer"
                onClick={handleMobileMenuOpen}
                sx={{ ml: 2 }}
              >
                {mobileMenuOpen ? <CloseIcon /> : <MenuIcon />}
              </IconButton>
            </Box>

          </Toolbar>


          {/* New Container for Next line Menus */}
          <Toolbar className='SecondNav' sx={{
            bgcolor: "#32d1b4;",
            borderRadius: "4rem",
            marginBottom: "0.5rem"
          }}
          >
            <Box sx={{ display: { xs: 'none', sm: 'flex' } }}>
              <Typography href="https://play.google.com/store/apps/details?id=com.geecomindia&hl=en">
                <img className="btn-play-design"
                  src="/btn-play.png"
                  alt="Logo"
                  style={{

                    height: 'auto',
                    display: 'flex',
                    alignItems: 'center',
                    maxWidth: '100%',
                  }}
                />
              </Typography>


              <Button
                sx={{

                  textTransform: 'none',
                  '&:hover': {
                    textDecoration: "underline black"
                  }
                }}

                onClick={handleSearchMenuOpen}
              >
                <Typography color="black">Search</Typography>
                <ArrowDropDownIcon className='ArrowDropDownIcon-color'></ArrowDropDownIcon>
              </Button>
              <Menu

                anchorEl={searchMenuOpen}
                open={searchMenuOpen}
                onClose={handleSearchMenuClose}
              >
                <MenuItem >Agri Output - Supply (Sell)</MenuItem>
                <MenuItem >Agri Output - Demand</MenuItem>
                <Divider sx={{ bgcolor: 'green', height: "2px" }} />
                <MenuItem >Agri Input - Supply (Sell)</MenuItem>
                <MenuItem >Agri Input - Demand (Buy)</MenuItem>
                <Divider sx={{ bgcolor: 'green', height: "2px" }} />
                <MenuItem >Rural Products - Supply</MenuItem>
                <MenuItem >Rural Products - Demand</MenuItem>
                <Divider sx={{ bgcolor: 'green', height: "2px" }} />
                <MenuItem >Special Offers</MenuItem>
                <Divider sx={{ bgcolor: 'green', height: "2px" }} />
                <MenuItem >Packet</MenuItem>
                <Divider sx={{ bgcolor: 'green', height: "2px" }} />
                <MenuItem >Find Worker</MenuItem>
                <MenuItem >Find Work</MenuItem>
              </Menu>



              <Button
                color="inherit"
                sx={{

                  textTransform: 'none',
                  '&:hover': {
                    textDecoration: "underline black"
                  }
                }}
                onClick={handleAgriOutputMenuOpen}
              >
                <Typography color="black" >Agri Output</Typography>
                <ArrowDropDownIcon className='ArrowDropDownIcon-color'></ArrowDropDownIcon>
              </Button>

              <Menu
                anchorEl={agriOutputMenuOpen}
                open={Boolean(agriOutputMenuOpen)}
                onClose={handleAgriOutputMenuClose}
              >
                <MenuItem >
                  Add Supply(Sell)
                </MenuItem>
                <MenuItem onClick={handleAgriOutputMenuClose}>
                  Supply(Sell)
                </MenuItem>
                <MenuItem >
                  Sell Via Bidding
                </MenuItem>
                <MenuItem onClick={handleAgriOutputMenuClose}>
                  Buy Via Bidding
                </MenuItem>
                <MenuItem onClick={handleAgriOutputMenuClose}>
                  Add Demand (Buy)
                </MenuItem>
                <MenuItem onClick={handleAgriOutputMenuClose}>
                  Add Packet
                </MenuItem>
                <MenuItem onClick={handleAgriOutputMenuClose}>
                  Demand Via
                </MenuItem>
              </Menu>

              <Button
                color="inherit"
                sx={{

                  textTransform: 'none',
                  '&:hover': {
                    textDecoration: "underline black"

                  }
                }}

                onClick={handleAgriInputMenuOpen}
              >
                <Typography color="black" >Agri Input</Typography>
                <ArrowDropDownIcon className='ArrowDropDownIcon-color'></ArrowDropDownIcon>
              </Button>
              <Menu
                anchorEl={agriInputMenuOpen}
                open={Boolean(agriInputMenuOpen)}
                onClose={handleAgriInputMenuClose}
              >
                <MenuItem>Add Supply(Sell)</MenuItem>
                <MenuItem>Add Demand(Buy)</MenuItem>
                <Divider sx={{ bgcolor: 'green', height: "2px" }} />
                <MenuItem>Search - Supply(Sell)</MenuItem>
                <MenuItem>Search - Demand(Buy)</MenuItem>
              </Menu>



              <Button
                color="inherit"
                sx={{

                  textTransform: 'none',
                  '&:hover': {
                    textDecoration: "underline black"

                  }
                }}

                onClick={handleRuralProductMenuOpen}
              >
                <Typography color="black" >Rural Products</Typography>
                <ArrowDropDownIcon className='ArrowDropDownIcon-color'></ArrowDropDownIcon>
              </Button>
              <Menu
                anchorEl={ruralProductMenuOpen}
                open={Boolean(ruralProductMenuOpen)}
                onClose={handleRuralProductMenuClose}
              >
                <MenuItem >Add Supply(Sell)</MenuItem>
                <MenuItem >Add Demand(Buy)</MenuItem>
                <Divider sx={{ bgcolor: 'green', height: "2px" }} />
                <MenuItem >Search - Supply(Sell)</MenuItem>
                <MenuItem>Search - Demand(Buy)</MenuItem>
              </Menu>

              <Button
                color="inherit"
                sx={{

                  textTransform: 'none',
                  '&:hover': {
                    textDecoration: "underline black"

                  }
                }}

                onClick={handleMarketOnGeecomMenuOpen}
              >
                <Typography color="black" >Market On GeeCom</Typography>
                <ArrowDropDownIcon className='ArrowDropDownIcon-color'></ArrowDropDownIcon>
              </Button>
              <Menu
                anchorEl={marketOnGeecomMenuOpen}
                open={Boolean(marketOnGeecomMenuOpen)}
                onClose={handleMarketOnGeecomMenuClose}
              >
                <MenuItem >Menu1</MenuItem>
                <MenuItem >Menu2</MenuItem>
              </Menu>

              <Button
                color="inherit"
                sx={{

                  textTransform: 'none',
                  '&:hover': {
                    textDecoration: "underline black"

                  }
                }}

                onClick={handleSellOnGeecomMenuOpen}
              >
                <Typography color="black" >Sell On GeeCom</Typography>
                <ArrowDropDownIcon className='ArrowDropDownIcon-color'></ArrowDropDownIcon>
              </Button>
              <Menu
                anchorEl={sellOnGeecomMenuOpen}
                open={Boolean(sellOnGeecomMenuOpen)}
                onClose={handleSellOnGeecomMenuClose}
              >
                <MenuItem >Menu1</MenuItem>
                <MenuItem >Menu2</MenuItem>
              </Menu>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>

      {/* Mobile Menu */}
      <Menu sx={{ mt: 7 }}
        anchorEl={null}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
        id="mobile-menu"
        keepMounted
        transformOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
        open={mobileMenuOpen}
        onClose={handleMobileMenuClose}
      >

        <MenuItem>
          <Button
            color="inherit"
            sx={{ textTransform: 'none', width: '90%', }}
          >
            <Typography >About</Typography>
          </Button>
        </MenuItem>

        <MenuItem>
          <Button
            color="inherit"
            sx={{ textTransform: 'none', width: '90%' }}
          >
            <Typography >Login</Typography>
          </Button>
        </MenuItem>

        <MenuItem onClick={handleMobileMenuClose}>
          <Button
            color="inherit"
            sx={{ textTransform: 'none', width: '90%' }}
          >
            <Typography >Translate</Typography>
          </Button>
        </MenuItem>

        <MenuItem >
          <Button
            color="inherit"
            sx={{ textTransform: 'none', width: '90%' }}
            onClick={handleAgriOutputMenuOpen}
          >
            <Typography >Agri Output</Typography>
            <ArrowDropDownIcon></ArrowDropDownIcon>
          </Button>
          <Menu
            anchorEl={agriOutputMenuOpen}
            open={Boolean(agriOutputMenuOpen)}
            onClose={handleAgriOutputMenuClose}
          >
            <MenuItem >
              Add Supply(Sell)
            </MenuItem>
            <MenuItem onClick={handleAgriOutputMenuClose}>
              Supply(Sell)
            </MenuItem>
            <MenuItem >
              Sell Via Bidding
            </MenuItem>
            <MenuItem onClick={handleAgriOutputMenuClose}>
              Buy Via Bidding
            </MenuItem>
            <MenuItem onClick={handleAgriOutputMenuClose}>
              Add Demand (Buy)
            </MenuItem>
            <MenuItem onClick={handleAgriOutputMenuClose}>
              Add Packet
            </MenuItem>
            <MenuItem onClick={handleAgriOutputMenuClose}>
              Demand Via
            </MenuItem>
          </Menu>
        </MenuItem>

        <MenuItem >
          <Button
            color="inherit"
            sx={{ textTransform: 'none', width: '90%' }}
            onClick={handleAgriInputMenuOpen}
          >
            <Typography>Agri Input</Typography>
            <ArrowDropDownIcon></ArrowDropDownIcon>
          </Button>
          <Menu
            anchorEl={agriInputMenuOpen}
            open={Boolean(agriInputMenuOpen)}
            onClose={handleAgriInputMenuClose}
          >
            <MenuItem >Add Supply(Sell)</MenuItem>
            <MenuItem >Add Demand(Buy)</MenuItem>
            <Divider sx={{ bgcolor: 'green', height: "2px" }} />
            <MenuItem>Search - Supply(Sell)</MenuItem>
            <MenuItem>Search - Demand(Buy)</MenuItem>
          </Menu>
        </MenuItem>

        <MenuItem >
          <Button
            color="inherit"
            sx={{ textTransform: 'none', width: '90%' }}
            onClick={handleRuralProductMenuOpen}
          >
            <Typography>Rural Products</Typography>
            <ArrowDropDownIcon></ArrowDropDownIcon>
          </Button>
          <Menu
            anchorEl={ruralProductMenuOpen}
            open={Boolean(ruralProductMenuOpen)}
            onClose={handleRuralProductMenuClose}
          >
            <MenuItem >Add Supply(Sell)</MenuItem>
            <MenuItem >Add Demand(Buy)</MenuItem>
            <Divider sx={{ bgcolor: 'green', height: "2px" }} />
            <MenuItem >Search - Supply(Sell)</MenuItem>
            <MenuItem>Search - Demand(Buy)</MenuItem>
          </Menu>
        </MenuItem>

        <MenuItem onClick={handleMobileMenuClose}>
          <Button
            color="inherit"
            sx={{ textTransform: 'none', width: '90%' }}
          >
            <Typography >Market On GeeCom</Typography>
          </Button>
        </MenuItem>

        <MenuItem onClick={handleMobileMenuClose}>
          <Button
            color="inherit"
            sx={{ textTransform: 'none', width: '90%' }}
          >
            <Typography >Sell On GeeCom</Typography>
          </Button>
        </MenuItem>
      </Menu>
    </Box>
  );
}