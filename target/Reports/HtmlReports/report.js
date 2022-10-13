$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/Features/commerce.feature");
formatter.feature({
  "name": "Commerce",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@SmokeScenario"
    },
    {
      "name": "@eCommerce"
    }
  ]
});
formatter.background({
  "name": "Launch website",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I navigate to url",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDefinitions.NavigationSteps.i_navigate_to_url()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "as a user, i want to validate when Country code is US Cart appear when the user is not Logged in",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@SmokeScenario"
    },
    {
      "name": "@eCommerce"
    },
    {
      "name": "@debug"
    }
  ]
});
formatter.step({
  "name": "I should see the cookie banner",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitions.CookieSteps.i_should_see_the_cookie_banner()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click the Allow Cookies Button",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinitions.CookieSteps.i_click_the_Allow_Cookies_Button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I set CountryCode to US",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitions.NavigationSteps.i_CountryCode_to_US()"
});
formatter.result({
  "error_message": "java.lang.NullPointerException\r\n\tat org.openqa.selenium.remote.RemoteWebDriver$RemoteWebDriverOptions.deleteCookie(RemoteWebDriver.java:782)\r\n\tat Pages.NavigationPage.setCookie(NavigationPage.java:32)\r\n\tat StepDefinitions.NavigationSteps.i_CountryCode_to_US(NavigationSteps.java:25)\r\n\tat ✽.I set CountryCode to US(file:///C:/Users/user/eclipse-workspace/in_music_store_ui/src/test/resources/Features/commerce.feature:15)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "I Reload the page",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitions.NavigationSteps.i_Reload_the_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "I should see the shopping cart",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitions.CommerceSteps.i_should_see_the_shopping_cart()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "Launch website",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I navigate to url",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDefinitions.NavigationSteps.i_navigate_to_url()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "as a user, i want to Validate if Country Code is Not US, Cart does not appear",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@SmokeScenario"
    },
    {
      "name": "@eCommerce"
    },
    {
      "name": "@debug"
    }
  ]
});
formatter.step({
  "name": "I should see the cookie banner",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitions.CookieSteps.i_should_see_the_cookie_banner()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click the Allow Cookies Button",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinitions.CookieSteps.i_click_the_Allow_Cookies_Button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Cart must not appear",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitions.CommerceSteps.cart_must_not_appear()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
});