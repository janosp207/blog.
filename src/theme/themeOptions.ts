import { ThemeOptions } from "@mui/material/styles";
import buttonTheme from "./buttonTheme";
import textFieldTheme from "./textFieldTheme";
import { text } from "stream/consumers";

const themeOptions: ThemeOptions = {
  components: {
    ...buttonTheme,
    ...textFieldTheme,
  },
}

export default themeOptions;