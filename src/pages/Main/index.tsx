import * as React from 'react';
import './index.scss';
import { connect } from 'react-redux';
import Editor from './Editor';
import autobind from 'autobind-decorator';
import { createDoc } from '@utils/node';
import { userId } from '@utils/user';
import { DocumentObjState } from '@store/reducers/document/reducer';

interface MainProps {
  documentStore: DocumentObjState;
}

interface MainState { }

export class Main extends React.PureComponent<MainProps, MainState> {

  componentDidMount() {
    this.handleClickCreate();
  }

  @autobind
  handleClickCreate() {
    createDoc();
  }

  render() {
    return <div className="main-wrapper">
      <div className="main-container">
        <Editor document={this.props.documentStore}/>
      </div>
    </div>;
  }
}

export default connect((state: any) => {
  return {
    documentStore: state.document[userId],
  };
}, (dispatch) => {
  return {
    // updateVarifyTime: (varifyTime: number) => {
    //   dispatch(pageActionCreator.login.updateVarifyTime(varifyTime));
    // },
    // updateSetVarifyTime: (varifyTime: number) => {
    //   dispatch(pageActionCreator.login.updateSetVarifyTime(varifyTime));
    // },
    // updateBindVarifyTime: (varifyTime: number) => {
    //   dispatch(pageActionCreator.login.updateBindVarifyTime(varifyTime));
    // },
    // updateRegisterVarifyTime: (varifyTime: number) => {
    //   dispatch(pageActionCreator.login.updateRegisterVarifyTime(varifyTime));
    // },
  };
})(Main);
