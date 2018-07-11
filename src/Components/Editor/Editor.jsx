import React, { Component } from 'react';
import AceEditor from 'react-ace';
import brace from 'brace';
import { Grid } from 'semantic-ui-react';

import 'brace/mode/assembly_x86';
import 'brace/theme/monokai';

const ks = window.ks;
const asm = new ks.Keystone(ks.ARCH_X86, ks.MODE_64);
asm.option(ks.OPT_SYNTAX, ks.OPT_SYNTAX_INTEL);

export default class Editor extends Component {
  constructor(props) {
    super(props);

    this.state = { bytes: [] };
  }

  onChange = (value) => {
    let instructions = value.split('\n');
    let bytes = [];
    instructions.forEach(instruction => {
      try {
        let result = asm.asm(instruction);
        if(!result.failed) {
          let inst = '';
          result.forEach(byte => {
            inst += '0x' + ('0' + (Number(byte).toString(16))).slice(-2).toUpperCase() + ' ';
          });
          bytes.push(inst);
        }
      } catch(ex) { /* don't destroy ace */ }
    });
    window.ace.edit('bytes').setValue(bytes.join('\n').split(' ,').join('\n'));
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
            editorProps={{$blockScrolling: Infinity}}
            width='100%'
            fontSize={24}
          />
        </Grid.Column>
        <Grid.Column width={8}>
          <AceEditor
            mode='assembly_x86'
            theme='monokai'
            name='bytes'
            editorProps={{$blockScrolling: Infinity}}
            width='100%'
            fontSize={24}
            readOnly={true}
          />
        </Grid.Column>
      </Grid>
    );
  }
}
