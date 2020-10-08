import React from "react";
import { CreateVaporTheme } from "./vapor-theme";
import "./styles.css";
import {
  ThemeProvider,
  createMuiTheme,
  withStyles,
  fade
} from "@material-ui/core/styles";
import Fab from "@material-ui/core/Fab";
import Button from "@material-ui/core/Button";
import Checkbox from "@material-ui/core/Checkbox";
import AddIcon from "@material-ui/icons/Add";
import DateFnsUtils from "@date-io/date-fns";
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker
} from "@material-ui/pickers";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";
import Select from "@material-ui/core/Select";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import Slider from "@material-ui/core/Slider";
import Switch from "@material-ui/core/Switch";
import TextField from "@material-ui/core/TextField";
import CssBaseline from "@material-ui/core/CssBaseline";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Breadcrumbs from "@material-ui/core/Breadcrumbs";
import Link from "@material-ui/core/Link";
import NavigateNextIcon from "@material-ui/icons/NavigateNext";
import CloseIcon from "@material-ui/icons/Close";
import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepButton from "@material-ui/core/StepButton";

import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Dialog from "@material-ui/core/Dialog";
import MuiDialogTitle from "@material-ui/core/DialogTitle";
import MuiDialogContent from "@material-ui/core/DialogContent";
import MuiDialogActions from "@material-ui/core/DialogActions";
import IconButton from "@material-ui/core/IconButton";
import Alert from "@material-ui/lab/Alert";
import Divider from "@material-ui/core/Divider";
import Snackbar from "@material-ui/core/Snackbar";
import { DataGrid } from "@material-ui/data-grid";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import InputBase from "@material-ui/core/InputBase";
import Badge from "@material-ui/core/Badge";
import Menu from "@material-ui/core/Menu";
import HomeIcon from "@material-ui/icons/Home";
import FolderIcon from "@material-ui/icons/Folder";
import EuroIcon from "@material-ui/icons/Euro";
import LocalShippingIcon from "@material-ui/icons/LocalShipping";
import AppsIcon from "@material-ui/icons/Apps";
import FormatAlignJustifyIcon from "@material-ui/icons/FormatAlignJustify";
import BarChartIcon from "@material-ui/icons/BarChart";
import SearchIcon from "@material-ui/icons/Search";
import AccountCircle from "@material-ui/icons/AccountCircle";
import MailIcon from "@material-ui/icons/Mail";
import NotificationsIcon from "@material-ui/icons/Notifications";
import MoreIcon from "@material-ui/icons/MoreVert";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import PrintIcon from "@material-ui/icons/Print";
import BorderAllIcon from "@material-ui/icons/BorderAll";
import HelpOutlineIcon from "@material-ui/icons/HelpOutline";
const vapor = CreateVaporTheme();
const theme = createMuiTheme(vapor);

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1
  },
  margin: {
    margin: theme.spacing(1)
  },
  container: {
    padding: theme.spacing(6, 0, 2)
  },
  paper: {
    margin: theme.spacing(2),
    padding: theme.spacing(2)
  },
  breadcrumbs: {
    display: "flex",
    justifyContent: "center",
    margin: theme.spacing(1)
  },
  grow: {
    flexGrow: 1
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  title: {
    display: "none",
    margin: theme.spacing(2),
    [theme.breakpoints.up("sm")]: {
      display: "block"
    }
  },
  search: {
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: fade(theme.palette.common.white, 0.25)
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(5),
      width: "auto"
    }
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  },
  inputRoot: {
    color: "inherit"
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch"
    }
  },
  sectionDesktop: {
    display: "none",
    [theme.breakpoints.up("md")]: {
      display: "flex"
    }
  },
  sectionMobile: {
    display: "flex",
    [theme.breakpoints.up("md")]: {
      display: "none"
    }
  }
}));

