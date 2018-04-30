import TextField from '@materialr/textfield';
import { Body1, Headline2, Headline4, Headline6 } from '@materialr/typography';
import React from 'react';

import Bash from 'shared/components/code-block/bash';
import InlineCode from 'shared/components/code-block/inline-code';
import Javascript from 'shared/components/code-block/javascript';
import Note from 'shared/components/note';
import Showcase from 'shared/components/showcase';

import './index.scss';

const basic = `
import TextField from '@materialr/textfield';
import React from 'react';

export default () => <TextField label="Name" />;
`;

const box = `
import TextField from '@materialr/textfield';
import React from 'react';

export default () => <TextField box label="Name" />;
`;

const disabled = `
import TextField from '@materialr/textfield';
import React from 'react';

export default () => <TextField disabled label="Name" />;
`;

const fullWidth = `
import TextField from '@materialr/textfield';
import React from 'react';

export default () => <TextField fullWidth label="All the words" />;
`;

const helperTextDefault = `
import TextField from '@materialr/textfield';
import React from 'react';

export default () => <TextField helperText="Please enter your name" label="Name" />;
`;

const helperTextPersistent = `
import TextField from '@materialr/textfield';
import React from 'react';

export default () => (
  <TextField
    helperText="Please enter your name"
    helperTextPersistent
    label="Name"
  />
);
`;

const helperTextValidationMessageCustom = `
import TextField from '@materialr/textfield';
import React from 'react';

export default () => (
  <TextField
    helperText="Name is immediately invalid"
    helperTextValidationMessage
    valid={false}
    label="Name"
  />
);
`;

const helperTextValidationMessageHTML5 = `
import TextField from '@materialr/textfield';
import React from 'react';

export default () => (
  <TextField
    helperText="Name is required"
    helperTextValidationMessage
    label="Name"
    required
  />
);
`;

const iconAlignEnd = `
import TextField from '@materialr/textfield';
import React from 'react';

export default () => (
  <TextField
    icon="fingerprint"
    iconAlignEnd
    outlined
    label="Identifier"
  />
);
`;

const iconAlignStart = `
import TextField from '@materialr/textfield';
import React from 'react';

export default () => <TextField box icon="fingerprint" label="Identifier" />;
`;

const outline = `
import TextField from '@materialr/textfield';
import React from 'react';

export default () => <TextField outlined label="Name" />;
`;

const textArea = `
import TextField from '@materialr/textfield';
import React from 'react';

export default () => <TextField label="Name" type="textarea" />;
`;

