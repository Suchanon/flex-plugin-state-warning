import React from 'react';
import { FlexPlugin } from '@twilio/flex-plugin';
import FeatherCorpTheme from './assets/FeatherCorpTheme';
import QuoteComponent from './components/Quote/Quote';

const PLUGIN_NAME = 'StateWarningPlugin';

export default class StateWarningPlugin extends FlexPlugin {
  constructor() {
    super(PLUGIN_NAME);
  }


  async init(flex, manager) {

    flex.MainHeader.defaultProps.logoUrl = 'https://tangerine-toad-5117.twil.io/assets/feathercorp-logo-white.svg'

    // apply theme
    manager.updateConfig({ colorTheme: FeatherCorpTheme });

    // remove default components
    flex.NoTasksCanvas.Content.remove('first-line');
    flex.NoTasksCanvas.Content.remove('second-line');
    flex.NoTasksCanvas.Content.remove('hint');

    // add our quote component
    flex.NoTasksCanvas.Content.add(<QuoteComponent key="qotd" />, {
      sortOrder: -1
    });
  }
}