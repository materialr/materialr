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
import Javascript from 'shared/components/code-block/javascript';
import Showcase from 'shared/components/showcase';

const sample = `
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

export default () => (
  <React.Fragment>
    <Headline1>Headline1</Headline1>
    <Headline2>Headline2</Headline2>
    <Headline3>Headline3</Headline3>
    <Headline4>Headline4</Headline4>
    <Headline5>Headline5</Headline5>
    <Headline6>Headline6</Headline6>
    <Subtitle1>Subtitle1</Subtitle1>
    <Subtitle2>Subtitle2</Subtitle2>
    <Body1>Body1</Body1>
    <Body2>Body2</Body2>
    <div><Button>Button</Button></div>
    <div><Caption>Caption</Caption></div>
    <div><Overline>Overline</Overline></div>
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

    <Headline4>Usage</Headline4>
    <Showcase block>
      <Headline1>Headline1</Headline1>
      <Headline2>Headline2</Headline2>
      <Headline3>Headline3</Headline3>
      <Headline4>Headline4</Headline4>
      <Headline5>Headline5</Headline5>
      <Headline6>Headline6</Headline6>
      <Subtitle1>Subtitle1</Subtitle1>
      <Subtitle2>Subtitle2</Subtitle2>
      <Body1>Body1</Body1>
      <Body2>Body2</Body2>
      <div><Button>Button</Button></div>
      <div><Caption>Caption</Caption></div>
      <div><Overline>Overline</Overline></div>
    </Showcase>
    <Javascript>{sample}</Javascript>
  </React.Fragment>
);
