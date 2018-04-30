import Checkbox from '@materialr/checkbox';
import { Body1, Headline2, Headline4 } from '@materialr/typography';
import React from 'react';

import Bash from 'shared/components/code-block/bash';
import InlineCode from 'shared/components/code-block/inline-code';
import Javascript from 'shared/components/code-block/javascript';
import Showcase from 'shared/components/showcase';

const basic = `
import Checkbox from '@materialr/checkbox';
import React from 'react';

export default () => <Checkbox label="Care" />
`;

const disabled = `
import Checkbox from '@materialr/checkbox';
import React from 'react';

export default () => <Checkbox disabled label="Hate" name="sample-checkbox" />
`;

export default () => (
  <React.Fragment>
    <Headline2>Checkbox</Headline2>
    <Body1>
      A list of all components and props is available on{' '}
      <a href="https://github.com/materialr/checkbox" rel="noopener noreferrer" target="_blank">
        GitHub
      </a>
    </Body1>

    <Headline4>Installation</Headline4>
    <Bash>$ npm install --save @materialr/checkbox</Bash>

    <Headline4>Basic</Headline4>
    <Body1>A basic checkbox requires at least a <InlineCode>label</InlineCode> prop.</Body1>
    <Showcase>
      <Checkbox label="Care" />
    </Showcase>
    <Javascript>{basic}</Javascript>

    <Headline4>Disabled</Headline4>
    <Body1>A checkbox can be disabled by using the <InlineCode>disabled</InlineCode> prop.</Body1>
    <Showcase>
      <Checkbox disabled label="Hate" name="sample-checkbox" />
    </Showcase>
    <Javascript>{disabled}</Javascript>
  </React.Fragment>
);
