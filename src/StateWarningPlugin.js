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
    // flex.NoTasksCanvas.Content.add(<QuoteComponent key="qotd" />, {
    //   sortOrder: -1
    // });

    manager.strings.TaskHeaderLine =
      '{{task.attributes.account_data.first_name}} ' +
      '{{task.attributes.account_data.last_name}}';
    manager.strings.TaskLineCallReserved = 'SLA: {{task.attributes.account_data.service_level}}';

    //Add CRM view
    flex.CRMContainer.defaultProps.uri= 'https://duckycrm-7409-dev.twil.io/index'
    const crmUrl = 'https://duckycrm-7409-dev.twil.io';
    flex.CRMContainer.defaultProps.uriCallback = (task) => {
      if(task) {
        return `${crmUrl}/profile?id=` + task.attributes.account_number;
      } else {
        return `${crmUrl}/index`;
      }
    };
  }
}