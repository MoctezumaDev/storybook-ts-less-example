import * as React from "react";
import {IPropertyButton} from "./IPropertyButton";

export class Button extends React.Component<{settings: IPropertyButton}, undefined> {

    public render(): JSX.Element | any {
        const settings = this.props.settings;
        let className = "button";
        if (settings.className != undefined) {
            className += " " + settings.className;
        }
        return <button className={className} type="button" onClick={this.onClickHandler}>{settings.title}</button>;
    }

    private onClickHandler = () => {
        if (this.props.settings.callback != undefined) {
            this.props.settings.callback();
        }
    }
}
