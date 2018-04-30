import Fab from '@materialr/fab';
import { Body1, Headline2, Headline4 } from '@materialr/typography';
import React from 'react';

import Bash from 'shared/components/code-block/bash';
import Javascript from 'shared/components/code-block/javascript';
import Showcase from 'shared/components/showcase';

const basic = `
import Fab from '@materialr/fab';
import React from 'react';

export default () => <Fab icon="favorite" />;
`;

const exited = `
import Fab from '@materialr/fab';
import React from 'react';

export default class extends React.Component {
  constructor(props) {
    super(props);
    this.state = { exited: false };
    this.toggleExited = this.toggleExited.bind(this);
  }
  toggleExited() {
    this.setState({ exited: !this.state.exited });
  }
  render() {
    return (
      <React.Fragment>
        <Fab exited={this.state.exited} icon="add" onClick={this.toggleExited} />
        <Fab exited={!this.state.exited} icon="clear" onClick={this.toggleExited} />
      </React.Fragment>
    );
  }
}
`;

const mini = `
import Fab from '@materialr/fab';
import React from 'react';

export default () => <Fab icon="favorite" mini />;
`;

const ripple = `
import Fab from '@materialr/fab';
import React from 'react';

export default () => <Fab icon="favorite" ripple />;
`;

export default class extends React.Component {
  constructor(props) {
    super(props);
    this.state = { exited: false };
    this.toggleExited = this.toggleExited.bind(this);
  }
  toggleExited() {
    this.setState({ exited: !this.state.exited });
  }
  render() {
    return (
      <React.Fragment>
        <Headline2>Fab</Headline2>
        <Body1>
          A list of all components and props is available on{' '}
          <a href="https://github.com/materialr/fab" rel="noopener noreferrer" target="_blank">
            GitHub
          </a>
        </Body1>
        <Headline4>Installation</Headline4>
        <Bash>$ npm install --save @materialr/fab</Bash>

        <Headline4>Basic</Headline4>
        <Body1>A basic FAB with only an icon.</Body1>
        <Showcase>
          <Fab icon="favorite" />
        </Showcase>
        <Javascript>{basic}</Javascript>

        <Headline4>Mini</Headline4>
        <Body1>A smaller FAB</Body1>
        <Showcase>
          <Fab icon="favorite" mini />
        </Showcase>
        <Javascript>{mini}</Javascript>

        <Headline4>Exited</Headline4>
        <Body1>Add an animation as the button exits stage left</Body1>
        <Showcase>
          <Fab exited={this.state.exited} icon="add" onClick={this.toggleExited} />
          <Fab exited={!this.state.exited} icon="clear" onClick={this.toggleExited} />
        </Showcase>
        <Javascript>{exited}</Javascript>

        <Headline4>Ripple</Headline4>
        <Body1>A ripple that starts from the current mouse pointer location</Body1>
        <Showcase>
          <Fab icon="favorite" rippleEnabled />
        </Showcase>
        <Javascript>{ripple}</Javascript>
      </React.Fragment>
    );
  }
}
