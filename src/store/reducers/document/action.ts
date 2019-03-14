import { SetEntity } from '@entity/Set';
import { Block } from '@entity/Block';
import { Piece } from '@entity/Piece';

/**
 * action type
 */
export const CREATE_DOC = Symbol('CREATE_DOC');

/**
 * action creator
 */

const createDoc = (obj: {
  userId: string;
  sets: SetEntity[];
  blocks: Block[];
  pieces: Piece[];
  roots: string[];
}) => ({
  obj,
  type: CREATE_DOC,
});

export default {
  createDoc,
};
