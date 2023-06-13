import React from 'react';
import logo from "../../images/handshake.png";
import {observer} from "mobx-react-lite";
import {Button} from "semantic-ui-react";
import {useStore} from "../../app/stores/store";

function Homepage() {
    const {eventStore} = useStore()

    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <p>Act-Of-Kindness</p>
                <a className="App-link"
                    href="https:/github.com/CodecoolGlobal/el-proyecte-grande-sprint-1-csharp-Tomek-Boomer">
                    Our GitHub</a>
            </header>
        </div>
    );
}

export default observer(Homepage);