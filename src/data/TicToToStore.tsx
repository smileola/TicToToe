import Immutable from 'immutable';
import {ReduceStore} from 'flux/utils';
import ActionTypes from './TicToToActionTypes';
import TodoDispatcher from './TicToToDispatcher';
import Toggle from './Toggle';
import BoardSize from './BoardSize';
import Theme from './Theme';
import View from './View';
class TicToToStore extends ReduceStore <any,any>{
  constructor() {
    super(TodoDispatcher);
  }

  getInitialState() {
    let orderedMap = Immutable.OrderedMap({
      'togglestateRight' : new Toggle(),
      'togglestateLeft' : new Toggle(),
      'boardsize' : new BoardSize(),
      'theme' : new Theme(),
      'view' : new View(),
      });
    return orderedMap;
  }

  reduce(state, action) {
    let id= "";
    switch (action.type) {
      case ActionTypes.TOGGLE_DRAWER:
        return state.update(
          action.id,
          toggle => toggle.set('toggled',!toggle.toggled)
        );
      case ActionTypes.UPDATE_BOARD_SIZE:
        id = 'boardsize';
        return state.update(
          id,
          boardSize => boardSize.set('boardsize',action.size)
        );
      case ActionTypes.UPDATE_THEME:
        id = 'theme';
        return state.update(
          id,
          theme => theme.set ('theme',action.theme)
        );
      case ActionTypes.APPVIEW:
        id = 'view';
        return state.update(
          id,
          view => view.set('view',action.view)
        );
      default:
        return state;
    }
  }
}

export default new TicToToStore();
