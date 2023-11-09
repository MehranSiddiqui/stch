import logo from "./logo.svg";
import "./App.css";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { defaultTheme } from "./themes/defaultTheme";
import Scheduler from "./Components/Scheduler";
import Calender from "./Components/Scheuler2";
function App() {
  const currentTheme = createTheme(defaultTheme);

  return (
    <ThemeProvider theme={currentTheme}>
      <div>
        {/* <Scheduler /> */}
        <Calender />
      </div>
    </ThemeProvider>
  );
}

export default App;
