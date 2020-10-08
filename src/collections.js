// {/*
//   const columns = [
//   { field: "id", headerName: "ID", width: 70 },
//   { field: "firstName", headerName: "First name", width: 130 },
//   { field: "lastName", headerName: "Last name", width: 130 },
//   {
//     field: "age",
//     headerName: "Age",
//     type: "number",
//     width: 90
//   },
//   {
//     field: "fullName",
//     headerName: "Full name",
//     description: "This column has a value getter and is not sortable.",
//     sortable: false,
//     width: 160,
//     valueGetter: (params) =>
//       `${params.getValue("firstName") || ""} ${
//         params.getValue("lastName") || ""
//       }`
//   }
// ];

// const rows = [
//   { id: 1, lastName: "Snow", firstName: "Jon", age: 35 },
//   { id: 2, lastName: "Lannister", firstName: "Cersei", age: 42 },
//   { id: 3, lastName: "Lannister", firstName: "Jaime", age: 45 },
//   { id: 4, lastName: "Stark", firstName: "Arya", age: 16 },
//   { id: 5, lastName: "Targaryen", firstName: "Daenerys", age: null },
//   { id: 6, lastName: "Melisandre", firstName: null, age: 150 },
//   { id: 7, lastName: "Clifford", firstName: "Ferrara", age: 44 },
//   { id: 8, lastName: "Frances", firstName: "Rossini", age: 36 },
//   { id: 9, lastName: "Roxie", firstName: "Harvey", age: 65 }
// ];

// const DialogTitle = withStyles(styles)((props) => {
//   const { children, classes, onClose, ...other } = props;
//   return (
//     <MuiDialogTitle disableTypography className={classes.root} {...other}>
//       <Typography variant="h6">{children}</Typography>
//       {onClose ? (
//         <IconButton
//           aria-label="close"
//           className={classes.closeButton}
//           onClick={onClose}
//         >
//           <CloseIcon />
//         </IconButton>
//       ) : null}
//     </MuiDialogTitle>
//   );
// });

// const DialogContent = withStyles((theme) => ({
//   root: {
//     padding: theme.spacing(2)
//   }
// }))(MuiDialogContent);

// const DialogActions = withStyles((theme) => ({
//   root: {
//     margin: 0,
//     padding: theme.spacing(1)
//   }
// }))(MuiDialogActions);

