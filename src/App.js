import React from "react";
import "./styles.css";
import { ThemeProvider, createMuiTheme } from "@material-ui/core/styles";
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
const theme = createMuiTheme();

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1
  }
}));

export default function App() {
  const classes = useStyles();
  const [value, setValue] = React.useState("female");

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
                    <Fab color="primary" aria-label="add">
                      <AddIcon />
                    </Fab>
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
