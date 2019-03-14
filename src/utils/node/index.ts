import { SetEntity } from '@entity/Set';
import { Block } from '@entity/Block';
import { Piece } from '@entity/Piece';
import { getRandomStr } from '@utils/random';
import { userId } from '@utils/user';
import actionCreator from '@store/reducers/document/action';

export const isSet = (id: string) => (/^set/.test(id));
export const isPiece = (id: string) => (/^piece/.test(id));
export const isBlock = (id: string) => (/^block/.test(id));
export const isFix = (id: string) => (/^fix/.test(id));

export const createDoc = () => {
  const documentId = `document_${getRandomStr(10)}`;
  const pieceNode = Piece.create(documentId);
  const blockNode = Block.create(documentId);
  const setNode = SetEntity.create(documentId);
  setNode.isRoot = true;
  setNode.contentIds = [blockNode.id];
  blockNode.contentIds = [pieceNode.id];

  __STORE__.dispatch(actionCreator.createDoc({
    userId,
    sets: [setNode],
    blocks: [blockNode],
    pieces: [pieceNode],
    roots: [setNode.id],
  }));
};
