import * as React from 'react';
import { DocumentObjState } from '@store/reducers/document/reducer';
import Node from '@biz-components/Node';
import { base_lineheight } from '@ui/base';
import './index.scss';
import Icon from '@biz-components/Icon';
import autobind from 'autobind-decorator';
import PieceNode from '@biz-components/Node/PieceNode';

export interface BlockNodeProps {
  document: DocumentObjState;
  id: string;
}

export interface BlockNodeState { }

export default class BlockNode extends React.Component<BlockNodeProps, BlockNodeState> {
  private pieceNodeEls: PieceNode[] = [];

  @autobind
  handleBlockClick(ev: React.MouseEvent<HTMLDivElement>) {
    ev.stopPropagation();
    const lastPieceNodeEl = this.pieceNodeEls[this.pieceNodeEls.length - 1];
    lastPieceNodeEl.handleFocus();
  }

  componentDidMount() {
    console.warn(1111, this.pieceNodeEls);
  }

  componentWillUnmount() {
  }

  render() {
    const { id, document } = this.props;
    const { blocks } = document;
    const currNode = blocks[id];
    const contentNodeIds = currNode.contentIds;
    const style = currNode.blockStyle;
    const { fontSize } = style;

    return (
      <div
        className="blockNode-wrapper"
        style={{
          fontSize,
          lineHeight: base_lineheight,
        }}
        onClick={this.handleBlockClick}
      >
        <div className="blockNode-buttons">
          <div className="blockNode-button">
            <Icon name="add" />
          </div>
          <div className="blockNode-button">
            <Icon name="move" />
          </div>
        </div>
        <div className="blockNode-content" style={{
          minHeight: base_lineheight * fontSize,
        }}>
          {contentNodeIds.map((id, idx) => (
            <Node
              document={document}
              id={id}
              key={id}
              fetchNode={(el: PieceNode) => { this.pieceNodeEls[idx] = el; }}
            />
          ))}
        </div>
      </div>
    );
  }
}
