import {
  black_1, transparent_1,
} from '@ui/base';
import {
  PieceType, TextPieceStyleSchema,
  ImagePieceStyleSchema, PieceSchema,
} from './schema';
import { getRandomStr } from '@utils/random';

export class TextPieceStyle implements TextPieceStyleSchema {
  public isBold: boolean = false;
  public isDeleted: boolean = false;
  public isItalic: boolean = false;
  public color: string = black_1;
  public background: string = transparent_1;

  static fromJS(obj: TextPieceStyleSchema = {}): TextPieceStyle {
    return {
      ...new TextPieceStyle(),
      ...obj,
    };
  }
}

export class ImagePieceStyle implements ImagePieceStyleSchema {
  public width: number = undefined;
  public height: number = undefined;

  static fromJS(obj: ImagePieceStyleSchema = {}): ImagePieceStyle {
    return {
      ...new ImagePieceStyle(),
      ...obj,
    };
  }
}

export class Piece implements PieceSchema {
  public id: string = '';
  public entityId: string = '';
  public content: string = '';
  public pieceType: PieceType = PieceType.TEXT;
  public textPieceStyle: TextPieceStyle | TextPieceStyleSchema = TextPieceStyle.fromJS();
  public imagePieceStyle: ImagePieceStyle | ImagePieceStyleSchema = ImagePieceStyle.fromJS();
  public url: string = '';
  public documentId: string = '';

  static fromJS(obj: PieceSchema = {}): Piece {
    return {
      ...new Piece(),
      ...obj,
    };
  }

  static create(documentId: string): Piece {
    const id = `piece_${getRandomStr(10)}`;
    const entityId = `piece_entity_${getRandomStr(10)}`;
    const result = Piece.fromJS({
      id,
      entityId,
      documentId,
    });
    return result;
  }
}
