import {action, storiesOf, module} from "@storybook/react";
import * as React from "react";
import {Button} from "../../src/components/commons/buttons/button";

const stories = storiesOf("Commons", module);

stories.add("default button", () => (
        <div style={{width: "640px"}}>
            <Button settings={{title: "?" , callback:()=> {action("hello");}}}/>
        </div>
    ));
