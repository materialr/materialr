import { Body1, Headline2, Headline4 } from '@materialr/typography';
import React from 'react';

import InlineCode from 'shared/components/code-block/inline-code';
import Javascript from 'shared/components/code-block/javascript';
import Note from 'shared/components/note';

const basic = `
import Toolbar, { ToolbarIcon, ToolbarRow, ToolbarSection, ToolbarTitle } from '@materialr/toolbar';
import react from 'react';

export default () => (
  <Toolbar>
    <ToolbarRow>
      <ToolbarSection>
        <ToolbarIcon icon="menu" menuIcon onClick={() => {}} title="Menu" />
        <ToolbarTitle>Care</ToolbarTitle>
      </ToolbarSection>
    </ToolbarRow>
  </Toolbar>
);
`;

const fixed = `
import Toolbar, { ToolbarIcon, ToolbarRow, ToolbarSection, ToolbarTitle } from '@materialr/toolbar';
import react from 'react';

export default () => (
  <Toolbar fixed>
    <ToolbarRow>
      <ToolbarSection>
        <ToolbarIcon icon="menu" menuIcon onClick={() => {}} title="Menu" />
        <ToolbarTitle>Care</ToolbarTitle>
      </ToolbarSection>
    </ToolbarRow>
  </Toolbar>
);
`;

const rows = `
import Toolbar, { ToolbarIcon, ToolbarRow, ToolbarSection, ToolbarTitle } from '@materialr/toolbar';
import react from 'react';

export default () => (
  <Toolbar fixedLastRowOnly>
    <ToolbarRow>
      <ToolbarSection alignStart>
        <ToolbarIcon icon="menu" menuIcon onClick={() => {}} title="Menu" />
        <ToolbarTitle>Care</ToolbarTitle>
      </ToolbarSection>
      <ToolbarSection alignEnd>
        <ToolbarIcon icon="favorite" title="Favorite" />
      </ToolbarSection>
    </ToolbarRow>
    <ToolbarRow>
      <Toolbarsection>{/* The biggest search bar in the world */}</ToolbarSection>
    </ToolbarRow>
  </Toolbar>
);
`;

const sections = `
import Toolbar, { ToolbarIcon, ToolbarRow, ToolbarSection, ToolbarTitle } from '@materialr/toolbar';
import react from 'react';

export default () => (
  <Toolbar fixed>
    <ToolbarRow>
      <ToolbarSection alignStart shrinkToFit>
        <ToolbarIcon icon="menu" menuIcon onClick={() => {}} title="Menu" />
        <ToolbarTitle>Care</ToolbarTitle>
      </ToolbarSection>
      <ToolbarSection>{/* Long content, such as a search bar */}</ToolbarSection>
      <ToolbarSection alignEnd shrinkToFit>
        <ToolbarIcon icon="favorite" title="Favorite" />
      </ToolbarSection>
    </ToolbarRow>
  </Toolbar>
);
`;

const Toolbar = () => (
  <React.Fragment>
    <Headline2>Toolbar</Headline2>
    <Body1>
      A list of all components and props is available on{' '}
      <a href="https://github.com/materialr/toolbar" rel="noopener noreferrer" target="_blank">
        GitHub
      </a>
    </Body1>
    <Note>
      <strong>Deprecation notice</strong>: This package will be deprecated in the near future in
      favor of the new <em>top-app-bar</em> component.
    </Note>
    <Note>
      Because the Toolbar sticks to the top of the page, it is quite difficult to put together
      samples below, unfortunately only code can be shown for now.
    </Note>

    <Headline4>Basic</Headline4>
    <Body1>
      A basic toolbar consists of one or more <InlineCode>{'<ToolbarRow />'}</InlineCode>{' '}
      components, with one or more <InlineCode>{'<ToolbarSection />'}</InlineCode>s inside each row,
      with content inside each <InlineCode>{'<ToolbarSection />'}</InlineCode>.
    </Body1>
    <Body1>
      When a <InlineCode>{'<ToolbarIcon />'}</InlineCode> has the <InlineCode>menuIcon</InlineCode>
      {' '} prop, it is denoted to be the main icon and styled accordingly.
    </Body1>
    <Javascript>{basic}</Javascript>

    <Headline4>Fixed</Headline4>
    <Body1>
      To have the toolbar fixed to the top of the screen at all time, add
      the <InlineCode>fixed</InlineCode> prop.
    </Body1>
    <Javascript>{fixed}</Javascript>

    <Headline4>Sections</Headline4>
    <Body1>
      Toolbar sections make up the horizontal content of the toolbar. Multipe sections can be added
      to a single toolbar row. To have a section make room for bigger sections
      the <InlineCode>shrinkToFit</InlineCode> prop can be added. Section content can be aligned
      with the <InlineCode>alignStart</InlineCode> and <InlineCode>alignEnd</InlineCode> props.
    </Body1>
    <Javascript>{sections}</Javascript>

    <Headline4>Rows</Headline4>
    <Body1>
      A toolbar can consist of multiple rows, with each row consisting of one or more sections.
      The toolbar can be set to keep the last row fixed on scroll by adding
      the <InlineCode>fixedLastRowOnly</InlineCode> prop to the toolbar.
    </Body1>
    <Javascript>{rows}</Javascript>

    <Headline4>Other mentions</Headline4>
    <Body1>
      A flexible toolbar will flex stretch inner content, and can be created by setting
      the <InlineCode>flexible</InlineCode> prop to a number between <em>2</em> and <em>4</em>.
    </Body1>
    <Body1>
      A waterfall toolbar will only show a shadow once the scroll position is not at the top of the
      page and can be created by passing the <InlineCode>waterfall</InlineCode> prop.
    </Body1>
  </React.Fragment>
);

export default Toolbar;
