import Button from '@materialr/button';
import { Body1, Headline2, Headline4 } from '@materialr/typography';
import React from 'react';

import Bash from 'shared/components/code-block/bash';
import Javascript from 'shared/components/code-block/javascript';
import Showcase from 'shared/components/showcase';

const dense = `
import Button from '@materialr/button';
import React from 'react';

export default () => <Button dense raised>Hello world<Button>;
`;

const flat = `
import Button from '@materialr/button';
import React from 'react';

export default () => <Button>Hello world<Button>;
`;

const raised = `
import Button from '@materialr/button';
import React from 'react';

export default () => <Button raised>Hello world<Button>;
`;

const ripple = `
import Button from '@materialr/button';
import React from 'react';

export default () => <Button raised ripple>Hello world<Button>;
`;

const outlined = `
import Button from '@materialr/button';
import React from 'react';

export default () => <Button outlined>Hello world<Button>;
`;

const unelevated = `
import Button from '@materialr/button';
import React from 'react';

export default () => <Button unelevated>Hello world<Button>;
`;

export default () => (
  <React.Fragment>
    <Headline2>Button</Headline2>
    <Body1>
      A list of all components and props is available on{' '}
      <a href="https://github.com/materialr/button" rel="noopener noreferrer" target="_blank">
        GitHub
      </a>
    </Body1>
    <Headline4>Installation</Headline4>
    <Bash>$ npm install --save @materialr/button</Bash>

    <Headline4>Flat</Headline4>
    <Body1>
      In {'it\'s'} most basic form, a button is styled with a transparent background and the primary
      color for {'it\'s'} text. A flat button is not raised from the surface it resides on.
    </Body1>
    <Showcase><Button>Hello world</Button></Showcase>
    <Javascript>{flat}</Javascript>

    <Headline4>Raised</Headline4>
    <Body1>
      A button that is raised off of the surface that it is on. The primary color is used as a
      background color. This button is more emphasised than a flat button and should be used as the
      primary action(s) on a view.
    </Body1>
    <Showcase><Button raised>Hello world</Button></Showcase>
    <Javascript>{raised}</Javascript>

    <Headline4>Outlined</Headline4>
    <Body1>
      A button that is outlined has a transparent background, and lies flat on the surface
      that it is on.
    </Body1>
    <Showcase><Button outlined>Hello world</Button></Showcase>
    <Javascript>{outlined}</Javascript>

    <Headline4>Unelevated</Headline4>
    <Body1>
      The same as a raised button, except that it is not elevated from the surface that it is on.
    </Body1>
    <Showcase><Button unelevated>Hello world</Button></Showcase>
    <Javascript>{unelevated}</Javascript>

    <Headline4>Dense</Headline4>
    <Body1>Not as smart as all the other buttons, a button with less vertical padding</Body1>
    <Showcase><Button dense raised>Hello world</Button></Showcase>
    <Javascript>{dense}</Javascript>

    <Headline4>Ripple</Headline4>
    <Body1>Ripples add a visual cue when a button is interacted with.</Body1>
    <Showcase><Button raised ripple>Hello world</Button></Showcase>
    <Javascript>{ripple}</Javascript>
  </React.Fragment>
);
