import { useState,useEffect } from "react";
import "./App.css";
import { ThemeProvider } from "./contexts/theme";
import Card from "./components/Card";
import Button from "./components/Button";

function App() {
  const [themeMode, setThemeMode] = useState("light");

  const themeSwitch = () => {
    setThemeMode((prev) => (prev === "light" ? "dark" : "light"));
  };


  useEffect(() => {
    document.querySelector('html').classList.remove("light","dark") 
    document.querySelector('html').classList.add(themeMode)
  }, [themeMode]);

  return (
    <ThemeProvider value={{themeMode, themeSwitch}}>
    <>
      <div className="flex flex-wrap min-h-screen items-center">
        <div className="w-full">
          <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
          <Button/>
          </div>

          <div className="w-full max-w-sm mx-auto">
            <Card />
          </div>
        </div>
      </div>
    </>
    </ThemeProvider>
  );
}

export default App;
