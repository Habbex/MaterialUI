import React from "react";
import "./styles.css";
import {
  ThemeProvider,
  createMuiTheme,
  withStyles
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
import AppBar from "@material-ui/core/AppBar";
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
const theme = createMuiTheme();

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1
  }
}));

const styles = (theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(2)
  },
  closeButton: {
    position: "absolute",
    right: theme.spacing(1),
    top: theme.spacing(1),
    color: theme.palette.grey[500]
  }
});

const DialogTitle = withStyles(styles)((props) => {
  const { children, classes, onClose, ...other } = props;
  return (
    <MuiDialogTitle disableTypography className={classes.root} {...other}>
      <Typography variant="h6">{children}</Typography>
      {onClose ? (
        <IconButton
          aria-label="close"
          className={classes.closeButton}
          onClick={onClose}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
    </MuiDialogTitle>
  );
});

const DialogContent = withStyles((theme) => ({
  root: {
    padding: theme.spacing(2)
  }
}))(MuiDialogContent);

const DialogActions = withStyles((theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(1)
  }
}))(MuiDialogActions);

export default function App() {
  const classes = useStyles();
  const [value, setValue] = React.useState("female");
  const [valueTab, setValueTab] = React.useState(0);
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  const [selectedDate, setSelectedDate] = React.useState(
    new Date("2014-08-18T21:11:54")
  );

  const [age, setAge] = React.useState("");

  const handleChangeAge = (event) => {
    setAge(event.target.value);
  };

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };
  const handleChangeTab = (event, newValue) => {
    setValueTab(newValue);
  };

  const marks = [
    {
      value: 0,
      label: "0°C"
    },
    {
      value: 20,
      label: "20°C"
    },
    {
      value: 37,
      label: "37°C"
    },
    {
      value: 100,
      label: "100°C"
    }
  ];

  function valuetext(value) {
    return `${value}°C`;
  }

  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <Container maxWidth="md">
          <Grid container spacing={3} direction="column">
            <Grid item xs={12}>
              <Paper className={classes.paper}>
                <Grid item xs={12} container>
                  <Grid item xs={12}>
                    <Typography variant="h1">This is an H1</Typography>
                    <Typography variant="h2">This is an H2</Typography>
                  </Grid>
                </Grid>
                <Grid item xs={12} container>
                  <Grid item xs={12}>
                    <Button variant="contained">Default</Button>
                    <Button variant="contained" color="primary">
                      Primary
                    </Button>
                  </Grid>
                </Grid>
                <Grid item xs={12} container>
                  <Grid item xs={12}>
                    <Checkbox
                      checked={false}
                      onChange={null}
                      inputProps={{ "aria-label": "primary checkbox" }}
                    />
                    <Checkbox
                      checked={true}
                      onChange={null}
                      inputProps={{ "aria-label": "primary checkbox" }}
                    />
                  </Grid>
                </Grid>
                <Grid item xs={12} container>
                  <Grid item xs={12}>
                    <Fab color="primary" aria-label="add">
                      <AddIcon />
                    </Fab>
                  </Grid>
                </Grid>
                <Grid item xs={12} container>
                  <Grid item xs={12}>
                    <MuiPickersUtilsProvider utils={DateFnsUtils}>
                      <KeyboardDatePicker
                        margin="normal"
                        id="date-picker-dialog"
                        label="Date picker dialog"
                        format="MM/dd/yyyy"
                        value={selectedDate}
                        onChange={handleDateChange}
                        KeyboardButtonProps={{
                          "aria-label": "change date"
                        }}
                      />
                    </MuiPickersUtilsProvider>
                  </Grid>
                </Grid>
                <Grid item xs={12} container>
                  <Grid item xs={12}>
                    <FormControl component="fieldset">
                      <FormLabel component="legend">Gender</FormLabel>
                      <RadioGroup
                        aria-label="gender"
                        name="gender1"
                        value={value}
                        onChange={handleChange}
                      >
                        <FormControlLabel
                          value="female"
                          control={<Radio />}
                          label="Female"
                        />
                        <FormControlLabel
                          value="male"
                          control={<Radio />}
                          label="Male"
                        />
                        <FormControlLabel
                          value="other"
                          control={<Radio />}
                          label="Other"
                        />
                        <FormControlLabel
                          value="disabled"
                          disabled
                          control={<Radio />}
                          label="(Disabled option)"
                        />
                      </RadioGroup>
                    </FormControl>
                  </Grid>
                </Grid>
                <Grid item xs={12} container>
                  <Grid item xs={12}>
                    <FormControl variant="outlined">
                      <InputLabel id="demo-simple-select-outlined-label">
                        Age
                      </InputLabel>
                      <Select
                        labelId="demo-simple-select-outlined-label"
                        id="demo-simple-select-outlined"
                        value={age}
                        onChange={handleChangeAge}
                        label="Age"
                      >
                        <MenuItem value="">
                          <em>None</em>
                        </MenuItem>
                        <MenuItem value={10}>Ten</MenuItem>
                        <MenuItem value={20}>Twenty</MenuItem>
                        <MenuItem value={30}>Thirty</MenuItem>
                      </Select>
                    </FormControl>
                  </Grid>
                </Grid>
                <Grid item xs={12} container>
                  <Grid item xs={12}>
                    <Slider
                      defaultValue={20}
                      getAriaValueText={valuetext}
                      aria-labelledby="discrete-slider-custom"
                      step={10}
                      valueLabelDisplay="auto"
                      marks={marks}
                    />
                  </Grid>
                </Grid>
                <Grid item xs={12} container>
                  <Grid item xs={12}>
                    <Switch
                      checked={true}
                      onChange={null}
                      color="primary"
                      name="checkedB"
                      inputProps={{ "aria-label": "primary checkbox" }}
                    />
                  </Grid>
                </Grid>
                <Grid item xs={12} container>
                  <Grid item xs={12}>
                    <Switch
                      checked={false}
                      onChange={null}
                      color="primary"
                      name="checkedB"
                      inputProps={{ "aria-label": "primary checkbox" }}
                    />
                  </Grid>
                </Grid>
                <Grid item xs={12} container>
                  <Grid item xs={12}>
                    <TextField
                      id="outlined-basic"
                      label="Outlined"
                      variant="outlined"
                    />
                  </Grid>
                </Grid>
                <Grid item xs={12} container>
                  <Grid item xs={12}>
                    <Breadcrumbs
                      separator={<NavigateNextIcon fontSize="small" />}
                      aria-label="breadcrumb"
                    >
                      <Link color="inherit" href="/" onClick={null}>
                        Material-UI
                      </Link>
                      <Link
                        color="inherit"
                        href="/getting-started/installation/"
                        onClick={null}
                      >
                        Core
                      </Link>
                      <Typography color="textPrimary">Breadcrumb</Typography>
                    </Breadcrumbs>
                  </Grid>
                </Grid>
                <Grid item xs={12} container>
                  <Grid item xs={12}>
                    <Stepper alternativeLabel nonLinear activeStep={3}>
                      <Step key={"Step 1"}>
                        <StepButton onClick={null} completed={true}>
                          Step 1
                        </StepButton>
                      </Step>
                      <Step key={"Step 2"}>
                        <StepButton onClick={null} completed={true}>
                          Step 2
                        </StepButton>
                      </Step>
                      <Step key={"Step 3"}>
                        <StepButton onClick={null} completed={false}>
                          Step 3
                        </StepButton>
                      </Step>
                    </Stepper>
                  </Grid>
                </Grid>
                <Grid item xs={12} container>
                  <Paper className={classes.root}>
                    <Grid item xs={12}>
                      <Tabs
                        value={valueTab}
                        onChange={handleChangeTab}
                        indicatorColor="primary"
                        textColor="primary"
                        centered
                      >
                        <Tab label="Item One" />
                        <Tab label="Item Two" />
                        <Tab label="Item Three" />
                      </Tabs>
                      <Divider />
                    </Grid>
                  </Paper>
                </Grid>
                <Grid item xs={12} container>
                  <Grid item xs={12}>
                    <Alert variant="outlined" severity="error">
                      This is an error alert — check it out!
                    </Alert>
                    <Alert variant="outlined" severity="warning">
                      This is a warning alert — check it out!
                    </Alert>
                    <Alert variant="outlined" severity="info">
                      This is an info alert — check it out!
                    </Alert>
                    <Alert variant="outlined" severity="success">
                      This is a success alert — check it out!
                    </Alert>
                  </Grid>
                </Grid>
                <Grid item xs={12} container>
                  <Grid item xs={12}>
                    <Button
                      variant="outlined"
                      color="primary"
                      onClick={handleClickOpen}
                    >
                      Open dialog
                    </Button>
                    <Dialog
                      onClose={handleClose}
                      aria-labelledby="customized-dialog-title"
                      open={open}
                    >
                      <DialogTitle
                        id="customized-dialog-title"
                        onClose={handleClose}
                      >
                        Modal title
                      </DialogTitle>
                      <DialogContent dividers>
                        <Typography gutterBottom>
                          Cras mattis consectetur purus sit amet fermentum. Cras
                          justo odio, dapibus ac facilisis in, egestas eget
                          quam. Morbi leo risus, porta ac consectetur ac,
                          vestibulum at eros.
                        </Typography>
                        <Typography gutterBottom>
                          Praesent commodo cursus magna, vel scelerisque nisl
                          consectetur et. Vivamus sagittis lacus vel augue
                          laoreet rutrum faucibus dolor auctor.
                        </Typography>
                        <Typography gutterBottom>
                          Aenean lacinia bibendum nulla sed consectetur.
                          Praesent commodo cursus magna, vel scelerisque nisl
                          consectetur et. Donec sed odio dui. Donec ullamcorper
                          nulla non metus auctor fringilla.
                        </Typography>
                      </DialogContent>
                      <DialogActions>
                        <Button autoFocus onClick={handleClose} color="primary">
                          Save changes
                        </Button>
                      </DialogActions>
                    </Dialog>
                  </Grid>
                </Grid>
                <Grid item xs={12} container>
                  <Grid item xs={12}>
                    {/* Stuff */}
                  </Grid>
                </Grid>
                <Grid item xs={12} container>
                  <Grid item xs={12}>
                    {/* Stuff */}
                  </Grid>
                </Grid>
                <Grid item xs={12} container>
                  <Grid item xs={12}>
                    {/* Stuff */}
                  </Grid>
                </Grid>
              </Paper>
            </Grid>
          </Grid>
        </Container>
      </div>
    </ThemeProvider>
  );
}
