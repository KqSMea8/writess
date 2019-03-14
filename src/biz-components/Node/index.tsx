import * as React from 'react';
import { DocumentObjState } from '@store/reducers/document/reducer';
import {
  isSet, isBlock, isFix, isPiece,
} from '@utils/node';
import SetNode, { SetNodeProps } from './SetNode';
import FixNode from './FixNode';
import PieceNode, { PieceNodeProps } from './PieceNode';
import BlockNode, { BlockNodeProps } from './BlockNode';

export interface NodeProps {
  document: DocumentObjState;
  id: string;
  fontSize?: number;
  lineHeight?: number;
  fetchNode?: (el: any) => void;
}

export interface NodeState { }

export default class Node extends React.Component<NodeProps, NodeState> {

  shouldComponentUpdate(nextProps: NodeProps, nextState: NodeState) {
    if (this.props.id !== nextProps.id) {
      return true;
    } else {
      return false;
    }
  }

  componentDidMount() {
  }

  componentWillUnmount() {
  }

  render() {
    const { id, document, fetchNode } = this.props;

    return (
      <>
        {
          isSet(id) && <SetNode
            {...this.props as unknown as SetNodeProps}
            ref={fetchNode ? (el) => { fetchNode(el); } : null}
          />
        }
        {isBlock(id) && <BlockNode {...this.props as unknown as BlockNodeProps} />}
        {
          isPiece(id) && <PieceNode
            {...this.props as unknown as PieceNodeProps}
            ref={fetchNode ? (el) => { fetchNode(el); } : null}
          />
        }
        {isFix(id) && <FixNode {...this.props as unknown as PieceNodeProps} />}
      </>
    );
  }
}
