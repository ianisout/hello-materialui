import { useState } from 'react';
import './App.css';
import {
  Button,
  ButtonGroup,
  Checkbox,
  FormControlLabel,
  TextField,
  makeStyles,
  ThemeProvider,
  createTheme,
  Typography,
  Container,
  Paper,
  Grid,
  AppBar,
  Toolbar,
  IconButton
} from '@material-ui/core';
import { Save, Delete, Menu } from '@material-ui/icons';
import { green, orange } from '@material-ui/core/colors';
import 'fontsource-roboto';

const useStyles = makeStyles({
  root: {
    background: 'linear-gradient(45deg, #FE6B8B, #FF8E53)',
    border: 0,
    borderRadius: 15,
    marginBottom: 15,
    color: 'white',
    padding: '5px 30px',
  },
});

// check documentation: strict nesting order and rules
const theme = createTheme({
  typography: {
    h3: {
      fontSize: 36,
      marginBottom: 15,
    },
  },
  /* palette: {
    primary: {
      main: green[400],
    },
    secondary: {
      main: orange[400],
    },
  }, */
});

function ButtonStyled() {
  const classes = useStyles();
  return <Button className={classes.root}>Test Styled Button</Button>;
}

function CheckboxExample() {
  const [checked, setChecked] = useState(true);
  return (
    <FormControlLabel
      control={
        <Checkbox
          checked={checked}
          icon={<Delete />}
          checkedIcon={<Save />}
          onChange={(e) => setChecked(e.target.checked)}
          /* color="primary" */
          inputProps={{
            'aria-label': 'secondary checkbox',
          }}
        />
      }
      label="Testing checkbox"
    />
  );
}

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Container maxWidth="xs">
        <div className="App">
          <header className="App-header">
            <AppBar color="primary">
              <Toolbar>
                <IconButton>
                  <Menu/>
                </IconButton>
                <Typography variant="h6">
                  MUI Themeing
                </Typography>
                <Button>Login</Button>
              </Toolbar>
            </AppBar>
            <Typography
              variant="h3"
              component="div" // useful to apply styles from other components
            >
              Welcome to MUI
            </Typography>
            <Typography
              variant="subtitle1"
              /* variant="body1" */
            >
              Learn how to use MUI
            </Typography>

            <Grid container spacing={3} justify="center">
              <Grid item xs={3} sm={6}>
                {/* in the 'xs', grid will span 3 units (max 12) */}
                {/* passing only "xs" will use as much room as possible */}
                <Paper
                  style={{ height: 75, width: '100%', marginBottom: 15 }}
                />
              </Grid>
              <Grid item xs={3} sm={6}>
                <Paper
                  style={{ height: 75, width: '100%', marginBottom: 15 }}
                />
              </Grid>
              <Grid item xs={3} sm={6}>
                <Paper
                  style={{ height: 75, width: '100%', marginBottom: 15 }}
                />
              </Grid>
            </Grid>

            <ButtonGroup variant="contained">
              <Button
                endIcon={<Save />}
                onClick={() => alert('hello')}
                href="#"
                /* variant="contained" */
                color="primary"
                style={{
                  fontSize: 18,
                }}
              >
                {' '}
                Hello world
              </Button>
              <Button
                startIcon={<Delete />}
                href="#"
                color="secondary"
                size="small"
              >
                {' '}
                Hello world 2
              </Button>
            </ButtonGroup>

            <CheckboxExample />

            <ButtonStyled />

            <TextField
              variant="filled"
              // variant="outlined"
              color="secondary"
              // type="time"
              // type="date"
              // label="The Time"

              type="email"
              placeholder="test@test.com"
            />
          </header>
        </div>
      </Container>
    </ThemeProvider>
  );
}

export default App;
