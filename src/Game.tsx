import * as React from 'react';
import Documentation from './Documentation';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBarExampleIcon from './AppBar';
import GlobalAppBar from './GlobalAppBar';
import BottomNavigationExampleSimple from './BottomNav';
import SizeDrawer from './SizeDrawer';
import Drawer from './Drawer';
import RaisedButton from 'material-ui/RaisedButton';
import Paper from 'material-ui/Paper';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import lightBaseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import TicToToStore from './data/TicToToStore';
import './index.css';

let size = 3;
const styleSquare = {
  height: 100,
  width: 100,
  margin: 20,
  textAlign: 'center',
  display: 'inline-block',
};
let themes = {
  light : lightBaseTheme,
  dark : darkBaseTheme,
};

interface SquareProps{
    key:number,
    value:string,
    onClick:()=>void,
}
function Square(props:SquareProps) {
  return (
    <RaisedButton  className="square" style={styleSquare} onClick={props.onClick}>
      {props.value}
    </RaisedButton>
  );
}

class Board extends React.Component <any,any>
{
  renderSquare(i:number) {
    return (
      <Square
        key={i}
        value={this.props.squares[i]}
        onClick={() => this.props.onClick(i)}
      />
    );
  }

  render() {
    return (
      <div>{this.renderBoard()}</div>
    );
  }

  renderBoard(){
    let dynamicBoard = Array(size);
    for (var i = 0; i < dynamicBoard.length; i++) {
      dynamicBoard[i] = i;
    }
    const gameBoard = dynamicBoard.map((line)=><div key={line}> {this.renderLine(line)} </div>);
    return(
      gameBoard
    );
  }
  renderLine(lineNum:number){
    let dynamicLine = Array(size);
    for (var i = 0; i < dynamicLine.length; i++) {
      dynamicLine[i] = lineNum*size +i;
    }
    const line = dynamicLine.map((square)=>this.renderSquare(square));
    return (
      line
    );
  }
}

class Game extends React.Component <any,any>{
  constructor(props:any){
    super(props);
    this.state = {
      history:[{
        squares: Array(size*size).fill(null),
      }],
      stepNumber: 0,
      xIsNext: true,
    };
  }

  handleClick(i:number) {
    const history = this.state.history.slice(0, this.state.stepNumber + 1);
    const current = history[history.length-1];
    const squares = current.squares.slice();
    if(calculateWinner(squares)||squares[i]){
      return;
    }
    squares[i] = this.state.xIsNext ?'X':'O';
    this.setState({
      history: history.concat([{
        squares: squares,
      }]),
      stepNumber: history.length,
      xIsNext: !this.state.xIsNext,
    });
  }

  jumpTo(step:number){
    this.setState({
      stepNumber: step,
      xIsNext: (step%2)===0,
    });
  }

  resetHistory(){
    this.jumpTo(0);
    this.setState({
      history:[{
        squares: Array(size*size).fill(null),
      }]
    });
  }

  render() {
    let view = this.state.tictoto.get('view').view;
    let boardSize = this.state.tictoto.get('boardsize').boardsize;
    let theme = this.state.tictoto.get('theme').theme;
    if(size!==boardSize){
      size = boardSize;
    }
    let stylePaper = {
      margin: 'auto',
      marginTop: '5em',
      maxWidth: size*8.77+'em'
    };
    const history = this.state.history;
    const current = history[this.state.stepNumber];
    const winner = calculateWinner(current.squares);
    const togglestateRight = this.state.tictoto.get('togglestateRight');
    const togglestateLeft = this.state.tictoto.get('togglestateLeft');

    let selected;
    let labels = ["",""];
    if(winner){
      selected = winner === "X"? 1:0;
      labels[selected] = "winner";
    }else{
      selected = this.state.xIsNext ? 1 : 0;
    }

    return (
      <MuiThemeProvider muiTheme={getMuiTheme((themes as any)[theme])}>
        <div>
        <GlobalAppBar/>
        <SizeDrawer toggle={togglestateRight} jumpTo={()=>this.resetHistory()}/>
        <Drawer toggle={togglestateLeft}/>
        <Paper style={stylePaper} zDepth={1}>
            <AppBarExampleIcon movelist={history} onMenuItemClick={this.jumpTo.bind(this)}/>
            <div className="game">
              <div className="game-board">
                <Board
                  squares = {current.squares}
                  onClick = {(i:number)=> this.handleClick(i)}
                />
              </div>
            </div>
            <BottomNavigationExampleSimple
              selected = {selected}
              labels = {labels}
            />
            </Paper>
          </div>
      </MuiThemeProvider>
    );
  }

  //fuctions needed to create a Container form the Game class
  static getStores() {
    return [
      TicToToStore,
    ];
  }
  static calculateState(prevState:any) {
    return {
      tictoto: TicToToStore.getState(),
    };
  }
}

function calculateWinner(squares:[string]) {
  let winningLines= [];
  //add the winning line and colums
  for (var i = 0; i < size; i++) {
    winningLines.push(fillLine(i));
    winningLines.push(fillCol(i));
  }
  //add the winning diagonals
  winningLines.push(fillDiag(0));
  winningLines.push(fillDiag(1));
  const lines = winningLines;
  for (let i=0; i< lines.length; i++){
    if(verifySequence(lines[i],squares)){
        return squares[lines[i][0]];
       }
  }
  return null;
}
//Functions used to generate the winning lines cols and diags
function fillLine(lineIndex:number){
  let line = Array(size);
  for (var i = 0; i < size; i++) {
    line[i]=(lineIndex*size +i);
  }
  return line;
}
function fillCol(colIndex:number){
  let col = Array(size);
  for (var i = 0; i < size; i++) {
    col[i]=(colIndex+i*size);
  }
  return col;
}
function fillDiag(diagIndex:number){
  let diag = Array(size);
  if(diagIndex === 0){
    for (var i = 0; i < size; i++) {
    diag[i]=i*(size+1);
    }
  }else{
    for (var y = 0; y < size; y++) {
    diag[y]=(y+1)*(size-1);
    }
  }
  return diag;
}
//Function used to verify is a line, col or diag is filled witht the same symbol (not null)
function verifySequence(sequence:any[],squares:string[]){
  for (let i = 0; i < sequence.length -1; i++){
    if(!squares[sequence[i]] || (squares[sequence[i]]!==squares[sequence[i+1]])){
      return false;
    }
  }
  return true;
}

export default Game;
