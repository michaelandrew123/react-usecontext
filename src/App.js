import React from 'react'
import FunctionContextComponent from './FunctionContextComponent'
// import ClassContextComponent from './ClassContextComponent'
import { ThemeProvider } from './ThemeContext'

// export const ThemeContext = React.createContext()

function App() {
  // const [darkTheme, setDarkTheme] = useState(true)
  // function toggleTheme(){
  //   setDarkTheme(prevDarkTheme => !prevDarkTheme)
  // }
  return (
      <>
        {/* <ThemeContext.Provider value={darkTheme}>
          <button onClick={toggleTheme}>Toggle Theme</button>
          <FunctionContextComponent />
          <ClassContextComponent />
        </ThemeContext.Provider> */}
        
          {/* <ClassContextComponent /> */}
          
          {/* <button onClick={toggleTheme}>Toggle Theme</button> */}
        <ThemeProvider>
          <FunctionContextComponent />
        </ThemeProvider>
      </>
  );
}
export default App;
/*
Context provides a way to pass data through the component tree without having to pass props 
down manually at every level.

When to Use Context
Context is designed to share data that can be considered “global” for a tree of React components, 
such as the current authenticated user, theme, or preferred language. For example, in the code below we 
manually thread through a “theme” prop in order to style the Button component:

*/