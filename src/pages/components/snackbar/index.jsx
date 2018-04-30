import Button from '@materialr/button';
import Snackbar from '@materialr/snackbar';
import { Body1, Headline2, Headline4, Headline6 } from '@materialr/typography';
import React from 'react';

import Bash from 'shared/components/code-block/bash';
import Javascript from 'shared/components/code-block/javascript';
import Showcase from 'shared/components/showcase';

const action = `
import Button from '@materialr/button';
import Snackbar from '@materialr/snackbar';
import React from 'react';

export default class extends React.Component {
  constructor(props) {
    super(props);
    this.state = { actionHandled: false, shown: false };
    this.setActionHandled = this.setActionHandled.bind(this);
    this.toggleShown = this.toggleShown.bind(this);
  }
  setActionHandled() {
    this.setState({ actionHandled: true });
  }
  toggleShown() {
    this.setState({ shown: !this.state.shown });
  }
  render() {
    const { setActionHandled, state: { actionHandled, shown }, toggleShown } = this;
    return (
      <React.Fragment>
        <Button disabled={shown} onClick={toggleShown}>Care</Button>
        {shown &&
          <Snackbar
            actionHandler={setActionHandled}
            actionText="Care"
            message="Start caring"
            onHide={toggleShown}
          />}
        <p>Action handled: {actionHandled ? 'Yes' : 'No'}</p>
      </React.Fragment>
    );
  }
}
`;

const alignStart = `
import Button from '@materialr/button';
import Snackbar from '@materialr/snackbar';
import React from 'react';

export default class extends React.Component {
  constructor(props) {
    super(props);
    this.state = { shown: false };
    this.toggleShown = this.toggleShown.bind(this);
  }
  toggleShown() {
    this.setState({ shown: !this.state.shown });
  }
  render() {
    const { state: { shown }, toggleShown } = this;
    return (
      <React.Fragment>
        <Button disabled={shown} onClick={toggleShown}>Care</Button>
        {shown &&
          <Snackbar alignStart message="Is love, made visible" onHide={toggleShown} />}
      </React.Fragment>
    );
  }
}
`;

const basic = `
import Button from '@materialr/button';
import Snackbar from '@materialr/snackbar';
import React from 'react';

export default class extends React.Component {
  constructor(props) {
    super(props);
    this.state = { shown: false };
    this.toggleShown = this.toggleShown.bind(this);
  }
  toggleShown() {
    this.setState({ shown: !this.state.shown });
  }
  render() {
    const { state: { shown }, toggleShown } = this;
    return (
      <React.Fragment>
        <Button disabled={shown} onClick={toggleShown}>Care</Button>
        {shown &&
          <Snackbar message="Is love, made visible" onHide={toggleShown} />}
      </React.Fragment>
    );
  }
}
`;

const multilineBasic = `
import Button from '@materialr/button';
import Snackbar from '@materialr/snackbar';
import React from 'react';

const multilineText = 'When you take care of yourself, you're a better person for others. When ' +
  'you feel good about yourself, you treat others better';

export default class extends React.Component {
  constructor(props) {
    super(props);
    this.state = { shown: false };
    this.toggleShown = this.toggleShown.bind(this);
  }
  toggleShown() {
    this.setState({ shown: !this.state.shown });
  }
  render() {
    const { state: { shown }, toggleShown } = this;
    return (
      <React.Fragment>
        <Button disabled={shown} onClick={toggleShown}>Care</Button>
        {shown &&
          <Snackbar actionText="Care" message={multilineText} multiline onHide={toggleShown} />}
      </React.Fragment>
    );
  }
}
`;

const multilineBottom = `
import Button from '@materialr/button';
import Snackbar from '@materialr/snackbar';
import React from 'react';

const multilineText = 'When you take care of yourself, you're a better person for others. When ' +
  'you feel good about yourself, you treat others better';

export default class extends React.Component {
  constructor(props) {
    super(props);
    this.state = { shown: false };
    this.toggleShown = this.toggleShown.bind(this);
  }
  toggleShown() {
    this.setState({ shown: !this.state.shown });
  }
  render() {
    const { state: { shown }, toggleShown } = this;
    return (
      <React.Fragment>
        <Button disabled={shown} onClick={toggleShown}>Care</Button>
        {shown &&
          <Snackbar
            actionText="Care"
            message={multilineText}
            multiline
            multilineActionOnBottom
            onHide={toggleShown}
          />}
      </React.Fragment>
    );
  }
}
`;

const multilineText = 'When you take care of yourself, you\'re a better person for others. When ' +
  'you feel good about yourself, you treat others better';

const timeout = `
import Button from '@materialr/button';
import Snackbar from '@materialr/snackbar';
import React from 'react';

export default class extends React.Component {
  constructor(props) {
    super(props);
    this.state = { shown: false };
    this.toggleShown = this.toggleShown.bind(this);
  }
  toggleShown() {
    this.setState({ shown: !this.state.shown });
  }
  render() {
    const { state: { shown }, toggleShown } = this;
    return (
      <React.Fragment>
        <Button disabled={shown} onClick={toggleShown}>Care</Button>
        {shown &&
          <Snackbar message="Is love, made visible" onHide={toggleShown} timeout={500} />}
      </React.Fragment>
    );
  }
}
`;

