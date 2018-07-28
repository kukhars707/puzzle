import React, {Component} from 'react';
import './index.css';
import _ from 'lodash'

const layout = _.range(0, 16).map(n => {
    const row = Math.floor(n / 4);
    const col = n % 4;
    return [100 * col, 100 * row];
});

class Game extends Component {
    constructor(props) {
        super(props);
        this.state = {
            positions: _.shuffle(_.range(0, 16))
        }
    }
    newPosition(index) {
        let {positions} = this.state;
        let emptyIndex = positions.indexOf(0);
        let targetIndex = positions.indexOf(index);
        const dif = Math.abs(targetIndex - emptyIndex);
        if (dif === 1 || dif === 4) {
            positions[emptyIndex] = index;
            positions[targetIndex] = 0;
            this.setState({positions});
        }
    }
    render() {
        return(
            <section className="game-wrapper">
                {this.state.positions.map((i, key) => {
                    let cellClass = key ? 'game':'empty game';
                    let [x,y] = layout[this.state.positions.indexOf(key)];
                    return <div key={key}
                                onClick={this.newPosition.bind(this, key)}
                                style={{transform: `translate(${x}px, ${y}px)`}}
                                id={`game${key}`}
                                className={cellClass}></div>
                })}
            </section>
        )
    }
}

export default Game;