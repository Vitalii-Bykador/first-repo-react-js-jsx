// Это компонент
import React from "react";

export default class Main extends React.Component {
    render() {
        return (
            <main>
                <h3>{this.props.head}</h3>
                <p>{this.props.text}</p>
            </main>
        );
    }
}