export default function App() {
  const classes = useStyles();
  const [valueTab, setValueTab] = React.useState(0);

  const handleChangeTab = (event, newValue) => {
    setValueTab(newValue);
  };
  const SearchButton = () => (
    <IconButton>
      <SearchIcon />
    </IconButton>
  );

  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const menuId = "primary-search-account-menu";
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{ vertical: "top", horizontal: "right" }}
      id={menuId}
      keepMounted
      transformOrigin={{ vertical: "top", horizontal: "right" }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
      <MenuItem onClick={handleMenuClose}>My account</MenuItem>
    </Menu>
  );

  const mobileMenuId = "primary-search-account-menu-mobile";
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{ vertical: "top", horizontal: "right" }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{ vertical: "top", horizontal: "right" }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem>
        <IconButton aria-label="show 4 new mails" color="inherit">
          <Badge badgeContent={4} color="secondary">
            <MailIcon />
          </Badge>
        </IconButton>
        <p>Messages</p>
      </MenuItem>
      <MenuItem>
        <IconButton aria-label="show 11 new notifications" color="inherit">
          <Badge badgeContent={11} color="secondary">
            <NotificationsIcon />
          </Badge>
        </IconButton>
        <p>Notifications</p>
      </MenuItem>
      <MenuItem onClick={handleProfileMenuOpen}>
        <IconButton
          aria-label="account of current user"
          aria-controls="primary-search-account-menu"
          aria-haspopup="true"
          color="inherit"
        >
          <AccountCircle />
        </IconButton>
        <p>Profile</p>
      </MenuItem>
    </Menu>
  );

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <div className={classes.grow}>
        <AppBar position="static">
          <Toolbar>
            <IconButton
              edge="start"
              className={classes.menuButton}
              color="inherit"
              aria-label="open drawer"
            >
              <HomeIcon />
            </IconButton>
            <IconButton
              edge="start"
              className={classes.menuButton}
              color="inherit"
              aria-label="open drawer"
            >
              <FolderIcon />
            </IconButton>
            <IconButton
              edge="start"
              className={classes.menuButton}
              color="inherit"
              aria-label="open drawer"
            >
              <EuroIcon />
            </IconButton>
            <IconButton
              edge="start"
              className={classes.menuButton}
              color="inherit"
              aria-label="open drawer"
            >
              <LocalShippingIcon />
            </IconButton>
            <IconButton
              edge="start"
              className={classes.menuButton}
              color="inherit"
              aria-label="open drawer"
            >
              <AppsIcon />
            </IconButton>
            <IconButton
              edge="start"
              className={classes.menuButton}
              color="inherit"
              aria-label="open drawer"
            >
              <FormatAlignJustifyIcon />
            </IconButton>
            <IconButton
              edge="start"
              className={classes.menuButton}
              color="inherit"
              aria-label="open drawer"
            >
              <BarChartIcon />
            </IconButton>
            <div className={classes.search}>
              <div className={classes.searchIcon}>
                <SearchIcon />
              </div>
              <InputBase
                placeholder="Search…"
                classes={{
                  root: classes.inputRoot,
                  input: classes.inputInput
                }}
                inputProps={{ "aria-label": "search" }}
              />
            </div>
            <div className={classes.grow} />
            <div className={classes.sectionDesktop}>
              <IconButton aria-label="show 4 new mails" color="inherit">
                <Badge badgeContent={4} color="secondary">
                  <MailIcon />
                </Badge>
              </IconButton>
              <IconButton
                aria-label="show 17 new notifications"
                color="inherit"
              >
                <Badge badgeContent={17} color="secondary">
                  <NotificationsIcon />
                </Badge>
              </IconButton>
              <IconButton
                edge="end"
                aria-label="account of current user"
                aria-controls={menuId}
                aria-haspopup="true"
                onClick={handleProfileMenuOpen}
                color="inherit"
              >
                <AccountCircle />
              </IconButton>

              <Typography className={classes.title} variant="h6" noWrap>
                Reviso
              </Typography>
            </div>
            <div className={classes.sectionMobile}>
              <IconButton
                aria-label="show more"
                aria-controls={mobileMenuId}
                aria-haspopup="true"
                onClick={handleMobileMenuOpen}
                color="inherit"
              >
                <MoreIcon />
              </IconButton>
            </div>
          </Toolbar>
        </AppBar>
        {renderMobileMenu}
        {renderMenu}
      </div>
      {/* Main content */}
      <div className="App">
        <Container maxWidth="xl" className={classes.containe}>
          <Grid container spacing={3} direction="column">
            <Paper className={classes.paper} elevation={3}>
              <Grid item xs={12}>
                <Grid item xs={12} container spacing={2}>
                  <Grid item xs={3}>
                    <IconButton
                      edge="start"
                      color="inherit"
                      aria-label="back arrow"
                    >
                      <ArrowBackIcon />
                    </IconButton>
                  </Grid>
                  <Grid item xs={6}>
                    <Typography variant="h1">Sales documents</Typography>
                    <Breadcrumbs
                      className={classes.breadcrumbs}
                      separator={<NavigateNextIcon fontSize="small" />}
                      aria-label="breadcrumb"
                    >
                      <Link color="inherit" href="/" onClick={null}>
                        Home
                      </Link>
                      <Link
                        color="inherit"
                        href="/getting-started/installation/"
                        onClick={null}
                      >
                        Sales
                      </Link>
                      <Typography color="textPrimary">
                        Sales documents
                      </Typography>
                    </Breadcrumbs>
                  </Grid>
                  <Grid item xs={3}>
                    <IconButton
                      edge="start"
                      color="inherit"
                      aria-label="back arrow"
                    >
                      <PrintIcon />
                    </IconButton>
                    <IconButton
                      edge="start"
                      color="inherit"
                      aria-label="back arrow"
                    >
                      <BorderAllIcon />
                    </IconButton>
                    <IconButton
                      edge="start"
                      color="inherit"
                      aria-label="back arrow"
                    >
                      <HelpOutlineIcon />
                    </IconButton>
                  </Grid>
                </Grid>
                <Divider />
                <Grid item xs={12} container className={classes.margin}>
                  <Grid item xs={12}>
                    <Tabs
                      value={valueTab}
                      onChange={handleChangeTab}
                      indicatorColor="primary"
                      textColor="primary"
                      left
                    >
                      <Tab label="Item One" />
                      <Tab label="Item Two" />
                      <Tab label="Item Three" />
                    </Tabs>
                    <Divider />
                  </Grid>
                </Grid>
                <Grid item xs={12} container className={classes.margin}>
                  <Grid item xs={2}>
                    <Button
                      variant="contained"
                      color="primary"
                      size="large"
                      className={classes.margin}
                    >
                      New Invoices
                    </Button>
                  </Grid>
                  <Grid item xs={8}></Grid>
                  <Grid item xs={2}>
                    <TextField
                      id="standard-name"
                      variant="outlined"
                      label="Name"
                      value="Search"
                      InputProps={{ endAdornment: <SearchButton /> }}
                    />
                  </Grid>
                </Grid>

                <Grid item xs={12} container>
                  <Grid item xs={12} className={classes.margin}>
                    <TableContainer>
                      <Table
                        className={classes.table}
                        aria-label="spanning table"
                      >
                        <TableHead>
                          <TableRow>
                            <TableCell align="center" colSpan={3}>
                              Details
                            </TableCell>
                            <TableCell align="right">Price</TableCell>
                          </TableRow>
                          <TableRow>
                            <TableCell>Desc</TableCell>
                            <TableCell align="right">Qty.</TableCell>
                            <TableCell align="right">Unit</TableCell>
                            <TableCell align="right">Sum</TableCell>
                          </TableRow>
                        </TableHead>
                        <TableBody>
                          <TableRow key={0}>
                            <TableCell>{0}</TableCell>
                            <TableCell align="right">4</TableCell>
                            <TableCell align="right">3</TableCell>
                            <TableCell align="right">34</TableCell>
                          </TableRow>
                          <TableRow key={1}>
                            <TableCell>{1}</TableCell>
                            <TableCell align="right">5</TableCell>
                            <TableCell align="right">5</TableCell>
                            <TableCell align="right">344</TableCell>
                          </TableRow>
                          <TableRow>
                            <TableCell rowSpan={3} />
                            <TableCell colSpan={2}>Subtotal</TableCell>
                            <TableCell align="right">5566</TableCell>
                          </TableRow>
                          <TableRow>
                            <TableCell>Tax</TableCell>
                            <TableCell align="right"> "23%"</TableCell>
                            <TableCell align="right">432</TableCell>
                          </TableRow>
                          <TableRow>
                            <TableCell colSpan={2}>Total</TableCell>
                            <TableCell align="right">333</TableCell>
                          </TableRow>
                        </TableBody>
                      </Table>
                    </TableContainer>
                  </Grid>
                </Grid>
              </Grid>
            </Paper>
          </Grid>
        </Container>
      </div>
    </ThemeProvider>
  );
}