//   <Grid item xs={12} container>
// <Grid item xs={12}>
//   <Button
//     variant="contained"
//     color="primary"
//     size="small"
//     className={classes.margin}
//   >
//       primary
//   </Button>
//   <Button
//     variant="contained"
//     color="primary"
//     size="medium"
//     className={classes.margin}
//   >
//       primary
//   </Button>
//   <Button
//     variant="contained"
//     color="primary"
//     size="large"
//     className={classes.margin}
//   >
//       primary
//   </Button>
//   <Button
//     variant="contained"
//     color="primary"
//     size="large"
//     className={classes.margin}
//     disabled
//   >
//       disabled primary
//   </Button>
// </Grid>
// <Grid item xs={12}>
//   <Button
//     variant="outlined"
//     color="secondary"
//     size="small"
//     className={classes.margin}
//   >
//       primary
//   </Button>
//   <Button
//     variant="outlined"
//     color="secondary"
//     size="medium"
//     className={classes.margin}
//   >
//       primary
//   </Button>
//   <Button
//     variant="outlined"
//     color="secondary"
//     size="large"
//     className={classes.margin}
//   >
//       primary
//   </Button>
//   <Button
//     variant="outlined"
//     color="secondary"
//     size="large"
//     className={classes.margin}
//     disabled
//   >
//       disabled primary
//   </Button>
// </Grid>
// </Grid>
// <Grid item xs={12} container className={classes.margin}>
// <Grid item xs={12}>
//   <Checkbox
//     checked={checked}
//     color="primary"
//     onChange={handleChangeCheckBox}
//     inputProps={{ "aria-label": "secondary checkbox" }}
//   />
//   <Checkbox
//     checked={checked}
//     color="primary"
//     disabled
//     onChange={handleChangeCheckBox}
//     inputProps={{ "aria-label": "secondary checkbox" }}
//   />
//   <Checkbox
//     checked={false}
//     color="primary"
//     disabled
//     onChange={handleChangeCheckBox}
//     inputProps={{ "aria-label": "secondary checkbox" }}
//   />
//   <Checkbox
//     checked={true}
//     onChange={handleChangeCheckBox}
//     name="checkedF"
//     indeterminate
//   />
// </Grid>
// </Grid>
// <Grid item xs={12} container className={classes.margin}>
// <Grid item xs={12}>
//   <Fab color="primary" aria-label="add">
//     <AddIcon />
//   </Fab>
// </Grid>
// </Grid>
// <Grid item xs={12} container>
// <Grid item xs={12}>
//   <MuiPickersUtilsProvider utils={DateFnsUtils}>
//     <KeyboardDatePicker
//       margin="normal"
//       id="date-picker-dialog"
//       label="Date picker dialog"
//       format="MM/dd/yyyy"
//       value={selectedDate}
//       onChange={handleDateChange}
//       KeyboardButtonProps={{
//         "aria-label": "change date"
//       }}
//     />
//   </MuiPickersUtilsProvider>
// </Grid>
// </Grid>
// <Grid item xs={12} container>
// <Grid item xs={12}>
//   <FormControl component="fieldset">
//     <FormLabel component="legend">Gender</FormLabel>
//     <RadioGroup
//       aria-label="gender"
//       name="gender1"
//       value={value}
//       onChange={handleChange}
//     >
//       <FormControlLabel
//         value="female"
//         control={<Radio />}
//         label="Female"
//         color="primary"
//       />
//       <FormControlLabel
//         value="male"
//         control={<Radio />}
//         label="Male"
//         color="primary"
//       />
//       <FormControlLabel
//         value="other"
//         control={<Radio />}
//         label="Other"
//         color="primary"
//       />
//       <FormControlLabel
//         value="disabled"
//         disabled
//         color="primary"
//         control={<Radio />}
//         label="(Disabled option)"
//       />
//     </RadioGroup>
//   </FormControl>
// </Grid>
// </Grid>
// <Grid item xs={12} container>
// <Grid item xs={12}>
//   <FormControl variant="outlined">
//     <InputLabel id="demo-simple-select-outlined-label">
//           Age
//     </InputLabel>
//     <Select
//       labelId="demo-simple-select-outlined-label"
//       id="demo-simple-select-outlined"
//       value={age}
//       onChange={handleChangeAge}
//       label="Age"
//     >
//       <MenuItem value="">
//         <em>None</em>
//       </MenuItem>
//       <MenuItem value={10}>Ten</MenuItem>
//       <MenuItem value={20}>Twenty</MenuItem>
//       <MenuItem value={30}>Thirty</MenuItem>
//     </Select>
//   </FormControl>
// </Grid>
// </Grid>
// <Grid item xs={12} container>
// <Grid item xs={12}>
//   {/* <Slider
//     defaultValue={20}
//     getAriaValueText={valuetext}
//     aria-labelledby="discrete-slider-custom"
//     step={10}
//     valueLabelDisplay="auto"
//     marks={marks}
//   /> */}
// </Grid>
// </Grid>
// <Grid item xs={12} container>
// <Grid item xs={12}>
//   <Switch
//     checked={true}
//     onChange={null}
//     color="primary"
//     name="checkedB"
//     inputProps={{ "aria-label": "primary checkbox" }}
//   />
// </Grid>
// </Grid>
// <Grid item xs={12} container>
// <Grid item xs={12}>
//   <Switch
//     checked={false}
//     onChange={null}
//     color="primary"
//     name="checkedB"
//     inputProps={{ "aria-label": "primary checkbox" }}
//   />
// </Grid>
// </Grid>
// <Grid item xs={12} container>
// <Grid item xs={12}>
//   <TextField
//     id="outlined-basic"
//     label="Outlined"
//     variant="outlined"
//   />
// </Grid>
// </Grid>
// <Grid item xs={12} container>
// {/* Breadcrumbs */}
// <Grid item xs={12}>
//   <Breadcrumbs
//     separator={<NavigateNextIcon fontSize="small" />}
//     aria-label="breadcrumb"
//   >
//     <Link color="inherit" href="/" onClick={null}>
//           Material-UI
//     </Link>
//     <Link
//       color="inherit"
//       href="/getting-started/installation/"
//       onClick={null}
//     >
//           Core
//     </Link>
//     <Typography color="textPrimary">Breadcrumb</Typography>
//   </Breadcrumbs>
// </Grid>
// </Grid>
// <Grid item xs={12} container>
// <Grid item xs={12}>
//   <Stepper alternativeLabel nonLinear activeStep={3}>
//     <Step key={"Step 1"}>
//       <StepButton onClick={null} completed={true}>
//             Step 1
//       </StepButton>
//     </Step>
//     <Step key={"Step 2"}>
//       <StepButton onClick={null} completed={true}>
//             Step 2
//       </StepButton>
//     </Step>
//     <Step key={"Step 3"}>
//       <StepButton onClick={null} completed={false}>
//             Step 3
//       </StepButton>
//     </Step>
//   </Stepper>
// </Grid>
// </Grid>
// <Grid item xs={12} container>
// <Paper className={classes.root}>
//   <Grid item xs={12} className={classes.margin}>
//     <Tabs
//       value={valueTab}
//       onChange={handleChangeTab}
//       indicatorColor="primary"
//       textColor="primary"
//       centered
//     >
//       <Tab label="Item One" />
//       <Tab label="Item Two" />
//       <Tab label="Item Three" />
//     </Tabs>
//     <Divider />
//   </Grid>
// </Paper>
// </Grid>
// <Grid item xs={12} container>
// <Grid item xs={12} className={classes.margin}>
//   <Alert variant="outlined" severity="error">
//         This is an error alert — check it out!
//   </Alert>
//   <Alert variant="outlined" severity="warning">
//         This is a warning alert — check it out!
//   </Alert>
//   <Alert variant="outlined" severity="info">
//         This is an info alert — check it out!
//   </Alert>
//   <Alert variant="outlined" severity="success">
//         This is a success alert — check it out!
//   </Alert>
// </Grid>
// </Grid>
// <Grid item xs={12} container className={classes.margin}>
// <Grid item xs={12}>
//   <Button
//     variant="outlined"
//     color="primary"
//     onClick={handleClickOpen}
//   >
//         Open dialog
//   </Button>
//   <Dialog
//     onClose={handleClose}
//     aria-labelledby="customized-dialog-title"
//     open={open}
//   >
//     <DialogTitle
//       id="customized-dialog-title"
//       onClose={handleClose}
//     >
//           Modal title
//     </DialogTitle>
//     <DialogContent dividers>
//       <Typography gutterBottom>
//             Cras mattis consectetur purus sit amet fermentum. Cras
//             justo odio, dapibus ac facilisis in, egestas eget
//             quam. Morbi leo risus, porta ac consectetur ac,
//             vestibulum at eros.
//       </Typography>
//       <Typography gutterBottom>
//             Praesent commodo cursus magna, vel scelerisque nisl
//             consectetur et. Vivamus sagittis lacus vel augue
//             laoreet rutrum faucibus dolor auctor.
//       </Typography>
//       <Typography gutterBottom>
//             Aenean lacinia bibendum nulla sed consectetur.
//             Praesent commodo cursus magna, vel scelerisque nisl
//             consectetur et. Donec sed odio dui. Donec ullamcorper
//             nulla non metus auctor fringilla.
//       </Typography>
//     </DialogContent>
//     <DialogActions>
//       <Button autoFocus onClick={handleClose} color="primary">
//             Save changes
//       </Button>
//     </DialogActions>
//   </Dialog>
// </Grid>
// </Grid>
// <Grid item xs={12} container className={classes.margin}>
// <Grid item xs={12}>
//   <div style={{ height: 400, width: "100%" }}>
//     <DataGrid
//       rows={rows}
//       columns={columns}
//       pageSize={5}
//       checkboxSelection
//     />
//   </div>
// </Grid>
// </Grid>

// <Grid item xs={12} container>
// <Grid item xs={12}>
//   {/* Stuff */}
// </Grid>
// </Grid> */}
