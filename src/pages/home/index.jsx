import Button from '@materialr/button';
import { Body1, Headline2 } from '@materialr/typography';
import React from 'react';
import { Link } from 'react-router-dom';

import { installation } from 'urls';

import './index.scss';

export default () => (
  <div className="page-home">
    <img alt="MaterialR" src="/assets/favicon.png" />
    <Headline2>MaterialR</Headline2>
    <Body1>
      Material design components for React.
    </Body1>
    <Body1 className="page-home__last-paragraph">
      Built using the{' '}
      <a href="https://material.io/components/web/" rel="noopener noreferrer" target="_blank">
        Material Components for Web
      </a> packages, adapted for use in React projects. Components are packaged individually so you
      can install only what you need. Head over to the <Link to={installation()}>installation</Link>
      {' '} page to get started.
    </Body1>
    <Link to={installation()}>
      <Button raised>Get started</Button>
    </Link>
  </div>
);
