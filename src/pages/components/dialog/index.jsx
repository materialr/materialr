import Button from '@materialr/button';
import Dialog from '@materialr/dialog';
import { Body1, Headline2, Headline4 } from '@materialr/typography';
import React from 'react';

import Bash from 'shared/components/code-block/bash';
import Javascript from 'shared/components/code-block/javascript';
import Showcase from 'shared/components/showcase';

const basic = `
import Button from '@materialr/button';
import Dialog from '@materialr/dialog';
import React from 'react';

class Component extends React.Component {
  constructor(props) {
    super(props);
    this.state = { action: 'None', visible: false };
    this.accept = this.accept.bind(this);
    this.cancel = this.cancel.bind(this);
    this.show = this.show.bind(this);
  }
  accept() {
    this.setState({ action: 'Accepted', visible: false });
  }
  cancel() {
    this.setState({ action: 'Cancelled', visible: false });
  }
  show() {
    this.setState({ visible: true });
  }
  render() {
    return (
      <Button onClick={this.show}>Show</Button>
      <p>Action taken: <strong>{this.state.action}</strong></p>
      {this.state.visible && <Dialog
        body="Text that requires immediate interaction"
        labelAccept="Accept"
        labelCancel="Cancel"
        onAccept={this.accept}
        onCancel={this.cancel}
        title="Title"
      />}
    );
  }
}

export default Component;
`;

const scrollable = `
import Button from '@materialr/button';
import Dialog from '@materialr/dialog';
import React from 'react';

const scrollableContent = 'Bacon ipsum dolor amet tongue t-bone tenderloin shankle andouille. ' +
  'Shankle swine bacon, turducken fatback frankfurter burgdoggen short loin boudin sirloin. ' +
  'Salami buffalo venison fatback, chuck spare ribs capicola porchetta landjaeger jerky rump ' +
  'sausage turducken. Tri-tip buffalo sirloin landjaeger cow hamburger tongue bresaola, ball tip ' +
  'pork chop short loin meatball. Flank shoulder chicken, meatball bresaola porchetta shank beef ' +
  'pork chop frankfurter filet mignon fatback spare ribs. Chicken kevin boudin spare ribs.' +
  'Jowl venison kielbasa burgdoggen pork belly ham hock ribeye shankle hamburger fatback. ' +
  'Meatloaf venison pork chop meatball tongue kevin shank. Chuck ribeye landjaeger turducken. ' +
  'Tri-tip ground round short loin rump, alcatra meatball pork belly salami ham boudin pig. ' +
  'Short loin tail corned beef picanha, salami prosciutto frankfurter tongue ham sausage chuck. ' +
  'Ball tip t-bone rump sausage, spare ribs drumstick kielbasa landjaeger short loin prosciutto ' +
  'flank. Tenderloin pig chuck, prosciutto leberkas turducken t-bone beef sausage tail doner ' +
  'short loin pork chop. Meatball brisket pork loin, sausage porchetta strip steak kielbasa. ' +
  'Jowl shank ribeye turducken capicola. Cupim short loin fatback, pancetta prosciutto ' +
  'tenderloin porchetta pastrami buffalo swine boudin chicken. Jerky beef ribs kielbasa, tongue ' +
  'brisket venison meatball drumstick biltong tri-tip t-bone pork chop ball tip flank ' +
  'tenderloin. Bresaola turducken short ribs beef ribs. Bacon brisket tri-tip jowl chuck ' +
  'andouille jerky. Pastrami pork boudin tongue, t-bone tri-tip bacon kielbasa turkey jerky ' +
  'picanha.';

class Component extends React.Component {
  constructor(props) {
    super(props);
    this.state = { visible: false };
    this.hide = this.hide.bind(this);
    this.show = this.show.bind(this);
  }
  hide() {
    this.setState({ visible: false });
  }
  show() {
    this.setState({ visible: true });
  }
  render() {
    return (
      <Button onClick={this.show}>Show</Button>
      {this.state.visible && <Dialog
        body={scrollableContent}
        labelAccept="Accept"
        labelCancel="Cancel"
        onAccept={() => {}}
        onCancel={() => {}}
        scrollable
        title="Title"
      />}
    );
  }
}

export default Component;
`;

const secondaryActions = `
import Button from '@materialr/button';
import Dialog from '@materialr/dialog';
import React from 'react';

class Component extends React.Component {
  constructor(props) {
    super(props);
    this.state = { visible: false };
    this.hide = this.hide.bind(this);
    this.show = this.show.bind(this);
  }
  hide() {
    this.setState({ visible: false });
  }
  show() {
    this.setState({ visible: true });
  }
  render() {
    return (
      <Button onClick={this.show}>Show</Button>
      {this.state.visible && <Dialog
        body="Text that requires immediate interaction"
        labelAccept="Accept"
        labelCancel="Cancel"
        onAccept={() => {}}
        onCancel={() => {}}
        secondaryAccept
        secondaryCancel
        title="Title"
      />}
    );
  }
}

export default Component;
`;

