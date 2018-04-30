import Switch from '@materialr/switch';
import { Body1, Headline2, Headline4 } from '@materialr/typography';
import React from 'react';

import Bash from 'shared/components/code-block/bash';
import Javascript from 'shared/components/code-block/javascript';
import Showcase from 'shared/components/showcase';

const basic = `
import Switch from '@materialr/switch';
import React from 'react';

export default class extends React.Component {
  constructor(props) {
    super(props);
    this.state = { checked: true };
  }
  toggleChecked() {
    this.setState({ checked: !this.state.checked });
  }
  render() {
    return (
      <React.Fragment>
        <Switch checked={this.state.checked} name="demo-switch" onChange={this.toggleChecked} />
        <p>State: {this.state.checked ? 'Checked' : 'Unchecked'}</p>
      </React.Fragment>
    );
  }
}
`;

const disabled = `
import Switch from '@materialr/switch';
import React from 'react';

export default () => <Switch disabled label="Hate" name="demo-switch" />
`;

export default class extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      checked: true,
    };
    this.toggleChecked = this.toggleChecked.bind(this);
  }
  toggleChecked() {
    this.setState({ checked: !this.state.checked });
  }
  render() {
    return (
      <React.Fragment>
        <Headline2>Switch</Headline2>
        <Body1>
          A list of all components and props is available on{' '}
          <a href="https://github.com/materialr/switch" rel="noopener noreferrer" target="_blank">
            GitHub
          </a>
        </Body1>

        <Headline4>Installation</Headline4>
        <Bash>$ npm install --save @materialr/switch</Bash>

        <Headline4>Basic</Headline4>
        <Body1>A switch with a label</Body1>
        <Showcase column>
          <Switch
            checked={this.state.checked}
            label="Care"
            name="demo-switch"
            onChange={this.toggleChecked}
          />
          <Body1>State: <strong>{this.state.checked ? 'Checked' : 'Unchecked'}</strong></Body1>
        </Showcase>
        <Javascript>{basic}</Javascript>

        <Headline4>Disabled</Headline4>
        <Body1>A switch without a label</Body1>
        <Showcase>
          <Switch disabled label="Hate" name="demo-switch" />
        </Showcase>
        <Javascript>{disabled}</Javascript>
      </React.Fragment>
    );
  }
}
