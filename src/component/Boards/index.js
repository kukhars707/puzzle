import React, {Component} from 'react';
import './index.css';

import Header from '../Header';
import Game from '../Game';

class Boards extends Component {
    render () {
        return (
            <section>
                <Header/>
                <div className="board">
                    <Game/>
                </div>
            </section>
        );
    }
}

export default Boards;