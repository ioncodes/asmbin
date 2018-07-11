import React, { Component } from 'react';
import AceEditor from 'react-ace';
import brace from 'brace';
import { Grid, Button } from 'semantic-ui-react';
import Settings from './Settings';
import Code from './Code';
import { toggleSettings, toggleCode } from './events';

import 'brace/mode/assembly_x86';
import 'brace/theme/monokai';

const cpp = 'const char bytes[] = { _ };';

const ks = window.ks;
const asm = new ks.Keystone(ks.ARCH_X86, ks.MODE_64);
asm.option(ks.OPT_SYNTAX, ks.OPT_SYNTAX_INTEL);

export default class Editor extends Component {
  constructor(props) {
    super(props);

    this.state = { bytes: [], showSettings: false, cpp: '' };
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
      } catch(ex) {  }
    });
    let sstr = bytes.join('\n').split(' ,').join('\n').trim();
    if(sstr !== '') {
      let c = cpp.replace('_', sstr.replace(' ', ', '));
      this.setState({cpp: c});
    }
    window.ace.edit('bytes').setValue(sstr);
    let size = 0;
    bytes.forEach(instruction => {
      size += instruction.split(' ').length;
    });
  }

  showSettings = () => toggleSettings();

  showCode = () => toggleCode();

  render() {
    return (
      <div>
        <Settings/>
        <Code lang='cpp' code={this.state.cpp}/>
        <Grid style={{
            position: 'absolute',
            top: '90px',
            right: '0px',
            zIndex: '999999'
          }}>
          <Grid.Row>
            <Button icon='settings' onClick={this.showSettings} />
          </Grid.Row>
          <Grid.Row>
            <Button primary icon='save' />
          </Grid.Row>
          <Grid.Row>
            <Button primary icon='code' onClick={this.showCode} />
          </Grid.Row>
        </Grid>
        <Grid style={{
            marginLeft: '5px',
            marginRight: '5px',
          }}>
          <Grid.Row>
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
          </Grid.Row>
        </Grid>
      </div>
    );
  }
}
