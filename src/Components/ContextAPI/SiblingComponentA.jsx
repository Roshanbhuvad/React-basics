import { useContext } from "react";
import ThemeConext from "./ThemeContext"

export default function SiblingComponentA() {
    const {theme} = useContext(ThemeConext);

    console.log("siblingComponentA",theme)

    return (
        <div>
            <h1 className={`${theme === "dark" ? "dark" : "light"}`}>
                Sibling Component A
            </h1>
        </div>
    )
}