import { useContext } from "react";
import { ThemeContext } from "./ThemeContext";

function Paragraph() {
  const context = useContext(ThemeContext);

  return <p className={context.theme}>Hello ReactJS</p>;
}

export default Paragraph;
