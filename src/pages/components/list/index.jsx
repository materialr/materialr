import { Body1, Headline2, Headline4, Headline6 } from '@materialr/typography';
import {
  List,
  ListGroup,
  ListGroupSubheader,
  ListItem,
  ListItemDivider,
  ListItemGraphic,
  ListItemMeta,
  ListItemSecondaryText,
  ListItemText,
} from '@materialr/list';
import React from 'react';
import { Link } from 'react-router-dom';

import Bash from 'shared/components/code-block/bash';
import InlineCode from 'shared/components/code-block/inline-code';
import Javascript from 'shared/components/code-block/javascript';
import Showcase from 'shared/components/showcase';
import { componentButton, componentCard } from 'urls';

import './index.scss';

const basic = `
import { List, ListItem } from '@materialr/list';
import React from 'react';

export default () => (
  <List>
    <ListItem>Care</ListItem>
    <ListItem>Love</ListItem>
  </List>
);
`;

const dense = `
import { List, ListItem } from '@materialr/list';
import React from 'react';

export default () => (
  <List dense>
    <ListItem>Care</ListItem>
    <ListItem>Love</ListItem>
  </List>
);
`;

const dividerBasic = `
import { List, ListItem, ListItemDivider } from '@materialr/list';
import React from 'react';

export default () => (
  <List>
    <ListItem>Care</ListItem>
    <ListItemDivider />
    <ListItem>Love</ListItem>
  </List>
);
`;

const dividerInset = `
import { List, ListItem, ListItemDivider, ListItemGraphic } from '@materialr/list';
import React from 'react';

export default () => (
  <List>
    <ListItem><ListItemGraphic icon="favorite_outline" />Care</ListItem>
    <ListItemDivider inset />
    <ListItem><ListItemGraphic icon="favorite" />Love</ListItem>
  </List>
);
`;

const graphicAvatar = `
import { List, ListItem, ListItemGraphic } from '@materialr/list';
import React from 'react';

export default () => (
  <List avatar>
    <ListItem>
      <ListItemGraphic avatar="https://lorempixel.com/56/56/animals" title="Care" />
      Care
    </ListItem>
    <ListItem>
      <ListItemGraphic avatar="https://lorempixel.com/56/56/animals" title="Love" />
      Love
    </ListItem>
  </List>
);
`;

const graphicIcon = `
import { List, ListItem, ListItemGraphic } from '@materialr/list';
import React from 'react';

export default () => (
  <List>
    <ListItem><ListItemGraphic icon="favorite_outline" />Care</ListItem>
    <ListItem><ListItemGraphic icon="favorite" />Love</ListItem>
  </List>
);
`;

const groups = `
import { List, ListGroup, ListGroupSubheader, ListItem } from '@materialr/list';
import React from 'react';

export default () => (
  <ListGroup>
    <ListGroupSubheader title="Caring" />
    <List>
      <ListItem>Care</ListItem>
    </List>
    <ListGroupSubheader title="loving" />
    <List>
      <ListItem>Love</ListItem>
    </List>
  </ListGroup>
);
`;

const meta = `
import { List, ListItem, ListItemMeta } from '@materialr/list';
import React from 'react';

export default class extends React.Component {
  constructor(props) {
    super(props);
    this.state = { meta: undefined };
    this.changeMeta = this.changeMeta.bind(this);
  }
  changeMeta(metaSelected) {
    this.setState({ meta: metaSelected });
  }
  render() {
    return (
      <React.Fragment>
        <List>
          <ListItem>
            Care
            <ListItemMeta
              icon="favorite_border"
              onClick={() => this.changeMeta('Care')}
              title="Care"
            />
          </ListItem>
          <ListItem>
            Love
            <ListItemMeta
              icon="favorite"
              onClick={() => this.changeMeta('Love')}
              title="Love"
            />
          </ListItem>
        </List>
        <p>Meta selected: {this.state.meta || 'None'}</p>
      </React.Fragment>
    );
  }
}
`;

