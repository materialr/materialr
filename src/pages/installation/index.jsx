import { Body1, Headline2, Headline4 } from '@materialr/typography';
import React from 'react';

import Bash from 'shared/components/code-block/bash';
import InlineCode from 'shared/components/code-block/inline-code';
import Javascript from 'shared/components/code-block/javascript';
import Markup from 'shared/components/code-block/markup';
import Scss from 'shared/components/code-block/scss';

const head = `
<meta name="viewport" content="width=device-width, initial-scale=1" />
<link href="https://fonts.googleapis.com/css?family=Roboto:300,400,500" rel="stylesheet" />
<link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet" />
`;

const postcss = `
map: false
plugins:
  autoprefixer: {}
`;

const scss = `
@import "@material/theme/_color-palette";

$mdc-theme-secondary: $material-color-brown-400;
$mdc-theme-primary: $material-color-red-a200;
$mdc-theme-background: #fff;

@import "@material/theme/mdc-theme";
`;

const webpack = `
module: {
  rules: [{
    test: /\\.scss$/,
    include: [/node_modules\\/@material/],
    use: [
      { loader: 'style-loader' },
      { loader: 'css-loader' },
      { loader: 'postcss-loader' },
      { loader: 'sass-loader', options: { includePaths: ['node_modules'] } },
    ],
  }],
},
`;

export default () => (
  <React.Fragment>
    <Headline2>Installation</Headline2>
    <Headline4>Required packages</Headline4>
    <Body1>
      To properly theme all imported components, the base
      <InlineCode>@material/theme</InlineCode> package is required, and has to be installed as a
      dependency in your application.
    </Body1>
    <Bash>$ npm install --save @material/theme</Bash>

    <Headline4>Fonts, icons and meta</Headline4>
    <Body1>
      The list of material components are all built to work with the{' '}
      <a href="https://fonts.google.com/specimen/Roboto" rel="noopener noreferrer" target="_blank">
        Roboto
      </a>
      {' '}font and the list of{' '}
      <a href="https://material.io/icons/" rel="noopener noreferrer" target="_blank">
        Material Icons
      </a>.
      {' '}It is also suggested to add the
      appropriate <InlineCode>viewport</InlineCode> meta tag. These all need to be added to
      the <InlineCode>{'<head>'}</InlineCode> section of your markup.
    </Body1>
    <Markup>{head}</Markup>

    <Headline4>Webpack setup</Headline4>
    <Body1>
      The material components all use sass to compile their styles, this gives you the ability to
      theme your entire application. To this end you will
      need <InlineCode>style-loader</InlineCode>, <InlineCode>css-loader</InlineCode>,{' '}
      <InlineCode>postcss-loader</InlineCode> and <InlineCode>sass-loader</InlineCode> installed.
    </Body1>
    <Bash>$ npm install --save-dev style-loader css-loader postcss-loader sass-loader</Bash>
    <Body1>
      A small postcss config is required. Create a <InlineCode>.postcssrc</InlineCode> file in the
      root of the application with the following inside it:
    </Body1>
    <Bash>{postcss}</Bash>
    <Body1>You then need to set up Webpack to load sass with the installed loaders.</Body1>
    <Javascript>{webpack}</Javascript>

    <Headline4>Theming</Headline4>
    <Body1>
      A theme is set by defining the <InlineCode>background</InlineCode>,
      {' '}<InlineCode>primary</InlineCode> and <InlineCode>secondary</InlineCode> colors and then
      importing the main <InlineCode>@material/theme</InlineCode> sass file. This configuration
      should be done in your main <InlineCode>.scss</InlineCode> entrypoint.
    </Body1>
    <Scss>{scss}</Scss>
  </React.Fragment>
);
