import React, { Component } from 'react';
import { Dropdown, Grid, Modal, Button } from 'semantic-ui-react';
import { codeStore, toggleCode } from './events';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { docco } from 'react-syntax-highlighter/styles/hljs';

export default class Code extends Component {
  constructor(props) {
    super(props);

    this.state = { open: false };

    codeStore.subscribe(() => {
      this.setState({open: codeStore.getState()});
    });
  }

  close = () => toggleCode();

  render() {
    return (
      <Modal style={{height:'100px' /* this fixes the height bug; can be any px value */}} size={'tiny'} open={this.state.open} onClose={this.close}>
        <Modal.Header>Settings</Modal.Header>
        <Modal.Content>
          <SyntaxHighlighter id='cppcode' language={this.props.lang} style={docco}>{this.props.code}</SyntaxHighlighter>
        </Modal.Content>
        <Modal.Actions>
          <Button onClick={this.close} positive icon='checkmark' labelPosition='right' content='Thanks' />
        </Modal.Actions>
      </Modal>
    );
  }
}
