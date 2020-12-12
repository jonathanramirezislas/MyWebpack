import React from 'react';
import ReactDOM from 'react-dom';
import './styles/styles.scss'
import './images/dragon.jpg'

const App  = () => {
    return (
        <div>
            <h1> Hello word Jonatn!</h1>
            <img src='./images/dragon.jpg' />
        </div>
    )
}
//            <img src={require('./images/dragon.jpeg')} />


ReactDOM.render(<App/>,document.getElementById("root"))