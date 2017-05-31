import * as React from "react";
import * as ReactDOM from "react-dom";

import {Button} from "./components/commons/buttons/button";
import {ButtonClose} from "./components/commons/buttons/buttonClose"

const firstButton = document.getElementById("firstButton");
const secondButton = document.getElementById("secondButton");

export class Renderer {
    public render = () => {
        /*ReactDOM.render(<Button className="firstButton" title="?" />,firstButton);
        ReactDOM.render(<ButtonClose />,secondButton);*/
        ReactDOM.render(<Button settings={{title:"?"}} />,firstButton);
    }
}