import { Cell, Grid, Row } from '@materialr/layout-grid';
import { Body1, Headline4 } from '@materialr/typography';
import React from 'react';

export default () => (
  <Grid>
    <Row>
      <Cell desktop={12} phone={4} tablet={8}>
        <Headline4>Page content</Headline4>
        <Body1>
          Every page should explode, either because of its staggering absurdity, the enthusiasm of
          its principles, or its typography.
        </Body1>
      </Cell>
    </Row>
  </Grid>
);
