import { useContext } from "react";
import ThemeContext from "./ThemeContext"

export default function ThemeButton() {
    const {toggleTheme,theme} = useContext(ThemeContext)
    console.log("toggleTheme",theme)
    return <button onClick={toggleTheme}>ThemeButton</button>
}
