import {
  Body1,
  Body2,
  Button,
  Caption,
  Headline1,
  Headline2,
  Headline3,
  Headline4,
  Headline5,
  Headline6,
  Overline,
  Subtitle1,
  Subtitle2,
} from '@materialr/typography';
import React from 'react';

import Bash from 'shared/components/code-block/bash';
import InlineCode from 'shared/components/code-block/inline-code';
import Javascript from 'shared/components/code-block/javascript';
import Showcase from 'shared/components/showcase';

const body = `
import { Body1, Body2 } from '@materialr/typography';
import React from 'react';

export default () => (
  <React.Fragment>
    <Body1>
      I follow three rules: Do the right thing, do the best you can,
      and always show people you care.
    </Body1>
    <Body2>There is only one happiness in this life, to love and be loved.</Body2>
  </React.Fragment>
);
`;

const headlines = `
import {
  Headline1,
  Headline2,
  Headline3,
  Headline4,
  Headline5,
  Headline6,
} from '@materialr/typography';
import React from 'react';

export default () => (
  <React.Fragment>
    <Headline1>Care</Headline1>
    <Headline2>Love</Headline2>
    <Headline3>Care</Headline3>
    <Headline4>Love</Headline4>
    <Headline5>Care</Headline5>
    <Headline6>Love</Headline6>
  </React.Fragment>
);
`;

const other = `
import { Button, Caption, Overline } from '@materialr/typography';
import React from 'react';

export default () => (
  <React.Fragment>
    <div><Button>Care</Button></div>
    <div><Caption>Love</Caption></div>
    <div><Overline>Care</Overline></div>
  </React.Fragment>
);
`;

const subtitles = `
import { Subtitle1, Subtitle2 } from '@materialr/typography';
import React from 'react';

export default () => (
  <React.Fragment>
    <Subtitle1>Care</Subtitle1>
    <Subtitle2>Love</Subtitle2>
  </React.Fragment>
);
`;

export default () => (
  <React.Fragment>
    <Headline2>Typography</Headline2>
    <Body1>
      A list of all components and props is available on{' '}
      <a href="https://github.com/materialr/typography" rel="noopener noreferrer" target="_blank">
        GitHub
      </a>
    </Body1>

    <Headline4>Installation</Headline4>
    <Bash>$ npm install --save @materialr/typography</Bash>

    <Headline4>Headlines</Headline4>
    <Body1>
      The typography package includes headlines in the form
      of <InlineCode>{'<Headline1 />'}</InlineCode> through{' '}
      <InlineCode>{'<Headline6 />'}</InlineCode>.
    </Body1>
    <Showcase block>
      <Headline1>Care</Headline1>
      <Headline2>Love</Headline2>
      <Headline3>Care</Headline3>
      <Headline4>Love</Headline4>
      <Headline5>Care</Headline5>
      <Headline6>Love</Headline6>
    </Showcase>
    <Javascript>{headlines}</Javascript>

    <Headline4>Subtitles</Headline4>
    <Body1>
      The typography package includes two types of subtitles,{' '}
      <InlineCode>{'<Subtitle1 />'}</InlineCode> and <InlineCode>{'<Subtitle2 />'}</InlineCode>.
    </Body1>
    <Showcase block>
      <Subtitle1>Care</Subtitle1>
      <Subtitle2>Love</Subtitle2>
    </Showcase>
    <Javascript>{subtitles}</Javascript>

    <Headline4>Body</Headline4>
    <Body1>
      There are two types of body text included in the typography package,{' '}
      <InlineCode>{'<Body1 />'}</InlineCode> and <InlineCode>{'<Body2 />'}</InlineCode>.
    </Body1>
    <Showcase block>
      <Body1>
        I follow three rules: Do the right thing, do the best you can,
        and always show people you care.
      </Body1>
      <Body2>There is only one happiness in this life, to love and be loved.</Body2>
    </Showcase>
    <Javascript>{body}</Javascript>

    <Headline4>Other</Headline4>
    <Body1>
      Besides the basic typography components above some others are also part of this package.
    </Body1>
    <Showcase block>
      <div><Button>Care</Button></div>
      <div><Caption>Love</Caption></div>
      <div><Overline>Care</Overline></div>
    </Showcase>
    <Javascript>{other}</Javascript>
  </React.Fragment>
);