const multiline = `
import { List, ListItem, ListItemSecondaryText } from '@materialr/list';
import React from 'react';

export default () => (
  <List isTwoLineList>
    <ListItem>
      <ListItemText>
        Care
        <ListItemSecondaryText text="You can really change the world if you care enough" />
      </ListItemText>
    </ListItem>
    <ListItem>
      <ListItemText>
        Love
        <ListItemSecondaryText text="Some people care too much, I think it's called love" />
      </ListItemText>
    </ListItem>
  </List>
);
`;

const navigationBasic = `
import { List, ListItem } from '@materialr/list';
import React from 'react';

export default () => (
  <List display="nav">
    <ListItem
      href="https://www.care.org/"
      anchorProps={{ rel: 'noopener noreferrer', target: '_blank' }}
    >
      Care
    </ListItem>
    <ListItem
      href="https://www.onlylovefoundation.org/"
      anchorProps={{ rel: 'noopener noreferrer', target: '_blank' }}
    >
      Love
    </ListItem>
  </List>
);
`;

const navigationCustom = `
import { List, ListItem } from '@materialr/list';
import React from 'react';
import { Link } from 'react-router-dom';

export default () => (
  <List display="nav">
    <ListItem AnchorComponent={Link} anchorProps={{ to: '/components/button' }}>Care</ListItem>
    <ListItem AnchorComponent={Link} anchorProps={{ to: '/components/card' }}>Love</ListItem>
  </List>
);
`;

