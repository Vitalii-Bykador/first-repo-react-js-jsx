import React from "react";
import Button from "./Button";

export default class Aside extends React.Component {
    render() {
        const btns = [];
        for (const key in this.props.set) {
            btns.push(
                <Button key={key}
                    href={this.props.set[key][0]}
                    name={this.props.set[key][1]}
                />
            );
        }
        return (
            <aside>{btns}</aside>
        );
    }
}