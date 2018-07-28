import React, {Component} from 'react';
import './index.css';
import bg from '../../imgbord.jpg'

import Header from '../Header';
import Game from '../Game';

class Boards extends Component {
    render () {
        return (
            <section>
                <Header/>
                <div className="board">
                    <Game/>
                    <div style={{width: '400px'}}>
                        <img src={bg} alt="game" style={{maxWidth: '100%'}}/>
                    </div>
                </div>
                <Header/>
            </section>
        );
    }
}

export default Boards;