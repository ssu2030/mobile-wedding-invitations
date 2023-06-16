import React from "react";
import { createRoot } from "react-dom/client";

import "global.scss";

const container = document.getElementById("root");
import App from "./App";

const root = createRoot(container!);
root.render(<App />);
