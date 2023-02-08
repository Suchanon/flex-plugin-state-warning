import React from 'react';
import { FlexPlugin } from '@twilio/flex-plugin';
import FeatherCorpTheme  from './assets/FeatherCorpTheme';
const PLUGIN_NAME = 'StateWarningPlugin';

export default class StateWarningPlugin extends FlexPlugin {
  constructor() {
    super(PLUGIN_NAME);
  }


  async init(flex, manager) {

    flex.MainHeader.defaultProps.logoUrl = 'https://tangerine-toad-5117.twil.io/assets/feathercorp-logo-white.svg'

    // apply theme
    manager.updateConfig({ colorTheme : FeatherCorpTheme});
  }
}