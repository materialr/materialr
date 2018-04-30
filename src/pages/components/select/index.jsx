import Select, { SelectGroup, SelectOption } from '@materialr/select';
import { Body1, Headline2, Headline4, Headline6 } from '@materialr/typography';
import React from 'react';

import Bash from 'shared/components/code-block/bash';
import InlineCode from 'shared/components/code-block/inline-code';
import Javascript from 'shared/components/code-block/javascript';
import Showcase from 'shared/components/showcase';

const basic = `
import Select, { SelectOption } from '@materialr/select';
import React from 'react';

export default () => (
  <Select label="Feeling" name="feeling">
    <SelectOption label="Care" value="care" />
    <SelectOption label="Love" value="love" />
  </Select>
);
`;

const box = `
import Select, { SelectOption } from '@materialr/select';
import React from 'react';

export default () => (
  <Select box label="Feeling" name="feeling">
    <SelectOption label="Care" value="care" />
    <SelectOption label="Love" value="love" />
  </Select>
);
`;

const disabledFull = `
import Select, { SelectOption } from '@materialr/select';
import React from 'react';

export default () => (
  <Select disabled label="Feeling" name="feeling">
    <SelectOption label="Care" value="care" />
    <SelectOption label="Love" value="love" />
  </Select>
);
`;

const disabledSingle = `
import Select, { SelectOption } from '@materialr/select';
import React from 'react';

export default () => (
  <Select label="Feeling" name="feeling">
    <SelectOption label="Care" value="care" />
    <SelectOption disabled label="Hate" value="hate" />
    <SelectOption label="Love" value="love" />
  </Select>
);
`;

const empty = `
import Select, { SelectOption } from '@materialr/select';
import React from 'react';

export default class extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: '' };
    this.changeSelectedValue = this.changeSelectedValue.bind(this);
  }
  changeSelectedValue(event) {
    this.setState({ value: event.target.value });
  }
  render {
    return (
      <Select
        label="Feeling"
        name="feeling"
        onChange={this.changeSelectedValue}
        value={this.state.value}
      >
        <SelectOption label="Care" value="care" />
        <SelectOption label="Love" value="love" />
      </Select>
    );
  }
}
`;

const group = `
import Select, { SelectGroup, SelectOption } from '@materialr/select';
import React from 'react';

export default () => (
  <Select label="Feeling" name="feeling">
    <SelectGroup label="good">
      <SelectOption label="Care" value="care" />
      <SelectOption label="Love" value="love" />
    </SelectGroup>
    <SelectGroup label="bad">
      <SelectOption label="Hate" value="hate" />
    </SelectGroup>
  </Select>
);
`;

const preSelected = `
import Select, { SelectOption } from '@materialr/select';
import React from 'react';

export default class extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: 'love' };
    this.changeSelectedValue = this.changeSelectedValue.bind(this);
  }
  changeSelectedValue(event) {
    this.setState({ value: event.target.value });
  }
  render {
    return (
      <Select
        label="Feeling"
        name="feeling"
        onChange={this.changeSelectedValue}
        value={this.state.value}
      >
        <SelectOption label="Care" value="care" />
        <SelectOption label="Love" value="love" />
      </Select>
    );
  }
}
`;

class SelectPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: 'love', valueEmpty: '' };
    this.changeSelectedValue = this.changeSelectedValue.bind(this);
    this.changeSelectedValueEmpty = this.changeSelectedValueEmpty.bind(this);
  }
  changeSelectedValue(event) {
    this.setState({ value: event.target.value });
  }
  changeSelectedValueEmpty(event) {
    this.setState({ valueEmpty: event.target.value });
  }
  render() {
    return (
      <React.Fragment>
        <Headline2>Select</Headline2>
        <Body1>
          A list of all components and props is available on{' '}
          <a href="https://github.com/materialr/select" rel="noopener noreferrer" target="_blank">
            GitHub
          </a>
        </Body1>

        <Headline4>Installation</Headline4>
        <Bash>$ npm i -S @materialr/select</Bash>

        <Headline4>Basic</Headline4>
        <Body1>
          A select list in the most basic form needs a <InlineCode>label</InlineCode>,
          a <InlineCode>name</InlineCode>, and <InlineCode>children</InlineCode>.
        </Body1>
        <Showcase>
          <Select label="Feeling" name="feeling">
            <SelectOption label="Care" value="care" />
            <SelectOption label="Love" value="love" />
          </Select>
        </Showcase>
        <Javascript>{basic}</Javascript>

        <Headline4>Disabled</Headline4>
        <Headline6>Full select</Headline6>
        <Body1>
          The full select list can be disabled by adding a <InlineCode>disabled</InlineCode> prop.
        </Body1>
        <Showcase>
          <Select disabled label="Feeling" name="feeling">
            <SelectOption label="Care" value="care" />
            <SelectOption label="Love" value="love" />
          </Select>
        </Showcase>
        <Javascript>{disabledFull}</Javascript>

        <Headline6>Single item</Headline6>
        <Body1>
          A single item can be disabled by adding a <InlineCode>disabled</InlineCode> prop to it.
        </Body1>
        <Showcase>
          <Select label="Feeling" name="feeling">
            <SelectOption label="Care" value="care" />
            <SelectOption disabled label="Hate" value="hate" />
            <SelectOption label="Love" value="love" />
          </Select>
        </Showcase>
        <Javascript>{disabledSingle}</Javascript>

        <Headline4>Box</Headline4>
        <Body1>
          A select can be displayed in a box by adding a <InlineCode>box</InlineCode> prop.
        </Body1>
        <Showcase>
          <Select box label="Feeling" name="feeling">
            <SelectOption label="Care" value="care" />
            <SelectOption label="Love" value="love" />
          </Select>
        </Showcase>
        <Javascript>{box}</Javascript>

        <Headline4>Options groups</Headline4>
        <Body1>
          An option group can be added by wrapping the <InlineCode>{'<SelectOption />'}</InlineCode>s
          in a <InlineCode>{'<SelectGroup />'}</InlineCode>.
        </Body1>
        <Showcase>
          <Select label="Feeling" name="feeling">
            <SelectGroup label="good">
              <SelectOption label="Care" value="care" />
              <SelectOption label="Love" value="love" />
            </SelectGroup>
            <SelectGroup label="bad">
              <SelectOption label="Hate" value="hate" />
            </SelectGroup>
          </Select>
        </Showcase>
        <Javascript>{group}</Javascript>

        <Headline4>Empty initial</Headline4>
        <Body1>
          By default, a select will use the first value as the selected item, if
          the <InlineCode>label</InlineCode> should rather be used, add
          an empty <InlineCode>value</InlineCode> prop.
        </Body1>
        <Showcase>
          <Select
            label="Feeling"
            name="feeling"
            value={this.state.valueEmpty}
            onChange={this.changeSelectedValueEmpty}
          >
            <SelectOption label="Care" value="care" />
            <SelectOption label="Love" value="love" />
          </Select>
        </Showcase>
        <Javascript>{empty}</Javascript>

        <Headline4>Pre-selected</Headline4>
        <Body1>
          To pre-select a value, pass the <InlineCode>value</InlineCode> prop to the select.
        </Body1>
        <Showcase>
          <Select
            label="Feeling"
            name="feeling"
            onChange={this.changeSelectedValue}
            value={this.state.value}
          >
            <SelectOption label="Care" value="care" />
            <SelectOption label="Love" value="love" />
          </Select>
        </Showcase>
        <Javascript>{preSelected}</Javascript>
      </React.Fragment>
    );
  }
}

export default SelectPage;
