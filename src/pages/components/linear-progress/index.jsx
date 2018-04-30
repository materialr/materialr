import LinearProgress from '@materialr/linear-progress';
import { Body1, Headline2, Headline4 } from '@materialr/typography';
import React from 'react';

import Bash from 'shared/components/code-block/bash';
import Javascript from 'shared/components/code-block/javascript';
import Showcase from 'shared/components/showcase';

const buffer = `
import LinearProgress from '@materialr/linear-progress';
import PropTypes from 'prop-types';
import React from 'react';

const Component = ({ buffer, progress }) => (
  <LinearProgress buffer={buffer} progress={progress} />
);

Component.propTypes = {
  buffer: PropTypes.number,
  progress: PropTypes.number,
};

export default Component;
`;

const determinate = `
import LinearProgress from '@materialr/linear-progress';
import PropTypes from 'prop-types';
import React from 'react';

const Component = ({ progress }) => (
  <LinearProgress progress={progress} />
);

Component.propTypes = {
  progress: PropTypes.number,
};

export default Component;
`;

const indeterminate = `
import LinearProgress from '@materialr/linear-progress';
import React from 'react';

export default () => (
  <LinearProgress indeterminate />
);
`;

const reversed = `
import LinearProgress from '@materialr/linear-progress';
import PropTypes from 'prop-types';
import React from 'react';

const Component = ({ buffer, progress }) => (
  <LinearProgress buffer={buffer} progress={progress} reversed />
);

Component.propTypes = {
  buffer: PropTypes.number,
  progress: PropTypes.number,
};

export default Component;
`;

export default class extends React.Component {
  constructor(props) {
    super(props);
    this.intervalBuffer = undefined;
    this.intervalDeterminate = undefined;
    this.state = {
      intervalBuffer: { buffer: 0, progress: 0 },
      intervalDeterminate: { buffer: 0, progress: 0 },
      intervalReversed: { buffer: 0, progress: 0 },
    };
    this.buildInterval = this.buildInterval.bind(this);
  }
  componentDidMount() {
    this.buildInterval({ bufferAmount: 10, intervalName: 'intervalBuffer', timeout: 750 });
    this.buildInterval({ intervalName: 'intervalDeterminate' });
    this.buildInterval({ bufferAmount: 15, intervalName: 'intervalReversed', timeout: 500 });
  }
  componentWillUnmount() {
    window.clearInterval(this.intervalBuffer);
    window.clearInterval(this.intervalDeterminate);
    window.clearInterval(this.intervalReversed);
  }
  buildInterval({ bufferAmount = 0, intervalName, timeout = 1000 }) {
    this[intervalName] = window.setInterval(() => {
      const { progress } = this.state[intervalName];
      const newProgress = progress === 100 ? 0 : progress + 10;
      const newBuffer = newProgress === 100 ? 100 : newProgress + bufferAmount;
      this.setState({ [intervalName]: { buffer: newBuffer, progress: newProgress } });
    }, timeout);
  }
  render() {
    const {
      intervalBuffer: { buffer: bufferBuffer, progress: progressBuffer },
      intervalDeterminate: { progress: progressDeterminate },
      intervalReversed: { buffer: bufferReversed, progress: progressReversed },
    } = this.state;
    return (
      <React.Fragment>
        <Headline2>Linear Progress</Headline2>
        <Body1>
          A list of all components and props is available on{' '}
          <a
            href="https://github.com/materialr/linear-progress"
            rel="noopener noreferrer"
            target="_blank"
          >
            GitHub
          </a>
        </Body1>

        <Headline4>Installation</Headline4>
        <Bash>$ npm install --save @materialr/linear-progress</Bash>

        <Headline4>Determinate</Headline4>
        <Body1>When the amount of progress is known</Body1>
        <Showcase>
          <LinearProgress progress={progressDeterminate / 100} />
        </Showcase>
        <Javascript>{determinate}</Javascript>

        <Headline4>Buffer</Headline4>
        <Body1>A linear progress bar with a buffer.</Body1>
        <Showcase>
          <LinearProgress buffer={bufferBuffer / 100} progress={progressBuffer / 100} />
        </Showcase>
        <Javascript>{buffer}</Javascript>

        <Headline4>Indeterminate</Headline4>
        <Body1>When the progress amount is unknown.</Body1>
        <Showcase>
          <LinearProgress indeterminate />
        </Showcase>
        <Javascript>{indeterminate}</Javascript>

        <Headline4>Reversed</Headline4>
        <Body1>Any of the above linear progress components, reversed.</Body1>
        <Showcase>
          <LinearProgress
            buffer={bufferReversed / 100}
            progress={progressReversed / 100}
            reversed
          />
        </Showcase>
        <Javascript>{reversed}</Javascript>
      </React.Fragment>
    );
  }
}
