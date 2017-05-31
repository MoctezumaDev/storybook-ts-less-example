import * as React from "react";
import {Button} from "./button";
import {IPropertyButtonClose} from "./IPropertyButtonClose";

export class ButtonClose extends React.Component<{settings: IPropertyButtonClose}, undefined> {
    public render(): JSX.Element | any {
        const buttonSettings = {
            callback: this.props.settings.callback,
            className: "dialog__title-box__close-button",
            title: "X",
        };
        return <Button settings={buttonSettings}/>;
    }
}
