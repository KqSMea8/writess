import * as React from 'react';
import './index.scss';
import { DocumentObjState } from '@store/reducers/document/reducer';
import Node from '@biz-components/Node';

interface EditorProps {
  document: DocumentObjState;
}

interface EditorState { }

export default class Editor extends React.PureComponent<EditorProps, EditorState> {
  render() {
    const { document } = this.props;
    const { history } = document;
    const cursor = history[history.length - 1];

    return <div className="editor-wrapper">
      {cursor && <Node document={document} id={cursor}/>}
    </div>;
  }
}