const scrollableContent = 'Bacon ipsum dolor amet tongue t-bone tenderloin shankle andouille. ' +
  'Shankle swine bacon, turducken fatback frankfurter burgdoggen short loin boudin sirloin. ' +
  'Salami buffalo venison fatback, chuck spare ribs capicola porchetta landjaeger jerky rump ' +
  'sausage turducken. Tri-tip buffalo sirloin landjaeger cow hamburger tongue bresaola, ball tip ' +
  'pork chop short loin meatball. Flank shoulder chicken, meatball bresaola porchetta shank beef ' +
  'pork chop frankfurter filet mignon fatback spare ribs. Chicken kevin boudin spare ribs.' +
  'Jowl venison kielbasa burgdoggen pork belly ham hock ribeye shankle hamburger fatback. ' +
  'Meatloaf venison pork chop meatball tongue kevin shank. Chuck ribeye landjaeger turducken. ' +
  'Tri-tip ground round short loin rump, alcatra meatball pork belly salami ham boudin pig. ' +
  'Short loin tail corned beef picanha, salami prosciutto frankfurter tongue ham sausage chuck. ' +
  'Ball tip t-bone rump sausage, spare ribs drumstick kielbasa landjaeger short loin prosciutto ' +
  'flank. Tenderloin pig chuck, prosciutto leberkas turducken t-bone beef sausage tail doner ' +
  'short loin pork chop. Meatball brisket pork loin, sausage porchetta strip steak kielbasa. ' +
  'Jowl shank ribeye turducken capicola. Cupim short loin fatback, pancetta prosciutto ' +
  'tenderloin porchetta pastrami buffalo swine boudin chicken. Jerky beef ribs kielbasa, tongue ' +
  'brisket venison meatball drumstick biltong tri-tip t-bone pork chop ball tip flank ' +
  'tenderloin. Bresaola turducken short ribs beef ribs. Bacon brisket tri-tip jowl chuck ' +
  'andouille jerky. Pastrami pork boudin tongue, t-bone tri-tip bacon kielbasa turkey jerky ' +
  'picanha.';

export default class extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      basicAction: 'None',
      basicVisible: false,
      scrollableVisible: false,
      secondaryActionsVisible: false,
    };
    this.basicAccept = this.basicAccept.bind(this);
    this.basicCancel = this.basicCancel.bind(this);
    this.basicHide = this.basicHide.bind(this);
    this.basicShow = this.basicShow.bind(this);
    this.scrollableHide = this.scrollableHide.bind(this);
    this.scrollableShow = this.scrollableShow.bind(this);
    this.secondaryActionsHide = this.secondaryActionsHide.bind(this);
    this.secondaryActionsShow = this.secondaryActionsShow.bind(this);
  }
  basicAccept() {
    this.basicHide();
    this.setState({ basicAction: 'Accepted' });
  }
  basicCancel() {
    this.basicHide();
    this.setState({ basicAction: 'Cancelled' });
  }
  basicHide() {
    this.setState({ basicVisible: false });
  }
  basicShow() {
    this.setState({ basicVisible: true });
  }
  scrollableHide() {
    this.setState({ scrollableVisible: false });
  }
  scrollableShow() {
    this.setState({ scrollableVisible: true });
  }
  secondaryActionsHide() {
    this.setState({ secondaryActionsVisible: false });
  }
  secondaryActionsShow() {
    this.setState({ secondaryActionsVisible: true });
  }
  render() {
    return (
      <React.Fragment>
        <Headline2>Dialog</Headline2>
        <Body1>
          A list of all components and props is available on{' '}
          <a href="https://github.com/materialr/dialog" rel="noopener noreferrer" target="_blank">
            GitHub
          </a>
        </Body1>
        <Headline4>Installation</Headline4>
        <Bash>$ npm install --save @materialr/dialog</Bash>

        <Headline4>Basic</Headline4>
        <Body1>
          A basic dialog has a title, some body text, and two action buttons. Visibility should
          be handled by the implementor as in the example below.
        </Body1>
        <Showcase column>
          <Button onClick={this.basicShow} raised>Basic dialog</Button>
          <Body1>Action taken: <strong>{this.state.basicAction}</strong></Body1>
          {this.state.basicVisible && <Dialog
            body="Text that requires immediate interaction"
            labelAccept="Accept"
            labelCancel="Cancel"
            onAccept={this.basicAccept}
            onCancel={this.basicCancel}
            title="Title"
          />}
        </Showcase>
        <Javascript>{basic}</Javascript>

        <Headline4>Scrollable</Headline4>
        <Body1>
          In certain cases it is necessary to display larger amounts of content inside a dialog, in
          these cases you can add the `scrollable` prop to make the content of the dialog, scroll.
        </Body1>
        <Showcase>
          <Button onClick={this.scrollableShow} raised>Scrollable dialog</Button>
          {this.state.scrollableVisible && <Dialog
            body={scrollableContent}
            labelAccept="Accept"
            labelCancel="Cancel"
            onAccept={() => {}}
            onCancel={this.scrollableHide}
            scrollable
            title="Title"
          />}
        </Showcase>
        <Javascript>{scrollable}</Javascript>

        <Headline4>Secondary actions</Headline4>
        <Body1>The action buttons can be set to the secondary colors individually.</Body1>
        <Showcase>
          <Button onClick={this.secondaryActionsShow} raised>Secondary actions</Button>
          {this.state.secondaryActionsVisible && <Dialog
            body="Text that requires immediate interaction"
            labelAccept="Accept"
            labelCancel="Cancel"
            onAccept={() => {}}
            onCancel={this.secondaryActionsHide}
            secondaryAccept
            secondaryCancel
            title="Title"
          />}
        </Showcase>
        <Javascript>{secondaryActions}</Javascript>
      </React.Fragment>
    );
  }
}
