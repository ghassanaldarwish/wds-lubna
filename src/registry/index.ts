import { lazy } from "react";
import buttonCode from "./button/code";
import buttonInstall from "./button/install";
const registry = {
  button: {
    name: "button",
    code: buttonCode,
    install: buttonInstall,
    component: lazy(() => import("./button")),
  },
};

export default registry;
