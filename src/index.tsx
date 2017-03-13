import * as React from "react";
import * as ReactDOM from "react-dom";

import { AppComponent } from "./App"

declare var WebAssembly: any;

if (typeof WebAssembly === "object") {
  ReactDOM.render(
    <AppComponent />,
    document.getElementById("app")
  );
} else {
  ReactDOM.render(
    <div className="notSupported">
      WebAssembly is not yet available in your browser. Please use the latest version of Firefox or Chrome.
    </div>,
    document.getElementById("app")
  );
}