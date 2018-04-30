import IconToggle from '@materialr/icon-toggle';
import { Body1, Headline2, Headline4 } from '@materialr/typography';
import React from 'react';

import Bash from 'shared/components/code-block/bash';
import InlineCode from 'shared/components/code-block/inline-code';
import Javascript from 'shared/components/code-block/javascript';
import Showcase from 'shared/components/showcase';

const basic = `
import IconToggle from '@materialr/icon-toggle';
import React from 'react';

export default class extends React.Component {
  constructor(props) {
    super(props);
    this.state = { activated: false };
    this.updateActivatedState = this.updateActivatedState.bind(this);
  }
  updateActivatedState({ detail: { isOn }}) {
    this.setState({ activated: isOn });
  }
  render() {
    return (
      <React.Fragment>
        <IconToggle
          iconOff="favorite_border"
          iconOn="favorite"
          labelOff="Off"
          labelOn="On"
          onChange={this.updateActivatedState}
        />
        <p>Activated: <strong>{this.state.activated ? 'true' : 'false'}</strong></p>
      </React.Fragment>
    );
  }
}
`;

const disabled = `
import IconToggle from '@materialr/icon-toggle';
import React from 'react';

export default () => (
  <IconToggle
    disabled
    iconOff="favorite_border"
    iconOn="favorite"
    labelOff="Off"
    labelOn="On"
    onChange={() => {}}
  />
);
`;

export default class extends React.Component {
  constructor(props) {
    super(props);
    this.state = { activated: false };
    this.updateActivated = this.updateActivated.bind(this);
  }
  updateActivated({ detail: { isOn } }) {
    this.setState({ activated: isOn });
  }
  render() {
    return (
      <React.Fragment>
        <Headline2>Icon toggle</Headline2>
        <Body1>
          A list of all components and props is available on{' '}
          <a href="https://github.com/materialr/icon-toggle" rel="noopener noreferrer" target="_blank">
            GitHub
          </a>
        </Body1>

        <Headline4>Installation</Headline4>
        <Bash>$ npm install --save @materialr/icon-toggle</Bash>

        <Headline4>Basic</Headline4>
        <Body1>
          A basic icon toggle with <em>on</em> and <em>off</em> states for their icons and labels.
        </Body1>
        <Showcase column>
          <IconToggle
            iconOff="favorite_border"
            iconOn="favorite"
            labelOff="Off"
            labelOn="On"
            onChange={this.updateActivated}
          />
          <Body1>Activated: <strong>{this.state.activated ? 'true' : 'false'}</strong></Body1>
        </Showcase>
        <Javascript>{basic}</Javascript>

        <Headline4>Disabled</Headline4>
        <Body1>
          By adding the <InlineCode>disabled</InlineCode> prop the icon toggle can be disabled.
        </Body1>
        <Showcase column>
          <IconToggle
            disabled
            iconOff="favorite_border"
            iconOn="favorite"
            labelOff="Off"
            labelOn="On"
            onChange={() => {}}
          />
        </Showcase>
        <Javascript>{disabled}</Javascript>
      </React.Fragment>
    );
  }
}
