import React from 'react';
import './App.css';
import Header from '../Header';
import  GridRow from '../GridRow';
import Button from '../Button';
import Footer from '../Footer';

class App extends React.Component{
    constructor(){
        super();
        this.state = {
            currentPlayer:"X",
            gameState: [["", "", ""],["", "", ""],["", "", ""]],
            gameStatus: true,
            winningConditions: [["00","01","02"],["10","11","12"],["20","21","22"],["00","10","20"],["01","11","21"],["02","12","22"],["00","11","22"],["02","11","20"]],
            messege: "",
            counter: 0
        };
    }

    checkForGameResult = () => {
        for(let i=0;i<this.state.winningConditions.length;i++)
        {
            let first = this.state.gameState[Number(this.state.winningConditions[i][0].slice(0,1))][Number(this.state.winningConditions[i][0].slice(1,2))];
            let second = this.state.gameState[Number(this.state.winningConditions[i][1].slice(0,1))][Number(this.state.winningConditions[i][1].slice(1,2))];
            let third = this.state.gameState[Number(this.state.winningConditions[i][2].slice(0,1))][Number(this.state.winningConditions[i][2].slice(1,2))];
            if(first===second && second===third && first!=="" && second!=="" && third!=="")
            {
                this.setState({
                    gameStatus: false,
                    messege: `Congratulations! Player ${this.state.currentPlayer} Wins`
                });
                break;
            }
        }
        if(this.state.counter===8)
        {
            this.setState({
                messege: "Match Draw!"
            });
        }
    }

    handleClick = (rowIndex,colIndex) => {
        if(this.state.gameState[rowIndex][colIndex]==="" && this.state.gameStatus)
        {
            let copiedGameState = [...this.state.gameState];
            copiedGameState[rowIndex][colIndex] = this.state.currentPlayer;
            this.setState({
                gameState : copiedGameState,
                currentPlayer: (this.state.currentPlayer==="X") ? "0":"X",
                counter: this.state.counter + 1
            });
            this.checkForGameResult();
        }
    }

    handleReset = () =>{
        this.setState({
            currentPlayer: "X",
            gameState: [["", "", ""],["", "", ""],["", "", ""]],
            gameStatus: true,
            messege: "",
            counter: 0
        });
    }

    render(){
        return(
            <div key="gameArea" id="container">
                <Header key="headerBox"/>
                <div key="gridBox" id="board">
                    {this.state.gameState.map((row,rowIndex) => {
                        return <GridRow key={rowIndex} row={row} rowIndex={rowIndex} handleClick={this.handleClick}/>;
                        })}
                </div>
                <Footer key="footerBox" turn={this.state.currentPlayer} messege={this.state.messege}/>
                <Button key="btnComponent" handleReset={this.handleReset}/>
            </div>
        );
    }
}

export default App;
