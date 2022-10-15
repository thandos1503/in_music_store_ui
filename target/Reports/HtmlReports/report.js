$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/Features/login.feature");
formatter.feature({
  "name": "Login",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@SmokeScenario"
    },
    {
      "name": "@login"
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
  "name": "",
  "description": " As a user, i want to validate if i can login with an valid account in RoW",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@SmokeScenario"
    },
    {
      "name": "@login"
    },
    {
      "name": "@SmokeTest"
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
  "name": "I click the close cookie banner button",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinitions.CookieSteps.i_click_the_close_cookie_banner_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click the account button",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitions.HeaderPageSteps.when_i_click_the_account_button()"
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
  "name": "The account icon links to the account login page",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitions.HeaderPageSteps.the_account_icon_links_to_the_account_login_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I enter correct email address",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitions.SignInPageSteps.i_enter_correct_email_address()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I enter valid password",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitions.SignInPageSteps.i_enter_valid_password()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click the sign in button",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitions.SignInPageSteps.i_click_the_sign_in_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "i have successfully logged in",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitions.SignInPageSteps.i_have_successfully_logged_in()"
});
formatter.result({
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"//span[text()\u003d\u0027My Account\u0027]\"}\n  (Session info: chrome\u003d106.0.5249.119)\nFor documentation on this error, please visit: https://selenium.dev/exceptions/#no_such_element\nBuild info: version: \u00274.1.3\u0027, revision: \u00277b1ebf28ef\u0027\nSystem info: host: \u0027DESKTOP-HJ4MA0G\u0027, ip: \u002710.0.7.192\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002711.0.16.1\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCommand: [fca807c2d133ea51acb2ce825b960bf6, findElement {using\u003dxpath, value\u003d//span[text()\u003d\u0027My Account\u0027]}]\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 106.0.5249.119, chrome: {chromedriverVersion: 106.0.5249.61 (511755355844..., userDataDir: C:\\Users\\user\\AppData\\Local...}, goog:chromeOptions: {debuggerAddress: localhost:59661}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), se:cdp: ws://localhost:59661/devtoo..., se:cdpVersion: 106.0.5249.119, setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nSession ID: fca807c2d133ea51acb2ce825b960bf6\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:490)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:200)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:133)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:53)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:184)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.invokeExecute(DriverCommandExecutor.java:167)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:142)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:567)\r\n\tat org.openqa.selenium.remote.ElementLocation$ElementFinder$2.findElement(ElementLocation.java:162)\r\n\tat org.openqa.selenium.remote.ElementLocation.findElement(ElementLocation.java:60)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:385)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:377)\r\n\tat Helpers.ElementsValidation.findElement(ElementsValidation.java:12)\r\n\tat Pages.SignInPage.ValidateLoggedIn(SignInPage.java:94)\r\n\tat StepDefinitions.SignInPageSteps.i_have_successfully_logged_in(SignInPageSteps.java:25)\r\n\tat ✽.i have successfully logged in(file:///C:/Users/user/eclipse-workspace/in_music_store_ui/src/test/resources/Features/login.feature:22)\r\n",
  "status": "failed"
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
  "name": "",
  "description": "  As a user, i want to validate if i can login with an valid account in US",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@SmokeScenario"
    },
    {
      "name": "@login"
    },
    {
      "name": "@SmokeTest"
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
  "name": "I click the close cookie banner button",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinitions.CookieSteps.i_click_the_close_cookie_banner_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click the account button",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitions.HeaderPageSteps.when_i_click_the_account_button()"
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
  "error_message": "java.lang.NullPointerException\r\n\tat org.openqa.selenium.remote.RemoteWebDriver$RemoteWebDriverOptions.deleteCookie(RemoteWebDriver.java:782)\r\n\tat Pages.NavigationPage.setCookie(NavigationPage.java:42)\r\n\tat StepDefinitions.NavigationSteps.i_CountryCode_to_US(NavigationSteps.java:25)\r\n\tat ✽.I set CountryCode to US(file:///C:/Users/user/eclipse-workspace/in_music_store_ui/src/test/resources/Features/login.feature:31)\r\n",
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
formatter.step({
  "name": "The account icon links to the account login page",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitions.HeaderPageSteps.the_account_icon_links_to_the_account_login_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "I enter correct email address",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitions.SignInPageSteps.i_enter_correct_email_address()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "I enter valid password",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitions.SignInPageSteps.i_enter_valid_password()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "I click the sign in button",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitions.SignInPageSteps.i_click_the_sign_in_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "i have successfully logged in",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitions.SignInPageSteps.i_have_successfully_logged_in()"
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
  "name": "",
  "description": " As a user, i want to validate if i get an error message when i login with an invalid account",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@SmokeScenario"
    },
    {
      "name": "@login"
    },
    {
      "name": "@SmokeTest"
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
  "name": "I click the close cookie banner button",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinitions.CookieSteps.i_click_the_close_cookie_banner_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click the account button",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitions.HeaderPageSteps.when_i_click_the_account_button()"
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
  "name": "The account icon links to the account login page",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitions.HeaderPageSteps.the_account_icon_links_to_the_account_login_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I enter correct email address",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitions.SignInPageSteps.i_enter_correct_email_address()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I enter invalid password",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitions.SignInPageSteps.i_enter_invalid_password()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click the sign in button",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitions.SignInPageSteps.i_click_the_sign_in_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I see an error message",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitions.SignInPageSteps.i_see_an_error_message()"
});
formatter.result({
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"//span[text()\u003d\u0027The account sign-in was incorrect or your account is disabled temporarily. Please wait and try again later.\u0027]\"}\n  (Session info: chrome\u003d106.0.5249.119)\nFor documentation on this error, please visit: https://selenium.dev/exceptions/#no_such_element\nBuild info: version: \u00274.1.3\u0027, revision: \u00277b1ebf28ef\u0027\nSystem info: host: \u0027DESKTOP-HJ4MA0G\u0027, ip: \u002710.0.7.192\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002711.0.16.1\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCommand: [e80202a37965db847d924bc48e2300ca, findElement {using\u003dxpath, value\u003d//span[text()\u003d\u0027The account sign-in was incorrect or your account is disabled temporarily. Please wait and try again later.\u0027]}]\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 106.0.5249.119, chrome: {chromedriverVersion: 106.0.5249.61 (511755355844..., userDataDir: C:\\Users\\user\\AppData\\Local...}, goog:chromeOptions: {debuggerAddress: localhost:59870}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), se:cdp: ws://localhost:59870/devtoo..., se:cdpVersion: 106.0.5249.119, setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nSession ID: e80202a37965db847d924bc48e2300ca\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:490)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:200)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:133)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:53)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:184)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.invokeExecute(DriverCommandExecutor.java:167)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:142)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:567)\r\n\tat org.openqa.selenium.remote.ElementLocation$ElementFinder$2.findElement(ElementLocation.java:162)\r\n\tat org.openqa.selenium.remote.ElementLocation.findElement(ElementLocation.java:60)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:385)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:377)\r\n\tat Helpers.ElementsValidation.findElement(ElementsValidation.java:12)\r\n\tat Pages.SignInPage.ValidateErrorMessage(SignInPage.java:89)\r\n\tat StepDefinitions.SignInPageSteps.i_see_an_error_message(SignInPageSteps.java:43)\r\n\tat ✽.I see an error message(file:///C:/Users/user/eclipse-workspace/in_music_store_ui/src/test/resources/Features/login.feature:53)\r\n",
  "status": "failed"
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
  "name": "",
  "description": " As a user, i want to validate if i am redirected to the privacy policy page when i click the Privacy policy link ",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@SmokeScenario"
    },
    {
      "name": "@login"
    },
    {
      "name": "@SmokeTest"
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
  "name": "I click the close cookie banner button",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinitions.CookieSteps.i_click_the_close_cookie_banner_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click the account button",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitions.HeaderPageSteps.when_i_click_the_account_button()"
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
  "name": "The account icon links to the account login page",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitions.HeaderPageSteps.the_account_icon_links_to_the_account_login_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click the Privacy Policy",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitions.SignInPageSteps.i_click_the_Privacy_Policy()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I am in the privacy page",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitions.SignInPageSteps.I_am_in_the_privacy_page()"
});
formatter.result({
  "status": "passed"
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
  "name": "",
  "description": " As a user, i want to validate if i am redirected to the terms of use page when i click the terms of use link ",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@SmokeScenario"
    },
    {
      "name": "@login"
    },
    {
      "name": "@SmokeTest"
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
  "name": "I click the close cookie banner button",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinitions.CookieSteps.i_click_the_close_cookie_banner_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click the account button",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitions.HeaderPageSteps.when_i_click_the_account_button()"
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
  "name": "The account icon links to the account login page",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitions.HeaderPageSteps.the_account_icon_links_to_the_account_login_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click the terms of use",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitions.SignInPageSteps.i_click_the_terms_of_use()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I am in the terms of use page",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitions.SignInPageSteps.i_am_in_the_terms_of_use_page()"
});
formatter.result({
  "status": "passed"
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
  "name": "",
  "description": " As a user, i want to validate if i am redirected to the forgot when i click the forgot link ",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@SmokeScenario"
    },
    {
      "name": "@login"
    },
    {
      "name": "@SmokeTest"
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
  "name": "I click the close cookie banner button",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinitions.CookieSteps.i_click_the_close_cookie_banner_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click the account button",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitions.HeaderPageSteps.when_i_click_the_account_button()"
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
  "name": "The account icon links to the account login page",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitions.HeaderPageSteps.the_account_icon_links_to_the_account_login_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click the forgot",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitions.SignInPageSteps.i_click_the_forgot()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I am in the forgot page",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitions.SignInPageSteps.i_am_in_the_forgot_page()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
});