export default class extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      actionHandled: false,
      shownAction: false,
      shownAlignStart: false,
      shownBasic: false,
      shownMultilineBasic: false,
      shownMultilineBottom: false,
      shownTimeout: false,
    };
    this.setActionHandled = this.setActionHandled.bind(this);
    this.toggleShownAction = this.toggleShownAction.bind(this);
    this.toggleShownAlignStart = this.toggleShownAlignStart.bind(this);
    this.toggleShownBasic = this.toggleShownBasic.bind(this);
    this.toggleShownMultilineBasic = this.toggleShownMultilineBasic.bind(this);
    this.toggleShownMultilineBottom = this.toggleShownMultilineBottom.bind(this);
    this.toggleShownTimeout = this.toggleShownTimeout.bind(this);
  }
  setActionHandled() {
    this.setState({ actionHandled: true });
  }
  toggleShownAction() {
    this.setState({ shownAction: !this.state.shownAction });
  }
  toggleShownAlignStart() {
    this.setState({ shownAlignStart: !this.state.shownAlignStart });
  }
  toggleShownBasic() {
    this.setState({ shownBasic: !this.state.shownBasic });
  }
  toggleShownMultilineBasic() {
    this.setState({ shownMultilineBasic: !this.state.shownMultilineBasic });
  }
  toggleShownMultilineBottom() {
    this.setState({ shownMultilineBottom: !this.state.shownMultilineBottom });
  }
  toggleShownTimeout() {
    this.setState({ shownTimeout: !this.state.shownTimeout });
  }
  render() {
    const {
      setActionHandled,
      state: {
        actionHandled,
        shownAction,
        shownAlignStart,
        shownBasic,
        shownMultilineBasic,
        shownMultilineBottom,
        shownTimeout,
      },
      toggleShownAction,
      toggleShownAlignStart,
      toggleShownBasic,
      toggleShownMultilineBasic,
      toggleShownMultilineBottom,
      toggleShownTimeout,
    } = this;
    return (
      <React.Fragment>
        <Headline2>Snackbar</Headline2>
        <Body1>
          A list of all components and props is available on{' '}
          <a href="https://github.com/materialr/snackbar" rel="noopener noreferrer" target="_blank">
            GitHub
          </a>
        </Body1>

        <Headline4>Installation</Headline4>
        <Bash>$ npm install --save @materialr/snackbar</Bash>

        <Headline4>Basic</Headline4>
        <Body1>A basic snackbar with a message.</Body1>
        <Showcase>
          <Button disabled={shownBasic} onClick={toggleShownBasic}>Care</Button>
          {shownBasic && <Snackbar message="Is love, made visible" onHide={toggleShownBasic} />}
        </Showcase>
        <Javascript>{basic}</Javascript>

        <Headline4>Align start</Headline4>
        <Body1>A basic snackbar with a message aligned to the start.</Body1>
        <Showcase>
          <Button disabled={shownAlignStart} onClick={toggleShownAlignStart}>Care</Button>
          {shownAlignStart &&
            <Snackbar alignStart message="Is love, made visible" onHide={toggleShownAlignStart} />}
        </Showcase>
        <Javascript>{alignStart}</Javascript>

        <Headline4>Timeout</Headline4>
        <Body1>The timeout can be set in milliseconds.</Body1>
        <Showcase>
          <Button disabled={shownTimeout} onClick={toggleShownTimeout}>Care</Button>
          {shownTimeout &&
            <Snackbar
              message="Is love, made visible"
              onHide={toggleShownTimeout}
              timeout={500}
            />}
        </Showcase>
        <Javascript>{timeout}</Javascript>

        <Headline4>Action</Headline4>
        <Body1>Add an action to a snackbar</Body1>
        <Showcase column>
          <Button disabled={shownAction} onClick={toggleShownAction}>Care</Button>
          {shownAction &&
            <Snackbar
              actionHandler={setActionHandled}
              actionText="Care"
              message="Start caring"
              onHide={toggleShownAction}
            />}
          <Body1>Action handled: <strong>{actionHandled ? 'Yes' : 'No'}</strong></Body1>
        </Showcase>
        <Javascript>{action}</Javascript>

        <Headline4>Multiline</Headline4>
        <Headline6>Basic</Headline6>
        <Body1>Multiline text inside the snackbar.</Body1>
        <Showcase>
          <Button disabled={shownMultilineBasic} onClick={toggleShownMultilineBasic}>Care</Button>
          {shownMultilineBasic &&
            <Snackbar
              actionHandler={() => {}}
              actionText="Care"
              message={multilineText}
              multiline
              onHide={toggleShownMultilineBasic}
            />}
        </Showcase>
        <Javascript>{multilineBasic}</Javascript>

        <Headline6>Action on bottom</Headline6>
        <Body1>Multiline text inside the snackbar with the action button on the bottom.</Body1>
        <Showcase>
          <Button disabled={shownMultilineBottom} onClick={toggleShownMultilineBottom}>Care</Button>
          {shownMultilineBottom &&
            <Snackbar
              actionHandler={() => {}}
              actionText="Care"
              message={multilineText}
              multiline
              multilineActionOnBottom
              onHide={toggleShownMultilineBottom}
            />}
        </Showcase>
        <Javascript>{multilineBottom}</Javascript>

      </React.Fragment>
    );
  }
}
