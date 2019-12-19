// url parameters for specific segments

var ParamBrowserChrome = '&segmentCondition=JTVCJTIyYW5kJTIyJTJDJTdCJTIyc2VnbWVudF9pZCUyMiUzQTEwMCUyQyUyMnZhbHVlJTIyJTNBJTIyZ2MlMjIlN0QlNUQ%3D'
var ParamBrowserFirefox = '&segmentCondition=JTVCJTIyYW5kJTIyJTJDJTdCJTIyc2VnbWVudF9pZCUyMiUzQTEwMCUyQyUyMnZhbHVlJTIyJTNBJTIyZmYlMjIlN0QlNUQ%3D'
var ParamBrowserMicrosoft = '&segmentCondition=JTVCJTIyYW5kJTIyJTJDJTdCJTIyc2VnbWVudF9pZCUyMiUzQTEwMCUyQyUyMnZhbHVlJTIyJTNBJTIyZWRnZSUyMiU3RCU1RA%3D%3D'
var ParamBrowserSafari = '&segmentCondition=JTVCJTIyYW5kJTIyJTJDJTdCJTIyc2VnbWVudF9pZCUyMiUzQTEwMCUyQyUyMnZhbHVlJTIyJTNBJTIyc2FmYXJpJTIyJTdEJTVE'
var ParamDeviceAllPhones = '&segmentCondition=JTVCJTIyYW5kJTIyJTJDJTdCJTIyc2VnbWVudF9pZCUyMiUzQTcwMCUyQyUyMnZhbHVlJTIyJTNBJTIycGhvbmUlMjIlN0QlNUQ%3D'
var ParamDeviceAllTablets = '&segmentCondition=JTVCJTIyYW5kJTIyJTJDJTdCJTIyc2VnbWVudF9pZCUyMiUzQTcwMCUyQyUyMnZhbHVlJTIyJTNBJTIydGFibGV0JTIyJTdEJTVE'
var ParamDeviceDesktopLaptop = '&segmentCondition=JTVCJTIyYW5kJTIyJTJDJTdCJTIyc2VnbWVudF9pZCUyMiUzQTcwMCUyQyUyMnZhbHVlJTIyJTNBJTIyZGVza3RvcF9sYXB0b3AlMjIlN0QlNUQ%3D'
var ParamSourceCampaign = '&segmentCondition=JTVCJTIyYW5kJTIyJTJDJTdCJTIyc2VnbWVudF9pZCUyMiUzQTYwMCUyQyUyMnZhbHVlJTIyJTNBJTIyY2FtcGFpZ24lMjIlN0QlNUQ%3D'
var ParamSourceDirect = '&segmentCondition=JTVCJTIyYW5kJTIyJTJDJTdCJTIyc2VnbWVudF9pZCUyMiUzQTYwMCUyQyUyMnZhbHVlJTIyJTNBJTIyZGlyZWN0JTIyJTdEJTVE'
var ParamSourceReferral = '&segmentCondition=JTVCJTIyYW5kJTIyJTJDJTdCJTIyc2VnbWVudF9pZCUyMiUzQTYwMCUyQyUyMnZhbHVlJTIyJTNBJTIycmVmZXJyYWwlMjIlN0QlNUQ%3D'
var ParamSourceSearch = '&segmentCondition=JTVCJTIyYW5kJTIyJTJDJTdCJTIyc2VnbWVudF9pZCUyMiUzQTYwMCUyQyUyMnZhbHVlJTIyJTNBJTIyc2VhcmNoJTIyJTdEJTVE'

// background.js

// Called when the user clicks on the browser action.
chrome.browserAction.onClicked.addListener(function(tab) {
  var BaseUrl = tab.url;
  // Array of all segment links
  var linkArray = [BaseUrl+ParamBrowserChrome, BaseUrl+ParamBrowserFirefox,BaseUrl+ParamBrowserMicrosoft, BaseUrl+ParamBrowserSafari, BaseUrl+ParamDeviceAllPhones, BaseUrl+ParamDeviceAllTablets, BaseUrl+ParamDeviceDesktopLaptop, BaseUrl+ParamSourceCampaign, BaseUrl+ParamSourceDirect, BaseUrl+ParamSourceReferral, BaseUrl+ParamSourceSearch];

  // Open new tab
  for (var i = 0; i < linkArray.length; i++) {
      // will open each link in the current window
      chrome.tabs.create({
          url: linkArray[i]
      });
  }
})
