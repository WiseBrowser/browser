// This Source Code Form is subject to the terms of the Mozilla Public
// License, v. 2.0. If a copy of the MPL was not distributed with this
// file, You can obtain one at http://mozilla.org/MPL/2.0/.

//Using the way how we did preferences in pulse. So credit to Pulse.

//Include Better-Fox Changes to the Profile
#include better-fox.js

//Include the Wise Changes to the Profile
user_pref('extensions.pocket.enabled', false)
user_pref('extensions.pocket.api', ' ')
user_pref('extensions.pocket.oAuthConsumerKey', ' ')
user_pref('extensions.pocket.site', ' ')
user_pref(
    'browser.newtabpage.activity-stream.section.highlights.includePocket',
    false
)