/*
Copyright 2019 Gravitational, Inc.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/

import React from 'react';
import { storiesOf } from '@storybook/react';
import Tabs from './Tabs';
import { TestLayout } from './../Console.story';

storiesOf('TeleportConsole', module).add('Tabs', () => {
  const items = [
    {
      id: 35,
      title: 'tuguwog',
      type: 'terminal',
      sid: '15',
    },
    {
      id: 22,
      title: 'emwonepu',
      type: 'terminal',
      sid: '16',
    },
    {
      id: 23,
      title: 'foguzaziw',
      type: 'terminal',
      sid: '27',
    },
  ];

  const parties = {
    '16': [{ user: 'jiawu@ninu.fo' }, { user: 'gigbu@fe.ac' }],
    '15': [{ user: 'difzu@gusebdem.gq' }, { user: 'tuicu@bu.ki' }],
    '27': [],
  };

  return (
    <TestLayout>
      <Tabs
        width="100%"
        height="36px"
        activeTab={35}
        items={items}
        parties={parties}
      />
    </TestLayout>
  );
});