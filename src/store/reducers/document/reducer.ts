import { SetEntity } from '@entity/Set';
import { Block } from '@entity/Block';
import { Piece } from '@entity/Piece';
import { Fix } from '@entity/Fix';
import { Change } from '@entity/Change';
import { userId } from '@utils/user';
import { CREATE_DOC } from './action';

export interface DocumentObjState {
  sets: {
    [key: string]: SetEntity,
  };
  blocks: {
    [key: string]: Block,
  };
  pieces: {
    [key: string]: Piece,
  };
  fixs: {
    [key: string]: Fix,
  };
  changes: {
    [key: string]: Change,
  };
  history: string[];
  cursor: string;
}

export interface DocumentState {
  [key: string]: DocumentObjState;
}

const initState: DocumentState = {
  [userId]: {
    sets: {},
    blocks: {},
    pieces: {},
    fixs: {},
    changes: {},
    history: [],
    cursor: '',
  },
};

export default (state = initState, action: any) => {
  switch (action.type) {
    case CREATE_DOC: {
      const obj = action.obj;
      const stateObj = state[obj.userId];
      const sets = obj.sets.reduce((prev: any, curr: SetEntity) => {
        const setId = curr.id;
        prev[setId] = curr;
        return prev;
      }, stateObj.sets);
      const blocks = obj.blocks.reduce((prev: any, curr: Block) => {
        const blockId = curr.id;
        prev[blockId] = curr;
        return prev;
      }, stateObj.blocks);
      const pieces = obj.pieces.reduce((prev: any, curr: Piece) => {
        const piecesId = curr.id;
        prev[piecesId] = curr;
        return prev;
      }, stateObj.pieces);
      const history = stateObj.history.concat(obj.roots);
      const latestSet = obj.roots[obj.roots.length - 1];
      const cursor = latestSet ? latestSet : stateObj.cursor;

      return {
        ...state,
        [obj.userId]: {
          ...stateObj,
          sets,
          blocks,
          pieces,
          history,
          cursor,
        },
      };
    }
    default:
      return state;
  }
};
