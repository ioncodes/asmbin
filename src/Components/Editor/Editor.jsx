import React, { Component } from 'react';
import AceEditor from 'react-ace';
import brace from 'brace';
import { Grid } from 'semantic-ui-react';

import 'brace/mode/assembly_x86';
import 'brace/theme/monokai';

export default class Editor extends Component {
  onChange = (value) => {
    console.log('change', value);
  }

  render() {
    return (
      <Grid style={{
          marginLeft: '5px',
          marginRight: '5px',
        }}>
        <Grid.Column width={8}>
          <AceEditor
            mode='assembly_x86'
            theme='monokai'
            onChange={this.onChange}
            name='editor'
            editorProps={{$blockScrolling: true}}
            width='100%'
            fontSize={24}
          />
        </Grid.Column>
        <Grid.Column width={8}>
          <AceEditor
            mode='assembly_x86'
            theme='monokai'
            name='bytes'
            editorProps={{$blockScrolling: true}}
            width='100%'
            fontSize={24}
            readOnly={true}
          />
        </Grid.Column>
      </Grid>
    );
  }
}
