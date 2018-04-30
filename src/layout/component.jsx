import { Cell, Grid, Row } from '@materialr/layout-grid';
import PropTypes from 'prop-types';
import React from 'react';

import Drawer from './drawer';
import Routes from './routes';
import Toolbar from './toolbar';

import './component.scss';

const Layout = ({ currentUrl }) => (
  <React.Fragment>
    <Toolbar />
    <main className="layout">
      <Drawer currentUrl={currentUrl} />
      <div className="full-width">
        <Grid>
          <Row>
            <Cell desktop={2} tablet={1} />
            <Cell desktop={8} phone={4} tablet={6}>
              <Routes />
            </Cell>
            <Cell desktop={2} tablet={1} />
          </Row>
        </Grid>
      </div>
    </main>
  </React.Fragment>
);

Layout.propTypes = {
  currentUrl: PropTypes.string.isRequired,
};

export default Layout;
