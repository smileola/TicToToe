import TicToToActionTypes from './TicToToActionTypes';
import TicToToDispatcher from './TicToToDispatcher';

const Actions = {
  toggleAppbar(id){
    TicToToDispatcher.dispatch({
      type: TicToToActionTypes.TOGGLE_DRAWER,
      id,
    });
  },
  updateBoardSize(size){
    TicToToDispatcher.dispatch({
      type: TicToToActionTypes.UPDATE_BOARD_SIZE,
      size,
    });
  },
  updateTheme(theme){
    TicToToDispatcher.dispatch({
        type: TicToToActionTypes.UPDATE_THEME,
        theme,
    });
  },
  updateView(view){
    TicToToDispatcher.dispatch({
        type: TicToToActionTypes.APPVIEW,
        view,
    });
  }
};

export default Actions;