export default () => (
  <React.Fragment>
    <Headline2>Text Field</Headline2>
    <Body1>
      A list of all components and props is available on{' '}
      <a href="https://github.com/materialr/textfield" rel="noopener noreferrer" target="_blank">
        GitHub
      </a>
    </Body1>
    <Headline4>Installation</Headline4>
    <Bash>$ npm install --save @materialr/textfield</Bash>

    <Headline4>Basic</Headline4>
    <Body1>
      A basic <InlineCode>{'<TextField />'}</InlineCode> requires only
      a <InlineCode>label</InlineCode> prop.
    </Body1>
    <Showcase block>
      <div className="page-textfield__input-wrapper">
        <TextField label="Name" />
      </div>
    </Showcase>
    <Javascript>{basic}</Javascript>

    <Headline4>Full Width</Headline4>
    <Body1>
      A full width <InlineCode>{'<TextField />'}</InlineCode> takes up the maximum amount of
      horizontal space allowed, it is created by adding the <InlineCode>fullWidth</InlineCode> prop.
    </Body1>
    <Showcase><TextField fullWidth label="All the words" /></Showcase>
    <Javascript>{fullWidth}</Javascript>

    <Headline4>Helper Text</Headline4>
    <Headline6>Default</Headline6>
    <Body1>
      By default, Helper Text is displayed when the field is in focus, and can be added via
      the <InlineCode>helperText</InlineCode> prop.
    </Body1>
    <Showcase block>
      <div className="page-textfield__input-wrapper">
        <TextField helperText="Please enter your name" label="Name" />
      </div>
    </Showcase>
    <Javascript>{helperTextDefault}</Javascript>

    <Headline6>Persistent</Headline6>
    <Body1>
      Helper Text can be set to always display regardless of focus on the field with
      the <InlineCode>helperTextPersistent</InlineCode> prop.
    </Body1>
    <Showcase block>
      <div className="page-textfield__input-wrapper">
        <TextField helperText="Please enter your name" helperTextPersistent label="Name" />
      </div>
    </Showcase>
    <Javascript>{helperTextPersistent}</Javascript>

    <Headline6>Validation Message (HTML5)</Headline6>
    <Body1>
      Helper Text can be used to show HTML5 validation errors through the use of
      the <InlineCode>helperTextValidationMessage</InlineCode> prop.
    </Body1>
    <Showcase block>
      <div className="page-textfield__input-wrapper">
        <TextField
          helperText="Name is required"
          helperTextValidationMessage
          label="Name"
          required
        />
      </div>
    </Showcase>
    <Javascript>{helperTextValidationMessageHTML5}</Javascript>

    <Headline6>Validation Message (Custom)</Headline6>
    <Body1>
      Helper Text can be used to display custom validation messages by programatically controlling
      the <InlineCode>valid</InlineCode> prop and setting
      the <InlineCode>helperTextValidationMessage</InlineCode> prop.
    </Body1>
    <Note>
      A combination of HTML5 validation and custom validation cannot be used. When
      the <InlineCode>valid</InlineCode> prop is set to a boolean value then only custom
      validation will be considered.
    </Note>
    <Showcase block>
      <div className="page-textfield__input-wrapper">
        <TextField
          helperText="Name is immediately invalid"
          helperTextValidationMessage
          valid={false}
          label="Name"
        />
      </div>
    </Showcase>
    <Javascript>{helperTextValidationMessageCustom}</Javascript>

    <Headline4>Disabled</Headline4>
    <Body1>
      An uneditable field is created by adding a <InlineCode>disabled</InlineCode> prop.
    </Body1>
    <Showcase block>
      <div className="page-textfield__input-wrapper">
        <TextField disabled label="Name" />
      </div>
    </Showcase>
    <Javascript>{disabled}</Javascript>

    <Headline4>Box</Headline4>
    <Body1>
      A box display can be used to make the field stand out more by adding
      the <InlineCode>box</InlineCode> prop.
    </Body1>
    <Showcase block>
      <div className="page-textfield__input-wrapper">
        <TextField box label="Name" />
      </div>
    </Showcase>
    <Javascript>{box}</Javascript>

    <Headline4>Outline</Headline4>
    <Body1>
      An outline can be used to make the field stand out more by adding
      the <InlineCode>outline</InlineCode> prop.
    </Body1>
    <Showcase block>
      <div className="page-textfield__input-wrapper">
        <TextField outlined label="Name" />
      </div>
    </Showcase>
    <Javascript>{outline}</Javascript>

    <Headline4>Icon</Headline4>
    <Body1>An icon can be used to visually indicate what the field will be used for.</Body1>
    <Note>
      An icon can only be added to a field with the <InlineCode>box</InlineCode>,
      or <InlineCode>outlined</InlineCode> prop.
    </Note>
    <Headline6>Align Start</Headline6>
    <Body1>
      By default an icon is aligned to the start of the field and is added via
      the <InlineCode>icon</InlineCode> prop.
    </Body1>
    <Showcase><TextField icon="fingerprint" box label="Identifier" /></Showcase>
    <Javascript>{iconAlignStart}</Javascript>
    <Headline6>Align End</Headline6>
    <Body1>
      An icon is aligned to the end of the field through
      the <InlineCode>iconAlignEnd</InlineCode> prop.
    </Body1>
    <Showcase>
      <TextField icon="fingerprint" iconAlignEnd outlined label="Identifier" />
    </Showcase>
    <Javascript>{iconAlignEnd}</Javascript>

    <Headline4>TextArea</Headline4>
    <Body1>
      A <InlineCode>{'<textarea>'}</InlineCode> can be rendered by passing in
      the <InlineCode>textarea</InlineCode> to the <InlineCode>type</InlineCode> prop.
    </Body1>
    <Showcase>
      <TextField className="sample__textarea" label="Name" type="textarea" />
    </Showcase>
    <Javascript>{textArea}</Javascript>
  </React.Fragment>
);
