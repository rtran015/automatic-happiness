Optimizely OX Segment Generator Chrome Extension

This extension opens all of the default Optimizely segments for your experiment in new tabs.

Go to experiment > results page on a new window with only this tab open. Click the extension and all default segments will open in new tabs.

Function: With an experiment open in a Chrome tab, clicking the extension will automatically open all default Optimizely segments. On Optimizely, it is a pain to click through each segment. This extension makes it easy and saves time.

Stages
<br>v1.0 current stage is set to open default segments
<br>v2.0 (in progress) will allow show a settings/dashboard that store segments and associated parameters. Users are able to add additional segments and parameters, as well as select which segments to open in new tab.

Further implication: The concept of this extension is to append n parameters (of fixed value) to a base url (of variable value). For example, when testing a landing page, and desire is to append multiple parameters, the extension allows parameters to be appended easily and opens urls in new tabs. This extension is most useful to users that have many n parameters of fixed value and many n based urls of variable value. At this point, the extension would exceed it's original purpose and be seen as a "Add parameters to URL and open in new tab" extension (to come in v2.0).

Q: What's the point of this?
A: Optimizely segments are selected via a dropdown menu with a check box. After selecting, the user has to click update, and the page takes a significant amount of time to load. The UI doesn't allow opening segments in multiple tabs either. When selecting a segment, and parameter is appended into the URL. For example, this parameter '&segmentCondition=JTVCJTIyYW5kJTIyJTJDJTdCJTIyc2VnbWVudF9pZCUyMiUzQTEwMCUyQyUyMnZhbHVlJTIyJTNBJTIyZ2MlMjIlN0QlNUQ%3D' refers to the 'Chrome' segment.  This extension appends all of the default parameter values to your active tab (the experiment) and opens all segments into new tabs. This saves a lot of time.

Q: Why would someone use this?
A: This extension allows the quick opening of all segments. During an active test, a user can quickly open all segments and monitor performance. For example if Firefox or Chrome or Safari has some kind of bug affecting performance, a user can quickly cycle through all of the tabs/segments and notice the discrepancy.
