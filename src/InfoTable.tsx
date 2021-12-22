import * as React from 'react';
import {Card, CardActions, CardHeader, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import TicToToActions from './data/TicToToActions';
import Grid from 'material-ui-beta/Grid';
import Hidden from 'material-ui-beta/Hidden';
import TicCard from './TicCard';

let stylePaper = {
  marginTop: '1em',
  padding: '1em'
};

export default class InfoTable extends React.Component<any,any>{
  handleClick(size){
    TicToToActions.updateBoardSize(size);
    TicToToActions.updateView('game');
  }
  render(){
    return(
      <div style={stylePaper}>
        <Grid container spacing={24}>
          <Grid item xs={12} sm={6}>
            <Card>
              <CardHeader
                title="3x3 TicTacToe"
                subtitle="Information"
                actAsExpander={true}
                showExpandableButton={true}
              />
              <CardText expandable={true}>
                When considering only the state of the board, and after taking into account board symmetries (i.e. rotations and reflections),
                there are only 138 terminal board positions. Assuming that X makes the first move every time:
                <br/>91 distinct positions are won by X
                <br/>44 distinct positions are won by O
              </CardText>
              <CardActions>
                <FlatButton label="Try it!" onClick={()=>this.handleClick(3)}/>
              </CardActions>
            </Card>
          </Grid>

          <Grid item xs={12} sm={6}>
            <Card>

              <CardHeader
                title="4x4 TicTacToe"
                subtitle="Information"
                actAsExpander={true}
                showExpandableButton={true}
              />

              <CardText expandable={true}>
              <Hidden smUp>Caché en sm et plus<br/></Hidden>
                4 Winning lines, 4 Winning columns and 2 winning diagonals for 16 positions. "BIGGER IS BETTER"!
              </CardText>
              <CardActions>
                <FlatButton label="Try it!" onClick={()=>this.handleClick(4)}/>
              </CardActions>
            </Card>
          </Grid>

          <Grid item xs={12} sm={12}>
            <TicCard title='Dynamic Card Test' subtitle='Stylin'/>
          </Grid>
        </Grid>
      </div>
    );
  }
}
