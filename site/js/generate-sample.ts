/**
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import '../../src/components/sample-configurator';

import {html, render} from 'lit-html';

import {SampleConfig} from '../../src/model/sample-config.js';
import * as base64url from '../../src/util/base64url.js';
import * as urlHash from '../../src/util/url-hash.js';


const configParam = urlHash.getParameter('config');
const config: SampleConfig =
    configParam ? JSON.parse(base64url.decode(configParam)) : {slots: []};

render(
    html`
      <sample-configurator .config="${config}"></sample-configurator>
    `,
    document.body);