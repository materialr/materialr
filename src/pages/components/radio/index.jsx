import Radio from '@materialr/radio';
import { Body1, Headline2, Headline4 } from '@materialr/typography';
import React from 'react';

import Bash from 'shared/components/code-block/bash';
import InlineCode from 'shared/components/code-block/inline-code';
import Javascript from 'shared/components/code-block/javascript';
import Showcase from 'shared/components/showcase';

const basic = `
import Radio from '@materialr/radio';
import React from 'react';

export default class extends React.Component {
  constructor(props) {
    super(props);
    this.state = { checked: 'care' };
    this.changeChecked = this.changeChecked.bind(this);
  }
  changeChecked(event) {
    this.setState({ checked: event.target.value });
  }
  render() {
    return (
      <React.Fragment>
        <Radio
          checked={this.state.checked === 'care'}
          label="Care"
          name="feeling"
          onChange={this.changeChecked}
          value="care"
        />
        <Radio
          checked={this.state.checked === 'love'}
          label="Love"
          name="feeling"
          onChange={this.changeChecked}
          value="love"
        />
      </React.Fragment>
    );
  }
}
`;

const disabled = `
import Radio from '@materialr/radio';
import React from 'react';

export default class extends React.Component {
  constructor(props) {
    super(props);
    this.state = { checked: 'care' };
    this.changeChecked = this.changeChecked.bind(this);
  }
  changeChecked(event) {
    this.setState({ checked: event.target.value });
  }
  render() {
    return (
      <React.Fragment>
        <Radio
          checked={this.state.checked === 'care'}
          label="Care"
          name="feeling"
          onChange={this.changeChecked}
          value="care"
        />
        <Radio
          checked={this.state.checked === 'love'}
          label="Love"
          name="feeling"
          onChange={this.changeChecked}
          value="love"
        />
        <Radio
          checked={this.state.checked === 'hate'}
          disabled
          label="Hate"
          name="feeling"
          onChange={this.changeChecked}
          value="hate"
        />
      </React.Fragment>
    );
  }
}
`;

export default class extends React.Component {
  constructor(props) {
    super(props);
    this.state = { checked: 'care', checkedDisabled: 'love' };
    this.changeChecked = this.changeChecked.bind(this);
    this.changeCheckedDisabled = this.changeCheckedDisabled.bind(this);
  }
  changeChecked(event) {
    this.setState({ checked: event.target.value });
  }
  changeCheckedDisabled(event) {
    this.setState({ checkedDisabled: event.target.value });
  }
  render() {
    return (
      <React.Fragment>
        <Headline2>Radio buttons</Headline2>
        <Body1>
          A list of all components and props is available on{' '}
          <a href="https://github.com/materialr/radio" rel="noopener noreferrer" target="_blank">
            GitHub
          </a>
        </Body1>

        <Headline4>Installation</Headline4>
        <Bash>$ npm install --save @materialr/radio</Bash>

        <Headline4>Basic</Headline4>
        <Body1>
          A basic radio button requires the <InlineCode>checked</InlineCode>,
          {' '}<InlineCode>label</InlineCode>, <InlineCode>name</InlineCode>,
          {' '}<InlineCode>onChange</InlineCode> and <InlineCode>value</InlineCode> props.
        </Body1>
        <Showcase>
          <Radio
            checked={this.state.checked === 'care'}
            label="Care"
            name="feeling"
            onChange={this.changeChecked}
            value="care"
          />
          <Radio
            checked={this.state.checked === 'love'}
            label="Love"
            name="feeling"
            onChange={this.changeChecked}
            value="love"
          />
        </Showcase>
        <Javascript>{basic}</Javascript>

        <Headline4>Disabled</Headline4>
        <Body1>
          A radio button can be disbaled by adding the <InlineCode>disabled</InlineCode> prop.
        </Body1>
        <Showcase>
          <Radio
            checked={this.state.checkedDisabled === 'care'}
            label="Care"
            name="feelingDisabled"
            onChange={this.changeCheckedDisabled}
            value="care"
          />
          <Radio
            checked={this.state.checkedDisabled === 'love'}
            label="Love"
            name="feelingDisabled"
            onChange={this.changeCheckedDisabled}
            value="love"
          />
          <Radio
            checked={this.state.checkedDisabled === 'hate'}
            disabled
            label="Hate"
            name="feelingDisabled"
            onChange={this.changeCheckedDisabled}
            value="hate"
          />
        </Showcase>
        <Javascript>{disabled}</Javascript>
      </React.Fragment>
    );
  }
}
