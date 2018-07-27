import React, {Component} from 'react';
import './index.css';

class Game extends Component {
    // render() {
    //     return(
    //         <section>
    //             <button className="start-btn">Start game</button>
    //             <div className="game"></div>
    //         </section>
    //     )
    // }
    constructor(props) {
        super(props)
        this.step = 0
        this.emptyI = 3
        this.emptyJ = 3
        this.state = {
            array: this.initialField()
        }
    }

    initialField = () => {
        let arraySort = [[1, 2, 3, 4], [5, 6, 7, 8], [9, 10, 11, 12], [13, 14, 15, ""]]
        for (let i = 0; i < 1500; ++i)
            switch (Math.round(3 * Math.random())) {
                case 0:
                    if (this.emptyI !== 0)
                        swap(arraySort, this.emptyI, this.emptyJ, --this.emptyI, this.emptyJ)
                    break // up
                case 1:
                    if (this.emptyJ !== 3)
                        swap(arraySort, this.emptyI, this.emptyJ, this.emptyI, ++this.emptyJ)
                    break // right
                case 2:
                    if (this.emptyI !== 3)
                        swap(arraySort, this.emptyI, this.emptyJ, ++this.emptyI, this.emptyJ)
                    break // down
                case 3:
                    if (this.emptyJ !== 0)
                        swap(arraySort, this.emptyI, this.emptyJ, this.emptyI, --this.emptyJ)
                    break// left
                default: return
            }
        function swap(arr, i1, j1, i2, j2) {
            [arr[i1][j1], arr[i2][j2]] = [arr[i2][j2], arr[i1][j1]]
        }
        return arraySort
    }
    cellClick = (event) => {
        let elementTD = event.target
        let i = +elementTD.id.charAt(0)
        let j = +elementTD.id.charAt(1)

        if ((i === this.emptyI && Math.abs(j - this.emptyJ) === 1)
            || (j === this.emptyJ && Math.abs(i - this.emptyI) === 1)) {

            let mas = this.state.array
            mas[this.emptyI][this.emptyJ] = mas[i][j]
            mas[i][j] = ""
            this.emptyI = i
            this.emptyJ = j

            this.setState({
                array: mas
            })

            this.step++
        }
    }
    winOrNo = () => {
        let winArray = [[1, 2, 3, 4], [5, 6, 7, 8], [9, 10, 11, 12], [13, 14, 15, ""]]
        let mas = this.state.array
        let flag = true
        for (let i = 0; i < 4; ++i) {
            for (let j = 0; j < 4; ++j) {
                if (mas[i][j] !== winArray[i][j]) {
                    flag = false
                    break
                }
            }
        }
        return flag
    }
    restart = () => {
        this.emptyI = 3
        this.emptyJ = 3
        this.step = 0
        this.setState({ array: this.initialField() })
    }
    getTime = (formatTime, time) => {
        this.formatTime = formatTime
        this.time = time
    }
    render() {
        return (
            <div className="wrap">
                <table>
                    <tbody>
                        <tr>
                            <td id="00" onClick={this.cellClick}>{this.state.array[0][0]}</td>
                            <td id="01" onClick={this.cellClick}>{this.state.array[0][1]}</td>
                            <td id="02" onClick={this.cellClick}>{this.state.array[0][2]}</td>
                            <td id="03" onClick={this.cellClick}>{this.state.array[0][3]}</td>
                        </tr>
                        <tr>
                            <td id="10" onClick={this.cellClick}>{this.state.array[1][0]}</td>
                            <td id="11" onClick={this.cellClick}>{this.state.array[1][1]}</td>
                            <td id="12" onClick={this.cellClick}>{this.state.array[1][2]}</td>
                            <td id="13" onClick={this.cellClick}>{this.state.array[1][3]}</td>
                        </tr>
                        <tr>
                            <td id="20" onClick={this.cellClick}>{this.state.array[2][0]}</td>
                            <td id="21" onClick={this.cellClick}>{this.state.array[2][1]}</td>
                            <td id="22" onClick={this.cellClick}>{this.state.array[2][2]}</td>
                            <td id="23" onClick={this.cellClick}>{this.state.array[2][3]}</td>
                        </tr>
                        <tr>
                            <td id="30" onClick={this.cellClick}>{this.state.array[3][0]}</td>
                            <td id="31" onClick={this.cellClick}>{this.state.array[3][1]}</td>
                            <td id="32" onClick={this.cellClick}>{this.state.array[3][2]}</td>
                            <td id="33" onClick={this.cellClick}>{this.state.array[3][3]}</td>
                        </tr>
                    </tbody>
                </table>
                <button type="button" onClick={this.restart}>Restart</button>
            </div>
        )
    }
}

export default Game;