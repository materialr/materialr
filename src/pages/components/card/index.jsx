import {
  ActionButtons,
  ActionButton,
  ActionIcon,
  ActionIcons,
  ActionIconToggle,
  Actions,
  Card,
  MediaContent,
  Media,
  MEDIA_ASPECT_RATIO_1_1,
  MEDIA_ASPECT_RATIO_16_9,
} from '@materialr/card';
import {
  Body1,
  Headline4,
  Headline2,
  Headline6,
} from '@materialr/typography';
import React from 'react';

import Bash from 'shared/components/code-block/bash';
import InlineCode from 'shared/components/code-block/inline-code';
import Javascript from 'shared/components/code-block/javascript';
import Note from 'shared/components/note';
import Showcase from 'shared/components/showcase';

import './index.scss';

const actionFullBleed = `
import { ActionButton, Actions, Card } from '@materialr/card';
import React from 'react';

export default () => (
  <Card>
    {/* Card content */}
    <Actions fullBleed>
      <ActionButton>Save</ActionButton>
    </Actions>
  </Card>
);
`;

const actions = `
import {
  ActionButtons,
  ActionButton,
  ActionIcon,
  ActionIcons,
  ActionIconToggle,
  Actions,
  Card,
} from '@materialr/card';
import React from 'react';

export default () => (
  <Card>
    {/* Card content */}
    <Actions>
      <ActionButtons>
        <ActionButton>Cancel</ActionButton>
        <ActionButton>Save</ActionButton>
      </ActionButtons>
      <ActionIcons>
        <ActionIcon icon="star_outline" title="Care" />
        <ActionIconToggle
          iconOff="favorite_outline"
          iconOn="favorite"
          labelOff="Favorite"
          labelOn="Remove from favorites"
          onChange={() => {}}
        />
      </ActionIcons>
    </Actions>
  </Card>
);
`;

const basic = `
import { Card } from '@materialr/card';
import React from 'react';

export default () => (
  <Card>
    {/* Card content */}
  </Card>
);
`;

const mediaSquare = `
import { Card, Media, MEDIA_ASPECT_RATIO_1_1 } from '@materialr/card';
import React from 'react';

export default () => (
  <Card>
    <Media aspectRatio={MEDIA_ASPECT_RATIO_1_1} className="card__media" />
    {/* Card content */}
  </Card>
);
`;

const mediaWide = `
import { Card, Media, MEDIA_ASPECT_RATIO_16_9 } from '@materialr/card';
import React from 'react';

export default () => (
  <Card>
    <Media aspectRatio={MEDIA_ASPECT_RATIO_16_9} className="card__media" />
    {/* Card content */}
  </Card>
);
`;

const stroked = `
import { Card } from '@materialr/card';
import React from 'react';

export default () => (
  <Card outlined>
    {/* Card content */}
  </Card>
);
`;

const textLong = 'Every page should explode, either because of its staggering absurdity, the ' +
  'enthusiasm of its principles, or its typography.';
const textShort = 'Typography is the craft of endowing human language with a durable visual form.';

export default () => (
  <React.Fragment>
    <Headline2>Card</Headline2>
    <Body1>
      A list of all components and props is available on{' '}
      <a href="https://github.com/materialr/card" rel="noopener noreferrer" target="_blank">
        GitHub
      </a>
    </Body1>

    <Headline4>Installation</Headline4>
    <Bash>$ npm install --save-dev @materialr/card</Bash>

    <Headline4>Basic</Headline4>
    <Body1>
      The most basic form of a card is slightly elevated from the page with a border radius.
    </Body1>
    <Showcase>
      <div className="card__container">
        <Card>
          <Body1 className="card__text">{textLong}</Body1>
        </Card>
      </div>
    </Showcase>
    <Javascript>{basic}</Javascript>

    <Headline4>Outlined</Headline4>
    <Body1>An outlined card is flush with the surface that it is on with a light border.</Body1>
    <Showcase>
      <div className="card__container">
        <Card outlined>
          <Body1 className="card__text">{textLong}</Body1>
        </Card>
      </div>
    </Showcase>
    <Javascript>{stroked}</Javascript>

    <Headline4>Media</Headline4>
    <Headline6>Wide (16:9)</Headline6>
    <Body1>
      Media can be added to a card in either square or 16:9 aspect ratio. Text can also be added
      over the media.
    </Body1>
    <Showcase>
      <div className="card__container">
        <Card>
          <Media aspectRatio={MEDIA_ASPECT_RATIO_16_9} className="card__media" />
          <Body1 className="card__text">{textLong}</Body1>
        </Card>
      </div>
    </Showcase>
    <Javascript>{mediaWide}</Javascript>
    <Note>
      A background image is added to the <InlineCode>{'<Media />'}</InlineCode> component by using
      a <InlineCode>className</InlineCode> with some CSS.
    </Note>

    <Headline6>Square</Headline6>
    <Body1>
      Media can be added to a card in either square or 16:9 aspect ratio. Text can also be added
      over the media.
    </Body1>
    <Showcase>
      <div className="card__container--narrow">
        <Card>
          <Media aspectRatio={MEDIA_ASPECT_RATIO_1_1} className="card__media" />
          <Body1 className="card__text">{textShort}</Body1>
        </Card>
      </div>
    </Showcase>
    <Javascript>{mediaSquare}</Javascript>

    <Headline6>Media content</Headline6>
    <Body1>Content can be added to the media</Body1>
    <Showcase>
      <div className="card__container--narrow">
        <Card>
          <Media aspectRatio={MEDIA_ASPECT_RATIO_1_1} className="card__media">
            <MediaContent className="card__media__content">
              <Headline6 className="card__text--media">Holiday</Headline6>
            </MediaContent>
          </Media>
        </Card>
      </div>
    </Showcase>
    <Javascript>{mediaSquare}</Javascript>

    <Headline4>Actions</Headline4>
    <Headline6>Buttons and icons</Headline6>
    <Body1>Action icons can be added to a card and will sit on the bottom right of the card</Body1>
    <Showcase>
      <div className="card__container">
        <Card>
          <Body1 className="card__text">{textLong}</Body1>
          <Actions>
            <ActionButtons>
              <ActionButton>Cancel</ActionButton>
              <ActionButton>Save</ActionButton>
            </ActionButtons>
            <ActionIcons>
              <ActionIcon icon="star_outline" title="Care" />
              <ActionIconToggle
                iconOff="favorite_outline"
                iconOn="favorite"
                labelOff="Favorite"
                labelOn="Remove from favorites"
                onChange={() => {}}
              />
            </ActionIcons>
          </Actions>
        </Card>
      </div>
    </Showcase>
    <Javascript>{actions}</Javascript>

    <Headline6>Full bleed button</Headline6>
    <Body1>
      A full bleed action button is a single button taking up the full width of the card
    </Body1>
    <Showcase>
      <div className="card__container">
        <Card>
          <Body1 className="card__text">{textLong}</Body1>
          <Actions fullBleed>
            <ActionButton className="card__action--full-bleed">Save</ActionButton>
          </Actions>
        </Card>
      </div>
    </Showcase>
    <Javascript>{actionFullBleed}</Javascript>
  </React.Fragment>
);
