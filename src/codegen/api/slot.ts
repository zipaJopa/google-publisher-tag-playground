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

import {SampleSlotConfig, SampleTargetingKV} from '../../model/sample-config.js';
import {sanitizeJs} from '../sanitize.js';

/* Internal template strings */

const api = {
  addService: () => 'addService(googletag.pubads())',
  setTargeting: (kv: SampleTargetingKV) =>
      `setTargeting(${sanitizeJs(kv.key)}, ${sanitizeJs(kv.value)})`
};

/* Public exports */

/**
 * Generates code for configuring slot settings inline with a slot definition.
 */
export function addInlineSlotSettings(
    config: SampleSlotConfig, slotDefinition: string) {
  let slotSettings = slotDefinition;

  config.targeting?.forEach((kv: SampleTargetingKV) => {
    slotSettings += '.' + api.setTargeting(kv);
  });

  slotSettings += '.' + api.addService() + ';';

  return slotSettings;
}