import "./App.css";
import { useState } from "react";
import {
  AppBar,
  Box,
  Button,
  ButtonGroup,
  Checkbox,
  Container,
  MenuItem,
  Radio,
  Select,
  Slider,
  Switch,
  Tab,
  Tabs,
  TextField,
} from "@material-ui/core";
import { Delete, Favorite, FavoriteBorder } from "@material-ui/icons";
function App() {
  const [course, setcourse] = useState();
  const updateValue = (e) => {
    setcourse(e.target.value);
  };
  const [val, setVal] = useState([40, 100]);
  const updateval = (e, val) => {
    setVal(val);
    console.log(val);
  };
  const mark = [
    {
      value: 0,
      label: "Start",
    },
    {
      value: 100,
      label: "Middle",
    },
    {
      value: 200,
      label: "End",
    },
  ];
  const [color, setColor] = useState("primary");
  const [name, setname] = useState([]);
  const [gender, setGender] = useState("");
  const [value, setvalue] = useState(0);
  function custom() {
    setColor("secondary");
    // alert('Button Clicked');
  }
  const getSwitchvalue = (e, val) => {
    console.log(val);
  };
  const getData = (e) => {
    console.log(e.target.value);
  };
  function checkbox(e) {
    let data = name;
    data.push(e.target.value);
    console.log(data);
  }
  function testfunction(e) {
    console.log(e.target.value);
    setGender(e.target.value);
  }
  function getslidervalue(e, value) {
    console.log(value);
  }
  const Handletabs = (e, val) => {
    setvalue(val);
    console.log(val);
  };
  return (
    <div className="App">
      <h1>React Mui</h1>
      <Button
        variant="contained"
        color={color}
        onClick={custom}
        startIcon={<Delete />}
      >
        Click Material
      </Button>
      <Button>One</Button>
      <Button>Two</Button>
      <Button>Three</Button>
      <ButtonGroup color="secondary" variant="contained">
        <Button>One</Button>
        <Button>Two</Button>
        <Button>Three</Button>
      </ButtonGroup>
      <h1>React Material UI/Checkbox</h1>
      <Checkbox color="primary" value="Nikhil" onChange={checkbox} />
      <Checkbox color="primary" value="Nikhil" onChange={checkbox} />
      <Checkbox
        color="primary"
        value="Nikhil"
        onChange={checkbox}
        icon={<FavoriteBorder />}
        checkedIcon={<Favorite />}
      />
      <h1>React Material UI | Radio Button</h1>
      <div>
        <Radio
          color="primary"
          value="Male"
          checked={gender === "Male"}
          onChange={testfunction}
        />
        <span>Male</span>
      </div>
      <div>
        <Radio
          color="secondary"
          value="Female"
          checked={gender === "Female"}
          onChange={testfunction}
        />
        <span>Female</span>
      </div>
      <h1>React Material UI | Slider</h1>
      <div style={{ width: 300, margin: 50 }}>
        <Slider
          defaultValue={100}
          max={200}
          valueLabelDisplay="auto"
          step={10}
          marks={mark}
          onChange={getslidervalue}
        />
      </div>
      <h1>React Material UI | Range Slider</h1>
      <div style={{ width: 300, margin: 50 }}>
        <Slider value={val} max={200} onChange={updateval} />
      </div>
      <h1>React Material UI | Select Box</h1>
      <Select value={course} displayEmpty onChange={updateValue}>
        <MenuItem value="">Select Course</MenuItem>
        <MenuItem value="1">Node</MenuItem>
        <MenuItem value="2">Express</MenuItem>
        <MenuItem value="3">MongoDb</MenuItem>
        <MenuItem value="4">React</MenuItem>
      </Select>
      <h1>React Material UI | TextField</h1>
      <TextField
        label="Enter Your Name"
        variant="outlined"
        onChange={getData}
      />
      <h1>React Material UI | Switch</h1>
      <Switch onChange={getSwitchvalue} />
      <h1>React Material UI | Box</h1>
      <Box component="span" clone style={{ color: "red" }}>
        <Button>Hello</Button>
      </Box>
      <Container>
        <h1 style={{ background: "red" }}>React Material UI | Layout</h1>
      </Container>
      <h2>React Material UI | Tab</h2>
      <AppBar position="static">
        <Tabs value={value} onChange={Handletabs}>
          <Tab label="Item 1" />
          <Tab label="Item 2" />
          <Tab label="Item 3" />
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0}>
        Panel one Detail
      </TabPanel>
      <TabPanel value={value} index={1}>
        Panel Two Detail
      </TabPanel>
      <TabPanel value={value} index={2}>
        Panel Three Detail
      </TabPanel>
    </div>
  );
}
function TabPanel(props){
  const {children,value,index} = props
  return(
    <>
      {
        value === index && (
          <h1>{children}</h1>
        )
      }
    </>
  );
}

export default App;
