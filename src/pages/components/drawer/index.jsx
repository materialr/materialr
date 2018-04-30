import { PermanentDrawer, PersistentDrawer, TemporaryDrawer } from '@materialr/drawer';
import { Body1, Headline2, Headline4, Headline6 } from '@materialr/typography';
import React from 'react';

import Bash from 'shared/components/code-block/bash';
import InlineCode from 'shared/components/code-block/inline-code';
import Javascript from 'shared/components/code-block/javascript';
import Note from 'shared/components/note';
import Showcase from 'shared/components/showcase';

import DrawerContent from './drawer-content';
import PageContent from './page-content';
import Toolbar from './toolbar';
import './index.scss';

const permanent = `
import { PermanentDrawer } from '@materialr/drawer';
import React from 'react';

export default () => (
  <div className="drawer__sample">
    <PermanentDrawer>
      {/* Drawer content */}
    </PermanentDrawer>
    <div className="drawer__sample__toolbar-holder">
      {/* Toolbar */}
      {/* Page content */}
    </div>
  </div>
);
`;

const permanentBelowToolbar = `
import { PermanentDrawer } from '@materialr/drawer';
import React from 'react';

export default () => (
  <React.Fragment>
    {/* Toolbar */}
    <div className="drawer__sample">
      <PermanentDrawer>
        {/* Drawer content */}
      </PermanentDrawer>
      {/* Page content */}
    </div>
  </React.Fragment>
);
`;

const persistent = `
import { PersistentDrawer } from '@materialr/drawer';
import React from 'react';

export class extends React.Component {
  constructor(props) {
    super(props);
    this.state = { open: false };
    this.toggleOpened = this.toggleOpened.bind(this);
  }
  toggleOpened() {
    this.setState({ open: !this.state.open });
  }
  render() {
    return (
      <div className="drawer__sample">
        <PersistentDrawer open={this.state.open}>
          {/* Drawer content */}
        </PersistentDrawer>
        <div className="drawer__sample__toolbar-holder">
          {/* Toolbar - button 'onClick' calls 'toggleOpened' */}
          {/* Page content */}
        </div>
      </div>
    );
  }
}
`;

const temporary = `
import { TemporaryDrawer } from '@materialr/drawer';
import React from 'react';

export class extends React.Component {
  constructor(props) {
    super(props);
    this.state = { open: false };
    this.toggleOpened = this.toggleOpened.bind(this);
  }
  toggleOpened() {
    this.setState({ open: !this.state.open });
  }
  render() {
    return (
      <div className="drawer__sample">
        <TemporaryDrawer open={this.state.open} onClose={this.toggleOpened}>
          {/* Drawer content */}
        </TemporaryDrawer>
        <div className="drawer__sample__toolbar-holder">
          {/* Toolbar - button 'onClick' calls 'toggleOpened' */}
          {/* Page content */}
        </div>
      </div>
    );
  }
}
`;

export default class extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      persistentIsOpen: false,
      temporaryIsOpen: false,
    };
    this.persistentToggle = this.persistentToggle.bind(this);
    this.temporaryToggle = this.temporaryToggle.bind(this);
  }
  persistentToggle() {
    this.setState({ persistentIsOpen: !this.state.persistentIsOpen });
  }
  temporaryToggle() {
    this.setState({ temporaryIsOpen: !this.state.temporaryIsOpen });
  }
  render() {
    return (
      <React.Fragment>
        <Headline2>Drawer</Headline2>
        <Body1>
          A list of all components and props is available on{' '}
          <a href="https://github.com/materialr/drawer" rel="noopener noreferrer" target="_blank">
            GitHub
          </a>
        </Body1>
        <Headline4>Installation</Headline4>
        <Bash>$ npm install --save @materialr/drawer</Bash>

        <Headline4>Permanent</Headline4>
        <Body1>
          A drawer that is permanently visible on the screen. It is suitable for tablets and desktop
          devices.
        </Body1>
        <Headline6>Above toolbar</Headline6>
        <Showcase block>
          <div className="drawer__sample">
            <PermanentDrawer>
              <DrawerContent hasToolbarSpacer />
            </PermanentDrawer>
            <div className="drawer__sample__toolbar-holder">
              <Toolbar />
              <PageContent />
            </div>
          </div>
        </Showcase>
        <Javascript>{permanent}</Javascript>
        <Note>
          Note: All drawers require their container (<InlineCode>.drawer__sample</InlineCode> in
          this case) to have <InlineCode>display: flex</InlineCode> set. They also require the
          toolbar and page content container
          (<InlineCode>.drawer__sample__toolbar-holder</InlineCode> in this case) to
          have <InlineCode>flex: 1</InlineCode> set.
        </Note>
        <Note>
          The <em>Permanent Drawer</em> will still fall under the Toolbar if the toolbar is set to
          be <InlineCode>fixed</InlineCode>.
        </Note>

        <Headline6>Below toolbar</Headline6>
        <Showcase block>
          <Toolbar />
          <div className="drawer__sample">
            <PermanentDrawer>
              <DrawerContent />
            </PermanentDrawer>
            <PageContent />
          </div>
        </Showcase>
        <Javascript>{permanentBelowToolbar}</Javascript>
        <Note>
          Note: The drawer displayed above (below the toolbar) only needs the drawer and page
          content container (<InlineCode>.drawer__sample</InlineCode> in this case) to
          have <InlineCode>display: flex</InlineCode> set.
        </Note>

        <Headline4>Persistent</Headline4>
        <Body1>
          A drawer that is initially hidden, and can be toggled opened or closed. When opened, the
          <em>Persistent Drawer</em> forces all content beside it narrower to accommodate. It is
          suitable for tablets and desktop devices.
        </Body1>
        <Showcase block>
          <div className="drawer__sample">
            <PersistentDrawer open={this.state.persistentIsOpen}>
              <DrawerContent />
            </PersistentDrawer>
            <div className="drawer__sample__toolbar-holder">
              <Toolbar hasIcon onClick={this.persistentToggle} />
              <PageContent />
            </div>
          </div>
        </Showcase>
        <Javascript>{persistent}</Javascript>

        <Headline4>Temporary</Headline4>
        <Body1>
          The <em>Temporary Drawer</em> is initially hidden, and can be toggled opened or closed.
          When opened it slides out above all other content. It is suitable for all device sizes.
        </Body1>
        <Showcase block className="showcase__temporary-drawer">
          <div className="drawer__sample drawer__sample__temporary-drawer">
            <TemporaryDrawer
              className="sample-temporary-drawer"
              open={this.state.temporaryIsOpen}
              onClose={this.temporaryToggle}
            >
              <DrawerContent hasHeader />
            </TemporaryDrawer>
            <div className="drawer__sample__toolbar-holder">
              <Toolbar hasIcon onClick={this.temporaryToggle} />
              <PageContent />
            </div>
          </div>
        </Showcase>
        <Javascript>{temporary}</Javascript>
      </React.Fragment>
    );
  }
}
