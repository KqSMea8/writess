import * as React from 'react';
import { DocumentObjState } from '@store/reducers/document/reducer';
import './index.scss';
import autobind from 'autobind-decorator';

export interface PieceNodeProps {
  document: DocumentObjState;
  id: string;
  fontSize: number;
  lineHeight: number;
}

export interface PieceNodeState { }

export default class PieceNode extends React.Component<PieceNodeProps, PieceNodeState> {
  private pieceEl: React.RefObject<HTMLSpanElement> = React.createRef();

  @autobind
  handleFocus() {
    if (this.pieceEl && this.pieceEl.current) {
      this.pieceEl.current.focus();
    }
  }

  componentDidMount() {
    // this.pieceEl.current.focus();
  }

  componentWillUnmount() {
  }

  render() {
    const { id, document } = this.props;
    const { pieces } = document;
    const currNode = pieces[id];
    const content = currNode.content;

    return (
      <span
        className="pieceNode-warpper"
        suppressContentEditableWarning={true}
        contentEditable={true}
        ref={this.pieceEl}
      >
        {content}
      </span>
    );
  }
}
