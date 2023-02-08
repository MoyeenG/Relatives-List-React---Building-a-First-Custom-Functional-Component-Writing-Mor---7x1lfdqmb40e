import React, {Component, useState} from "react";
import '../styles/App.css';


class App extends Component {

    render() {
        let arr = ["abcd", "efgh", "ijkl", "mnop"];

        return(
            <div id="main">
                <ol key="relativeList">{ arr.map((value, index) => 
                    <li key={ "relativeListItem" + (index+1) }>{ value }</li>
                )}
                </ol>
            </div>
        )
    }
}


export default App;
