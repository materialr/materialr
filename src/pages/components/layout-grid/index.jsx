import { Cell, Grid, Row } from '@materialr/layout-grid';
import { Body1, Headline2, Headline4, Headline6 } from '@materialr/typography';
import React from 'react';

import Bash from 'shared/components/code-block/bash';
import Javascript from 'shared/components/code-block/javascript';
import Showcase from 'shared/components/showcase';

import './index.scss';

const alignCells = `
import { Cell, Grid, Row } from '@materialr/layout-grid';
import React from 'react';

export default () => (
  <Grid align="left">
    <Row>
      <Cell desktop={3} phone={1} tablet={2}>
        A<br />few<br />lines<br />of<br />text
      </Cell>
      <Cell align="top" desktop={3} phone={1} tablet={2}>Top</Cell>
      <Cell align="middle" desktop={3} phone={1} tablet={2}>Middle</Cell>
      <Cell align="bottom" desktop={3} phone={1} tablet={2}>Bottom</Cell>
    </Row>
  </Grid>
);
`;

const alignGridLeft = `
import { Cell, Grid, Row } from '@materialr/layout-grid';
import React from 'react';

export default () => (
  <Grid align="left">
    <Row>
      <Cell desktop={12} phone={4} tablet={8}>{/* Content */}</Cell>
    </Row>
  </Grid>
);
`;

const alignGridRight = `
import { Cell, Grid, Row } from '@materialr/layout-grid';
import React from 'react';

export default () => (
  <Grid align="right">
    <Row>
      <Cell desktop={12} phone={4} tablet={8}>{/* Content */}</Cell>
    </Row>
  </Grid>
);
`;

const basic = `
import { Cell, Grid, Row } from '@materialr/layout-grid';
import React from 'react';

export default () => (
  <Grid>
    <Row>
      <Cell columns={4}>{/* Content */}</Cell>
      <Cell columns={4}>{/* Content */}</Cell>
      <Cell columns={4}>{/* Content */}</Cell>
    </Row>
  </Grid>
);
`;

const deviceSpecific = `
import { Cell, Grid, Row } from '@materialr/layout-grid';
import React from 'react';

export default () => (
  <Grid>
    <Row>
      <Cell desktop={3} phone={1} tablet={2}>{/* Content */}</Cell>
      <Cell desktop={9} phone={3} tablet={6}>{/* Content */}</Cell>
    </Row>
    <Row>
      <Cell desktop={6} phone={2} tablet={4}>{/* Content */}</Cell>
    </Row>
    <Row>
      <Cell desktop={12} phone={4} tablet={8}>{/* Content */}</Cell>
    </Row>
  </Grid>
);
`;

const LayoutGrid = () => (
  <React.Fragment>
    <Headline2>Layout Grid</Headline2>
    <Body1>
      A grid layout for multiple sizes. 12 Columns on desktop, 8 columns on tablet, and 4 columns on
      mobile. When a size is not specified, the default is 4.
    </Body1>
    <Body1>
      A list of all components and props is available on{' '}
      <a href="https://github.com/materialr/layout-grid" rel="noopener noreferrer" target="_blank">
        GitHub
      </a>
    </Body1>

    <Headline4>Installation</Headline4>
    <Bash>$ npm install --save @materialr/layout-grid</Bash>

    <Headline4>Basic</Headline4>
    <Body1>A basic grid with each column specifying a size.</Body1>
    <Showcase block>
      <Grid className="demo-grid">
        <Row>
          <Cell className="demo-cell" columns={4}><Body1>4</Body1></Cell>
          <Cell className="demo-cell demo-cell--odd" columns={4}><Body1>4</Body1></Cell>
          <Cell className="demo-cell" columns={4}><Body1>4</Body1></Cell>
        </Row>
      </Grid>
    </Showcase>
    <Javascript>{basic}</Javascript>

    <Headline4>Device specific</Headline4>
    <Body1>Device specific sizes affect the grid on individual device sizes.</Body1>
    <Showcase block>
      <Grid className="demo-grid">
        <Row>
          <Cell className="demo-cell" desktop={3} phone={1} tablet={2}>
            <Body1>3/2/1</Body1>
          </Cell>
          <Cell className="demo-cell demo-cell--odd" desktop={9} phone={3} tablet={6}>
            <Body1>9/6/3</Body1>
          </Cell>
        </Row>
        <Row>
          <Cell className="demo-cell demo-cell--odd" desktop={6} phone={2} tablet={4}>
            <Body1>6/4/2</Body1>
          </Cell>
          <Cell className="demo-cell" desktop={6} phone={2} tablet={4}>
            <Body1>6/4/2</Body1>
          </Cell>
        </Row>
        <Row>
          <Cell className="demo-cell" desktop={12} phone={4} tablet={8}>
            <Body1>12/8/4</Body1>
          </Cell>
        </Row>
      </Grid>
    </Showcase>
    <Javascript>{deviceSpecific}</Javascript>

    <Headline4>Grid alignment</Headline4>
    <Body1>The entire grid can be aligned either to the left or to the right.</Body1>

    <Headline6>Left</Headline6>
    <Body1>Align the full grid to the left.</Body1>
    <Showcase>
      <Grid align="left" className="demo-grid">
        <Row>
          <Cell className="demo-cell" desktop={12} phone={4} tablet={8}>
            <Body1>12/8/4</Body1>
          </Cell>
        </Row>
      </Grid>
    </Showcase>
    <Javascript>{alignGridLeft}</Javascript>

    <Headline6>Right</Headline6>
    <Body1>Align the full grid to the right.</Body1>
    <Showcase>
      <Grid align="right" className="demo-grid">
        <Row>
          <Cell className="demo-cell" desktop={12} phone={4} tablet={8}>
            <Body1>12/8/4</Body1>
          </Cell>
        </Row>
      </Grid>
    </Showcase>
    <Javascript>{alignGridRight}</Javascript>

    <Headline4>Cell alignment</Headline4>
    <Body1>Cell content can be aligned vertically.</Body1>
    <Showcase block>
      <Grid className="demo-grid">
        <Row>
          <Cell className="demo-cell" desktop={3} phone={1} tablet={2}>
            <Body1>
              A<br />
              few<br />
              lines<br />
              of<br />
              text
            </Body1>
          </Cell>
          <Cell align="top" className="demo-cell demo-cell--odd" desktop={3} phone={1} tablet={2}>
            <Body1>Top</Body1>
          </Cell>
          <Cell align="middle" className="demo-cell" desktop={3} phone={1} tablet={2}>
            <Body1>Middle</Body1>
          </Cell>
          <Cell
            align="bottom"
            className="demo-cell demo-cell--odd"
            desktop={3}
            phone={1}
            tablet={2}
          >
            <Body1>Bottom</Body1>
          </Cell>
        </Row>
      </Grid>
    </Showcase>
    <Javascript>{alignCells}</Javascript>
  </React.Fragment>
);

export default LayoutGrid;