export default class extends React.Component {
  constructor(props) {
    super(props);
    this.state = { meta: undefined };
    this.changeMeta = this.changeMeta.bind(this);
  }
  changeMeta(metaSelected) {
    this.setState({ meta: metaSelected });
  }
  render() {
    return (
      <React.Fragment>
        <Headline2>List</Headline2>
        <Body1>
          A list of all components and props is available on{' '}
          <a href="https://github.com/materialr/list" rel="noopener noreferrer" target="_blank">
            GitHub
          </a>
        </Body1>

        <Headline4>Installation</Headline4>
        <Bash>$ npm install --save @materialr/list</Bash>

        <Headline4>Basic</Headline4>
        <Body1>A basic list with list items.</Body1>
        <Showcase block>
          <List className="demo-list">
            <ListItem>Care</ListItem>
            <ListItem>Love</ListItem>
          </List>
        </Showcase>
        <Javascript>{basic}</Javascript>

        <Headline4>Dense</Headline4>
        <Body1>
          <em>Not as smart as other lists</em>. A dense list with list items, created by adding
          the <InlineCode>dense</InlineCode> prop to the list.
        </Body1>
        <Showcase block>
          <List className="demo-list" dense>
            <ListItem>Care</ListItem>
            <ListItem>Love</ListItem>
          </List>
        </Showcase>
        <Javascript>{dense}</Javascript>

        <Headline4>Graphic</Headline4>
        <Headline6>Icons</Headline6>
        <Body1>
          List items with icons as list graphics,
          each <InlineCode>{'<ListItemGraphic />'}</InlineCode> uses a material icon, defined by
          the <InlineCode>icon</InlineCode> prop.
        </Body1>
        <Showcase block>
          <List className="demo-list">
            <ListItem><ListItemGraphic icon="favorite_outline" />Care</ListItem>
            <ListItem><ListItemGraphic icon="favorite" />Love</ListItem>
          </List>
        </Showcase>
        <Javascript>{graphicIcon}</Javascript>

        <Headline6>Avatars</Headline6>
        <Body1>List items with avatar images as graphics.</Body1>
        <Showcase block>
          <List className="demo-list" avatar>
            <ListItem>
              <ListItemGraphic avatar="https://lorempixel.com/56/56/animals" title="Care" />
              Care
            </ListItem>
            <ListItem>
              <ListItemGraphic avatar="https://lorempixel.com/56/56/animals" title="Love" />
              Love
            </ListItem>
          </List>
        </Showcase>
        <Javascript>{graphicAvatar}</Javascript>

        <Headline4>Meta</Headline4>
        <Body1>An icon at the end of the list item.</Body1>
        <Showcase block>
          <List className="demo-list">
            <ListItem>
              Care
              <ListItemMeta
                icon="favorite_border"
                onClick={() => this.changeMeta('Care')}
                title="Care"
              />
            </ListItem>
            <ListItem>
              Love
              <ListItemMeta
                icon="favorite"
                onClick={() => this.changeMeta('Love')}
                title="Love"
              />
            </ListItem>
          </List>
          <Body1>Meta selected: <strong>{this.state.meta || 'None'}</strong></Body1>
        </Showcase>
        <Javascript>{meta}</Javascript>

        <Headline4>Multiline</Headline4>
        <Body1>List items with two lines of text.</Body1>
        <Showcase block>
          <List className="demo-list" isTwoLineList>
            <ListItem>
              <ListItemText>
                Care
                <ListItemSecondaryText text="You can really change the world if you care enough" />
              </ListItemText>
            </ListItem>
            <ListItem>
              <ListItemText>
                Love
                <ListItemSecondaryText text="Some people care too much, I think it's called love" />
              </ListItemText>
            </ListItem>
          </List>
        </Showcase>
        <Javascript>{multiline}</Javascript>

        <Headline4>Dividers</Headline4>
        <Headline6>Basic</Headline6>
        <Body1>List item dividers.</Body1>
        <Showcase block>
          <List className="demo-list">
            <ListItem>Care</ListItem>
            <ListItemDivider />
            <ListItem>Love</ListItem>
          </List>
        </Showcase>
        <Javascript>{dividerBasic}</Javascript>

        <Headline6>Inset</Headline6>
        <Body1>A divider that is inset from the left hand side.</Body1>
        <Showcase block>
          <List className="demo-list">
            <ListItem><ListItemGraphic icon="favorite_outline" />Care</ListItem>
            <ListItemDivider inset />
            <ListItem><ListItemGraphic icon="favorite" />Love</ListItem>
          </List>
        </Showcase>
        <Javascript>{dividerInset}</Javascript>

        <Headline4>Navigation</Headline4>
        <Headline6>Basic</Headline6>
        <Showcase block>
          <List className="demo-list" display="nav">
            <ListItem
              href="https://www.care.org/"
              anchorProps={{ rel: 'noopener noreferrer', target: '_blank' }}
            >
              Care
            </ListItem>
            <ListItem
              href="https://www.onlylovefoundation.org/"
              anchorProps={{ rel: 'noopener noreferrer', target: '_blank' }}
            >
              Love
            </ListItem>
          </List>
        </Showcase>
        <Javascript>{navigationBasic}</Javascript>

        <Headline6>Custom</Headline6>
        <Body1>Custom anchor components for internal navigation</Body1>
        <Showcase block>
          <List className="demo-list" display="nav">
            <ListItem AnchorComponent={Link} anchorProps={{ to: componentButton() }}>Care</ListItem>
            <ListItem AnchorComponent={Link} anchorProps={{ to: componentCard() }}>Love</ListItem>
          </List>
        </Showcase>
        <Javascript>{navigationCustom}</Javascript>

        <Headline4>Groups</Headline4>
        <Body1>A good way to break up longer lists is through the use of groups.</Body1>
        <Showcase block>
          <ListGroup className="demo-list">
            <ListGroupSubheader title="Emotions" />
            <List>
              <ListItem>Care</ListItem>
              <ListItem>Love</ListItem>
            </List>
            <ListGroupSubheader title="Feelings" />
            <List>
              <ListItem>Care</ListItem>
              <ListItem>Love</ListItem>
            </List>
          </ListGroup>
        </Showcase>
        <Javascript>{groups}</Javascript>
      </React.Fragment>
    );
  }
}
