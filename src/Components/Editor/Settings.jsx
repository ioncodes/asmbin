import React, { Component } from 'react';
import { Dropdown, Grid, Modal, Button } from 'semantic-ui-react';
import { store } from './events';

const languages = [
  {
    text: 'x86',
    value: 'x86'
  }
];

const modes = [
  {
    text: '64bit',
    value: '64bit'
  },{
    text: '32bit',
    value: '32bit'
  },{
    text: '16bit',
    value: '16bit'
  }
];

export default class Settings extends Component {
  constructor(props) {
    super(props);

    this.state = { open: false };

    store.subscribe(() => {
      this.setState({open: store.getState()});
    });
  }

  close = () => this.setState({ open: false});

  render() {
    return (
      <Modal size={'tiny'} open={this.state.open} onClose={this.close}>
        <Modal.Header>Settings</Modal.Header>
        <Modal.Content>
          <Grid>
            <Grid.Row>
              <Grid.Column width={8}>
                <Dropdown placeholder='Language' fluid selection options={languages} />
              </Grid.Column>
              <Grid.Column width={8}>
                <Dropdown placeholder='Mode' fluid selection options={modes} />
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Modal.Content>
        <Modal.Actions>
          <Button negative>No</Button>
          <Button positive icon='checkmark' labelPosition='right' content='Yes' />
        </Modal.Actions>
      </Modal>
    );
  }
}
