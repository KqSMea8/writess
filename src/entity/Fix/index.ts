import {
  black_1, transparent_1, base_font,
} from '@ui/base';
import {
  FixType, TextFixStyleSchema,
  ImageFixStyleSchema, FixSchema,
} from './schema';

export class TextFixStyle implements TextFixStyleSchema {
  public color: string = black_1;
  public background: string = transparent_1;
  public fontSize: number = base_font;

  static fromJS(obj: TextFixStyleSchema = {}): TextFixStyle {
    return {
      ...new TextFixStyle(),
      ...obj,
    };
  }
}

export class ImageFixStyle implements ImageFixStyleSchema {
  public width: number = undefined;
  public height: number = undefined;

  static fromJS(obj: ImageFixStyleSchema = {}): ImageFixStyle {
    return {
      ...new ImageFixStyle(),
      ...obj,
    };
  }
}

export class Fix implements FixSchema {
  public id: string = '';
  public entityId: string = '';
  public content: string = '';
  public fixType: FixType = FixType.TEXT;
  public textFixStyle: TextFixStyle | TextFixStyleSchema = TextFixStyle.fromJS();
  public imageFixStyle: ImageFixStyle | ImageFixStyleSchema = ImageFixStyle.fromJS();
  public documentId: string = '';
  public top: number = 0;
  public left: number = 0;
  public right: number = 0;
  public bottom: number = 0;

  static fromJS(obj: FixSchema = {}): Fix {
    return {
      ...new Fix(),
      ...obj,
    };
  }
}
