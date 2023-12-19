$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/Features/404.feature");
formatter.feature({
  "name": "404",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@SmokeScenario"
    },
    {
      "name": "@404"
    },
    {
      "name": "@regression"
    }
  ]
});
formatter.background({
  "name": "Launch website",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "error_message": "org.openqa.selenium.SessionNotCreatedException: Could not start a new session. Response code 500. Message: session not created: This version of ChromeDriver only supports Chrome version 118\nCurrent browser version is 120.0.6099.72 with binary path C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe\nBuild info: version: \u00274.0.0-alpha-2\u0027, revision: \u0027f148142cf8\u0027, time: \u00272019-07-01T21:30:10\u0027\nSystem info: host: \u0027DESKTOP-HJ4MA0G\u0027, ip: \u0027172.21.112.1\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002711.0.16.1\u0027\nDriver info: driver.version: unknown\nremote stacktrace: \tGetHandleVerifier [0x00007FF6550E8EF2+54786]\n\t(No symbol) [0x00007FF655055612]\n\t(No symbol) [0x00007FF654F0A64B]\n\t(No symbol) [0x00007FF654F3DC22]\n\t(No symbol) [0x00007FF654F3D07C]\n\t(No symbol) [0x00007FF654F37E03]\n\t(No symbol) [0x00007FF654F353BE]\n\t(No symbol) [0x00007FF654F73FBB]\n\t(No symbol) [0x00007FF654F73A30]\n\t(No symbol) [0x00007FF654F6BC43]\n\t(No symbol) [0x00007FF654F40941]\n\t(No symbol) [0x00007FF654F41B84]\n\tGetHandleVerifier [0x00007FF655437F52+3524194]\n\tGetHandleVerifier [0x00007FF65548D800+3874576]\n\tGetHandleVerifier [0x00007FF655485D7F+3843215]\n\tGetHandleVerifier [0x00007FF655185086+694166]\n\t(No symbol) [0x00007FF655060A88]\n\t(No symbol) [0x00007FF65505CA94]\n\t(No symbol) [0x00007FF65505CBC2]\n\t(No symbol) [0x00007FF65504CC83]\n\tBaseThreadInitThunk [0x00007FFDF8BE7344+20]\n\tRtlUserThreadStart [0x00007FFDF94626B1+33]\n\nBuild info: version: \u00274.1.3\u0027, revision: \u00277b1ebf28ef\u0027\nSystem info: host: \u0027DESKTOP-HJ4MA0G\u0027, ip: \u0027172.21.112.1\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002711.0.16.1\u0027\nDriver info: org.openqa.selenium.remote.RemoteWebDriver\nCommand: [null, newSession {capabilities\u003d[Capabilities {acceptInsecureCerts: true, browserName: chrome, goog:chromeOptions: {args: [--disable-gpu, disable-infobars, --disable-dev-shm-usage, --no-sandbox, --disable-extensions, start-maximized, --remote-allow-origins\u003d*], extensions: []}, platformName: windows}], desiredCapabilities\u003dCapabilities {acceptInsecureCerts: true, browserName: chrome, goog:chromeOptions: {args: [--disable-gpu, disable-infobars, --disable-dev-shm-usage, --no-sandbox, --disable-extensions, start-maximized, --remote-allow-origins\u003d*], extensions: []}, platform: WINDOWS}}]\nCapabilities {}\r\n\tat org.openqa.selenium.remote.ProtocolHandshake.createSession(ProtocolHandshake.java:126)\r\n\tat org.openqa.selenium.remote.ProtocolHandshake.createSession(ProtocolHandshake.java:84)\r\n\tat org.openqa.selenium.remote.ProtocolHandshake.createSession(ProtocolHandshake.java:62)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:156)\r\n\tat org.openqa.selenium.remote.TracedCommandExecutor.execute(TracedCommandExecutor.java:51)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:567)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.startSession(RemoteWebDriver.java:248)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.\u003cinit\u003e(RemoteWebDriver.java:164)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.\u003cinit\u003e(RemoteWebDriver.java:146)\r\n\tat StepDefinitions.Hooks.startTest(Hooks.java:50)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "I navigate to url",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDefinitions.NavigationSteps.i_navigate_to_url()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "I click the menu",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitions.HeaderPageSteps.i_click_the_menu()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "I click the top seller menu",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitions.HeaderPageSteps.i_click_the_top_seller_menu()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "name": "As a user, i want to validate If i land on a page that no longer exists, I recieve a 404 error",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@SmokeScenario"
    },
    {
      "name": "@404"
    },
    {
      "name": "@regression"
    },
    {
      "name": "@SmokeTest"
    }
  ]
});
formatter.step({
  "name": "I update page url",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitions.ErrorPageSteps.i_update_page_url()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "I validate if in am in the 404 page",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitions.ErrorPageSteps.i_validate_if_in_am_in_the_page(java.lang.Integer)"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "error_message": "java.lang.NullPointerException\r\n\tat StepDefinitions.Hooks.tearDown(Hooks.java:66)\r\n",
  "status": "failed"
});
formatter.uri("file:src/test/resources/Features/footer.feature");
formatter.feature({
  "name": "footer",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@SmokeScenario"
    },
    {
      "name": "@footer"
    },
    {
      "name": "@regression"
    }
  ]
});
formatter.background({
  "name": "Launch website",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "error_message": "org.openqa.selenium.SessionNotCreatedException: Could not start a new session. Response code 500. Message: session not created: This version of ChromeDriver only supports Chrome version 118\nCurrent browser version is 120.0.6099.72 with binary path C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe\nBuild info: version: \u00274.0.0-alpha-2\u0027, revision: \u0027f148142cf8\u0027, time: \u00272019-07-01T21:30:10\u0027\nSystem info: host: \u0027DESKTOP-HJ4MA0G\u0027, ip: \u0027172.21.112.1\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002711.0.16.1\u0027\nDriver info: driver.version: unknown\nremote stacktrace: \tGetHandleVerifier [0x00007FF6550E8EF2+54786]\n\t(No symbol) [0x00007FF655055612]\n\t(No symbol) [0x00007FF654F0A64B]\n\t(No symbol) [0x00007FF654F3DC22]\n\t(No symbol) [0x00007FF654F3D07C]\n\t(No symbol) [0x00007FF654F37E03]\n\t(No symbol) [0x00007FF654F353BE]\n\t(No symbol) [0x00007FF654F73FBB]\n\t(No symbol) [0x00007FF654F73A30]\n\t(No symbol) [0x00007FF654F6BC43]\n\t(No symbol) [0x00007FF654F40941]\n\t(No symbol) [0x00007FF654F41B84]\n\tGetHandleVerifier [0x00007FF655437F52+3524194]\n\tGetHandleVerifier [0x00007FF65548D800+3874576]\n\tGetHandleVerifier [0x00007FF655485D7F+3843215]\n\tGetHandleVerifier [0x00007FF655185086+694166]\n\t(No symbol) [0x00007FF655060A88]\n\t(No symbol) [0x00007FF65505CA94]\n\t(No symbol) [0x00007FF65505CBC2]\n\t(No symbol) [0x00007FF65504CC83]\n\tBaseThreadInitThunk [0x00007FFDF8BE7344+20]\n\tRtlUserThreadStart [0x00007FFDF94626B1+33]\n\nBuild info: version: \u00274.1.3\u0027, revision: \u00277b1ebf28ef\u0027\nSystem info: host: \u0027DESKTOP-HJ4MA0G\u0027, ip: \u0027172.21.112.1\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002711.0.16.1\u0027\nDriver info: org.openqa.selenium.remote.RemoteWebDriver\nCommand: [null, newSession {capabilities\u003d[Capabilities {acceptInsecureCerts: true, browserName: chrome, goog:chromeOptions: {args: [--disable-gpu, disable-infobars, --disable-dev-shm-usage, --no-sandbox, --disable-extensions, start-maximized, --remote-allow-origins\u003d*], extensions: []}, platformName: windows}], desiredCapabilities\u003dCapabilities {acceptInsecureCerts: true, browserName: chrome, goog:chromeOptions: {args: [--disable-gpu, disable-infobars, --disable-dev-shm-usage, --no-sandbox, --disable-extensions, start-maximized, --remote-allow-origins\u003d*], extensions: []}, platform: WINDOWS}}]\nCapabilities {}\r\n\tat org.openqa.selenium.remote.ProtocolHandshake.createSession(ProtocolHandshake.java:126)\r\n\tat org.openqa.selenium.remote.ProtocolHandshake.createSession(ProtocolHandshake.java:84)\r\n\tat org.openqa.selenium.remote.ProtocolHandshake.createSession(ProtocolHandshake.java:62)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:156)\r\n\tat org.openqa.selenium.remote.TracedCommandExecutor.execute(TracedCommandExecutor.java:51)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:567)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.startSession(RemoteWebDriver.java:248)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.\u003cinit\u003e(RemoteWebDriver.java:164)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.\u003cinit\u003e(RemoteWebDriver.java:146)\r\n\tat StepDefinitions.Hooks.startTest(Hooks.java:50)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "I navigate to url",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDefinitions.NavigationSteps.i_navigate_to_url()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "I scroll to footer",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitions.FooterPageSteps.i_scroll_to_footer()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "name": "As a user, i want to validate if i can navigate to the policy page",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@SmokeScenario"
    },
    {
      "name": "@footer"
    },
    {
      "name": "@regression"
    },
    {
      "name": "@SmokeTest"
    }
  ]
});
formatter.step({
  "name": "I click the privacy page",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitions.FooterPageSteps.i_click_the_privacy_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "I am in the privacy page",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitions.SignInPageSteps.I_am_in_the_privacy_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "error_message": "java.lang.NullPointerException\r\n\tat StepDefinitions.Hooks.tearDown(Hooks.java:66)\r\n",
  "status": "failed"
});
formatter.background({
  "name": "Launch website",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "error_message": "org.openqa.selenium.SessionNotCreatedException: Could not start a new session. Response code 500. Message: session not created: This version of ChromeDriver only supports Chrome version 118\nCurrent browser version is 120.0.6099.72 with binary path C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe\nBuild info: version: \u00274.0.0-alpha-2\u0027, revision: \u0027f148142cf8\u0027, time: \u00272019-07-01T21:30:10\u0027\nSystem info: host: \u0027DESKTOP-HJ4MA0G\u0027, ip: \u0027172.21.112.1\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002711.0.16.1\u0027\nDriver info: driver.version: unknown\nremote stacktrace: \tGetHandleVerifier [0x00007FF6550E8EF2+54786]\n\t(No symbol) [0x00007FF655055612]\n\t(No symbol) [0x00007FF654F0A64B]\n\t(No symbol) [0x00007FF654F3DC22]\n\t(No symbol) [0x00007FF654F3D07C]\n\t(No symbol) [0x00007FF654F37E03]\n\t(No symbol) [0x00007FF654F353BE]\n\t(No symbol) [0x00007FF654F73FBB]\n\t(No symbol) [0x00007FF654F73A30]\n\t(No symbol) [0x00007FF654F6BC43]\n\t(No symbol) [0x00007FF654F40941]\n\t(No symbol) [0x00007FF654F41B84]\n\tGetHandleVerifier [0x00007FF655437F52+3524194]\n\tGetHandleVerifier [0x00007FF65548D800+3874576]\n\tGetHandleVerifier [0x00007FF655485D7F+3843215]\n\tGetHandleVerifier [0x00007FF655185086+694166]\n\t(No symbol) [0x00007FF655060A88]\n\t(No symbol) [0x00007FF65505CA94]\n\t(No symbol) [0x00007FF65505CBC2]\n\t(No symbol) [0x00007FF65504CC83]\n\tBaseThreadInitThunk [0x00007FFDF8BE7344+20]\n\tRtlUserThreadStart [0x00007FFDF94626B1+33]\n\nBuild info: version: \u00274.1.3\u0027, revision: \u00277b1ebf28ef\u0027\nSystem info: host: \u0027DESKTOP-HJ4MA0G\u0027, ip: \u0027172.21.112.1\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002711.0.16.1\u0027\nDriver info: org.openqa.selenium.remote.RemoteWebDriver\nCommand: [null, newSession {capabilities\u003d[Capabilities {acceptInsecureCerts: true, browserName: chrome, goog:chromeOptions: {args: [--disable-gpu, disable-infobars, --disable-dev-shm-usage, --no-sandbox, --disable-extensions, start-maximized, --remote-allow-origins\u003d*], extensions: []}, platformName: windows}], desiredCapabilities\u003dCapabilities {acceptInsecureCerts: true, browserName: chrome, goog:chromeOptions: {args: [--disable-gpu, disable-infobars, --disable-dev-shm-usage, --no-sandbox, --disable-extensions, start-maximized, --remote-allow-origins\u003d*], extensions: []}, platform: WINDOWS}}]\nCapabilities {}\r\n\tat org.openqa.selenium.remote.ProtocolHandshake.createSession(ProtocolHandshake.java:126)\r\n\tat org.openqa.selenium.remote.ProtocolHandshake.createSession(ProtocolHandshake.java:84)\r\n\tat org.openqa.selenium.remote.ProtocolHandshake.createSession(ProtocolHandshake.java:62)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:156)\r\n\tat org.openqa.selenium.remote.TracedCommandExecutor.execute(TracedCommandExecutor.java:51)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:567)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.startSession(RemoteWebDriver.java:248)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.\u003cinit\u003e(RemoteWebDriver.java:164)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.\u003cinit\u003e(RemoteWebDriver.java:146)\r\n\tat StepDefinitions.Hooks.startTest(Hooks.java:50)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "I navigate to url",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDefinitions.NavigationSteps.i_navigate_to_url()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "I scroll to footer",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitions.FooterPageSteps.i_scroll_to_footer()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "name": "As a user, i want to validate if i can navigate to the Terms page",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@SmokeScenario"
    },
    {
      "name": "@footer"
    },
    {
      "name": "@regression"
    },
    {
      "name": "@SmokeTest"
    }
  ]
});
formatter.step({
  "name": "I click the Terms page",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitions.FooterPageSteps.i_click_the_Terms_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "I am in the terms of use page",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitions.SignInPageSteps.i_am_in_the_terms_of_use_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "error_message": "java.lang.NullPointerException\r\n\tat StepDefinitions.Hooks.tearDown(Hooks.java:66)\r\n",
  "status": "failed"
});
formatter.scenarioOutline({
  "name": "As a user, i want to validate if secure payments exists",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@SmokeTest"
    }
  ]
});
formatter.step({
  "name": "I can see the \"\u003cSecure\u003e\" payment",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "Secure"
      ]
    },
    {
      "cells": [
        "ApplePay"
      ]
    },
    {
      "cells": [
        "AmericanExpress"
      ]
    },
    {
      "cells": [
        "Visa"
      ]
    },
    {
      "cells": [
        "MasterCard"
      ]
    },
    {
      "cells": [
        "Discover"
      ]
    },
    {
      "cells": [
        "Affirm"
      ]
    }
  ]
});
formatter.background({
  "name": "Launch website",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "error_message": "org.openqa.selenium.SessionNotCreatedException: Could not start a new session. Response code 500. Message: session not created: This version of ChromeDriver only supports Chrome version 118\nCurrent browser version is 120.0.6099.72 with binary path C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe\nBuild info: version: \u00274.0.0-alpha-2\u0027, revision: \u0027f148142cf8\u0027, time: \u00272019-07-01T21:30:10\u0027\nSystem info: host: \u0027DESKTOP-HJ4MA0G\u0027, ip: \u0027172.21.112.1\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002711.0.16.1\u0027\nDriver info: driver.version: unknown\nremote stacktrace: \tGetHandleVerifier [0x00007FF6550E8EF2+54786]\n\t(No symbol) [0x00007FF655055612]\n\t(No symbol) [0x00007FF654F0A64B]\n\t(No symbol) [0x00007FF654F3DC22]\n\t(No symbol) [0x00007FF654F3D07C]\n\t(No symbol) [0x00007FF654F37E03]\n\t(No symbol) [0x00007FF654F353BE]\n\t(No symbol) [0x00007FF654F73FBB]\n\t(No symbol) [0x00007FF654F73A30]\n\t(No symbol) [0x00007FF654F6BC43]\n\t(No symbol) [0x00007FF654F40941]\n\t(No symbol) [0x00007FF654F41B84]\n\tGetHandleVerifier [0x00007FF655437F52+3524194]\n\tGetHandleVerifier [0x00007FF65548D800+3874576]\n\tGetHandleVerifier [0x00007FF655485D7F+3843215]\n\tGetHandleVerifier [0x00007FF655185086+694166]\n\t(No symbol) [0x00007FF655060A88]\n\t(No symbol) [0x00007FF65505CA94]\n\t(No symbol) [0x00007FF65505CBC2]\n\t(No symbol) [0x00007FF65504CC83]\n\tBaseThreadInitThunk [0x00007FFDF8BE7344+20]\n\tRtlUserThreadStart [0x00007FFDF94626B1+33]\n\nBuild info: version: \u00274.1.3\u0027, revision: \u00277b1ebf28ef\u0027\nSystem info: host: \u0027DESKTOP-HJ4MA0G\u0027, ip: \u0027172.21.112.1\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002711.0.16.1\u0027\nDriver info: org.openqa.selenium.remote.RemoteWebDriver\nCommand: [null, newSession {capabilities\u003d[Capabilities {acceptInsecureCerts: true, browserName: chrome, goog:chromeOptions: {args: [--disable-gpu, disable-infobars, --disable-dev-shm-usage, --no-sandbox, --disable-extensions, start-maximized, --remote-allow-origins\u003d*], extensions: []}, platformName: windows}], desiredCapabilities\u003dCapabilities {acceptInsecureCerts: true, browserName: chrome, goog:chromeOptions: {args: [--disable-gpu, disable-infobars, --disable-dev-shm-usage, --no-sandbox, --disable-extensions, start-maximized, --remote-allow-origins\u003d*], extensions: []}, platform: WINDOWS}}]\nCapabilities {}\r\n\tat org.openqa.selenium.remote.ProtocolHandshake.createSession(ProtocolHandshake.java:126)\r\n\tat org.openqa.selenium.remote.ProtocolHandshake.createSession(ProtocolHandshake.java:84)\r\n\tat org.openqa.selenium.remote.ProtocolHandshake.createSession(ProtocolHandshake.java:62)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:156)\r\n\tat org.openqa.selenium.remote.TracedCommandExecutor.execute(TracedCommandExecutor.java:51)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:567)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.startSession(RemoteWebDriver.java:248)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.\u003cinit\u003e(RemoteWebDriver.java:164)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.\u003cinit\u003e(RemoteWebDriver.java:146)\r\n\tat StepDefinitions.Hooks.startTest(Hooks.java:50)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "I navigate to url",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDefinitions.NavigationSteps.i_navigate_to_url()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "I scroll to footer",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitions.FooterPageSteps.i_scroll_to_footer()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "name": "As a user, i want to validate if secure payments exists",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@SmokeScenario"
    },
    {
      "name": "@footer"
    },
    {
      "name": "@regression"
    },
    {
      "name": "@SmokeTest"
    }
  ]
});
formatter.step({
  "name": "I can see the \"ApplePay\" payment",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitions.FooterPageSteps.secure_payments(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "error_message": "java.lang.NullPointerException\r\n\tat StepDefinitions.Hooks.tearDown(Hooks.java:66)\r\n",
  "status": "failed"
});
formatter.background({
  "name": "Launch website",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "error_message": "org.openqa.selenium.SessionNotCreatedException: Could not start a new session. Response code 500. Message: session not created: This version of ChromeDriver only supports Chrome version 118\nCurrent browser version is 120.0.6099.72 with binary path C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe\nBuild info: version: \u00274.0.0-alpha-2\u0027, revision: \u0027f148142cf8\u0027, time: \u00272019-07-01T21:30:10\u0027\nSystem info: host: \u0027DESKTOP-HJ4MA0G\u0027, ip: \u0027172.21.112.1\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002711.0.16.1\u0027\nDriver info: driver.version: unknown\nremote stacktrace: \tGetHandleVerifier [0x00007FF6550E8EF2+54786]\n\t(No symbol) [0x00007FF655055612]\n\t(No symbol) [0x00007FF654F0A64B]\n\t(No symbol) [0x00007FF654F3DC22]\n\t(No symbol) [0x00007FF654F3D07C]\n\t(No symbol) [0x00007FF654F37E03]\n\t(No symbol) [0x00007FF654F353BE]\n\t(No symbol) [0x00007FF654F73FBB]\n\t(No symbol) [0x00007FF654F73A30]\n\t(No symbol) [0x00007FF654F6BC43]\n\t(No symbol) [0x00007FF654F40941]\n\t(No symbol) [0x00007FF654F41B84]\n\tGetHandleVerifier [0x00007FF655437F52+3524194]\n\tGetHandleVerifier [0x00007FF65548D800+3874576]\n\tGetHandleVerifier [0x00007FF655485D7F+3843215]\n\tGetHandleVerifier [0x00007FF655185086+694166]\n\t(No symbol) [0x00007FF655060A88]\n\t(No symbol) [0x00007FF65505CA94]\n\t(No symbol) [0x00007FF65505CBC2]\n\t(No symbol) [0x00007FF65504CC83]\n\tBaseThreadInitThunk [0x00007FFDF8BE7344+20]\n\tRtlUserThreadStart [0x00007FFDF94626B1+33]\n\nBuild info: version: \u00274.1.3\u0027, revision: \u00277b1ebf28ef\u0027\nSystem info: host: \u0027DESKTOP-HJ4MA0G\u0027, ip: \u0027172.21.112.1\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002711.0.16.1\u0027\nDriver info: org.openqa.selenium.remote.RemoteWebDriver\nCommand: [null, newSession {capabilities\u003d[Capabilities {acceptInsecureCerts: true, browserName: chrome, goog:chromeOptions: {args: [--disable-gpu, disable-infobars, --disable-dev-shm-usage, --no-sandbox, --disable-extensions, start-maximized, --remote-allow-origins\u003d*], extensions: []}, platformName: windows}], desiredCapabilities\u003dCapabilities {acceptInsecureCerts: true, browserName: chrome, goog:chromeOptions: {args: [--disable-gpu, disable-infobars, --disable-dev-shm-usage, --no-sandbox, --disable-extensions, start-maximized, --remote-allow-origins\u003d*], extensions: []}, platform: WINDOWS}}]\nCapabilities {}\r\n\tat org.openqa.selenium.remote.ProtocolHandshake.createSession(ProtocolHandshake.java:126)\r\n\tat org.openqa.selenium.remote.ProtocolHandshake.createSession(ProtocolHandshake.java:84)\r\n\tat org.openqa.selenium.remote.ProtocolHandshake.createSession(ProtocolHandshake.java:62)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:156)\r\n\tat org.openqa.selenium.remote.TracedCommandExecutor.execute(TracedCommandExecutor.java:51)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:567)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.startSession(RemoteWebDriver.java:248)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.\u003cinit\u003e(RemoteWebDriver.java:164)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.\u003cinit\u003e(RemoteWebDriver.java:146)\r\n\tat StepDefinitions.Hooks.startTest(Hooks.java:50)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "I navigate to url",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDefinitions.NavigationSteps.i_navigate_to_url()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "I scroll to footer",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitions.FooterPageSteps.i_scroll_to_footer()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "name": "As a user, i want to validate if secure payments exists",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@SmokeScenario"
    },
    {
      "name": "@footer"
    },
    {
      "name": "@regression"
    },
    {
      "name": "@SmokeTest"
    }
  ]
});
formatter.step({
  "name": "I can see the \"AmericanExpress\" payment",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitions.FooterPageSteps.secure_payments(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "error_message": "java.lang.NullPointerException\r\n\tat StepDefinitions.Hooks.tearDown(Hooks.java:66)\r\n",
  "status": "failed"
});
formatter.background({
  "name": "Launch website",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "error_message": "org.openqa.selenium.SessionNotCreatedException: Could not start a new session. Response code 500. Message: session not created: This version of ChromeDriver only supports Chrome version 118\nCurrent browser version is 120.0.6099.72 with binary path C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe\nBuild info: version: \u00274.0.0-alpha-2\u0027, revision: \u0027f148142cf8\u0027, time: \u00272019-07-01T21:30:10\u0027\nSystem info: host: \u0027DESKTOP-HJ4MA0G\u0027, ip: \u0027172.21.112.1\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002711.0.16.1\u0027\nDriver info: driver.version: unknown\nremote stacktrace: \tGetHandleVerifier [0x00007FF6550E8EF2+54786]\n\t(No symbol) [0x00007FF655055612]\n\t(No symbol) [0x00007FF654F0A64B]\n\t(No symbol) [0x00007FF654F3DC22]\n\t(No symbol) [0x00007FF654F3D07C]\n\t(No symbol) [0x00007FF654F37E03]\n\t(No symbol) [0x00007FF654F353BE]\n\t(No symbol) [0x00007FF654F73FBB]\n\t(No symbol) [0x00007FF654F73A30]\n\t(No symbol) [0x00007FF654F6BC43]\n\t(No symbol) [0x00007FF654F40941]\n\t(No symbol) [0x00007FF654F41B84]\n\tGetHandleVerifier [0x00007FF655437F52+3524194]\n\tGetHandleVerifier [0x00007FF65548D800+3874576]\n\tGetHandleVerifier [0x00007FF655485D7F+3843215]\n\tGetHandleVerifier [0x00007FF655185086+694166]\n\t(No symbol) [0x00007FF655060A88]\n\t(No symbol) [0x00007FF65505CA94]\n\t(No symbol) [0x00007FF65505CBC2]\n\t(No symbol) [0x00007FF65504CC83]\n\tBaseThreadInitThunk [0x00007FFDF8BE7344+20]\n\tRtlUserThreadStart [0x00007FFDF94626B1+33]\n\nBuild info: version: \u00274.1.3\u0027, revision: \u00277b1ebf28ef\u0027\nSystem info: host: \u0027DESKTOP-HJ4MA0G\u0027, ip: \u0027172.21.112.1\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002711.0.16.1\u0027\nDriver info: org.openqa.selenium.remote.RemoteWebDriver\nCommand: [null, newSession {capabilities\u003d[Capabilities {acceptInsecureCerts: true, browserName: chrome, goog:chromeOptions: {args: [--disable-gpu, disable-infobars, --disable-dev-shm-usage, --no-sandbox, --disable-extensions, start-maximized, --remote-allow-origins\u003d*], extensions: []}, platformName: windows}], desiredCapabilities\u003dCapabilities {acceptInsecureCerts: true, browserName: chrome, goog:chromeOptions: {args: [--disable-gpu, disable-infobars, --disable-dev-shm-usage, --no-sandbox, --disable-extensions, start-maximized, --remote-allow-origins\u003d*], extensions: []}, platform: WINDOWS}}]\nCapabilities {}\r\n\tat org.openqa.selenium.remote.ProtocolHandshake.createSession(ProtocolHandshake.java:126)\r\n\tat org.openqa.selenium.remote.ProtocolHandshake.createSession(ProtocolHandshake.java:84)\r\n\tat org.openqa.selenium.remote.ProtocolHandshake.createSession(ProtocolHandshake.java:62)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:156)\r\n\tat org.openqa.selenium.remote.TracedCommandExecutor.execute(TracedCommandExecutor.java:51)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:567)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.startSession(RemoteWebDriver.java:248)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.\u003cinit\u003e(RemoteWebDriver.java:164)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.\u003cinit\u003e(RemoteWebDriver.java:146)\r\n\tat StepDefinitions.Hooks.startTest(Hooks.java:50)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "I navigate to url",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDefinitions.NavigationSteps.i_navigate_to_url()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "I scroll to footer",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitions.FooterPageSteps.i_scroll_to_footer()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "name": "As a user, i want to validate if secure payments exists",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@SmokeScenario"
    },
    {
      "name": "@footer"
    },
    {
      "name": "@regression"
    },
    {
      "name": "@SmokeTest"
    }
  ]
});
formatter.step({
  "name": "I can see the \"Visa\" payment",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitions.FooterPageSteps.secure_payments(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "error_message": "java.lang.NullPointerException\r\n\tat StepDefinitions.Hooks.tearDown(Hooks.java:66)\r\n",
  "status": "failed"
});
formatter.background({
  "name": "Launch website",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "error_message": "org.openqa.selenium.SessionNotCreatedException: Could not start a new session. Response code 500. Message: session not created: This version of ChromeDriver only supports Chrome version 118\nCurrent browser version is 120.0.6099.72 with binary path C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe\nBuild info: version: \u00274.0.0-alpha-2\u0027, revision: \u0027f148142cf8\u0027, time: \u00272019-07-01T21:30:10\u0027\nSystem info: host: \u0027DESKTOP-HJ4MA0G\u0027, ip: \u0027172.21.112.1\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002711.0.16.1\u0027\nDriver info: driver.version: unknown\nremote stacktrace: \tGetHandleVerifier [0x00007FF6550E8EF2+54786]\n\t(No symbol) [0x00007FF655055612]\n\t(No symbol) [0x00007FF654F0A64B]\n\t(No symbol) [0x00007FF654F3DC22]\n\t(No symbol) [0x00007FF654F3D07C]\n\t(No symbol) [0x00007FF654F37E03]\n\t(No symbol) [0x00007FF654F353BE]\n\t(No symbol) [0x00007FF654F73FBB]\n\t(No symbol) [0x00007FF654F73A30]\n\t(No symbol) [0x00007FF654F6BC43]\n\t(No symbol) [0x00007FF654F40941]\n\t(No symbol) [0x00007FF654F41B84]\n\tGetHandleVerifier [0x00007FF655437F52+3524194]\n\tGetHandleVerifier [0x00007FF65548D800+3874576]\n\tGetHandleVerifier [0x00007FF655485D7F+3843215]\n\tGetHandleVerifier [0x00007FF655185086+694166]\n\t(No symbol) [0x00007FF655060A88]\n\t(No symbol) [0x00007FF65505CA94]\n\t(No symbol) [0x00007FF65505CBC2]\n\t(No symbol) [0x00007FF65504CC83]\n\tBaseThreadInitThunk [0x00007FFDF8BE7344+20]\n\tRtlUserThreadStart [0x00007FFDF94626B1+33]\n\nBuild info: version: \u00274.1.3\u0027, revision: \u00277b1ebf28ef\u0027\nSystem info: host: \u0027DESKTOP-HJ4MA0G\u0027, ip: \u0027172.21.112.1\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002711.0.16.1\u0027\nDriver info: org.openqa.selenium.remote.RemoteWebDriver\nCommand: [null, newSession {capabilities\u003d[Capabilities {acceptInsecureCerts: true, browserName: chrome, goog:chromeOptions: {args: [--disable-gpu, disable-infobars, --disable-dev-shm-usage, --no-sandbox, --disable-extensions, start-maximized, --remote-allow-origins\u003d*], extensions: []}, platformName: windows}], desiredCapabilities\u003dCapabilities {acceptInsecureCerts: true, browserName: chrome, goog:chromeOptions: {args: [--disable-gpu, disable-infobars, --disable-dev-shm-usage, --no-sandbox, --disable-extensions, start-maximized, --remote-allow-origins\u003d*], extensions: []}, platform: WINDOWS}}]\nCapabilities {}\r\n\tat org.openqa.selenium.remote.ProtocolHandshake.createSession(ProtocolHandshake.java:126)\r\n\tat org.openqa.selenium.remote.ProtocolHandshake.createSession(ProtocolHandshake.java:84)\r\n\tat org.openqa.selenium.remote.ProtocolHandshake.createSession(ProtocolHandshake.java:62)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:156)\r\n\tat org.openqa.selenium.remote.TracedCommandExecutor.execute(TracedCommandExecutor.java:51)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:567)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.startSession(RemoteWebDriver.java:248)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.\u003cinit\u003e(RemoteWebDriver.java:164)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.\u003cinit\u003e(RemoteWebDriver.java:146)\r\n\tat StepDefinitions.Hooks.startTest(Hooks.java:50)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "I navigate to url",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDefinitions.NavigationSteps.i_navigate_to_url()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "I scroll to footer",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitions.FooterPageSteps.i_scroll_to_footer()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "name": "As a user, i want to validate if secure payments exists",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@SmokeScenario"
    },
    {
      "name": "@footer"
    },
    {
      "name": "@regression"
    },
    {
      "name": "@SmokeTest"
    }
  ]
});
formatter.step({
  "name": "I can see the \"MasterCard\" payment",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitions.FooterPageSteps.secure_payments(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "error_message": "java.lang.NullPointerException\r\n\tat StepDefinitions.Hooks.tearDown(Hooks.java:66)\r\n",
  "status": "failed"
});
formatter.background({
  "name": "Launch website",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "error_message": "org.openqa.selenium.SessionNotCreatedException: Could not start a new session. Response code 500. Message: session not created: This version of ChromeDriver only supports Chrome version 118\nCurrent browser version is 120.0.6099.72 with binary path C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe\nBuild info: version: \u00274.0.0-alpha-2\u0027, revision: \u0027f148142cf8\u0027, time: \u00272019-07-01T21:30:10\u0027\nSystem info: host: \u0027DESKTOP-HJ4MA0G\u0027, ip: \u0027172.21.112.1\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002711.0.16.1\u0027\nDriver info: driver.version: unknown\nremote stacktrace: \tGetHandleVerifier [0x00007FF6550E8EF2+54786]\n\t(No symbol) [0x00007FF655055612]\n\t(No symbol) [0x00007FF654F0A64B]\n\t(No symbol) [0x00007FF654F3DC22]\n\t(No symbol) [0x00007FF654F3D07C]\n\t(No symbol) [0x00007FF654F37E03]\n\t(No symbol) [0x00007FF654F353BE]\n\t(No symbol) [0x00007FF654F73FBB]\n\t(No symbol) [0x00007FF654F73A30]\n\t(No symbol) [0x00007FF654F6BC43]\n\t(No symbol) [0x00007FF654F40941]\n\t(No symbol) [0x00007FF654F41B84]\n\tGetHandleVerifier [0x00007FF655437F52+3524194]\n\tGetHandleVerifier [0x00007FF65548D800+3874576]\n\tGetHandleVerifier [0x00007FF655485D7F+3843215]\n\tGetHandleVerifier [0x00007FF655185086+694166]\n\t(No symbol) [0x00007FF655060A88]\n\t(No symbol) [0x00007FF65505CA94]\n\t(No symbol) [0x00007FF65505CBC2]\n\t(No symbol) [0x00007FF65504CC83]\n\tBaseThreadInitThunk [0x00007FFDF8BE7344+20]\n\tRtlUserThreadStart [0x00007FFDF94626B1+33]\n\nBuild info: version: \u00274.1.3\u0027, revision: \u00277b1ebf28ef\u0027\nSystem info: host: \u0027DESKTOP-HJ4MA0G\u0027, ip: \u0027172.21.112.1\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002711.0.16.1\u0027\nDriver info: org.openqa.selenium.remote.RemoteWebDriver\nCommand: [null, newSession {capabilities\u003d[Capabilities {acceptInsecureCerts: true, browserName: chrome, goog:chromeOptions: {args: [--disable-gpu, disable-infobars, --disable-dev-shm-usage, --no-sandbox, --disable-extensions, start-maximized, --remote-allow-origins\u003d*], extensions: []}, platformName: windows}], desiredCapabilities\u003dCapabilities {acceptInsecureCerts: true, browserName: chrome, goog:chromeOptions: {args: [--disable-gpu, disable-infobars, --disable-dev-shm-usage, --no-sandbox, --disable-extensions, start-maximized, --remote-allow-origins\u003d*], extensions: []}, platform: WINDOWS}}]\nCapabilities {}\r\n\tat org.openqa.selenium.remote.ProtocolHandshake.createSession(ProtocolHandshake.java:126)\r\n\tat org.openqa.selenium.remote.ProtocolHandshake.createSession(ProtocolHandshake.java:84)\r\n\tat org.openqa.selenium.remote.ProtocolHandshake.createSession(ProtocolHandshake.java:62)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:156)\r\n\tat org.openqa.selenium.remote.TracedCommandExecutor.execute(TracedCommandExecutor.java:51)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:567)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.startSession(RemoteWebDriver.java:248)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.\u003cinit\u003e(RemoteWebDriver.java:164)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.\u003cinit\u003e(RemoteWebDriver.java:146)\r\n\tat StepDefinitions.Hooks.startTest(Hooks.java:50)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "I navigate to url",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDefinitions.NavigationSteps.i_navigate_to_url()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "I scroll to footer",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitions.FooterPageSteps.i_scroll_to_footer()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "name": "As a user, i want to validate if secure payments exists",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@SmokeScenario"
    },
    {
      "name": "@footer"
    },
    {
      "name": "@regression"
    },
    {
      "name": "@SmokeTest"
    }
  ]
});
formatter.step({
  "name": "I can see the \"Discover\" payment",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitions.FooterPageSteps.secure_payments(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "error_message": "java.lang.NullPointerException\r\n\tat StepDefinitions.Hooks.tearDown(Hooks.java:66)\r\n",
  "status": "failed"
});
formatter.background({
  "name": "Launch website",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "error_message": "org.openqa.selenium.SessionNotCreatedException: Could not start a new session. Response code 500. Message: session not created: This version of ChromeDriver only supports Chrome version 118\nCurrent browser version is 120.0.6099.72 with binary path C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe\nBuild info: version: \u00274.0.0-alpha-2\u0027, revision: \u0027f148142cf8\u0027, time: \u00272019-07-01T21:30:10\u0027\nSystem info: host: \u0027DESKTOP-HJ4MA0G\u0027, ip: \u0027172.21.112.1\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002711.0.16.1\u0027\nDriver info: driver.version: unknown\nremote stacktrace: \tGetHandleVerifier [0x00007FF6550E8EF2+54786]\n\t(No symbol) [0x00007FF655055612]\n\t(No symbol) [0x00007FF654F0A64B]\n\t(No symbol) [0x00007FF654F3DC22]\n\t(No symbol) [0x00007FF654F3D07C]\n\t(No symbol) [0x00007FF654F37E03]\n\t(No symbol) [0x00007FF654F353BE]\n\t(No symbol) [0x00007FF654F73FBB]\n\t(No symbol) [0x00007FF654F73A30]\n\t(No symbol) [0x00007FF654F6BC43]\n\t(No symbol) [0x00007FF654F40941]\n\t(No symbol) [0x00007FF654F41B84]\n\tGetHandleVerifier [0x00007FF655437F52+3524194]\n\tGetHandleVerifier [0x00007FF65548D800+3874576]\n\tGetHandleVerifier [0x00007FF655485D7F+3843215]\n\tGetHandleVerifier [0x00007FF655185086+694166]\n\t(No symbol) [0x00007FF655060A88]\n\t(No symbol) [0x00007FF65505CA94]\n\t(No symbol) [0x00007FF65505CBC2]\n\t(No symbol) [0x00007FF65504CC83]\n\tBaseThreadInitThunk [0x00007FFDF8BE7344+20]\n\tRtlUserThreadStart [0x00007FFDF94626B1+33]\n\nBuild info: version: \u00274.1.3\u0027, revision: \u00277b1ebf28ef\u0027\nSystem info: host: \u0027DESKTOP-HJ4MA0G\u0027, ip: \u0027172.21.112.1\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002711.0.16.1\u0027\nDriver info: org.openqa.selenium.remote.RemoteWebDriver\nCommand: [null, newSession {capabilities\u003d[Capabilities {acceptInsecureCerts: true, browserName: chrome, goog:chromeOptions: {args: [--disable-gpu, disable-infobars, --disable-dev-shm-usage, --no-sandbox, --disable-extensions, start-maximized, --remote-allow-origins\u003d*], extensions: []}, platformName: windows}], desiredCapabilities\u003dCapabilities {acceptInsecureCerts: true, browserName: chrome, goog:chromeOptions: {args: [--disable-gpu, disable-infobars, --disable-dev-shm-usage, --no-sandbox, --disable-extensions, start-maximized, --remote-allow-origins\u003d*], extensions: []}, platform: WINDOWS}}]\nCapabilities {}\r\n\tat org.openqa.selenium.remote.ProtocolHandshake.createSession(ProtocolHandshake.java:126)\r\n\tat org.openqa.selenium.remote.ProtocolHandshake.createSession(ProtocolHandshake.java:84)\r\n\tat org.openqa.selenium.remote.ProtocolHandshake.createSession(ProtocolHandshake.java:62)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:156)\r\n\tat org.openqa.selenium.remote.TracedCommandExecutor.execute(TracedCommandExecutor.java:51)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:567)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.startSession(RemoteWebDriver.java:248)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.\u003cinit\u003e(RemoteWebDriver.java:164)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.\u003cinit\u003e(RemoteWebDriver.java:146)\r\n\tat StepDefinitions.Hooks.startTest(Hooks.java:50)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "I navigate to url",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDefinitions.NavigationSteps.i_navigate_to_url()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "I scroll to footer",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitions.FooterPageSteps.i_scroll_to_footer()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "name": "As a user, i want to validate if secure payments exists",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@SmokeScenario"
    },
    {
      "name": "@footer"
    },
    {
      "name": "@regression"
    },
    {
      "name": "@SmokeTest"
    }
  ]
});
formatter.step({
  "name": "I can see the \"Affirm\" payment",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitions.FooterPageSteps.secure_payments(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "error_message": "java.lang.NullPointerException\r\n\tat StepDefinitions.Hooks.tearDown(Hooks.java:66)\r\n",
  "status": "failed"
});
formatter.scenarioOutline({
  "name": "As a user, i want to validate all social media links navigate to appropriate pages",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@SmokeTest"
    }
  ]
});
formatter.step({
  "name": "I click on the \"\u003cFollowUs\u003e\" page",
  "keyword": "And "
});
formatter.step({
  "name": "I validate the \"\u003cFollowUs\u003e\" Links work",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "FollowUs"
      ]
    },
    {
      "cells": [
        "facebook"
      ]
    },
    {
      "cells": [
        "twitter"
      ]
    },
    {
      "cells": [
        "instagam"
      ]
    }
  ]
});
formatter.background({
  "name": "Launch website",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "error_message": "org.openqa.selenium.SessionNotCreatedException: Could not start a new session. Response code 500. Message: session not created: This version of ChromeDriver only supports Chrome version 118\nCurrent browser version is 120.0.6099.72 with binary path C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe\nBuild info: version: \u00274.0.0-alpha-2\u0027, revision: \u0027f148142cf8\u0027, time: \u00272019-07-01T21:30:10\u0027\nSystem info: host: \u0027DESKTOP-HJ4MA0G\u0027, ip: \u0027172.21.112.1\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002711.0.16.1\u0027\nDriver info: driver.version: unknown\nremote stacktrace: \tGetHandleVerifier [0x00007FF6550E8EF2+54786]\n\t(No symbol) [0x00007FF655055612]\n\t(No symbol) [0x00007FF654F0A64B]\n\t(No symbol) [0x00007FF654F3DC22]\n\t(No symbol) [0x00007FF654F3D07C]\n\t(No symbol) [0x00007FF654F37E03]\n\t(No symbol) [0x00007FF654F353BE]\n\t(No symbol) [0x00007FF654F73FBB]\n\t(No symbol) [0x00007FF654F73A30]\n\t(No symbol) [0x00007FF654F6BC43]\n\t(No symbol) [0x00007FF654F40941]\n\t(No symbol) [0x00007FF654F41B84]\n\tGetHandleVerifier [0x00007FF655437F52+3524194]\n\tGetHandleVerifier [0x00007FF65548D800+3874576]\n\tGetHandleVerifier [0x00007FF655485D7F+3843215]\n\tGetHandleVerifier [0x00007FF655185086+694166]\n\t(No symbol) [0x00007FF655060A88]\n\t(No symbol) [0x00007FF65505CA94]\n\t(No symbol) [0x00007FF65505CBC2]\n\t(No symbol) [0x00007FF65504CC83]\n\tBaseThreadInitThunk [0x00007FFDF8BE7344+20]\n\tRtlUserThreadStart [0x00007FFDF94626B1+33]\n\nBuild info: version: \u00274.1.3\u0027, revision: \u00277b1ebf28ef\u0027\nSystem info: host: \u0027DESKTOP-HJ4MA0G\u0027, ip: \u0027172.21.112.1\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002711.0.16.1\u0027\nDriver info: org.openqa.selenium.remote.RemoteWebDriver\nCommand: [null, newSession {capabilities\u003d[Capabilities {acceptInsecureCerts: true, browserName: chrome, goog:chromeOptions: {args: [--disable-gpu, disable-infobars, --disable-dev-shm-usage, --no-sandbox, --disable-extensions, start-maximized, --remote-allow-origins\u003d*], extensions: []}, platformName: windows}], desiredCapabilities\u003dCapabilities {acceptInsecureCerts: true, browserName: chrome, goog:chromeOptions: {args: [--disable-gpu, disable-infobars, --disable-dev-shm-usage, --no-sandbox, --disable-extensions, start-maximized, --remote-allow-origins\u003d*], extensions: []}, platform: WINDOWS}}]\nCapabilities {}\r\n\tat org.openqa.selenium.remote.ProtocolHandshake.createSession(ProtocolHandshake.java:126)\r\n\tat org.openqa.selenium.remote.ProtocolHandshake.createSession(ProtocolHandshake.java:84)\r\n\tat org.openqa.selenium.remote.ProtocolHandshake.createSession(ProtocolHandshake.java:62)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:156)\r\n\tat org.openqa.selenium.remote.TracedCommandExecutor.execute(TracedCommandExecutor.java:51)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:567)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.startSession(RemoteWebDriver.java:248)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.\u003cinit\u003e(RemoteWebDriver.java:164)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.\u003cinit\u003e(RemoteWebDriver.java:146)\r\n\tat StepDefinitions.Hooks.startTest(Hooks.java:50)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "I navigate to url",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDefinitions.NavigationSteps.i_navigate_to_url()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "I scroll to footer",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitions.FooterPageSteps.i_scroll_to_footer()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "name": "As a user, i want to validate all social media links navigate to appropriate pages",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@SmokeScenario"
    },
    {
      "name": "@footer"
    },
    {
      "name": "@regression"
    },
    {
      "name": "@SmokeTest"
    }
  ]
});
formatter.step({
  "name": "I click on the \"facebook\" page",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitions.FooterPageSteps.i_click_on_the_page(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "I validate the \"facebook\" Links work",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitions.FooterPageSteps.i_Then_i_validate_the_Links_works(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "error_message": "java.lang.NullPointerException\r\n\tat StepDefinitions.Hooks.tearDown(Hooks.java:66)\r\n",
  "status": "failed"
});
formatter.background({
  "name": "Launch website",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "error_message": "org.openqa.selenium.SessionNotCreatedException: Could not start a new session. Response code 500. Message: session not created: This version of ChromeDriver only supports Chrome version 118\nCurrent browser version is 120.0.6099.72 with binary path C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe\nBuild info: version: \u00274.0.0-alpha-2\u0027, revision: \u0027f148142cf8\u0027, time: \u00272019-07-01T21:30:10\u0027\nSystem info: host: \u0027DESKTOP-HJ4MA0G\u0027, ip: \u0027172.21.112.1\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002711.0.16.1\u0027\nDriver info: driver.version: unknown\nremote stacktrace: \tGetHandleVerifier [0x00007FF6550E8EF2+54786]\n\t(No symbol) [0x00007FF655055612]\n\t(No symbol) [0x00007FF654F0A64B]\n\t(No symbol) [0x00007FF654F3DC22]\n\t(No symbol) [0x00007FF654F3D07C]\n\t(No symbol) [0x00007FF654F37E03]\n\t(No symbol) [0x00007FF654F353BE]\n\t(No symbol) [0x00007FF654F73FBB]\n\t(No symbol) [0x00007FF654F73A30]\n\t(No symbol) [0x00007FF654F6BC43]\n\t(No symbol) [0x00007FF654F40941]\n\t(No symbol) [0x00007FF654F41B84]\n\tGetHandleVerifier [0x00007FF655437F52+3524194]\n\tGetHandleVerifier [0x00007FF65548D800+3874576]\n\tGetHandleVerifier [0x00007FF655485D7F+3843215]\n\tGetHandleVerifier [0x00007FF655185086+694166]\n\t(No symbol) [0x00007FF655060A88]\n\t(No symbol) [0x00007FF65505CA94]\n\t(No symbol) [0x00007FF65505CBC2]\n\t(No symbol) [0x00007FF65504CC83]\n\tBaseThreadInitThunk [0x00007FFDF8BE7344+20]\n\tRtlUserThreadStart [0x00007FFDF94626B1+33]\n\nBuild info: version: \u00274.1.3\u0027, revision: \u00277b1ebf28ef\u0027\nSystem info: host: \u0027DESKTOP-HJ4MA0G\u0027, ip: \u0027172.21.112.1\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002711.0.16.1\u0027\nDriver info: org.openqa.selenium.remote.RemoteWebDriver\nCommand: [null, newSession {capabilities\u003d[Capabilities {acceptInsecureCerts: true, browserName: chrome, goog:chromeOptions: {args: [--disable-gpu, disable-infobars, --disable-dev-shm-usage, --no-sandbox, --disable-extensions, start-maximized, --remote-allow-origins\u003d*], extensions: []}, platformName: windows}], desiredCapabilities\u003dCapabilities {acceptInsecureCerts: true, browserName: chrome, goog:chromeOptions: {args: [--disable-gpu, disable-infobars, --disable-dev-shm-usage, --no-sandbox, --disable-extensions, start-maximized, --remote-allow-origins\u003d*], extensions: []}, platform: WINDOWS}}]\nCapabilities {}\r\n\tat org.openqa.selenium.remote.ProtocolHandshake.createSession(ProtocolHandshake.java:126)\r\n\tat org.openqa.selenium.remote.ProtocolHandshake.createSession(ProtocolHandshake.java:84)\r\n\tat org.openqa.selenium.remote.ProtocolHandshake.createSession(ProtocolHandshake.java:62)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:156)\r\n\tat org.openqa.selenium.remote.TracedCommandExecutor.execute(TracedCommandExecutor.java:51)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:567)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.startSession(RemoteWebDriver.java:248)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.\u003cinit\u003e(RemoteWebDriver.java:164)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.\u003cinit\u003e(RemoteWebDriver.java:146)\r\n\tat StepDefinitions.Hooks.startTest(Hooks.java:50)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "I navigate to url",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDefinitions.NavigationSteps.i_navigate_to_url()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "I scroll to footer",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitions.FooterPageSteps.i_scroll_to_footer()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "name": "As a user, i want to validate all social media links navigate to appropriate pages",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@SmokeScenario"
    },
    {
      "name": "@footer"
    },
    {
      "name": "@regression"
    },
    {
      "name": "@SmokeTest"
    }
  ]
});
formatter.step({
  "name": "I click on the \"twitter\" page",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitions.FooterPageSteps.i_click_on_the_page(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "I validate the \"twitter\" Links work",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitions.FooterPageSteps.i_Then_i_validate_the_Links_works(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "error_message": "java.lang.NullPointerException\r\n\tat StepDefinitions.Hooks.tearDown(Hooks.java:66)\r\n",
  "status": "failed"
});
formatter.background({
  "name": "Launch website",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "error_message": "org.openqa.selenium.SessionNotCreatedException: Could not start a new session. Response code 500. Message: session not created: This version of ChromeDriver only supports Chrome version 118\nCurrent browser version is 120.0.6099.72 with binary path C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe\nBuild info: version: \u00274.0.0-alpha-2\u0027, revision: \u0027f148142cf8\u0027, time: \u00272019-07-01T21:30:10\u0027\nSystem info: host: \u0027DESKTOP-HJ4MA0G\u0027, ip: \u0027172.21.112.1\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002711.0.16.1\u0027\nDriver info: driver.version: unknown\nremote stacktrace: \tGetHandleVerifier [0x00007FF6550E8EF2+54786]\n\t(No symbol) [0x00007FF655055612]\n\t(No symbol) [0x00007FF654F0A64B]\n\t(No symbol) [0x00007FF654F3DC22]\n\t(No symbol) [0x00007FF654F3D07C]\n\t(No symbol) [0x00007FF654F37E03]\n\t(No symbol) [0x00007FF654F353BE]\n\t(No symbol) [0x00007FF654F73FBB]\n\t(No symbol) [0x00007FF654F73A30]\n\t(No symbol) [0x00007FF654F6BC43]\n\t(No symbol) [0x00007FF654F40941]\n\t(No symbol) [0x00007FF654F41B84]\n\tGetHandleVerifier [0x00007FF655437F52+3524194]\n\tGetHandleVerifier [0x00007FF65548D800+3874576]\n\tGetHandleVerifier [0x00007FF655485D7F+3843215]\n\tGetHandleVerifier [0x00007FF655185086+694166]\n\t(No symbol) [0x00007FF655060A88]\n\t(No symbol) [0x00007FF65505CA94]\n\t(No symbol) [0x00007FF65505CBC2]\n\t(No symbol) [0x00007FF65504CC83]\n\tBaseThreadInitThunk [0x00007FFDF8BE7344+20]\n\tRtlUserThreadStart [0x00007FFDF94626B1+33]\n\nBuild info: version: \u00274.1.3\u0027, revision: \u00277b1ebf28ef\u0027\nSystem info: host: \u0027DESKTOP-HJ4MA0G\u0027, ip: \u0027172.21.112.1\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002711.0.16.1\u0027\nDriver info: org.openqa.selenium.remote.RemoteWebDriver\nCommand: [null, newSession {capabilities\u003d[Capabilities {acceptInsecureCerts: true, browserName: chrome, goog:chromeOptions: {args: [--disable-gpu, disable-infobars, --disable-dev-shm-usage, --no-sandbox, --disable-extensions, start-maximized, --remote-allow-origins\u003d*], extensions: []}, platformName: windows}], desiredCapabilities\u003dCapabilities {acceptInsecureCerts: true, browserName: chrome, goog:chromeOptions: {args: [--disable-gpu, disable-infobars, --disable-dev-shm-usage, --no-sandbox, --disable-extensions, start-maximized, --remote-allow-origins\u003d*], extensions: []}, platform: WINDOWS}}]\nCapabilities {}\r\n\tat org.openqa.selenium.remote.ProtocolHandshake.createSession(ProtocolHandshake.java:126)\r\n\tat org.openqa.selenium.remote.ProtocolHandshake.createSession(ProtocolHandshake.java:84)\r\n\tat org.openqa.selenium.remote.ProtocolHandshake.createSession(ProtocolHandshake.java:62)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:156)\r\n\tat org.openqa.selenium.remote.TracedCommandExecutor.execute(TracedCommandExecutor.java:51)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:567)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.startSession(RemoteWebDriver.java:248)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.\u003cinit\u003e(RemoteWebDriver.java:164)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.\u003cinit\u003e(RemoteWebDriver.java:146)\r\n\tat StepDefinitions.Hooks.startTest(Hooks.java:50)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "I navigate to url",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDefinitions.NavigationSteps.i_navigate_to_url()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "I scroll to footer",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitions.FooterPageSteps.i_scroll_to_footer()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "name": "As a user, i want to validate all social media links navigate to appropriate pages",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@SmokeScenario"
    },
    {
      "name": "@footer"
    },
    {
      "name": "@regression"
    },
    {
      "name": "@SmokeTest"
    }
  ]
});
formatter.step({
  "name": "I click on the \"instagam\" page",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitions.FooterPageSteps.i_click_on_the_page(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "I validate the \"instagam\" Links work",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitions.FooterPageSteps.i_Then_i_validate_the_Links_works(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "error_message": "java.lang.NullPointerException\r\n\tat StepDefinitions.Hooks.tearDown(Hooks.java:66)\r\n",
  "status": "failed"
});
formatter.scenarioOutline({
  "name": "As a user, i want to validate all shop links are working",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@SmokeTest"
    }
  ]
});
formatter.step({
  "name": "I click on the \"\u003cshop\u003e\" page",
  "keyword": "And "
});
formatter.step({
  "name": "I validate the \"\u003cshop\u003e\" Links work",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "shop"
      ]
    },
    {
      "cells": [
        "studio \u0026 Production"
      ]
    },
    {
      "cells": [
        "Pianos \u0026 Keyboards"
      ]
    },
    {
      "cells": [
        "Drums"
      ]
    },
    {
      "cells": [
        "DJ"
      ]
    },
    {
      "cells": [
        "Live Sound \u0026 PA"
      ]
    },
    {
      "cells": [
        "Guitars"
      ]
    }
  ]
});
formatter.background({
  "name": "Launch website",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "error_message": "org.openqa.selenium.SessionNotCreatedException: Could not start a new session. Response code 500. Message: session not created: This version of ChromeDriver only supports Chrome version 118\nCurrent browser version is 120.0.6099.72 with binary path C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe\nBuild info: version: \u00274.0.0-alpha-2\u0027, revision: \u0027f148142cf8\u0027, time: \u00272019-07-01T21:30:10\u0027\nSystem info: host: \u0027DESKTOP-HJ4MA0G\u0027, ip: \u0027172.21.112.1\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002711.0.16.1\u0027\nDriver info: driver.version: unknown\nremote stacktrace: \tGetHandleVerifier [0x00007FF6550E8EF2+54786]\n\t(No symbol) [0x00007FF655055612]\n\t(No symbol) [0x00007FF654F0A64B]\n\t(No symbol) [0x00007FF654F3DC22]\n\t(No symbol) [0x00007FF654F3D07C]\n\t(No symbol) [0x00007FF654F37E03]\n\t(No symbol) [0x00007FF654F353BE]\n\t(No symbol) [0x00007FF654F73FBB]\n\t(No symbol) [0x00007FF654F73A30]\n\t(No symbol) [0x00007FF654F6BC43]\n\t(No symbol) [0x00007FF654F40941]\n\t(No symbol) [0x00007FF654F41B84]\n\tGetHandleVerifier [0x00007FF655437F52+3524194]\n\tGetHandleVerifier [0x00007FF65548D800+3874576]\n\tGetHandleVerifier [0x00007FF655485D7F+3843215]\n\tGetHandleVerifier [0x00007FF655185086+694166]\n\t(No symbol) [0x00007FF655060A88]\n\t(No symbol) [0x00007FF65505CA94]\n\t(No symbol) [0x00007FF65505CBC2]\n\t(No symbol) [0x00007FF65504CC83]\n\tBaseThreadInitThunk [0x00007FFDF8BE7344+20]\n\tRtlUserThreadStart [0x00007FFDF94626B1+33]\n\nBuild info: version: \u00274.1.3\u0027, revision: \u00277b1ebf28ef\u0027\nSystem info: host: \u0027DESKTOP-HJ4MA0G\u0027, ip: \u0027172.21.112.1\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002711.0.16.1\u0027\nDriver info: org.openqa.selenium.remote.RemoteWebDriver\nCommand: [null, newSession {capabilities\u003d[Capabilities {acceptInsecureCerts: true, browserName: chrome, goog:chromeOptions: {args: [--disable-gpu, disable-infobars, --disable-dev-shm-usage, --no-sandbox, --disable-extensions, start-maximized, --remote-allow-origins\u003d*], extensions: []}, platformName: windows}], desiredCapabilities\u003dCapabilities {acceptInsecureCerts: true, browserName: chrome, goog:chromeOptions: {args: [--disable-gpu, disable-infobars, --disable-dev-shm-usage, --no-sandbox, --disable-extensions, start-maximized, --remote-allow-origins\u003d*], extensions: []}, platform: WINDOWS}}]\nCapabilities {}\r\n\tat org.openqa.selenium.remote.ProtocolHandshake.createSession(ProtocolHandshake.java:126)\r\n\tat org.openqa.selenium.remote.ProtocolHandshake.createSession(ProtocolHandshake.java:84)\r\n\tat org.openqa.selenium.remote.ProtocolHandshake.createSession(ProtocolHandshake.java:62)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:156)\r\n\tat org.openqa.selenium.remote.TracedCommandExecutor.execute(TracedCommandExecutor.java:51)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:567)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.startSession(RemoteWebDriver.java:248)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.\u003cinit\u003e(RemoteWebDriver.java:164)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.\u003cinit\u003e(RemoteWebDriver.java:146)\r\n\tat StepDefinitions.Hooks.startTest(Hooks.java:50)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "I navigate to url",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDefinitions.NavigationSteps.i_navigate_to_url()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "I scroll to footer",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitions.FooterPageSteps.i_scroll_to_footer()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "name": "As a user, i want to validate all shop links are working",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@SmokeScenario"
    },
    {
      "name": "@footer"
    },
    {
      "name": "@regression"
    },
    {
      "name": "@SmokeTest"
    }
  ]
});
formatter.step({
  "name": "I click on the \"studio \u0026 Production\" page",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitions.FooterPageSteps.i_click_on_the_page(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "I validate the \"studio \u0026 Production\" Links work",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitions.FooterPageSteps.i_Then_i_validate_the_Links_works(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "error_message": "java.lang.NullPointerException\r\n\tat StepDefinitions.Hooks.tearDown(Hooks.java:66)\r\n",
  "status": "failed"
});
formatter.background({
  "name": "Launch website",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "error_message": "org.openqa.selenium.SessionNotCreatedException: Could not start a new session. Response code 500. Message: session not created: This version of ChromeDriver only supports Chrome version 118\nCurrent browser version is 120.0.6099.72 with binary path C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe\nBuild info: version: \u00274.0.0-alpha-2\u0027, revision: \u0027f148142cf8\u0027, time: \u00272019-07-01T21:30:10\u0027\nSystem info: host: \u0027DESKTOP-HJ4MA0G\u0027, ip: \u0027172.21.112.1\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002711.0.16.1\u0027\nDriver info: driver.version: unknown\nremote stacktrace: \tGetHandleVerifier [0x00007FF6550E8EF2+54786]\n\t(No symbol) [0x00007FF655055612]\n\t(No symbol) [0x00007FF654F0A64B]\n\t(No symbol) [0x00007FF654F3DC22]\n\t(No symbol) [0x00007FF654F3D07C]\n\t(No symbol) [0x00007FF654F37E03]\n\t(No symbol) [0x00007FF654F353BE]\n\t(No symbol) [0x00007FF654F73FBB]\n\t(No symbol) [0x00007FF654F73A30]\n\t(No symbol) [0x00007FF654F6BC43]\n\t(No symbol) [0x00007FF654F40941]\n\t(No symbol) [0x00007FF654F41B84]\n\tGetHandleVerifier [0x00007FF655437F52+3524194]\n\tGetHandleVerifier [0x00007FF65548D800+3874576]\n\tGetHandleVerifier [0x00007FF655485D7F+3843215]\n\tGetHandleVerifier [0x00007FF655185086+694166]\n\t(No symbol) [0x00007FF655060A88]\n\t(No symbol) [0x00007FF65505CA94]\n\t(No symbol) [0x00007FF65505CBC2]\n\t(No symbol) [0x00007FF65504CC83]\n\tBaseThreadInitThunk [0x00007FFDF8BE7344+20]\n\tRtlUserThreadStart [0x00007FFDF94626B1+33]\n\nBuild info: version: \u00274.1.3\u0027, revision: \u00277b1ebf28ef\u0027\nSystem info: host: \u0027DESKTOP-HJ4MA0G\u0027, ip: \u0027172.21.112.1\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002711.0.16.1\u0027\nDriver info: org.openqa.selenium.remote.RemoteWebDriver\nCommand: [null, newSession {capabilities\u003d[Capabilities {acceptInsecureCerts: true, browserName: chrome, goog:chromeOptions: {args: [--disable-gpu, disable-infobars, --disable-dev-shm-usage, --no-sandbox, --disable-extensions, start-maximized, --remote-allow-origins\u003d*], extensions: []}, platformName: windows}], desiredCapabilities\u003dCapabilities {acceptInsecureCerts: true, browserName: chrome, goog:chromeOptions: {args: [--disable-gpu, disable-infobars, --disable-dev-shm-usage, --no-sandbox, --disable-extensions, start-maximized, --remote-allow-origins\u003d*], extensions: []}, platform: WINDOWS}}]\nCapabilities {}\r\n\tat org.openqa.selenium.remote.ProtocolHandshake.createSession(ProtocolHandshake.java:126)\r\n\tat org.openqa.selenium.remote.ProtocolHandshake.createSession(ProtocolHandshake.java:84)\r\n\tat org.openqa.selenium.remote.ProtocolHandshake.createSession(ProtocolHandshake.java:62)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:156)\r\n\tat org.openqa.selenium.remote.TracedCommandExecutor.execute(TracedCommandExecutor.java:51)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:567)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.startSession(RemoteWebDriver.java:248)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.\u003cinit\u003e(RemoteWebDriver.java:164)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.\u003cinit\u003e(RemoteWebDriver.java:146)\r\n\tat StepDefinitions.Hooks.startTest(Hooks.java:50)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "I navigate to url",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDefinitions.NavigationSteps.i_navigate_to_url()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "I scroll to footer",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitions.FooterPageSteps.i_scroll_to_footer()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "name": "As a user, i want to validate all shop links are working",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@SmokeScenario"
    },
    {
      "name": "@footer"
    },
    {
      "name": "@regression"
    },
    {
      "name": "@SmokeTest"
    }
  ]
});
formatter.step({
  "name": "I click on the \"Pianos \u0026 Keyboards\" page",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitions.FooterPageSteps.i_click_on_the_page(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "I validate the \"Pianos \u0026 Keyboards\" Links work",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitions.FooterPageSteps.i_Then_i_validate_the_Links_works(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "error_message": "java.lang.NullPointerException\r\n\tat StepDefinitions.Hooks.tearDown(Hooks.java:66)\r\n",
  "status": "failed"
});
formatter.background({
  "name": "Launch website",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "error_message": "org.openqa.selenium.SessionNotCreatedException: Could not start a new session. Response code 500. Message: session not created: This version of ChromeDriver only supports Chrome version 118\nCurrent browser version is 120.0.6099.72 with binary path C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe\nBuild info: version: \u00274.0.0-alpha-2\u0027, revision: \u0027f148142cf8\u0027, time: \u00272019-07-01T21:30:10\u0027\nSystem info: host: \u0027DESKTOP-HJ4MA0G\u0027, ip: \u0027172.21.112.1\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002711.0.16.1\u0027\nDriver info: driver.version: unknown\nremote stacktrace: \tGetHandleVerifier [0x00007FF6550E8EF2+54786]\n\t(No symbol) [0x00007FF655055612]\n\t(No symbol) [0x00007FF654F0A64B]\n\t(No symbol) [0x00007FF654F3DC22]\n\t(No symbol) [0x00007FF654F3D07C]\n\t(No symbol) [0x00007FF654F37E03]\n\t(No symbol) [0x00007FF654F353BE]\n\t(No symbol) [0x00007FF654F73FBB]\n\t(No symbol) [0x00007FF654F73A30]\n\t(No symbol) [0x00007FF654F6BC43]\n\t(No symbol) [0x00007FF654F40941]\n\t(No symbol) [0x00007FF654F41B84]\n\tGetHandleVerifier [0x00007FF655437F52+3524194]\n\tGetHandleVerifier [0x00007FF65548D800+3874576]\n\tGetHandleVerifier [0x00007FF655485D7F+3843215]\n\tGetHandleVerifier [0x00007FF655185086+694166]\n\t(No symbol) [0x00007FF655060A88]\n\t(No symbol) [0x00007FF65505CA94]\n\t(No symbol) [0x00007FF65505CBC2]\n\t(No symbol) [0x00007FF65504CC83]\n\tBaseThreadInitThunk [0x00007FFDF8BE7344+20]\n\tRtlUserThreadStart [0x00007FFDF94626B1+33]\n\nBuild info: version: \u00274.1.3\u0027, revision: \u00277b1ebf28ef\u0027\nSystem info: host: \u0027DESKTOP-HJ4MA0G\u0027, ip: \u0027172.21.112.1\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002711.0.16.1\u0027\nDriver info: org.openqa.selenium.remote.RemoteWebDriver\nCommand: [null, newSession {capabilities\u003d[Capabilities {acceptInsecureCerts: true, browserName: chrome, goog:chromeOptions: {args: [--disable-gpu, disable-infobars, --disable-dev-shm-usage, --no-sandbox, --disable-extensions, start-maximized, --remote-allow-origins\u003d*], extensions: []}, platformName: windows}], desiredCapabilities\u003dCapabilities {acceptInsecureCerts: true, browserName: chrome, goog:chromeOptions: {args: [--disable-gpu, disable-infobars, --disable-dev-shm-usage, --no-sandbox, --disable-extensions, start-maximized, --remote-allow-origins\u003d*], extensions: []}, platform: WINDOWS}}]\nCapabilities {}\r\n\tat org.openqa.selenium.remote.ProtocolHandshake.createSession(ProtocolHandshake.java:126)\r\n\tat org.openqa.selenium.remote.ProtocolHandshake.createSession(ProtocolHandshake.java:84)\r\n\tat org.openqa.selenium.remote.ProtocolHandshake.createSession(ProtocolHandshake.java:62)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:156)\r\n\tat org.openqa.selenium.remote.TracedCommandExecutor.execute(TracedCommandExecutor.java:51)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:567)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.startSession(RemoteWebDriver.java:248)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.\u003cinit\u003e(RemoteWebDriver.java:164)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.\u003cinit\u003e(RemoteWebDriver.java:146)\r\n\tat StepDefinitions.Hooks.startTest(Hooks.java:50)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "I navigate to url",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDefinitions.NavigationSteps.i_navigate_to_url()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "I scroll to footer",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitions.FooterPageSteps.i_scroll_to_footer()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "name": "As a user, i want to validate all shop links are working",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@SmokeScenario"
    },
    {
      "name": "@footer"
    },
    {
      "name": "@regression"
    },
    {
      "name": "@SmokeTest"
    }
  ]
});
formatter.step({
  "name": "I click on the \"Drums\" page",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitions.FooterPageSteps.i_click_on_the_page(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "I validate the \"Drums\" Links work",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitions.FooterPageSteps.i_Then_i_validate_the_Links_works(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "error_message": "java.lang.NullPointerException\r\n\tat StepDefinitions.Hooks.tearDown(Hooks.java:66)\r\n",
  "status": "failed"
});
formatter.background({
  "name": "Launch website",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "error_message": "org.openqa.selenium.SessionNotCreatedException: Could not start a new session. Response code 500. Message: session not created: This version of ChromeDriver only supports Chrome version 118\nCurrent browser version is 120.0.6099.72 with binary path C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe\nBuild info: version: \u00274.0.0-alpha-2\u0027, revision: \u0027f148142cf8\u0027, time: \u00272019-07-01T21:30:10\u0027\nSystem info: host: \u0027DESKTOP-HJ4MA0G\u0027, ip: \u0027172.21.112.1\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002711.0.16.1\u0027\nDriver info: driver.version: unknown\nremote stacktrace: \tGetHandleVerifier [0x00007FF6550E8EF2+54786]\n\t(No symbol) [0x00007FF655055612]\n\t(No symbol) [0x00007FF654F0A64B]\n\t(No symbol) [0x00007FF654F3DC22]\n\t(No symbol) [0x00007FF654F3D07C]\n\t(No symbol) [0x00007FF654F37E03]\n\t(No symbol) [0x00007FF654F353BE]\n\t(No symbol) [0x00007FF654F73FBB]\n\t(No symbol) [0x00007FF654F73A30]\n\t(No symbol) [0x00007FF654F6BC43]\n\t(No symbol) [0x00007FF654F40941]\n\t(No symbol) [0x00007FF654F41B84]\n\tGetHandleVerifier [0x00007FF655437F52+3524194]\n\tGetHandleVerifier [0x00007FF65548D800+3874576]\n\tGetHandleVerifier [0x00007FF655485D7F+3843215]\n\tGetHandleVerifier [0x00007FF655185086+694166]\n\t(No symbol) [0x00007FF655060A88]\n\t(No symbol) [0x00007FF65505CA94]\n\t(No symbol) [0x00007FF65505CBC2]\n\t(No symbol) [0x00007FF65504CC83]\n\tBaseThreadInitThunk [0x00007FFDF8BE7344+20]\n\tRtlUserThreadStart [0x00007FFDF94626B1+33]\n\nBuild info: version: \u00274.1.3\u0027, revision: \u00277b1ebf28ef\u0027\nSystem info: host: \u0027DESKTOP-HJ4MA0G\u0027, ip: \u0027172.21.112.1\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002711.0.16.1\u0027\nDriver info: org.openqa.selenium.remote.RemoteWebDriver\nCommand: [null, newSession {capabilities\u003d[Capabilities {acceptInsecureCerts: true, browserName: chrome, goog:chromeOptions: {args: [--disable-gpu, disable-infobars, --disable-dev-shm-usage, --no-sandbox, --disable-extensions, start-maximized, --remote-allow-origins\u003d*], extensions: []}, platformName: windows}], desiredCapabilities\u003dCapabilities {acceptInsecureCerts: true, browserName: chrome, goog:chromeOptions: {args: [--disable-gpu, disable-infobars, --disable-dev-shm-usage, --no-sandbox, --disable-extensions, start-maximized, --remote-allow-origins\u003d*], extensions: []}, platform: WINDOWS}}]\nCapabilities {}\r\n\tat org.openqa.selenium.remote.ProtocolHandshake.createSession(ProtocolHandshake.java:126)\r\n\tat org.openqa.selenium.remote.ProtocolHandshake.createSession(ProtocolHandshake.java:84)\r\n\tat org.openqa.selenium.remote.ProtocolHandshake.createSession(ProtocolHandshake.java:62)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:156)\r\n\tat org.openqa.selenium.remote.TracedCommandExecutor.execute(TracedCommandExecutor.java:51)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:567)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.startSession(RemoteWebDriver.java:248)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.\u003cinit\u003e(RemoteWebDriver.java:164)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.\u003cinit\u003e(RemoteWebDriver.java:146)\r\n\tat StepDefinitions.Hooks.startTest(Hooks.java:50)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "I navigate to url",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDefinitions.NavigationSteps.i_navigate_to_url()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "I scroll to footer",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitions.FooterPageSteps.i_scroll_to_footer()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "name": "As a user, i want to validate all shop links are working",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@SmokeScenario"
    },
    {
      "name": "@footer"
    },
    {
      "name": "@regression"
    },
    {
      "name": "@SmokeTest"
    }
  ]
});
formatter.step({
  "name": "I click on the \"DJ\" page",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitions.FooterPageSteps.i_click_on_the_page(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "I validate the \"DJ\" Links work",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitions.FooterPageSteps.i_Then_i_validate_the_Links_works(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "error_message": "java.lang.NullPointerException\r\n\tat StepDefinitions.Hooks.tearDown(Hooks.java:66)\r\n",
  "status": "failed"
});
formatter.background({
  "name": "Launch website",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "error_message": "org.openqa.selenium.SessionNotCreatedException: Could not start a new session. Response code 500. Message: session not created: This version of ChromeDriver only supports Chrome version 118\nCurrent browser version is 120.0.6099.72 with binary path C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe\nBuild info: version: \u00274.0.0-alpha-2\u0027, revision: \u0027f148142cf8\u0027, time: \u00272019-07-01T21:30:10\u0027\nSystem info: host: \u0027DESKTOP-HJ4MA0G\u0027, ip: \u0027172.21.112.1\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002711.0.16.1\u0027\nDriver info: driver.version: unknown\nremote stacktrace: \tGetHandleVerifier [0x00007FF6550E8EF2+54786]\n\t(No symbol) [0x00007FF655055612]\n\t(No symbol) [0x00007FF654F0A64B]\n\t(No symbol) [0x00007FF654F3DC22]\n\t(No symbol) [0x00007FF654F3D07C]\n\t(No symbol) [0x00007FF654F37E03]\n\t(No symbol) [0x00007FF654F353BE]\n\t(No symbol) [0x00007FF654F73FBB]\n\t(No symbol) [0x00007FF654F73A30]\n\t(No symbol) [0x00007FF654F6BC43]\n\t(No symbol) [0x00007FF654F40941]\n\t(No symbol) [0x00007FF654F41B84]\n\tGetHandleVerifier [0x00007FF655437F52+3524194]\n\tGetHandleVerifier [0x00007FF65548D800+3874576]\n\tGetHandleVerifier [0x00007FF655485D7F+3843215]\n\tGetHandleVerifier [0x00007FF655185086+694166]\n\t(No symbol) [0x00007FF655060A88]\n\t(No symbol) [0x00007FF65505CA94]\n\t(No symbol) [0x00007FF65505CBC2]\n\t(No symbol) [0x00007FF65504CC83]\n\tBaseThreadInitThunk [0x00007FFDF8BE7344+20]\n\tRtlUserThreadStart [0x00007FFDF94626B1+33]\n\nBuild info: version: \u00274.1.3\u0027, revision: \u00277b1ebf28ef\u0027\nSystem info: host: \u0027DESKTOP-HJ4MA0G\u0027, ip: \u0027172.21.112.1\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002711.0.16.1\u0027\nDriver info: org.openqa.selenium.remote.RemoteWebDriver\nCommand: [null, newSession {capabilities\u003d[Capabilities {acceptInsecureCerts: true, browserName: chrome, goog:chromeOptions: {args: [--disable-gpu, disable-infobars, --disable-dev-shm-usage, --no-sandbox, --disable-extensions, start-maximized, --remote-allow-origins\u003d*], extensions: []}, platformName: windows}], desiredCapabilities\u003dCapabilities {acceptInsecureCerts: true, browserName: chrome, goog:chromeOptions: {args: [--disable-gpu, disable-infobars, --disable-dev-shm-usage, --no-sandbox, --disable-extensions, start-maximized, --remote-allow-origins\u003d*], extensions: []}, platform: WINDOWS}}]\nCapabilities {}\r\n\tat org.openqa.selenium.remote.ProtocolHandshake.createSession(ProtocolHandshake.java:126)\r\n\tat org.openqa.selenium.remote.ProtocolHandshake.createSession(ProtocolHandshake.java:84)\r\n\tat org.openqa.selenium.remote.ProtocolHandshake.createSession(ProtocolHandshake.java:62)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:156)\r\n\tat org.openqa.selenium.remote.TracedCommandExecutor.execute(TracedCommandExecutor.java:51)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:567)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.startSession(RemoteWebDriver.java:248)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.\u003cinit\u003e(RemoteWebDriver.java:164)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.\u003cinit\u003e(RemoteWebDriver.java:146)\r\n\tat StepDefinitions.Hooks.startTest(Hooks.java:50)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "I navigate to url",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDefinitions.NavigationSteps.i_navigate_to_url()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "I scroll to footer",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitions.FooterPageSteps.i_scroll_to_footer()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "name": "As a user, i want to validate all shop links are working",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@SmokeScenario"
    },
    {
      "name": "@footer"
    },
    {
      "name": "@regression"
    },
    {
      "name": "@SmokeTest"
    }
  ]
});
formatter.step({
  "name": "I click on the \"Live Sound \u0026 PA\" page",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitions.FooterPageSteps.i_click_on_the_page(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "I validate the \"Live Sound \u0026 PA\" Links work",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitions.FooterPageSteps.i_Then_i_validate_the_Links_works(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "error_message": "java.lang.NullPointerException\r\n\tat StepDefinitions.Hooks.tearDown(Hooks.java:66)\r\n",
  "status": "failed"
});
formatter.background({
  "name": "Launch website",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "error_message": "org.openqa.selenium.SessionNotCreatedException: Could not start a new session. Response code 500. Message: session not created: This version of ChromeDriver only supports Chrome version 118\nCurrent browser version is 120.0.6099.72 with binary path C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe\nBuild info: version: \u00274.0.0-alpha-2\u0027, revision: \u0027f148142cf8\u0027, time: \u00272019-07-01T21:30:10\u0027\nSystem info: host: \u0027DESKTOP-HJ4MA0G\u0027, ip: \u0027172.21.112.1\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002711.0.16.1\u0027\nDriver info: driver.version: unknown\nremote stacktrace: \tGetHandleVerifier [0x00007FF6550E8EF2+54786]\n\t(No symbol) [0x00007FF655055612]\n\t(No symbol) [0x00007FF654F0A64B]\n\t(No symbol) [0x00007FF654F3DC22]\n\t(No symbol) [0x00007FF654F3D07C]\n\t(No symbol) [0x00007FF654F37E03]\n\t(No symbol) [0x00007FF654F353BE]\n\t(No symbol) [0x00007FF654F73FBB]\n\t(No symbol) [0x00007FF654F73A30]\n\t(No symbol) [0x00007FF654F6BC43]\n\t(No symbol) [0x00007FF654F40941]\n\t(No symbol) [0x00007FF654F41B84]\n\tGetHandleVerifier [0x00007FF655437F52+3524194]\n\tGetHandleVerifier [0x00007FF65548D800+3874576]\n\tGetHandleVerifier [0x00007FF655485D7F+3843215]\n\tGetHandleVerifier [0x00007FF655185086+694166]\n\t(No symbol) [0x00007FF655060A88]\n\t(No symbol) [0x00007FF65505CA94]\n\t(No symbol) [0x00007FF65505CBC2]\n\t(No symbol) [0x00007FF65504CC83]\n\tBaseThreadInitThunk [0x00007FFDF8BE7344+20]\n\tRtlUserThreadStart [0x00007FFDF94626B1+33]\n\nBuild info: version: \u00274.1.3\u0027, revision: \u00277b1ebf28ef\u0027\nSystem info: host: \u0027DESKTOP-HJ4MA0G\u0027, ip: \u0027172.21.112.1\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002711.0.16.1\u0027\nDriver info: org.openqa.selenium.remote.RemoteWebDriver\nCommand: [null, newSession {capabilities\u003d[Capabilities {acceptInsecureCerts: true, browserName: chrome, goog:chromeOptions: {args: [--disable-gpu, disable-infobars, --disable-dev-shm-usage, --no-sandbox, --disable-extensions, start-maximized, --remote-allow-origins\u003d*], extensions: []}, platformName: windows}], desiredCapabilities\u003dCapabilities {acceptInsecureCerts: true, browserName: chrome, goog:chromeOptions: {args: [--disable-gpu, disable-infobars, --disable-dev-shm-usage, --no-sandbox, --disable-extensions, start-maximized, --remote-allow-origins\u003d*], extensions: []}, platform: WINDOWS}}]\nCapabilities {}\r\n\tat org.openqa.selenium.remote.ProtocolHandshake.createSession(ProtocolHandshake.java:126)\r\n\tat org.openqa.selenium.remote.ProtocolHandshake.createSession(ProtocolHandshake.java:84)\r\n\tat org.openqa.selenium.remote.ProtocolHandshake.createSession(ProtocolHandshake.java:62)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:156)\r\n\tat org.openqa.selenium.remote.TracedCommandExecutor.execute(TracedCommandExecutor.java:51)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:567)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.startSession(RemoteWebDriver.java:248)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.\u003cinit\u003e(RemoteWebDriver.java:164)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.\u003cinit\u003e(RemoteWebDriver.java:146)\r\n\tat StepDefinitions.Hooks.startTest(Hooks.java:50)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "I navigate to url",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDefinitions.NavigationSteps.i_navigate_to_url()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "I scroll to footer",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitions.FooterPageSteps.i_scroll_to_footer()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "name": "As a user, i want to validate all shop links are working",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@SmokeScenario"
    },
    {
      "name": "@footer"
    },
    {
      "name": "@regression"
    },
    {
      "name": "@SmokeTest"
    }
  ]
});
formatter.step({
  "name": "I click on the \"Guitars\" page",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitions.FooterPageSteps.i_click_on_the_page(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "I validate the \"Guitars\" Links work",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitions.FooterPageSteps.i_Then_i_validate_the_Links_works(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "error_message": "java.lang.NullPointerException\r\n\tat StepDefinitions.Hooks.tearDown(Hooks.java:66)\r\n",
  "status": "failed"
});
formatter.scenarioOutline({
  "name": "As a user, i want to validate all company info links are working",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@SmokeTest"
    }
  ]
});
formatter.step({
  "name": "I click on the \"\u003cinfo\u003e\" page",
  "keyword": "And "
});
formatter.step({
  "name": "I validate the \"\u003cinfo\u003e\" Links work",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "info"
      ]
    },
    {
      "cells": [
        "Careers"
      ]
    }
  ]
});
formatter.background({
  "name": "Launch website",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "error_message": "org.openqa.selenium.SessionNotCreatedException: Could not start a new session. Response code 500. Message: session not created: This version of ChromeDriver only supports Chrome version 118\nCurrent browser version is 120.0.6099.72 with binary path C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe\nBuild info: version: \u00274.0.0-alpha-2\u0027, revision: \u0027f148142cf8\u0027, time: \u00272019-07-01T21:30:10\u0027\nSystem info: host: \u0027DESKTOP-HJ4MA0G\u0027, ip: \u0027172.21.112.1\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002711.0.16.1\u0027\nDriver info: driver.version: unknown\nremote stacktrace: \tGetHandleVerifier [0x00007FF6550E8EF2+54786]\n\t(No symbol) [0x00007FF655055612]\n\t(No symbol) [0x00007FF654F0A64B]\n\t(No symbol) [0x00007FF654F3DC22]\n\t(No symbol) [0x00007FF654F3D07C]\n\t(No symbol) [0x00007FF654F37E03]\n\t(No symbol) [0x00007FF654F353BE]\n\t(No symbol) [0x00007FF654F73FBB]\n\t(No symbol) [0x00007FF654F73A30]\n\t(No symbol) [0x00007FF654F6BC43]\n\t(No symbol) [0x00007FF654F40941]\n\t(No symbol) [0x00007FF654F41B84]\n\tGetHandleVerifier [0x00007FF655437F52+3524194]\n\tGetHandleVerifier [0x00007FF65548D800+3874576]\n\tGetHandleVerifier [0x00007FF655485D7F+3843215]\n\tGetHandleVerifier [0x00007FF655185086+694166]\n\t(No symbol) [0x00007FF655060A88]\n\t(No symbol) [0x00007FF65505CA94]\n\t(No symbol) [0x00007FF65505CBC2]\n\t(No symbol) [0x00007FF65504CC83]\n\tBaseThreadInitThunk [0x00007FFDF8BE7344+20]\n\tRtlUserThreadStart [0x00007FFDF94626B1+33]\n\nBuild info: version: \u00274.1.3\u0027, revision: \u00277b1ebf28ef\u0027\nSystem info: host: \u0027DESKTOP-HJ4MA0G\u0027, ip: \u0027172.21.112.1\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002711.0.16.1\u0027\nDriver info: org.openqa.selenium.remote.RemoteWebDriver\nCommand: [null, newSession {capabilities\u003d[Capabilities {acceptInsecureCerts: true, browserName: chrome, goog:chromeOptions: {args: [--disable-gpu, disable-infobars, --disable-dev-shm-usage, --no-sandbox, --disable-extensions, start-maximized, --remote-allow-origins\u003d*], extensions: []}, platformName: windows}], desiredCapabilities\u003dCapabilities {acceptInsecureCerts: true, browserName: chrome, goog:chromeOptions: {args: [--disable-gpu, disable-infobars, --disable-dev-shm-usage, --no-sandbox, --disable-extensions, start-maximized, --remote-allow-origins\u003d*], extensions: []}, platform: WINDOWS}}]\nCapabilities {}\r\n\tat org.openqa.selenium.remote.ProtocolHandshake.createSession(ProtocolHandshake.java:126)\r\n\tat org.openqa.selenium.remote.ProtocolHandshake.createSession(ProtocolHandshake.java:84)\r\n\tat org.openqa.selenium.remote.ProtocolHandshake.createSession(ProtocolHandshake.java:62)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:156)\r\n\tat org.openqa.selenium.remote.TracedCommandExecutor.execute(TracedCommandExecutor.java:51)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:567)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.startSession(RemoteWebDriver.java:248)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.\u003cinit\u003e(RemoteWebDriver.java:164)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.\u003cinit\u003e(RemoteWebDriver.java:146)\r\n\tat StepDefinitions.Hooks.startTest(Hooks.java:50)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "I navigate to url",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDefinitions.NavigationSteps.i_navigate_to_url()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "I scroll to footer",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitions.FooterPageSteps.i_scroll_to_footer()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "name": "As a user, i want to validate all company info links are working",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@SmokeScenario"
    },
    {
      "name": "@footer"
    },
    {
      "name": "@regression"
    },
    {
      "name": "@SmokeTest"
    }
  ]
});
formatter.step({
  "name": "I click on the \"Careers\" page",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitions.FooterPageSteps.i_click_on_the_page(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "I validate the \"Careers\" Links work",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitions.FooterPageSteps.i_Then_i_validate_the_Links_works(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "error_message": "java.lang.NullPointerException\r\n\tat StepDefinitions.Hooks.tearDown(Hooks.java:66)\r\n",
  "status": "failed"
});
formatter.scenarioOutline({
  "name": "As a user, i want to validate all help links are working",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@SmokeTest"
    }
  ]
});
formatter.step({
  "name": "I click on the \"\u003chelp\u003e\" page",
  "keyword": "And "
});
formatter.step({
  "name": "I validate the \"\u003chelp\u003e\" Links work",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "help"
      ]
    },
    {
      "cells": [
        "Help/Support"
      ]
    },
    {
      "cells": [
        "Shipping \u0026 Returns Policy"
      ]
    },
    {
      "cells": [
        "Warranty Information"
      ]
    }
  ]
});
formatter.background({
  "name": "Launch website",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "error_message": "org.openqa.selenium.SessionNotCreatedException: Could not start a new session. Response code 500. Message: session not created: This version of ChromeDriver only supports Chrome version 118\nCurrent browser version is 120.0.6099.72 with binary path C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe\nBuild info: version: \u00274.0.0-alpha-2\u0027, revision: \u0027f148142cf8\u0027, time: \u00272019-07-01T21:30:10\u0027\nSystem info: host: \u0027DESKTOP-HJ4MA0G\u0027, ip: \u0027172.21.112.1\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002711.0.16.1\u0027\nDriver info: driver.version: unknown\nremote stacktrace: \tGetHandleVerifier [0x00007FF6550E8EF2+54786]\n\t(No symbol) [0x00007FF655055612]\n\t(No symbol) [0x00007FF654F0A64B]\n\t(No symbol) [0x00007FF654F3DC22]\n\t(No symbol) [0x00007FF654F3D07C]\n\t(No symbol) [0x00007FF654F37E03]\n\t(No symbol) [0x00007FF654F353BE]\n\t(No symbol) [0x00007FF654F73FBB]\n\t(No symbol) [0x00007FF654F73A30]\n\t(No symbol) [0x00007FF654F6BC43]\n\t(No symbol) [0x00007FF654F40941]\n\t(No symbol) [0x00007FF654F41B84]\n\tGetHandleVerifier [0x00007FF655437F52+3524194]\n\tGetHandleVerifier [0x00007FF65548D800+3874576]\n\tGetHandleVerifier [0x00007FF655485D7F+3843215]\n\tGetHandleVerifier [0x00007FF655185086+694166]\n\t(No symbol) [0x00007FF655060A88]\n\t(No symbol) [0x00007FF65505CA94]\n\t(No symbol) [0x00007FF65505CBC2]\n\t(No symbol) [0x00007FF65504CC83]\n\tBaseThreadInitThunk [0x00007FFDF8BE7344+20]\n\tRtlUserThreadStart [0x00007FFDF94626B1+33]\n\nBuild info: version: \u00274.1.3\u0027, revision: \u00277b1ebf28ef\u0027\nSystem info: host: \u0027DESKTOP-HJ4MA0G\u0027, ip: \u0027172.21.112.1\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002711.0.16.1\u0027\nDriver info: org.openqa.selenium.remote.RemoteWebDriver\nCommand: [null, newSession {capabilities\u003d[Capabilities {acceptInsecureCerts: true, browserName: chrome, goog:chromeOptions: {args: [--disable-gpu, disable-infobars, --disable-dev-shm-usage, --no-sandbox, --disable-extensions, start-maximized, --remote-allow-origins\u003d*], extensions: []}, platformName: windows}], desiredCapabilities\u003dCapabilities {acceptInsecureCerts: true, browserName: chrome, goog:chromeOptions: {args: [--disable-gpu, disable-infobars, --disable-dev-shm-usage, --no-sandbox, --disable-extensions, start-maximized, --remote-allow-origins\u003d*], extensions: []}, platform: WINDOWS}}]\nCapabilities {}\r\n\tat org.openqa.selenium.remote.ProtocolHandshake.createSession(ProtocolHandshake.java:126)\r\n\tat org.openqa.selenium.remote.ProtocolHandshake.createSession(ProtocolHandshake.java:84)\r\n\tat org.openqa.selenium.remote.ProtocolHandshake.createSession(ProtocolHandshake.java:62)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:156)\r\n\tat org.openqa.selenium.remote.TracedCommandExecutor.execute(TracedCommandExecutor.java:51)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:567)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.startSession(RemoteWebDriver.java:248)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.\u003cinit\u003e(RemoteWebDriver.java:164)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.\u003cinit\u003e(RemoteWebDriver.java:146)\r\n\tat StepDefinitions.Hooks.startTest(Hooks.java:50)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "I navigate to url",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDefinitions.NavigationSteps.i_navigate_to_url()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "I scroll to footer",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitions.FooterPageSteps.i_scroll_to_footer()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "name": "As a user, i want to validate all help links are working",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@SmokeScenario"
    },
    {
      "name": "@footer"
    },
    {
      "name": "@regression"
    },
    {
      "name": "@SmokeTest"
    }
  ]
});
formatter.step({
  "name": "I click on the \"Help/Support\" page",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitions.FooterPageSteps.i_click_on_the_page(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "I validate the \"Help/Support\" Links work",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitions.FooterPageSteps.i_Then_i_validate_the_Links_works(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "error_message": "java.lang.NullPointerException\r\n\tat StepDefinitions.Hooks.tearDown(Hooks.java:66)\r\n",
  "status": "failed"
});
formatter.background({
  "name": "Launch website",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "error_message": "org.openqa.selenium.SessionNotCreatedException: Could not start a new session. Response code 500. Message: session not created: This version of ChromeDriver only supports Chrome version 118\nCurrent browser version is 120.0.6099.72 with binary path C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe\nBuild info: version: \u00274.0.0-alpha-2\u0027, revision: \u0027f148142cf8\u0027, time: \u00272019-07-01T21:30:10\u0027\nSystem info: host: \u0027DESKTOP-HJ4MA0G\u0027, ip: \u0027172.21.112.1\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002711.0.16.1\u0027\nDriver info: driver.version: unknown\nremote stacktrace: \tGetHandleVerifier [0x00007FF6550E8EF2+54786]\n\t(No symbol) [0x00007FF655055612]\n\t(No symbol) [0x00007FF654F0A64B]\n\t(No symbol) [0x00007FF654F3DC22]\n\t(No symbol) [0x00007FF654F3D07C]\n\t(No symbol) [0x00007FF654F37E03]\n\t(No symbol) [0x00007FF654F353BE]\n\t(No symbol) [0x00007FF654F73FBB]\n\t(No symbol) [0x00007FF654F73A30]\n\t(No symbol) [0x00007FF654F6BC43]\n\t(No symbol) [0x00007FF654F40941]\n\t(No symbol) [0x00007FF654F41B84]\n\tGetHandleVerifier [0x00007FF655437F52+3524194]\n\tGetHandleVerifier [0x00007FF65548D800+3874576]\n\tGetHandleVerifier [0x00007FF655485D7F+3843215]\n\tGetHandleVerifier [0x00007FF655185086+694166]\n\t(No symbol) [0x00007FF655060A88]\n\t(No symbol) [0x00007FF65505CA94]\n\t(No symbol) [0x00007FF65505CBC2]\n\t(No symbol) [0x00007FF65504CC83]\n\tBaseThreadInitThunk [0x00007FFDF8BE7344+20]\n\tRtlUserThreadStart [0x00007FFDF94626B1+33]\n\nBuild info: version: \u00274.1.3\u0027, revision: \u00277b1ebf28ef\u0027\nSystem info: host: \u0027DESKTOP-HJ4MA0G\u0027, ip: \u0027172.21.112.1\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002711.0.16.1\u0027\nDriver info: org.openqa.selenium.remote.RemoteWebDriver\nCommand: [null, newSession {capabilities\u003d[Capabilities {acceptInsecureCerts: true, browserName: chrome, goog:chromeOptions: {args: [--disable-gpu, disable-infobars, --disable-dev-shm-usage, --no-sandbox, --disable-extensions, start-maximized, --remote-allow-origins\u003d*], extensions: []}, platformName: windows}], desiredCapabilities\u003dCapabilities {acceptInsecureCerts: true, browserName: chrome, goog:chromeOptions: {args: [--disable-gpu, disable-infobars, --disable-dev-shm-usage, --no-sandbox, --disable-extensions, start-maximized, --remote-allow-origins\u003d*], extensions: []}, platform: WINDOWS}}]\nCapabilities {}\r\n\tat org.openqa.selenium.remote.ProtocolHandshake.createSession(ProtocolHandshake.java:126)\r\n\tat org.openqa.selenium.remote.ProtocolHandshake.createSession(ProtocolHandshake.java:84)\r\n\tat org.openqa.selenium.remote.ProtocolHandshake.createSession(ProtocolHandshake.java:62)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:156)\r\n\tat org.openqa.selenium.remote.TracedCommandExecutor.execute(TracedCommandExecutor.java:51)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:567)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.startSession(RemoteWebDriver.java:248)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.\u003cinit\u003e(RemoteWebDriver.java:164)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.\u003cinit\u003e(RemoteWebDriver.java:146)\r\n\tat StepDefinitions.Hooks.startTest(Hooks.java:50)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "I navigate to url",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDefinitions.NavigationSteps.i_navigate_to_url()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "I scroll to footer",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitions.FooterPageSteps.i_scroll_to_footer()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "name": "As a user, i want to validate all help links are working",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@SmokeScenario"
    },
    {
      "name": "@footer"
    },
    {
      "name": "@regression"
    },
    {
      "name": "@SmokeTest"
    }
  ]
});
formatter.step({
  "name": "I click on the \"Shipping \u0026 Returns Policy\" page",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitions.FooterPageSteps.i_click_on_the_page(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "I validate the \"Shipping \u0026 Returns Policy\" Links work",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitions.FooterPageSteps.i_Then_i_validate_the_Links_works(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "error_message": "java.lang.NullPointerException\r\n\tat StepDefinitions.Hooks.tearDown(Hooks.java:66)\r\n",
  "status": "failed"
});
formatter.background({
  "name": "Launch website",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "error_message": "org.openqa.selenium.SessionNotCreatedException: Could not start a new session. Response code 500. Message: session not created: This version of ChromeDriver only supports Chrome version 118\nCurrent browser version is 120.0.6099.72 with binary path C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe\nBuild info: version: \u00274.0.0-alpha-2\u0027, revision: \u0027f148142cf8\u0027, time: \u00272019-07-01T21:30:10\u0027\nSystem info: host: \u0027DESKTOP-HJ4MA0G\u0027, ip: \u0027172.21.112.1\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002711.0.16.1\u0027\nDriver info: driver.version: unknown\nremote stacktrace: \tGetHandleVerifier [0x00007FF6550E8EF2+54786]\n\t(No symbol) [0x00007FF655055612]\n\t(No symbol) [0x00007FF654F0A64B]\n\t(No symbol) [0x00007FF654F3DC22]\n\t(No symbol) [0x00007FF654F3D07C]\n\t(No symbol) [0x00007FF654F37E03]\n\t(No symbol) [0x00007FF654F353BE]\n\t(No symbol) [0x00007FF654F73FBB]\n\t(No symbol) [0x00007FF654F73A30]\n\t(No symbol) [0x00007FF654F6BC43]\n\t(No symbol) [0x00007FF654F40941]\n\t(No symbol) [0x00007FF654F41B84]\n\tGetHandleVerifier [0x00007FF655437F52+3524194]\n\tGetHandleVerifier [0x00007FF65548D800+3874576]\n\tGetHandleVerifier [0x00007FF655485D7F+3843215]\n\tGetHandleVerifier [0x00007FF655185086+694166]\n\t(No symbol) [0x00007FF655060A88]\n\t(No symbol) [0x00007FF65505CA94]\n\t(No symbol) [0x00007FF65505CBC2]\n\t(No symbol) [0x00007FF65504CC83]\n\tBaseThreadInitThunk [0x00007FFDF8BE7344+20]\n\tRtlUserThreadStart [0x00007FFDF94626B1+33]\n\nBuild info: version: \u00274.1.3\u0027, revision: \u00277b1ebf28ef\u0027\nSystem info: host: \u0027DESKTOP-HJ4MA0G\u0027, ip: \u0027172.21.112.1\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002711.0.16.1\u0027\nDriver info: org.openqa.selenium.remote.RemoteWebDriver\nCommand: [null, newSession {capabilities\u003d[Capabilities {acceptInsecureCerts: true, browserName: chrome, goog:chromeOptions: {args: [--disable-gpu, disable-infobars, --disable-dev-shm-usage, --no-sandbox, --disable-extensions, start-maximized, --remote-allow-origins\u003d*], extensions: []}, platformName: windows}], desiredCapabilities\u003dCapabilities {acceptInsecureCerts: true, browserName: chrome, goog:chromeOptions: {args: [--disable-gpu, disable-infobars, --disable-dev-shm-usage, --no-sandbox, --disable-extensions, start-maximized, --remote-allow-origins\u003d*], extensions: []}, platform: WINDOWS}}]\nCapabilities {}\r\n\tat org.openqa.selenium.remote.ProtocolHandshake.createSession(ProtocolHandshake.java:126)\r\n\tat org.openqa.selenium.remote.ProtocolHandshake.createSession(ProtocolHandshake.java:84)\r\n\tat org.openqa.selenium.remote.ProtocolHandshake.createSession(ProtocolHandshake.java:62)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:156)\r\n\tat org.openqa.selenium.remote.TracedCommandExecutor.execute(TracedCommandExecutor.java:51)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:567)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.startSession(RemoteWebDriver.java:248)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.\u003cinit\u003e(RemoteWebDriver.java:164)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.\u003cinit\u003e(RemoteWebDriver.java:146)\r\n\tat StepDefinitions.Hooks.startTest(Hooks.java:50)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "I navigate to url",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDefinitions.NavigationSteps.i_navigate_to_url()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "I scroll to footer",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitions.FooterPageSteps.i_scroll_to_footer()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "name": "As a user, i want to validate all help links are working",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@SmokeScenario"
    },
    {
      "name": "@footer"
    },
    {
      "name": "@regression"
    },
    {
      "name": "@SmokeTest"
    }
  ]
});
formatter.step({
  "name": "I click on the \"Warranty Information\" page",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitions.FooterPageSteps.i_click_on_the_page(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "I validate the \"Warranty Information\" Links work",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitions.FooterPageSteps.i_Then_i_validate_the_Links_works(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "error_message": "java.lang.NullPointerException\r\n\tat StepDefinitions.Hooks.tearDown(Hooks.java:66)\r\n",
  "status": "failed"
});
formatter.uri("file:src/test/resources/Features/login.feature");
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
    },
    {
      "name": "@regression"
    }
  ]
});
formatter.scenarioOutline({
  "name": "As a user, i want to validate if i can login with an valid account in RoW",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@SmokeTest"
    }
  ]
});
formatter.step({
  "name": "I click the account button",
  "keyword": "And "
});
formatter.step({
  "name": "The account icon links to the account login page",
  "keyword": "Then "
});
formatter.step({
  "name": "I enter correct \"\u003cemail\u003e\" address",
  "keyword": "And "
});
formatter.step({
  "name": "I enter valid \"\u003cpassword\u003e\"",
  "keyword": "And "
});
formatter.step({
  "name": "I click the sign in button",
  "keyword": "And "
});
formatter.step({
  "name": "i have successfully logged in",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "email",
        "password"
      ]
    },
    {
      "cells": [
        "thandos1503@gmail.com",
        "Abc123##"
      ]
    }
  ]
});
formatter.background({
  "name": "Launch website",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "error_message": "org.openqa.selenium.SessionNotCreatedException: Could not start a new session. Response code 500. Message: session not created: This version of ChromeDriver only supports Chrome version 118\nCurrent browser version is 120.0.6099.72 with binary path C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe\nBuild info: version: \u00274.0.0-alpha-2\u0027, revision: \u0027f148142cf8\u0027, time: \u00272019-07-01T21:30:10\u0027\nSystem info: host: \u0027DESKTOP-HJ4MA0G\u0027, ip: \u0027172.21.112.1\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002711.0.16.1\u0027\nDriver info: driver.version: unknown\nremote stacktrace: \tGetHandleVerifier [0x00007FF6550E8EF2+54786]\n\t(No symbol) [0x00007FF655055612]\n\t(No symbol) [0x00007FF654F0A64B]\n\t(No symbol) [0x00007FF654F3DC22]\n\t(No symbol) [0x00007FF654F3D07C]\n\t(No symbol) [0x00007FF654F37E03]\n\t(No symbol) [0x00007FF654F353BE]\n\t(No symbol) [0x00007FF654F73FBB]\n\t(No symbol) [0x00007FF654F73A30]\n\t(No symbol) [0x00007FF654F6BC43]\n\t(No symbol) [0x00007FF654F40941]\n\t(No symbol) [0x00007FF654F41B84]\n\tGetHandleVerifier [0x00007FF655437F52+3524194]\n\tGetHandleVerifier [0x00007FF65548D800+3874576]\n\tGetHandleVerifier [0x00007FF655485D7F+3843215]\n\tGetHandleVerifier [0x00007FF655185086+694166]\n\t(No symbol) [0x00007FF655060A88]\n\t(No symbol) [0x00007FF65505CA94]\n\t(No symbol) [0x00007FF65505CBC2]\n\t(No symbol) [0x00007FF65504CC83]\n\tBaseThreadInitThunk [0x00007FFDF8BE7344+20]\n\tRtlUserThreadStart [0x00007FFDF94626B1+33]\n\nBuild info: version: \u00274.1.3\u0027, revision: \u00277b1ebf28ef\u0027\nSystem info: host: \u0027DESKTOP-HJ4MA0G\u0027, ip: \u0027172.21.112.1\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002711.0.16.1\u0027\nDriver info: org.openqa.selenium.remote.RemoteWebDriver\nCommand: [null, newSession {capabilities\u003d[Capabilities {acceptInsecureCerts: true, browserName: chrome, goog:chromeOptions: {args: [--disable-gpu, disable-infobars, --disable-dev-shm-usage, --no-sandbox, --disable-extensions, start-maximized, --remote-allow-origins\u003d*], extensions: []}, platformName: windows}], desiredCapabilities\u003dCapabilities {acceptInsecureCerts: true, browserName: chrome, goog:chromeOptions: {args: [--disable-gpu, disable-infobars, --disable-dev-shm-usage, --no-sandbox, --disable-extensions, start-maximized, --remote-allow-origins\u003d*], extensions: []}, platform: WINDOWS}}]\nCapabilities {}\r\n\tat org.openqa.selenium.remote.ProtocolHandshake.createSession(ProtocolHandshake.java:126)\r\n\tat org.openqa.selenium.remote.ProtocolHandshake.createSession(ProtocolHandshake.java:84)\r\n\tat org.openqa.selenium.remote.ProtocolHandshake.createSession(ProtocolHandshake.java:62)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:156)\r\n\tat org.openqa.selenium.remote.TracedCommandExecutor.execute(TracedCommandExecutor.java:51)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:567)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.startSession(RemoteWebDriver.java:248)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.\u003cinit\u003e(RemoteWebDriver.java:164)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.\u003cinit\u003e(RemoteWebDriver.java:146)\r\n\tat StepDefinitions.Hooks.startTest(Hooks.java:50)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "I navigate to url",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDefinitions.NavigationSteps.i_navigate_to_url()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "name": "As a user, i want to validate if i can login with an valid account in RoW",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@SmokeScenario"
    },
    {
      "name": "@login"
    },
    {
      "name": "@regression"
    },
    {
      "name": "@SmokeTest"
    }
  ]
});
formatter.step({
  "name": "I click the account button",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitions.HeaderPageSteps.when_i_click_the_account_button()"
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
  "name": "I enter correct \"thandos1503@gmail.com\" address",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitions.SignInPageSteps.i_enter_correct_email_address(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "I enter valid \"Abc123##\"",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitions.SignInPageSteps.i_enter_valid_password(java.lang.String)"
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
formatter.after({
  "error_message": "java.lang.NullPointerException\r\n\tat StepDefinitions.Hooks.tearDown(Hooks.java:66)\r\n",
  "status": "failed"
});
formatter.scenarioOutline({
  "name": "As a user, i want to validate if i can login with an valid account in US",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@SmokeTest"
    }
  ]
});
formatter.step({
  "name": "I click the account button",
  "keyword": "And "
});
formatter.step({
  "name": "I should see the shopping cart",
  "keyword": "Then "
});
formatter.step({
  "name": "The account icon links to the account login page",
  "keyword": "Then "
});
formatter.step({
  "name": "I enter correct \"\u003cemail\u003e\" address",
  "keyword": "And "
});
formatter.step({
  "name": "I enter valid \"\u003cpassword\u003e\"",
  "keyword": "And "
});
formatter.step({
  "name": "I click the sign in button",
  "keyword": "And "
});
formatter.step({
  "name": "i have successfully logged in",
  "keyword": "Then "
});
formatter.step({
  "name": "I should see the shopping cart",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "email",
        "password"
      ]
    },
    {
      "cells": [
        "Thandos1311@outlook.com",
        "Abc123##"
      ]
    }
  ]
});
formatter.background({
  "name": "Launch website",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "error_message": "org.openqa.selenium.SessionNotCreatedException: Could not start a new session. Response code 500. Message: session not created: This version of ChromeDriver only supports Chrome version 118\nCurrent browser version is 120.0.6099.72 with binary path C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe\nBuild info: version: \u00274.0.0-alpha-2\u0027, revision: \u0027f148142cf8\u0027, time: \u00272019-07-01T21:30:10\u0027\nSystem info: host: \u0027DESKTOP-HJ4MA0G\u0027, ip: \u0027172.21.112.1\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002711.0.16.1\u0027\nDriver info: driver.version: unknown\nremote stacktrace: \tGetHandleVerifier [0x00007FF6550E8EF2+54786]\n\t(No symbol) [0x00007FF655055612]\n\t(No symbol) [0x00007FF654F0A64B]\n\t(No symbol) [0x00007FF654F3DC22]\n\t(No symbol) [0x00007FF654F3D07C]\n\t(No symbol) [0x00007FF654F37E03]\n\t(No symbol) [0x00007FF654F353BE]\n\t(No symbol) [0x00007FF654F73FBB]\n\t(No symbol) [0x00007FF654F73A30]\n\t(No symbol) [0x00007FF654F6BC43]\n\t(No symbol) [0x00007FF654F40941]\n\t(No symbol) [0x00007FF654F41B84]\n\tGetHandleVerifier [0x00007FF655437F52+3524194]\n\tGetHandleVerifier [0x00007FF65548D800+3874576]\n\tGetHandleVerifier [0x00007FF655485D7F+3843215]\n\tGetHandleVerifier [0x00007FF655185086+694166]\n\t(No symbol) [0x00007FF655060A88]\n\t(No symbol) [0x00007FF65505CA94]\n\t(No symbol) [0x00007FF65505CBC2]\n\t(No symbol) [0x00007FF65504CC83]\n\tBaseThreadInitThunk [0x00007FFDF8BE7344+20]\n\tRtlUserThreadStart [0x00007FFDF94626B1+33]\n\nBuild info: version: \u00274.1.3\u0027, revision: \u00277b1ebf28ef\u0027\nSystem info: host: \u0027DESKTOP-HJ4MA0G\u0027, ip: \u0027172.21.112.1\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002711.0.16.1\u0027\nDriver info: org.openqa.selenium.remote.RemoteWebDriver\nCommand: [null, newSession {capabilities\u003d[Capabilities {acceptInsecureCerts: true, browserName: chrome, goog:chromeOptions: {args: [--disable-gpu, disable-infobars, --disable-dev-shm-usage, --no-sandbox, --disable-extensions, start-maximized, --remote-allow-origins\u003d*], extensions: []}, platformName: windows}], desiredCapabilities\u003dCapabilities {acceptInsecureCerts: true, browserName: chrome, goog:chromeOptions: {args: [--disable-gpu, disable-infobars, --disable-dev-shm-usage, --no-sandbox, --disable-extensions, start-maximized, --remote-allow-origins\u003d*], extensions: []}, platform: WINDOWS}}]\nCapabilities {}\r\n\tat org.openqa.selenium.remote.ProtocolHandshake.createSession(ProtocolHandshake.java:126)\r\n\tat org.openqa.selenium.remote.ProtocolHandshake.createSession(ProtocolHandshake.java:84)\r\n\tat org.openqa.selenium.remote.ProtocolHandshake.createSession(ProtocolHandshake.java:62)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:156)\r\n\tat org.openqa.selenium.remote.TracedCommandExecutor.execute(TracedCommandExecutor.java:51)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:567)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.startSession(RemoteWebDriver.java:248)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.\u003cinit\u003e(RemoteWebDriver.java:164)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.\u003cinit\u003e(RemoteWebDriver.java:146)\r\n\tat StepDefinitions.Hooks.startTest(Hooks.java:50)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "I navigate to url",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDefinitions.NavigationSteps.i_navigate_to_url()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "name": "As a user, i want to validate if i can login with an valid account in US",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@SmokeScenario"
    },
    {
      "name": "@login"
    },
    {
      "name": "@regression"
    },
    {
      "name": "@SmokeTest"
    }
  ]
});
formatter.step({
  "name": "I click the account button",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitions.HeaderPageSteps.when_i_click_the_account_button()"
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
  "name": "I enter correct \"Thandos1311@outlook.com\" address",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitions.SignInPageSteps.i_enter_correct_email_address(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "I enter valid \"Abc123##\"",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitions.SignInPageSteps.i_enter_valid_password(java.lang.String)"
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
  "error_message": "java.lang.NullPointerException\r\n\tat StepDefinitions.Hooks.tearDown(Hooks.java:66)\r\n",
  "status": "failed"
});
formatter.scenarioOutline({
  "name": "As a user, i want to validate if i get an error message when i login with an invalid account",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@SmokeTest"
    }
  ]
});
formatter.step({
  "name": "I click the account button",
  "keyword": "And "
});
formatter.step({
  "name": "The account icon links to the account login page",
  "keyword": "Then "
});
formatter.step({
  "name": "I enter correct \"\u003cemail\u003e\" address",
  "keyword": "And "
});
formatter.step({
  "name": "I enter valid \"\u003cpassword\u003e\"",
  "keyword": "And "
});
formatter.step({
  "name": "I click the sign in button",
  "keyword": "And "
});
formatter.step({
  "name": "I see an error message",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "email",
        "password"
      ]
    },
    {
      "cells": [
        "thandos1503@gmail.com",
        "sadsfdfw"
      ]
    }
  ]
});
formatter.background({
  "name": "Launch website",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "error_message": "org.openqa.selenium.SessionNotCreatedException: Could not start a new session. Response code 500. Message: session not created: This version of ChromeDriver only supports Chrome version 118\nCurrent browser version is 120.0.6099.72 with binary path C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe\nBuild info: version: \u00274.0.0-alpha-2\u0027, revision: \u0027f148142cf8\u0027, time: \u00272019-07-01T21:30:10\u0027\nSystem info: host: \u0027DESKTOP-HJ4MA0G\u0027, ip: \u0027172.21.112.1\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002711.0.16.1\u0027\nDriver info: driver.version: unknown\nremote stacktrace: \tGetHandleVerifier [0x00007FF6550E8EF2+54786]\n\t(No symbol) [0x00007FF655055612]\n\t(No symbol) [0x00007FF654F0A64B]\n\t(No symbol) [0x00007FF654F3DC22]\n\t(No symbol) [0x00007FF654F3D07C]\n\t(No symbol) [0x00007FF654F37E03]\n\t(No symbol) [0x00007FF654F353BE]\n\t(No symbol) [0x00007FF654F73FBB]\n\t(No symbol) [0x00007FF654F73A30]\n\t(No symbol) [0x00007FF654F6BC43]\n\t(No symbol) [0x00007FF654F40941]\n\t(No symbol) [0x00007FF654F41B84]\n\tGetHandleVerifier [0x00007FF655437F52+3524194]\n\tGetHandleVerifier [0x00007FF65548D800+3874576]\n\tGetHandleVerifier [0x00007FF655485D7F+3843215]\n\tGetHandleVerifier [0x00007FF655185086+694166]\n\t(No symbol) [0x00007FF655060A88]\n\t(No symbol) [0x00007FF65505CA94]\n\t(No symbol) [0x00007FF65505CBC2]\n\t(No symbol) [0x00007FF65504CC83]\n\tBaseThreadInitThunk [0x00007FFDF8BE7344+20]\n\tRtlUserThreadStart [0x00007FFDF94626B1+33]\n\nBuild info: version: \u00274.1.3\u0027, revision: \u00277b1ebf28ef\u0027\nSystem info: host: \u0027DESKTOP-HJ4MA0G\u0027, ip: \u0027172.21.112.1\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002711.0.16.1\u0027\nDriver info: org.openqa.selenium.remote.RemoteWebDriver\nCommand: [null, newSession {capabilities\u003d[Capabilities {acceptInsecureCerts: true, browserName: chrome, goog:chromeOptions: {args: [--disable-gpu, disable-infobars, --disable-dev-shm-usage, --no-sandbox, --disable-extensions, start-maximized, --remote-allow-origins\u003d*], extensions: []}, platformName: windows}], desiredCapabilities\u003dCapabilities {acceptInsecureCerts: true, browserName: chrome, goog:chromeOptions: {args: [--disable-gpu, disable-infobars, --disable-dev-shm-usage, --no-sandbox, --disable-extensions, start-maximized, --remote-allow-origins\u003d*], extensions: []}, platform: WINDOWS}}]\nCapabilities {}\r\n\tat org.openqa.selenium.remote.ProtocolHandshake.createSession(ProtocolHandshake.java:126)\r\n\tat org.openqa.selenium.remote.ProtocolHandshake.createSession(ProtocolHandshake.java:84)\r\n\tat org.openqa.selenium.remote.ProtocolHandshake.createSession(ProtocolHandshake.java:62)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:156)\r\n\tat org.openqa.selenium.remote.TracedCommandExecutor.execute(TracedCommandExecutor.java:51)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:567)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.startSession(RemoteWebDriver.java:248)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.\u003cinit\u003e(RemoteWebDriver.java:164)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.\u003cinit\u003e(RemoteWebDriver.java:146)\r\n\tat StepDefinitions.Hooks.startTest(Hooks.java:50)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "I navigate to url",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDefinitions.NavigationSteps.i_navigate_to_url()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "name": "As a user, i want to validate if i get an error message when i login with an invalid account",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@SmokeScenario"
    },
    {
      "name": "@login"
    },
    {
      "name": "@regression"
    },
    {
      "name": "@SmokeTest"
    }
  ]
});
formatter.step({
  "name": "I click the account button",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitions.HeaderPageSteps.when_i_click_the_account_button()"
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
  "name": "I enter correct \"thandos1503@gmail.com\" address",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitions.SignInPageSteps.i_enter_correct_email_address(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "I enter valid \"sadsfdfw\"",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitions.SignInPageSteps.i_enter_valid_password(java.lang.String)"
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
  "name": "I see an error message",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitions.SignInPageSteps.i_see_an_error_message()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "error_message": "java.lang.NullPointerException\r\n\tat StepDefinitions.Hooks.tearDown(Hooks.java:66)\r\n",
  "status": "failed"
});
formatter.background({
  "name": "Launch website",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "error_message": "org.openqa.selenium.SessionNotCreatedException: Could not start a new session. Response code 500. Message: session not created: This version of ChromeDriver only supports Chrome version 118\nCurrent browser version is 120.0.6099.72 with binary path C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe\nBuild info: version: \u00274.0.0-alpha-2\u0027, revision: \u0027f148142cf8\u0027, time: \u00272019-07-01T21:30:10\u0027\nSystem info: host: \u0027DESKTOP-HJ4MA0G\u0027, ip: \u0027172.21.112.1\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002711.0.16.1\u0027\nDriver info: driver.version: unknown\nremote stacktrace: \tGetHandleVerifier [0x00007FF6550E8EF2+54786]\n\t(No symbol) [0x00007FF655055612]\n\t(No symbol) [0x00007FF654F0A64B]\n\t(No symbol) [0x00007FF654F3DC22]\n\t(No symbol) [0x00007FF654F3D07C]\n\t(No symbol) [0x00007FF654F37E03]\n\t(No symbol) [0x00007FF654F353BE]\n\t(No symbol) [0x00007FF654F73FBB]\n\t(No symbol) [0x00007FF654F73A30]\n\t(No symbol) [0x00007FF654F6BC43]\n\t(No symbol) [0x00007FF654F40941]\n\t(No symbol) [0x00007FF654F41B84]\n\tGetHandleVerifier [0x00007FF655437F52+3524194]\n\tGetHandleVerifier [0x00007FF65548D800+3874576]\n\tGetHandleVerifier [0x00007FF655485D7F+3843215]\n\tGetHandleVerifier [0x00007FF655185086+694166]\n\t(No symbol) [0x00007FF655060A88]\n\t(No symbol) [0x00007FF65505CA94]\n\t(No symbol) [0x00007FF65505CBC2]\n\t(No symbol) [0x00007FF65504CC83]\n\tBaseThreadInitThunk [0x00007FFDF8BE7344+20]\n\tRtlUserThreadStart [0x00007FFDF94626B1+33]\n\nBuild info: version: \u00274.1.3\u0027, revision: \u00277b1ebf28ef\u0027\nSystem info: host: \u0027DESKTOP-HJ4MA0G\u0027, ip: \u0027172.21.112.1\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002711.0.16.1\u0027\nDriver info: org.openqa.selenium.remote.RemoteWebDriver\nCommand: [null, newSession {capabilities\u003d[Capabilities {acceptInsecureCerts: true, browserName: chrome, goog:chromeOptions: {args: [--disable-gpu, disable-infobars, --disable-dev-shm-usage, --no-sandbox, --disable-extensions, start-maximized, --remote-allow-origins\u003d*], extensions: []}, platformName: windows}], desiredCapabilities\u003dCapabilities {acceptInsecureCerts: true, browserName: chrome, goog:chromeOptions: {args: [--disable-gpu, disable-infobars, --disable-dev-shm-usage, --no-sandbox, --disable-extensions, start-maximized, --remote-allow-origins\u003d*], extensions: []}, platform: WINDOWS}}]\nCapabilities {}\r\n\tat org.openqa.selenium.remote.ProtocolHandshake.createSession(ProtocolHandshake.java:126)\r\n\tat org.openqa.selenium.remote.ProtocolHandshake.createSession(ProtocolHandshake.java:84)\r\n\tat org.openqa.selenium.remote.ProtocolHandshake.createSession(ProtocolHandshake.java:62)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:156)\r\n\tat org.openqa.selenium.remote.TracedCommandExecutor.execute(TracedCommandExecutor.java:51)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:567)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.startSession(RemoteWebDriver.java:248)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.\u003cinit\u003e(RemoteWebDriver.java:164)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.\u003cinit\u003e(RemoteWebDriver.java:146)\r\n\tat StepDefinitions.Hooks.startTest(Hooks.java:50)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "I navigate to url",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDefinitions.NavigationSteps.i_navigate_to_url()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "name": "As a user, i want to validate if i am redirected to the privacy policy page when i click the Privacy policy link",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@SmokeScenario"
    },
    {
      "name": "@login"
    },
    {
      "name": "@regression"
    },
    {
      "name": "@SmokeTest"
    }
  ]
});
formatter.step({
  "name": "I click the account button",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitions.HeaderPageSteps.when_i_click_the_account_button()"
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
  "name": "I click the Privacy Policy",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitions.SignInPageSteps.i_click_the_Privacy_Policy()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "I am in the privacy page",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitions.SignInPageSteps.I_am_in_the_privacy_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "error_message": "java.lang.NullPointerException\r\n\tat StepDefinitions.Hooks.tearDown(Hooks.java:66)\r\n",
  "status": "failed"
});
formatter.background({
  "name": "Launch website",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "error_message": "org.openqa.selenium.SessionNotCreatedException: Could not start a new session. Response code 500. Message: session not created: This version of ChromeDriver only supports Chrome version 118\nCurrent browser version is 120.0.6099.72 with binary path C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe\nBuild info: version: \u00274.0.0-alpha-2\u0027, revision: \u0027f148142cf8\u0027, time: \u00272019-07-01T21:30:10\u0027\nSystem info: host: \u0027DESKTOP-HJ4MA0G\u0027, ip: \u0027172.21.112.1\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002711.0.16.1\u0027\nDriver info: driver.version: unknown\nremote stacktrace: \tGetHandleVerifier [0x00007FF6550E8EF2+54786]\n\t(No symbol) [0x00007FF655055612]\n\t(No symbol) [0x00007FF654F0A64B]\n\t(No symbol) [0x00007FF654F3DC22]\n\t(No symbol) [0x00007FF654F3D07C]\n\t(No symbol) [0x00007FF654F37E03]\n\t(No symbol) [0x00007FF654F353BE]\n\t(No symbol) [0x00007FF654F73FBB]\n\t(No symbol) [0x00007FF654F73A30]\n\t(No symbol) [0x00007FF654F6BC43]\n\t(No symbol) [0x00007FF654F40941]\n\t(No symbol) [0x00007FF654F41B84]\n\tGetHandleVerifier [0x00007FF655437F52+3524194]\n\tGetHandleVerifier [0x00007FF65548D800+3874576]\n\tGetHandleVerifier [0x00007FF655485D7F+3843215]\n\tGetHandleVerifier [0x00007FF655185086+694166]\n\t(No symbol) [0x00007FF655060A88]\n\t(No symbol) [0x00007FF65505CA94]\n\t(No symbol) [0x00007FF65505CBC2]\n\t(No symbol) [0x00007FF65504CC83]\n\tBaseThreadInitThunk [0x00007FFDF8BE7344+20]\n\tRtlUserThreadStart [0x00007FFDF94626B1+33]\n\nBuild info: version: \u00274.1.3\u0027, revision: \u00277b1ebf28ef\u0027\nSystem info: host: \u0027DESKTOP-HJ4MA0G\u0027, ip: \u0027172.21.112.1\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002711.0.16.1\u0027\nDriver info: org.openqa.selenium.remote.RemoteWebDriver\nCommand: [null, newSession {capabilities\u003d[Capabilities {acceptInsecureCerts: true, browserName: chrome, goog:chromeOptions: {args: [--disable-gpu, disable-infobars, --disable-dev-shm-usage, --no-sandbox, --disable-extensions, start-maximized, --remote-allow-origins\u003d*], extensions: []}, platformName: windows}], desiredCapabilities\u003dCapabilities {acceptInsecureCerts: true, browserName: chrome, goog:chromeOptions: {args: [--disable-gpu, disable-infobars, --disable-dev-shm-usage, --no-sandbox, --disable-extensions, start-maximized, --remote-allow-origins\u003d*], extensions: []}, platform: WINDOWS}}]\nCapabilities {}\r\n\tat org.openqa.selenium.remote.ProtocolHandshake.createSession(ProtocolHandshake.java:126)\r\n\tat org.openqa.selenium.remote.ProtocolHandshake.createSession(ProtocolHandshake.java:84)\r\n\tat org.openqa.selenium.remote.ProtocolHandshake.createSession(ProtocolHandshake.java:62)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:156)\r\n\tat org.openqa.selenium.remote.TracedCommandExecutor.execute(TracedCommandExecutor.java:51)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:567)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.startSession(RemoteWebDriver.java:248)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.\u003cinit\u003e(RemoteWebDriver.java:164)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.\u003cinit\u003e(RemoteWebDriver.java:146)\r\n\tat StepDefinitions.Hooks.startTest(Hooks.java:50)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "I navigate to url",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDefinitions.NavigationSteps.i_navigate_to_url()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "name": "As a user, i want to validate if i am redirected to the terms of use page when i click the terms of use link",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@SmokeScenario"
    },
    {
      "name": "@login"
    },
    {
      "name": "@regression"
    },
    {
      "name": "@SmokeTest"
    }
  ]
});
formatter.step({
  "name": "I click the account button",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitions.HeaderPageSteps.when_i_click_the_account_button()"
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
  "name": "I click the terms of use",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitions.SignInPageSteps.i_click_the_terms_of_use()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "I am in the terms of use page",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitions.SignInPageSteps.i_am_in_the_terms_of_use_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "error_message": "java.lang.NullPointerException\r\n\tat StepDefinitions.Hooks.tearDown(Hooks.java:66)\r\n",
  "status": "failed"
});
formatter.background({
  "name": "Launch website",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "error_message": "org.openqa.selenium.SessionNotCreatedException: Could not start a new session. Response code 500. Message: session not created: This version of ChromeDriver only supports Chrome version 118\nCurrent browser version is 120.0.6099.72 with binary path C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe\nBuild info: version: \u00274.0.0-alpha-2\u0027, revision: \u0027f148142cf8\u0027, time: \u00272019-07-01T21:30:10\u0027\nSystem info: host: \u0027DESKTOP-HJ4MA0G\u0027, ip: \u0027172.21.112.1\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002711.0.16.1\u0027\nDriver info: driver.version: unknown\nremote stacktrace: \tGetHandleVerifier [0x00007FF6550E8EF2+54786]\n\t(No symbol) [0x00007FF655055612]\n\t(No symbol) [0x00007FF654F0A64B]\n\t(No symbol) [0x00007FF654F3DC22]\n\t(No symbol) [0x00007FF654F3D07C]\n\t(No symbol) [0x00007FF654F37E03]\n\t(No symbol) [0x00007FF654F353BE]\n\t(No symbol) [0x00007FF654F73FBB]\n\t(No symbol) [0x00007FF654F73A30]\n\t(No symbol) [0x00007FF654F6BC43]\n\t(No symbol) [0x00007FF654F40941]\n\t(No symbol) [0x00007FF654F41B84]\n\tGetHandleVerifier [0x00007FF655437F52+3524194]\n\tGetHandleVerifier [0x00007FF65548D800+3874576]\n\tGetHandleVerifier [0x00007FF655485D7F+3843215]\n\tGetHandleVerifier [0x00007FF655185086+694166]\n\t(No symbol) [0x00007FF655060A88]\n\t(No symbol) [0x00007FF65505CA94]\n\t(No symbol) [0x00007FF65505CBC2]\n\t(No symbol) [0x00007FF65504CC83]\n\tBaseThreadInitThunk [0x00007FFDF8BE7344+20]\n\tRtlUserThreadStart [0x00007FFDF94626B1+33]\n\nBuild info: version: \u00274.1.3\u0027, revision: \u00277b1ebf28ef\u0027\nSystem info: host: \u0027DESKTOP-HJ4MA0G\u0027, ip: \u0027172.21.112.1\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002711.0.16.1\u0027\nDriver info: org.openqa.selenium.remote.RemoteWebDriver\nCommand: [null, newSession {capabilities\u003d[Capabilities {acceptInsecureCerts: true, browserName: chrome, goog:chromeOptions: {args: [--disable-gpu, disable-infobars, --disable-dev-shm-usage, --no-sandbox, --disable-extensions, start-maximized, --remote-allow-origins\u003d*], extensions: []}, platformName: windows}], desiredCapabilities\u003dCapabilities {acceptInsecureCerts: true, browserName: chrome, goog:chromeOptions: {args: [--disable-gpu, disable-infobars, --disable-dev-shm-usage, --no-sandbox, --disable-extensions, start-maximized, --remote-allow-origins\u003d*], extensions: []}, platform: WINDOWS}}]\nCapabilities {}\r\n\tat org.openqa.selenium.remote.ProtocolHandshake.createSession(ProtocolHandshake.java:126)\r\n\tat org.openqa.selenium.remote.ProtocolHandshake.createSession(ProtocolHandshake.java:84)\r\n\tat org.openqa.selenium.remote.ProtocolHandshake.createSession(ProtocolHandshake.java:62)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:156)\r\n\tat org.openqa.selenium.remote.TracedCommandExecutor.execute(TracedCommandExecutor.java:51)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:567)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.startSession(RemoteWebDriver.java:248)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.\u003cinit\u003e(RemoteWebDriver.java:164)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.\u003cinit\u003e(RemoteWebDriver.java:146)\r\n\tat StepDefinitions.Hooks.startTest(Hooks.java:50)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "I navigate to url",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDefinitions.NavigationSteps.i_navigate_to_url()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "name": "As a user, i want to validate if i am redirected to the forgot when i click the forgot link",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@SmokeScenario"
    },
    {
      "name": "@login"
    },
    {
      "name": "@regression"
    },
    {
      "name": "@SmokeTest"
    }
  ]
});
formatter.step({
  "name": "I click the account button",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitions.HeaderPageSteps.when_i_click_the_account_button()"
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
  "name": "I click the forgot",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitions.SignInPageSteps.i_click_the_forgot()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "I am in the forgot page",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitions.SignInPageSteps.i_am_in_the_forgot_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "error_message": "java.lang.NullPointerException\r\n\tat StepDefinitions.Hooks.tearDown(Hooks.java:66)\r\n",
  "status": "failed"
});
formatter.scenarioOutline({
  "name": "As a user, i want to validate if i can see the My Registered Product column",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@SmokeTest"
    }
  ]
});
formatter.step({
  "name": "I click the account button",
  "keyword": "And "
});
formatter.step({
  "name": "The account icon links to the account login page",
  "keyword": "Then "
});
formatter.step({
  "name": "I enter correct \"\u003cemail\u003e\" address",
  "keyword": "And "
});
formatter.step({
  "name": "I enter valid \"\u003cpassword\u003e\"",
  "keyword": "And "
});
formatter.step({
  "name": "I click the sign in button",
  "keyword": "And "
});
formatter.step({
  "name": "I can see the My Registered product panel",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "email",
        "password"
      ]
    },
    {
      "cells": [
        "Thandos1311@outlook.com",
        "Abc123##"
      ]
    }
  ]
});
formatter.background({
  "name": "Launch website",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "error_message": "org.openqa.selenium.SessionNotCreatedException: Could not start a new session. Response code 500. Message: session not created: This version of ChromeDriver only supports Chrome version 118\nCurrent browser version is 120.0.6099.72 with binary path C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe\nBuild info: version: \u00274.0.0-alpha-2\u0027, revision: \u0027f148142cf8\u0027, time: \u00272019-07-01T21:30:10\u0027\nSystem info: host: \u0027DESKTOP-HJ4MA0G\u0027, ip: \u0027172.21.112.1\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002711.0.16.1\u0027\nDriver info: driver.version: unknown\nremote stacktrace: \tGetHandleVerifier [0x00007FF6550E8EF2+54786]\n\t(No symbol) [0x00007FF655055612]\n\t(No symbol) [0x00007FF654F0A64B]\n\t(No symbol) [0x00007FF654F3DC22]\n\t(No symbol) [0x00007FF654F3D07C]\n\t(No symbol) [0x00007FF654F37E03]\n\t(No symbol) [0x00007FF654F353BE]\n\t(No symbol) [0x00007FF654F73FBB]\n\t(No symbol) [0x00007FF654F73A30]\n\t(No symbol) [0x00007FF654F6BC43]\n\t(No symbol) [0x00007FF654F40941]\n\t(No symbol) [0x00007FF654F41B84]\n\tGetHandleVerifier [0x00007FF655437F52+3524194]\n\tGetHandleVerifier [0x00007FF65548D800+3874576]\n\tGetHandleVerifier [0x00007FF655485D7F+3843215]\n\tGetHandleVerifier [0x00007FF655185086+694166]\n\t(No symbol) [0x00007FF655060A88]\n\t(No symbol) [0x00007FF65505CA94]\n\t(No symbol) [0x00007FF65505CBC2]\n\t(No symbol) [0x00007FF65504CC83]\n\tBaseThreadInitThunk [0x00007FFDF8BE7344+20]\n\tRtlUserThreadStart [0x00007FFDF94626B1+33]\n\nBuild info: version: \u00274.1.3\u0027, revision: \u00277b1ebf28ef\u0027\nSystem info: host: \u0027DESKTOP-HJ4MA0G\u0027, ip: \u0027172.21.112.1\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002711.0.16.1\u0027\nDriver info: org.openqa.selenium.remote.RemoteWebDriver\nCommand: [null, newSession {capabilities\u003d[Capabilities {acceptInsecureCerts: true, browserName: chrome, goog:chromeOptions: {args: [--disable-gpu, disable-infobars, --disable-dev-shm-usage, --no-sandbox, --disable-extensions, start-maximized, --remote-allow-origins\u003d*], extensions: []}, platformName: windows}], desiredCapabilities\u003dCapabilities {acceptInsecureCerts: true, browserName: chrome, goog:chromeOptions: {args: [--disable-gpu, disable-infobars, --disable-dev-shm-usage, --no-sandbox, --disable-extensions, start-maximized, --remote-allow-origins\u003d*], extensions: []}, platform: WINDOWS}}]\nCapabilities {}\r\n\tat org.openqa.selenium.remote.ProtocolHandshake.createSession(ProtocolHandshake.java:126)\r\n\tat org.openqa.selenium.remote.ProtocolHandshake.createSession(ProtocolHandshake.java:84)\r\n\tat org.openqa.selenium.remote.ProtocolHandshake.createSession(ProtocolHandshake.java:62)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:156)\r\n\tat org.openqa.selenium.remote.TracedCommandExecutor.execute(TracedCommandExecutor.java:51)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:567)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.startSession(RemoteWebDriver.java:248)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.\u003cinit\u003e(RemoteWebDriver.java:164)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.\u003cinit\u003e(RemoteWebDriver.java:146)\r\n\tat StepDefinitions.Hooks.startTest(Hooks.java:50)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "I navigate to url",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDefinitions.NavigationSteps.i_navigate_to_url()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "name": "As a user, i want to validate if i can see the My Registered Product column",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@SmokeScenario"
    },
    {
      "name": "@login"
    },
    {
      "name": "@regression"
    },
    {
      "name": "@SmokeTest"
    }
  ]
});
formatter.step({
  "name": "I click the account button",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitions.HeaderPageSteps.when_i_click_the_account_button()"
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
  "name": "I enter correct \"Thandos1311@outlook.com\" address",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitions.SignInPageSteps.i_enter_correct_email_address(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "I enter valid \"Abc123##\"",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitions.SignInPageSteps.i_enter_valid_password(java.lang.String)"
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
  "name": "I can see the My Registered product panel",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitions.SignInPageSteps.i_can_see_the_My_Registered_product_panel()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "error_message": "java.lang.NullPointerException\r\n\tat StepDefinitions.Hooks.tearDown(Hooks.java:66)\r\n",
  "status": "failed"
});
formatter.scenarioOutline({
  "name": "As a user, i want to validate if i am On the My Product Page i can click register new product",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@SmokeTest"
    }
  ]
});
formatter.step({
  "name": "I click the account button",
  "keyword": "And "
});
formatter.step({
  "name": "The account icon links to the account login page",
  "keyword": "Then "
});
formatter.step({
  "name": "I enter correct \"\u003cemail\u003e\" address",
  "keyword": "And "
});
formatter.step({
  "name": "I enter valid \"\u003cpassword\u003e\"",
  "keyword": "And "
});
formatter.step({
  "name": "I click the sign in button",
  "keyword": "And "
});
formatter.step({
  "name": "I can see the My Registered product panel",
  "keyword": "Then "
});
formatter.step({
  "name": "I click the register new product button",
  "keyword": "And "
});
formatter.step({
  "name": "I should be on the Product registration page",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "email",
        "password"
      ]
    },
    {
      "cells": [
        "Thandos1311@outlook.com",
        "Abc123##"
      ]
    }
  ]
});
formatter.background({
  "name": "Launch website",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "error_message": "org.openqa.selenium.SessionNotCreatedException: Could not start a new session. Response code 500. Message: session not created: This version of ChromeDriver only supports Chrome version 118\nCurrent browser version is 120.0.6099.72 with binary path C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe\nBuild info: version: \u00274.0.0-alpha-2\u0027, revision: \u0027f148142cf8\u0027, time: \u00272019-07-01T21:30:10\u0027\nSystem info: host: \u0027DESKTOP-HJ4MA0G\u0027, ip: \u0027172.21.112.1\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002711.0.16.1\u0027\nDriver info: driver.version: unknown\nremote stacktrace: \tGetHandleVerifier [0x00007FF6550E8EF2+54786]\n\t(No symbol) [0x00007FF655055612]\n\t(No symbol) [0x00007FF654F0A64B]\n\t(No symbol) [0x00007FF654F3DC22]\n\t(No symbol) [0x00007FF654F3D07C]\n\t(No symbol) [0x00007FF654F37E03]\n\t(No symbol) [0x00007FF654F353BE]\n\t(No symbol) [0x00007FF654F73FBB]\n\t(No symbol) [0x00007FF654F73A30]\n\t(No symbol) [0x00007FF654F6BC43]\n\t(No symbol) [0x00007FF654F40941]\n\t(No symbol) [0x00007FF654F41B84]\n\tGetHandleVerifier [0x00007FF655437F52+3524194]\n\tGetHandleVerifier [0x00007FF65548D800+3874576]\n\tGetHandleVerifier [0x00007FF655485D7F+3843215]\n\tGetHandleVerifier [0x00007FF655185086+694166]\n\t(No symbol) [0x00007FF655060A88]\n\t(No symbol) [0x00007FF65505CA94]\n\t(No symbol) [0x00007FF65505CBC2]\n\t(No symbol) [0x00007FF65504CC83]\n\tBaseThreadInitThunk [0x00007FFDF8BE7344+20]\n\tRtlUserThreadStart [0x00007FFDF94626B1+33]\n\nBuild info: version: \u00274.1.3\u0027, revision: \u00277b1ebf28ef\u0027\nSystem info: host: \u0027DESKTOP-HJ4MA0G\u0027, ip: \u0027172.21.112.1\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002711.0.16.1\u0027\nDriver info: org.openqa.selenium.remote.RemoteWebDriver\nCommand: [null, newSession {capabilities\u003d[Capabilities {acceptInsecureCerts: true, browserName: chrome, goog:chromeOptions: {args: [--disable-gpu, disable-infobars, --disable-dev-shm-usage, --no-sandbox, --disable-extensions, start-maximized, --remote-allow-origins\u003d*], extensions: []}, platformName: windows}], desiredCapabilities\u003dCapabilities {acceptInsecureCerts: true, browserName: chrome, goog:chromeOptions: {args: [--disable-gpu, disable-infobars, --disable-dev-shm-usage, --no-sandbox, --disable-extensions, start-maximized, --remote-allow-origins\u003d*], extensions: []}, platform: WINDOWS}}]\nCapabilities {}\r\n\tat org.openqa.selenium.remote.ProtocolHandshake.createSession(ProtocolHandshake.java:126)\r\n\tat org.openqa.selenium.remote.ProtocolHandshake.createSession(ProtocolHandshake.java:84)\r\n\tat org.openqa.selenium.remote.ProtocolHandshake.createSession(ProtocolHandshake.java:62)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:156)\r\n\tat org.openqa.selenium.remote.TracedCommandExecutor.execute(TracedCommandExecutor.java:51)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:567)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.startSession(RemoteWebDriver.java:248)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.\u003cinit\u003e(RemoteWebDriver.java:164)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.\u003cinit\u003e(RemoteWebDriver.java:146)\r\n\tat StepDefinitions.Hooks.startTest(Hooks.java:50)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "I navigate to url",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDefinitions.NavigationSteps.i_navigate_to_url()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "name": "As a user, i want to validate if i am On the My Product Page i can click register new product",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@SmokeScenario"
    },
    {
      "name": "@login"
    },
    {
      "name": "@regression"
    },
    {
      "name": "@SmokeTest"
    }
  ]
});
formatter.step({
  "name": "I click the account button",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitions.HeaderPageSteps.when_i_click_the_account_button()"
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
  "name": "I enter correct \"Thandos1311@outlook.com\" address",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitions.SignInPageSteps.i_enter_correct_email_address(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "I enter valid \"Abc123##\"",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitions.SignInPageSteps.i_enter_valid_password(java.lang.String)"
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
  "name": "I can see the My Registered product panel",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitions.SignInPageSteps.i_can_see_the_My_Registered_product_panel()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "I click the register new product button",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitions.SignInPageSteps.i_click_the_register_new_product_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "I should be on the Product registration page",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitions.SignInPageSteps.i_should_be_on_the_Product_registration_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "error_message": "java.lang.NullPointerException\r\n\tat StepDefinitions.Hooks.tearDown(Hooks.java:66)\r\n",
  "status": "failed"
});
formatter.scenarioOutline({
  "name": "As a user, i want to validate if i See the Full Dropdown Menu for the account on the top right",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@SmokeTest"
    }
  ]
});
formatter.step({
  "name": "I click the account button",
  "keyword": "And "
});
formatter.step({
  "name": "The account icon links to the account login page",
  "keyword": "Then "
});
formatter.step({
  "name": "I enter correct \"\u003cemail\u003e\" address",
  "keyword": "And "
});
formatter.step({
  "name": "I enter valid \"\u003cpassword\u003e\"",
  "keyword": "And "
});
formatter.step({
  "name": "I click the sign in button",
  "keyword": "And "
});
formatter.step({
  "name": "I click the logged in account button",
  "keyword": "And "
});
formatter.step({
  "name": "I Click My account",
  "keyword": "And "
});
formatter.step({
  "name": "I Must be in My account page",
  "keyword": "Then "
});
formatter.step({
  "name": "I click the logged in account button",
  "keyword": "And "
});
formatter.step({
  "name": "I Click My product",
  "keyword": "And "
});
formatter.step({
  "name": "I Must be in my product page",
  "keyword": "Then "
});
formatter.step({
  "name": "I click the logged in account button",
  "keyword": "And "
});
formatter.step({
  "name": "I Click My offers",
  "keyword": "And "
});
formatter.step({
  "name": "I Must be in My offers page",
  "keyword": "Then "
});
formatter.step({
  "name": "I click the logged in account button",
  "keyword": "And "
});
formatter.step({
  "name": "I Click My returns",
  "keyword": "And "
});
formatter.step({
  "name": "I Must be in My returns page",
  "keyword": "Then "
});
formatter.step({
  "name": "I click the logged in account button",
  "keyword": "And "
});
formatter.step({
  "name": "I Click My information",
  "keyword": "And "
});
formatter.step({
  "name": "I Must be in My information page",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "email",
        "password"
      ]
    },
    {
      "cells": [
        "Thandos1311@outlook.com",
        "Abc123##"
      ]
    }
  ]
});
formatter.background({
  "name": "Launch website",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "error_message": "org.openqa.selenium.SessionNotCreatedException: Could not start a new session. Response code 500. Message: session not created: This version of ChromeDriver only supports Chrome version 118\nCurrent browser version is 120.0.6099.72 with binary path C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe\nBuild info: version: \u00274.0.0-alpha-2\u0027, revision: \u0027f148142cf8\u0027, time: \u00272019-07-01T21:30:10\u0027\nSystem info: host: \u0027DESKTOP-HJ4MA0G\u0027, ip: \u0027172.21.112.1\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002711.0.16.1\u0027\nDriver info: driver.version: unknown\nremote stacktrace: \tGetHandleVerifier [0x00007FF6550E8EF2+54786]\n\t(No symbol) [0x00007FF655055612]\n\t(No symbol) [0x00007FF654F0A64B]\n\t(No symbol) [0x00007FF654F3DC22]\n\t(No symbol) [0x00007FF654F3D07C]\n\t(No symbol) [0x00007FF654F37E03]\n\t(No symbol) [0x00007FF654F353BE]\n\t(No symbol) [0x00007FF654F73FBB]\n\t(No symbol) [0x00007FF654F73A30]\n\t(No symbol) [0x00007FF654F6BC43]\n\t(No symbol) [0x00007FF654F40941]\n\t(No symbol) [0x00007FF654F41B84]\n\tGetHandleVerifier [0x00007FF655437F52+3524194]\n\tGetHandleVerifier [0x00007FF65548D800+3874576]\n\tGetHandleVerifier [0x00007FF655485D7F+3843215]\n\tGetHandleVerifier [0x00007FF655185086+694166]\n\t(No symbol) [0x00007FF655060A88]\n\t(No symbol) [0x00007FF65505CA94]\n\t(No symbol) [0x00007FF65505CBC2]\n\t(No symbol) [0x00007FF65504CC83]\n\tBaseThreadInitThunk [0x00007FFDF8BE7344+20]\n\tRtlUserThreadStart [0x00007FFDF94626B1+33]\n\nBuild info: version: \u00274.1.3\u0027, revision: \u00277b1ebf28ef\u0027\nSystem info: host: \u0027DESKTOP-HJ4MA0G\u0027, ip: \u0027172.21.112.1\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002711.0.16.1\u0027\nDriver info: org.openqa.selenium.remote.RemoteWebDriver\nCommand: [null, newSession {capabilities\u003d[Capabilities {acceptInsecureCerts: true, browserName: chrome, goog:chromeOptions: {args: [--disable-gpu, disable-infobars, --disable-dev-shm-usage, --no-sandbox, --disable-extensions, start-maximized, --remote-allow-origins\u003d*], extensions: []}, platformName: windows}], desiredCapabilities\u003dCapabilities {acceptInsecureCerts: true, browserName: chrome, goog:chromeOptions: {args: [--disable-gpu, disable-infobars, --disable-dev-shm-usage, --no-sandbox, --disable-extensions, start-maximized, --remote-allow-origins\u003d*], extensions: []}, platform: WINDOWS}}]\nCapabilities {}\r\n\tat org.openqa.selenium.remote.ProtocolHandshake.createSession(ProtocolHandshake.java:126)\r\n\tat org.openqa.selenium.remote.ProtocolHandshake.createSession(ProtocolHandshake.java:84)\r\n\tat org.openqa.selenium.remote.ProtocolHandshake.createSession(ProtocolHandshake.java:62)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:156)\r\n\tat org.openqa.selenium.remote.TracedCommandExecutor.execute(TracedCommandExecutor.java:51)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:567)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.startSession(RemoteWebDriver.java:248)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.\u003cinit\u003e(RemoteWebDriver.java:164)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.\u003cinit\u003e(RemoteWebDriver.java:146)\r\n\tat StepDefinitions.Hooks.startTest(Hooks.java:50)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "I navigate to url",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDefinitions.NavigationSteps.i_navigate_to_url()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "name": "As a user, i want to validate if i See the Full Dropdown Menu for the account on the top right",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@SmokeScenario"
    },
    {
      "name": "@login"
    },
    {
      "name": "@regression"
    },
    {
      "name": "@SmokeTest"
    }
  ]
});
formatter.step({
  "name": "I click the account button",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitions.HeaderPageSteps.when_i_click_the_account_button()"
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
  "name": "I enter correct \"Thandos1311@outlook.com\" address",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitions.SignInPageSteps.i_enter_correct_email_address(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "I enter valid \"Abc123##\"",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitions.SignInPageSteps.i_enter_valid_password(java.lang.String)"
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
  "name": "I click the logged in account button",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitions.HeaderPageSteps.I_click_the_logged_in_account_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "I Click My account",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitions.SignInPageSteps.i_Click_My_account()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "I Must be in My account page",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitions.SignInPageSteps.i_Must_be_in_My_account_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "I click the logged in account button",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitions.HeaderPageSteps.I_click_the_logged_in_account_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "I Click My product",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitions.SignInPageSteps.i_Click_My_product()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "I Must be in my product page",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitions.SignInPageSteps.i_Must_be_in_my_product_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "I click the logged in account button",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitions.HeaderPageSteps.I_click_the_logged_in_account_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "I Click My offers",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitions.SignInPageSteps.i_Click_My_offers()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "I Must be in My offers page",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitions.SignInPageSteps.i_Must_be_in_My_offers_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "I click the logged in account button",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitions.HeaderPageSteps.I_click_the_logged_in_account_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "I Click My returns",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitions.SignInPageSteps.i_Click_My_returns()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "I Must be in My returns page",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitions.SignInPageSteps.i_Must_be_in_My_returns_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "I click the logged in account button",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitions.HeaderPageSteps.I_click_the_logged_in_account_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "I Click My information",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitions.SignInPageSteps.i_Click_My_information()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "I Must be in My information page",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitions.SignInPageSteps.i_Must_be_in_My_information_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "error_message": "java.lang.NullPointerException\r\n\tat StepDefinitions.Hooks.tearDown(Hooks.java:66)\r\n",
  "status": "failed"
});
formatter.scenarioOutline({
  "name": "As a user, i want to validate On the My Info page, I can upate my DOB and receive an error if I\u0027m not 18+",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@debug"
    }
  ]
});
formatter.step({
  "name": "I click the account button",
  "keyword": "And "
});
formatter.step({
  "name": "The account icon links to the account login page",
  "keyword": "Then "
});
formatter.step({
  "name": "I enter correct \"\u003cemail\u003e\" address",
  "keyword": "And "
});
formatter.step({
  "name": "I enter valid \"\u003cpassword\u003e\"",
  "keyword": "And "
});
formatter.step({
  "name": "I click the sign in button",
  "keyword": "And "
});
formatter.step({
  "name": "i have successfully logged in",
  "keyword": "Then "
});
formatter.step({
  "name": "I click the logged in account button",
  "keyword": "And "
});
formatter.step({
  "name": "I Click My information",
  "keyword": "And "
});
formatter.step({
  "name": "I Must be in My information page",
  "keyword": "Then "
});
formatter.step({
  "name": "I enter YOB of \"2020\"",
  "keyword": "And "
});
formatter.step({
  "name": "I Click Save",
  "keyword": "And "
});
formatter.step({
  "name": "I Must see and error message pop up",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "email",
        "password"
      ]
    },
    {
      "cells": [
        "Thandos1311@outlook.com",
        "Abc123##"
      ]
    }
  ]
});
formatter.background({
  "name": "Launch website",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "error_message": "org.openqa.selenium.SessionNotCreatedException: Could not start a new session. Response code 500. Message: session not created: This version of ChromeDriver only supports Chrome version 118\nCurrent browser version is 120.0.6099.72 with binary path C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe\nBuild info: version: \u00274.0.0-alpha-2\u0027, revision: \u0027f148142cf8\u0027, time: \u00272019-07-01T21:30:10\u0027\nSystem info: host: \u0027DESKTOP-HJ4MA0G\u0027, ip: \u0027172.21.112.1\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002711.0.16.1\u0027\nDriver info: driver.version: unknown\nremote stacktrace: \tGetHandleVerifier [0x00007FF6550E8EF2+54786]\n\t(No symbol) [0x00007FF655055612]\n\t(No symbol) [0x00007FF654F0A64B]\n\t(No symbol) [0x00007FF654F3DC22]\n\t(No symbol) [0x00007FF654F3D07C]\n\t(No symbol) [0x00007FF654F37E03]\n\t(No symbol) [0x00007FF654F353BE]\n\t(No symbol) [0x00007FF654F73FBB]\n\t(No symbol) [0x00007FF654F73A30]\n\t(No symbol) [0x00007FF654F6BC43]\n\t(No symbol) [0x00007FF654F40941]\n\t(No symbol) [0x00007FF654F41B84]\n\tGetHandleVerifier [0x00007FF655437F52+3524194]\n\tGetHandleVerifier [0x00007FF65548D800+3874576]\n\tGetHandleVerifier [0x00007FF655485D7F+3843215]\n\tGetHandleVerifier [0x00007FF655185086+694166]\n\t(No symbol) [0x00007FF655060A88]\n\t(No symbol) [0x00007FF65505CA94]\n\t(No symbol) [0x00007FF65505CBC2]\n\t(No symbol) [0x00007FF65504CC83]\n\tBaseThreadInitThunk [0x00007FFDF8BE7344+20]\n\tRtlUserThreadStart [0x00007FFDF94626B1+33]\n\nBuild info: version: \u00274.1.3\u0027, revision: \u00277b1ebf28ef\u0027\nSystem info: host: \u0027DESKTOP-HJ4MA0G\u0027, ip: \u0027172.21.112.1\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002711.0.16.1\u0027\nDriver info: org.openqa.selenium.remote.RemoteWebDriver\nCommand: [null, newSession {capabilities\u003d[Capabilities {acceptInsecureCerts: true, browserName: chrome, goog:chromeOptions: {args: [--disable-gpu, disable-infobars, --disable-dev-shm-usage, --no-sandbox, --disable-extensions, start-maximized, --remote-allow-origins\u003d*], extensions: []}, platformName: windows}], desiredCapabilities\u003dCapabilities {acceptInsecureCerts: true, browserName: chrome, goog:chromeOptions: {args: [--disable-gpu, disable-infobars, --disable-dev-shm-usage, --no-sandbox, --disable-extensions, start-maximized, --remote-allow-origins\u003d*], extensions: []}, platform: WINDOWS}}]\nCapabilities {}\r\n\tat org.openqa.selenium.remote.ProtocolHandshake.createSession(ProtocolHandshake.java:126)\r\n\tat org.openqa.selenium.remote.ProtocolHandshake.createSession(ProtocolHandshake.java:84)\r\n\tat org.openqa.selenium.remote.ProtocolHandshake.createSession(ProtocolHandshake.java:62)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:156)\r\n\tat org.openqa.selenium.remote.TracedCommandExecutor.execute(TracedCommandExecutor.java:51)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:567)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.startSession(RemoteWebDriver.java:248)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.\u003cinit\u003e(RemoteWebDriver.java:164)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.\u003cinit\u003e(RemoteWebDriver.java:146)\r\n\tat StepDefinitions.Hooks.startTest(Hooks.java:50)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "I navigate to url",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDefinitions.NavigationSteps.i_navigate_to_url()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "name": "As a user, i want to validate On the My Info page, I can upate my DOB and receive an error if I\u0027m not 18+",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@SmokeScenario"
    },
    {
      "name": "@login"
    },
    {
      "name": "@regression"
    },
    {
      "name": "@debug"
    }
  ]
});
formatter.step({
  "name": "I click the account button",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitions.HeaderPageSteps.when_i_click_the_account_button()"
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
  "name": "I enter correct \"Thandos1311@outlook.com\" address",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitions.SignInPageSteps.i_enter_correct_email_address(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "I enter valid \"Abc123##\"",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitions.SignInPageSteps.i_enter_valid_password(java.lang.String)"
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
  "name": "I click the logged in account button",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitions.HeaderPageSteps.I_click_the_logged_in_account_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "I Click My information",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitions.SignInPageSteps.i_Click_My_information()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "I Must be in My information page",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitions.SignInPageSteps.i_Must_be_in_My_information_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "I enter YOB of \"2020\"",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitions.SignInPageSteps.i_enter_YOB_of(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "I Click Save",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitions.SignInPageSteps.i_Click_Save()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "I Must see and error message pop up",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitions.SignInPageSteps.i_Must_see_and_error_message_pop_up()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "error_message": "java.lang.NullPointerException\r\n\tat StepDefinitions.Hooks.tearDown(Hooks.java:66)\r\n",
  "status": "failed"
});
formatter.scenarioOutline({
  "name": "As a user, i want to validate On the My Info page, I can update my name",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@SmokeTest"
    }
  ]
});
formatter.step({
  "name": "I click the account button",
  "keyword": "And "
});
formatter.step({
  "name": "The account icon links to the account login page",
  "keyword": "Then "
});
formatter.step({
  "name": "I enter correct \"\u003cemail\u003e\" address",
  "keyword": "And "
});
formatter.step({
  "name": "I enter valid \"\u003cpassword\u003e\"",
  "keyword": "And "
});
formatter.step({
  "name": "I click the sign in button",
  "keyword": "And "
});
formatter.step({
  "name": "I click the logged in account button",
  "keyword": "And "
});
formatter.step({
  "name": "I Click My information",
  "keyword": "And "
});
formatter.step({
  "name": "I Must be in My information page",
  "keyword": "Then "
});
formatter.step({
  "name": "I enter new firstname",
  "keyword": "And "
});
formatter.step({
  "name": "I Click Save",
  "keyword": "And "
});
formatter.step({
  "name": "I Must Update User info PopUp",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "email",
        "password"
      ]
    },
    {
      "cells": [
        "thandos1503@gmail.com",
        "Abc123##"
      ]
    }
  ]
});
formatter.background({
  "name": "Launch website",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "error_message": "org.openqa.selenium.SessionNotCreatedException: Could not start a new session. Response code 500. Message: session not created: This version of ChromeDriver only supports Chrome version 118\nCurrent browser version is 120.0.6099.72 with binary path C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe\nBuild info: version: \u00274.0.0-alpha-2\u0027, revision: \u0027f148142cf8\u0027, time: \u00272019-07-01T21:30:10\u0027\nSystem info: host: \u0027DESKTOP-HJ4MA0G\u0027, ip: \u0027172.21.112.1\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002711.0.16.1\u0027\nDriver info: driver.version: unknown\nremote stacktrace: \tGetHandleVerifier [0x00007FF6550E8EF2+54786]\n\t(No symbol) [0x00007FF655055612]\n\t(No symbol) [0x00007FF654F0A64B]\n\t(No symbol) [0x00007FF654F3DC22]\n\t(No symbol) [0x00007FF654F3D07C]\n\t(No symbol) [0x00007FF654F37E03]\n\t(No symbol) [0x00007FF654F353BE]\n\t(No symbol) [0x00007FF654F73FBB]\n\t(No symbol) [0x00007FF654F73A30]\n\t(No symbol) [0x00007FF654F6BC43]\n\t(No symbol) [0x00007FF654F40941]\n\t(No symbol) [0x00007FF654F41B84]\n\tGetHandleVerifier [0x00007FF655437F52+3524194]\n\tGetHandleVerifier [0x00007FF65548D800+3874576]\n\tGetHandleVerifier [0x00007FF655485D7F+3843215]\n\tGetHandleVerifier [0x00007FF655185086+694166]\n\t(No symbol) [0x00007FF655060A88]\n\t(No symbol) [0x00007FF65505CA94]\n\t(No symbol) [0x00007FF65505CBC2]\n\t(No symbol) [0x00007FF65504CC83]\n\tBaseThreadInitThunk [0x00007FFDF8BE7344+20]\n\tRtlUserThreadStart [0x00007FFDF94626B1+33]\n\nBuild info: version: \u00274.1.3\u0027, revision: \u00277b1ebf28ef\u0027\nSystem info: host: \u0027DESKTOP-HJ4MA0G\u0027, ip: \u0027172.21.112.1\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002711.0.16.1\u0027\nDriver info: org.openqa.selenium.remote.RemoteWebDriver\nCommand: [null, newSession {capabilities\u003d[Capabilities {acceptInsecureCerts: true, browserName: chrome, goog:chromeOptions: {args: [--disable-gpu, disable-infobars, --disable-dev-shm-usage, --no-sandbox, --disable-extensions, start-maximized, --remote-allow-origins\u003d*], extensions: []}, platformName: windows}], desiredCapabilities\u003dCapabilities {acceptInsecureCerts: true, browserName: chrome, goog:chromeOptions: {args: [--disable-gpu, disable-infobars, --disable-dev-shm-usage, --no-sandbox, --disable-extensions, start-maximized, --remote-allow-origins\u003d*], extensions: []}, platform: WINDOWS}}]\nCapabilities {}\r\n\tat org.openqa.selenium.remote.ProtocolHandshake.createSession(ProtocolHandshake.java:126)\r\n\tat org.openqa.selenium.remote.ProtocolHandshake.createSession(ProtocolHandshake.java:84)\r\n\tat org.openqa.selenium.remote.ProtocolHandshake.createSession(ProtocolHandshake.java:62)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:156)\r\n\tat org.openqa.selenium.remote.TracedCommandExecutor.execute(TracedCommandExecutor.java:51)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:567)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.startSession(RemoteWebDriver.java:248)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.\u003cinit\u003e(RemoteWebDriver.java:164)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.\u003cinit\u003e(RemoteWebDriver.java:146)\r\n\tat StepDefinitions.Hooks.startTest(Hooks.java:50)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "I navigate to url",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDefinitions.NavigationSteps.i_navigate_to_url()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "name": "As a user, i want to validate On the My Info page, I can update my name",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@SmokeScenario"
    },
    {
      "name": "@login"
    },
    {
      "name": "@regression"
    },
    {
      "name": "@SmokeTest"
    }
  ]
});
formatter.step({
  "name": "I click the account button",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitions.HeaderPageSteps.when_i_click_the_account_button()"
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
  "name": "I enter correct \"thandos1503@gmail.com\" address",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitions.SignInPageSteps.i_enter_correct_email_address(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "I enter valid \"Abc123##\"",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitions.SignInPageSteps.i_enter_valid_password(java.lang.String)"
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
  "name": "I click the logged in account button",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitions.HeaderPageSteps.I_click_the_logged_in_account_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "I Click My information",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitions.SignInPageSteps.i_Click_My_information()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "I Must be in My information page",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitions.SignInPageSteps.i_Must_be_in_My_information_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "I enter new firstname",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitions.SignInPageSteps.i_enter_new_firstname()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "I Click Save",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitions.SignInPageSteps.i_Click_Save()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "I Must Update User info PopUp",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitions.SignInPageSteps.i_Must_Update_User_info_PopUp()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "error_message": "java.lang.NullPointerException\r\n\tat StepDefinitions.Hooks.tearDown(Hooks.java:66)\r\n",
  "status": "failed"
});
formatter.scenarioOutline({
  "name": "As a user, i want to validate On the My Info page, I can update my interests",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@SmokeTest"
    }
  ]
});
formatter.step({
  "name": "I click the account button",
  "keyword": "And "
});
formatter.step({
  "name": "The account icon links to the account login page",
  "keyword": "Then "
});
formatter.step({
  "name": "I enter correct \"\u003cemail\u003e\" address",
  "keyword": "And "
});
formatter.step({
  "name": "I enter valid \"\u003cpassword\u003e\"",
  "keyword": "And "
});
formatter.step({
  "name": "I click the sign in button",
  "keyword": "And "
});
formatter.step({
  "name": "I click the logged in account button",
  "keyword": "And "
});
formatter.step({
  "name": "I Click My information",
  "keyword": "And "
});
formatter.step({
  "name": "I Must be in My information page",
  "keyword": "Then "
});
formatter.step({
  "name": "I click new interest",
  "keyword": "And "
});
formatter.step({
  "name": "I Click Save",
  "keyword": "And "
});
formatter.step({
  "name": "I Must Update User info PopUp",
  "keyword": "Then "
});
formatter.step({
  "name": "I click new interest",
  "keyword": "And "
});
formatter.step({
  "name": "I Click Save",
  "keyword": "And "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "email",
        "password"
      ]
    },
    {
      "cells": [
        "Thandos1311@outlook.com",
        "Abc123##"
      ]
    }
  ]
});
formatter.background({
  "name": "Launch website",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "error_message": "org.openqa.selenium.SessionNotCreatedException: Could not start a new session. Response code 500. Message: session not created: This version of ChromeDriver only supports Chrome version 118\nCurrent browser version is 120.0.6099.72 with binary path C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe\nBuild info: version: \u00274.0.0-alpha-2\u0027, revision: \u0027f148142cf8\u0027, time: \u00272019-07-01T21:30:10\u0027\nSystem info: host: \u0027DESKTOP-HJ4MA0G\u0027, ip: \u0027172.21.112.1\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002711.0.16.1\u0027\nDriver info: driver.version: unknown\nremote stacktrace: \tGetHandleVerifier [0x00007FF6550E8EF2+54786]\n\t(No symbol) [0x00007FF655055612]\n\t(No symbol) [0x00007FF654F0A64B]\n\t(No symbol) [0x00007FF654F3DC22]\n\t(No symbol) [0x00007FF654F3D07C]\n\t(No symbol) [0x00007FF654F37E03]\n\t(No symbol) [0x00007FF654F353BE]\n\t(No symbol) [0x00007FF654F73FBB]\n\t(No symbol) [0x00007FF654F73A30]\n\t(No symbol) [0x00007FF654F6BC43]\n\t(No symbol) [0x00007FF654F40941]\n\t(No symbol) [0x00007FF654F41B84]\n\tGetHandleVerifier [0x00007FF655437F52+3524194]\n\tGetHandleVerifier [0x00007FF65548D800+3874576]\n\tGetHandleVerifier [0x00007FF655485D7F+3843215]\n\tGetHandleVerifier [0x00007FF655185086+694166]\n\t(No symbol) [0x00007FF655060A88]\n\t(No symbol) [0x00007FF65505CA94]\n\t(No symbol) [0x00007FF65505CBC2]\n\t(No symbol) [0x00007FF65504CC83]\n\tBaseThreadInitThunk [0x00007FFDF8BE7344+20]\n\tRtlUserThreadStart [0x00007FFDF94626B1+33]\n\nBuild info: version: \u00274.1.3\u0027, revision: \u00277b1ebf28ef\u0027\nSystem info: host: \u0027DESKTOP-HJ4MA0G\u0027, ip: \u0027172.21.112.1\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002711.0.16.1\u0027\nDriver info: org.openqa.selenium.remote.RemoteWebDriver\nCommand: [null, newSession {capabilities\u003d[Capabilities {acceptInsecureCerts: true, browserName: chrome, goog:chromeOptions: {args: [--disable-gpu, disable-infobars, --disable-dev-shm-usage, --no-sandbox, --disable-extensions, start-maximized, --remote-allow-origins\u003d*], extensions: []}, platformName: windows}], desiredCapabilities\u003dCapabilities {acceptInsecureCerts: true, browserName: chrome, goog:chromeOptions: {args: [--disable-gpu, disable-infobars, --disable-dev-shm-usage, --no-sandbox, --disable-extensions, start-maximized, --remote-allow-origins\u003d*], extensions: []}, platform: WINDOWS}}]\nCapabilities {}\r\n\tat org.openqa.selenium.remote.ProtocolHandshake.createSession(ProtocolHandshake.java:126)\r\n\tat org.openqa.selenium.remote.ProtocolHandshake.createSession(ProtocolHandshake.java:84)\r\n\tat org.openqa.selenium.remote.ProtocolHandshake.createSession(ProtocolHandshake.java:62)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:156)\r\n\tat org.openqa.selenium.remote.TracedCommandExecutor.execute(TracedCommandExecutor.java:51)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:567)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.startSession(RemoteWebDriver.java:248)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.\u003cinit\u003e(RemoteWebDriver.java:164)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.\u003cinit\u003e(RemoteWebDriver.java:146)\r\n\tat StepDefinitions.Hooks.startTest(Hooks.java:50)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "I navigate to url",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDefinitions.NavigationSteps.i_navigate_to_url()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "name": "As a user, i want to validate On the My Info page, I can update my interests",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@SmokeScenario"
    },
    {
      "name": "@login"
    },
    {
      "name": "@regression"
    },
    {
      "name": "@SmokeTest"
    }
  ]
});
formatter.step({
  "name": "I click the account button",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitions.HeaderPageSteps.when_i_click_the_account_button()"
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
  "name": "I enter correct \"Thandos1311@outlook.com\" address",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitions.SignInPageSteps.i_enter_correct_email_address(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "I enter valid \"Abc123##\"",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitions.SignInPageSteps.i_enter_valid_password(java.lang.String)"
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
  "name": "I click the logged in account button",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitions.HeaderPageSteps.I_click_the_logged_in_account_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "I Click My information",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitions.SignInPageSteps.i_Click_My_information()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "I Must be in My information page",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitions.SignInPageSteps.i_Must_be_in_My_information_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "I click new interest",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitions.SignInPageSteps.i_click_new_interest()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "I Click Save",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitions.SignInPageSteps.i_Click_Save()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "I Must Update User info PopUp",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitions.SignInPageSteps.i_Must_Update_User_info_PopUp()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "I click new interest",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitions.SignInPageSteps.i_click_new_interest()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "I Click Save",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitions.SignInPageSteps.i_Click_Save()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "error_message": "java.lang.NullPointerException\r\n\tat StepDefinitions.Hooks.tearDown(Hooks.java:66)\r\n",
  "status": "failed"
});
formatter.scenarioOutline({
  "name": "As a user, i want to validate On the dashboard, I see my registered products",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@SmokeTest"
    }
  ]
});
formatter.step({
  "name": "I click the account button",
  "keyword": "And "
});
formatter.step({
  "name": "The account icon links to the account login page",
  "keyword": "Then "
});
formatter.step({
  "name": "I enter correct \"\u003cemail\u003e\" address",
  "keyword": "And "
});
formatter.step({
  "name": "I enter valid \"\u003cpassword\u003e\"",
  "keyword": "And "
});
formatter.step({
  "name": "I click the sign in button",
  "keyword": "And "
});
formatter.step({
  "name": "I click the logged in account button",
  "keyword": "And "
});
formatter.step({
  "name": "I click and see all your product registrations",
  "keyword": "And "
});
formatter.step({
  "name": "I should be in the registered products page",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "email",
        "password"
      ]
    },
    {
      "cells": [
        "thandos1503@gmail.com",
        "Abc123##"
      ]
    }
  ]
});
formatter.background({
  "name": "Launch website",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "error_message": "org.openqa.selenium.SessionNotCreatedException: Could not start a new session. Response code 500. Message: session not created: This version of ChromeDriver only supports Chrome version 118\nCurrent browser version is 120.0.6099.72 with binary path C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe\nBuild info: version: \u00274.0.0-alpha-2\u0027, revision: \u0027f148142cf8\u0027, time: \u00272019-07-01T21:30:10\u0027\nSystem info: host: \u0027DESKTOP-HJ4MA0G\u0027, ip: \u0027172.21.112.1\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002711.0.16.1\u0027\nDriver info: driver.version: unknown\nremote stacktrace: \tGetHandleVerifier [0x00007FF6550E8EF2+54786]\n\t(No symbol) [0x00007FF655055612]\n\t(No symbol) [0x00007FF654F0A64B]\n\t(No symbol) [0x00007FF654F3DC22]\n\t(No symbol) [0x00007FF654F3D07C]\n\t(No symbol) [0x00007FF654F37E03]\n\t(No symbol) [0x00007FF654F353BE]\n\t(No symbol) [0x00007FF654F73FBB]\n\t(No symbol) [0x00007FF654F73A30]\n\t(No symbol) [0x00007FF654F6BC43]\n\t(No symbol) [0x00007FF654F40941]\n\t(No symbol) [0x00007FF654F41B84]\n\tGetHandleVerifier [0x00007FF655437F52+3524194]\n\tGetHandleVerifier [0x00007FF65548D800+3874576]\n\tGetHandleVerifier [0x00007FF655485D7F+3843215]\n\tGetHandleVerifier [0x00007FF655185086+694166]\n\t(No symbol) [0x00007FF655060A88]\n\t(No symbol) [0x00007FF65505CA94]\n\t(No symbol) [0x00007FF65505CBC2]\n\t(No symbol) [0x00007FF65504CC83]\n\tBaseThreadInitThunk [0x00007FFDF8BE7344+20]\n\tRtlUserThreadStart [0x00007FFDF94626B1+33]\n\nBuild info: version: \u00274.1.3\u0027, revision: \u00277b1ebf28ef\u0027\nSystem info: host: \u0027DESKTOP-HJ4MA0G\u0027, ip: \u0027172.21.112.1\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002711.0.16.1\u0027\nDriver info: org.openqa.selenium.remote.RemoteWebDriver\nCommand: [null, newSession {capabilities\u003d[Capabilities {acceptInsecureCerts: true, browserName: chrome, goog:chromeOptions: {args: [--disable-gpu, disable-infobars, --disable-dev-shm-usage, --no-sandbox, --disable-extensions, start-maximized, --remote-allow-origins\u003d*], extensions: []}, platformName: windows}], desiredCapabilities\u003dCapabilities {acceptInsecureCerts: true, browserName: chrome, goog:chromeOptions: {args: [--disable-gpu, disable-infobars, --disable-dev-shm-usage, --no-sandbox, --disable-extensions, start-maximized, --remote-allow-origins\u003d*], extensions: []}, platform: WINDOWS}}]\nCapabilities {}\r\n\tat org.openqa.selenium.remote.ProtocolHandshake.createSession(ProtocolHandshake.java:126)\r\n\tat org.openqa.selenium.remote.ProtocolHandshake.createSession(ProtocolHandshake.java:84)\r\n\tat org.openqa.selenium.remote.ProtocolHandshake.createSession(ProtocolHandshake.java:62)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:156)\r\n\tat org.openqa.selenium.remote.TracedCommandExecutor.execute(TracedCommandExecutor.java:51)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:567)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.startSession(RemoteWebDriver.java:248)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.\u003cinit\u003e(RemoteWebDriver.java:164)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.\u003cinit\u003e(RemoteWebDriver.java:146)\r\n\tat StepDefinitions.Hooks.startTest(Hooks.java:50)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "I navigate to url",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDefinitions.NavigationSteps.i_navigate_to_url()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "name": "As a user, i want to validate On the dashboard, I see my registered products",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@SmokeScenario"
    },
    {
      "name": "@login"
    },
    {
      "name": "@regression"
    },
    {
      "name": "@SmokeTest"
    }
  ]
});
formatter.step({
  "name": "I click the account button",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitions.HeaderPageSteps.when_i_click_the_account_button()"
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
  "name": "I enter correct \"thandos1503@gmail.com\" address",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitions.SignInPageSteps.i_enter_correct_email_address(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "I enter valid \"Abc123##\"",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitions.SignInPageSteps.i_enter_valid_password(java.lang.String)"
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
  "name": "I click the logged in account button",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitions.HeaderPageSteps.I_click_the_logged_in_account_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "I click and see all your product registrations",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitions.SignInPageSteps.i_click_and_see_all_your_product_registrations()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "I should be in the registered products page",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitions.SignInPageSteps.i_should_be_in_the_registered_products_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "error_message": "java.lang.NullPointerException\r\n\tat StepDefinitions.Hooks.tearDown(Hooks.java:66)\r\n",
  "status": "failed"
});
formatter.scenarioOutline({
  "name": "As a user, i want to validate On the dashboard, I can click register new product and i am redirected to the product registration page",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@SmokeTest"
    }
  ]
});
formatter.step({
  "name": "I click the account button",
  "keyword": "And "
});
formatter.step({
  "name": "The account icon links to the account login page",
  "keyword": "Then "
});
formatter.step({
  "name": "I enter correct \"\u003cemail\u003e\" address",
  "keyword": "And "
});
formatter.step({
  "name": "I enter valid \"\u003cpassword\u003e\"",
  "keyword": "And "
});
formatter.step({
  "name": "I click the sign in button",
  "keyword": "And "
});
formatter.step({
  "name": "I click the logged in account button",
  "keyword": "And "
});
formatter.step({
  "name": "I should see the orders Button",
  "keyword": "Then "
});
formatter.step({
  "name": "I click the order Button",
  "keyword": "And "
});
formatter.step({
  "name": "I should see my orders",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "email",
        "password"
      ]
    },
    {
      "cells": [
        "thandos1503@gmail.com",
        "Abc123##"
      ]
    }
  ]
});
formatter.background({
  "name": "Launch website",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "error_message": "org.openqa.selenium.SessionNotCreatedException: Could not start a new session. Response code 500. Message: session not created: This version of ChromeDriver only supports Chrome version 118\nCurrent browser version is 120.0.6099.72 with binary path C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe\nBuild info: version: \u00274.0.0-alpha-2\u0027, revision: \u0027f148142cf8\u0027, time: \u00272019-07-01T21:30:10\u0027\nSystem info: host: \u0027DESKTOP-HJ4MA0G\u0027, ip: \u0027172.21.112.1\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002711.0.16.1\u0027\nDriver info: driver.version: unknown\nremote stacktrace: \tGetHandleVerifier [0x00007FF6550E8EF2+54786]\n\t(No symbol) [0x00007FF655055612]\n\t(No symbol) [0x00007FF654F0A64B]\n\t(No symbol) [0x00007FF654F3DC22]\n\t(No symbol) [0x00007FF654F3D07C]\n\t(No symbol) [0x00007FF654F37E03]\n\t(No symbol) [0x00007FF654F353BE]\n\t(No symbol) [0x00007FF654F73FBB]\n\t(No symbol) [0x00007FF654F73A30]\n\t(No symbol) [0x00007FF654F6BC43]\n\t(No symbol) [0x00007FF654F40941]\n\t(No symbol) [0x00007FF654F41B84]\n\tGetHandleVerifier [0x00007FF655437F52+3524194]\n\tGetHandleVerifier [0x00007FF65548D800+3874576]\n\tGetHandleVerifier [0x00007FF655485D7F+3843215]\n\tGetHandleVerifier [0x00007FF655185086+694166]\n\t(No symbol) [0x00007FF655060A88]\n\t(No symbol) [0x00007FF65505CA94]\n\t(No symbol) [0x00007FF65505CBC2]\n\t(No symbol) [0x00007FF65504CC83]\n\tBaseThreadInitThunk [0x00007FFDF8BE7344+20]\n\tRtlUserThreadStart [0x00007FFDF94626B1+33]\n\nBuild info: version: \u00274.1.3\u0027, revision: \u00277b1ebf28ef\u0027\nSystem info: host: \u0027DESKTOP-HJ4MA0G\u0027, ip: \u0027172.21.112.1\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002711.0.16.1\u0027\nDriver info: org.openqa.selenium.remote.RemoteWebDriver\nCommand: [null, newSession {capabilities\u003d[Capabilities {acceptInsecureCerts: true, browserName: chrome, goog:chromeOptions: {args: [--disable-gpu, disable-infobars, --disable-dev-shm-usage, --no-sandbox, --disable-extensions, start-maximized, --remote-allow-origins\u003d*], extensions: []}, platformName: windows}], desiredCapabilities\u003dCapabilities {acceptInsecureCerts: true, browserName: chrome, goog:chromeOptions: {args: [--disable-gpu, disable-infobars, --disable-dev-shm-usage, --no-sandbox, --disable-extensions, start-maximized, --remote-allow-origins\u003d*], extensions: []}, platform: WINDOWS}}]\nCapabilities {}\r\n\tat org.openqa.selenium.remote.ProtocolHandshake.createSession(ProtocolHandshake.java:126)\r\n\tat org.openqa.selenium.remote.ProtocolHandshake.createSession(ProtocolHandshake.java:84)\r\n\tat org.openqa.selenium.remote.ProtocolHandshake.createSession(ProtocolHandshake.java:62)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:156)\r\n\tat org.openqa.selenium.remote.TracedCommandExecutor.execute(TracedCommandExecutor.java:51)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:567)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.startSession(RemoteWebDriver.java:248)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.\u003cinit\u003e(RemoteWebDriver.java:164)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.\u003cinit\u003e(RemoteWebDriver.java:146)\r\n\tat StepDefinitions.Hooks.startTest(Hooks.java:50)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "I navigate to url",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDefinitions.NavigationSteps.i_navigate_to_url()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "name": "As a user, i want to validate On the dashboard, I can click register new product and i am redirected to the product registration page",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@SmokeScenario"
    },
    {
      "name": "@login"
    },
    {
      "name": "@regression"
    },
    {
      "name": "@SmokeTest"
    }
  ]
});
formatter.step({
  "name": "I click the account button",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitions.HeaderPageSteps.when_i_click_the_account_button()"
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
  "name": "I enter correct \"thandos1503@gmail.com\" address",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitions.SignInPageSteps.i_enter_correct_email_address(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "I enter valid \"Abc123##\"",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitions.SignInPageSteps.i_enter_valid_password(java.lang.String)"
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
  "name": "I click the logged in account button",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitions.HeaderPageSteps.I_click_the_logged_in_account_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "I should see the orders Button",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitions.SignInPageSteps.i_should_see_the_orders_Button()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "I click the order Button",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitions.SignInPageSteps.i_click_the_order_Button()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "I should see my orders",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitions.SignInPageSteps.i_should_see_my_orders()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "error_message": "java.lang.NullPointerException\r\n\tat StepDefinitions.Hooks.tearDown(Hooks.java:66)\r\n",
  "status": "failed"
});
formatter.scenarioOutline({
  "name": "As a user, I want to validate On the My Info page, I can subscribe and unsubscribe to brands",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@SmokeTest"
    }
  ]
});
formatter.step({
  "name": "I click the account button",
  "keyword": "And "
});
formatter.step({
  "name": "The account icon links to the account login page",
  "keyword": "Then "
});
formatter.step({
  "name": "I enter correct \"\u003cemail\u003e\" address",
  "keyword": "And "
});
formatter.step({
  "name": "I enter valid \"\u003cpassword\u003e\"",
  "keyword": "And "
});
formatter.step({
  "name": "I click the sign in button",
  "keyword": "And "
});
formatter.step({
  "name": "i have successfully logged in",
  "keyword": "Then "
});
formatter.step({
  "name": "I click the logged in account button",
  "keyword": "And "
});
formatter.step({
  "name": "I Click My information",
  "keyword": "And "
});
formatter.step({
  "name": "I Must be in My information page",
  "keyword": "Then "
});
formatter.step({
  "name": "I subscribe to a brand",
  "keyword": "And "
});
formatter.step({
  "name": "I must see the successfully sibcribed message",
  "keyword": "Then "
});
formatter.step({
  "name": "I unsubscribe to a brand",
  "keyword": "And "
});
formatter.step({
  "name": "I Should successfully unsusbscribed",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "email",
        "password"
      ]
    },
    {
      "cells": [
        "Thandos1311@outlook.com",
        "Abc123##"
      ]
    }
  ]
});
formatter.background({
  "name": "Launch website",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "error_message": "org.openqa.selenium.SessionNotCreatedException: Could not start a new session. Response code 500. Message: session not created: This version of ChromeDriver only supports Chrome version 118\nCurrent browser version is 120.0.6099.72 with binary path C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe\nBuild info: version: \u00274.0.0-alpha-2\u0027, revision: \u0027f148142cf8\u0027, time: \u00272019-07-01T21:30:10\u0027\nSystem info: host: \u0027DESKTOP-HJ4MA0G\u0027, ip: \u0027172.21.112.1\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002711.0.16.1\u0027\nDriver info: driver.version: unknown\nremote stacktrace: \tGetHandleVerifier [0x00007FF6550E8EF2+54786]\n\t(No symbol) [0x00007FF655055612]\n\t(No symbol) [0x00007FF654F0A64B]\n\t(No symbol) [0x00007FF654F3DC22]\n\t(No symbol) [0x00007FF654F3D07C]\n\t(No symbol) [0x00007FF654F37E03]\n\t(No symbol) [0x00007FF654F353BE]\n\t(No symbol) [0x00007FF654F73FBB]\n\t(No symbol) [0x00007FF654F73A30]\n\t(No symbol) [0x00007FF654F6BC43]\n\t(No symbol) [0x00007FF654F40941]\n\t(No symbol) [0x00007FF654F41B84]\n\tGetHandleVerifier [0x00007FF655437F52+3524194]\n\tGetHandleVerifier [0x00007FF65548D800+3874576]\n\tGetHandleVerifier [0x00007FF655485D7F+3843215]\n\tGetHandleVerifier [0x00007FF655185086+694166]\n\t(No symbol) [0x00007FF655060A88]\n\t(No symbol) [0x00007FF65505CA94]\n\t(No symbol) [0x00007FF65505CBC2]\n\t(No symbol) [0x00007FF65504CC83]\n\tBaseThreadInitThunk [0x00007FFDF8BE7344+20]\n\tRtlUserThreadStart [0x00007FFDF94626B1+33]\n\nBuild info: version: \u00274.1.3\u0027, revision: \u00277b1ebf28ef\u0027\nSystem info: host: \u0027DESKTOP-HJ4MA0G\u0027, ip: \u0027172.21.112.1\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002711.0.16.1\u0027\nDriver info: org.openqa.selenium.remote.RemoteWebDriver\nCommand: [null, newSession {capabilities\u003d[Capabilities {acceptInsecureCerts: true, browserName: chrome, goog:chromeOptions: {args: [--disable-gpu, disable-infobars, --disable-dev-shm-usage, --no-sandbox, --disable-extensions, start-maximized, --remote-allow-origins\u003d*], extensions: []}, platformName: windows}], desiredCapabilities\u003dCapabilities {acceptInsecureCerts: true, browserName: chrome, goog:chromeOptions: {args: [--disable-gpu, disable-infobars, --disable-dev-shm-usage, --no-sandbox, --disable-extensions, start-maximized, --remote-allow-origins\u003d*], extensions: []}, platform: WINDOWS}}]\nCapabilities {}\r\n\tat org.openqa.selenium.remote.ProtocolHandshake.createSession(ProtocolHandshake.java:126)\r\n\tat org.openqa.selenium.remote.ProtocolHandshake.createSession(ProtocolHandshake.java:84)\r\n\tat org.openqa.selenium.remote.ProtocolHandshake.createSession(ProtocolHandshake.java:62)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:156)\r\n\tat org.openqa.selenium.remote.TracedCommandExecutor.execute(TracedCommandExecutor.java:51)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:567)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.startSession(RemoteWebDriver.java:248)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.\u003cinit\u003e(RemoteWebDriver.java:164)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.\u003cinit\u003e(RemoteWebDriver.java:146)\r\n\tat StepDefinitions.Hooks.startTest(Hooks.java:50)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "I navigate to url",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDefinitions.NavigationSteps.i_navigate_to_url()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "name": "As a user, I want to validate On the My Info page, I can subscribe and unsubscribe to brands",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@SmokeScenario"
    },
    {
      "name": "@login"
    },
    {
      "name": "@regression"
    },
    {
      "name": "@SmokeTest"
    }
  ]
});
formatter.step({
  "name": "I click the account button",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitions.HeaderPageSteps.when_i_click_the_account_button()"
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
  "name": "I enter correct \"Thandos1311@outlook.com\" address",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitions.SignInPageSteps.i_enter_correct_email_address(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "I enter valid \"Abc123##\"",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitions.SignInPageSteps.i_enter_valid_password(java.lang.String)"
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
  "name": "I click the logged in account button",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitions.HeaderPageSteps.I_click_the_logged_in_account_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "I Click My information",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitions.SignInPageSteps.i_Click_My_information()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "I Must be in My information page",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitions.SignInPageSteps.i_Must_be_in_My_information_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "I subscribe to a brand",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitions.SignInPageSteps.i_subscribe_to_a_brand()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "I must see the successfully sibcribed message",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitions.SignInPageSteps.i_must_see_the_successfully_sibcribed_message()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "I unsubscribe to a brand",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitions.SignInPageSteps.i_unsubscribe_to_a_brand()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "I Should successfully unsusbscribed",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitions.SignInPageSteps.i_Should_successfully_unsusbscribed()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "error_message": "java.lang.NullPointerException\r\n\tat StepDefinitions.Hooks.tearDown(Hooks.java:66)\r\n",
  "status": "failed"
});
formatter.uri("file:src/test/resources/Features/search.feature");
formatter.feature({
  "name": "Search",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@SmokeScenario"
    },
    {
      "name": "@search"
    },
    {
      "name": "@regression"
    }
  ]
});
formatter.scenarioOutline({
  "name": "As a user, i want to validate if I can search using the search field",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@SmokeTest"
    }
  ]
});
formatter.step({
  "name": "The item to be \"\u003csearched\u003e\"",
  "keyword": "And "
});
formatter.step({
  "name": "I validate if i am redirected to the \"\u003csearched\u003e\" item",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "searched"
      ]
    },
    {
      "cells": [
        "MPK MINI PLAY MK3 MINI CONTROLLER KEYBOARD WITH SPEAKERS"
      ]
    }
  ]
});
formatter.background({
  "name": "Launch website",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "error_message": "org.openqa.selenium.SessionNotCreatedException: Could not start a new session. Response code 500. Message: session not created: This version of ChromeDriver only supports Chrome version 118\nCurrent browser version is 120.0.6099.72 with binary path C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe\nBuild info: version: \u00274.0.0-alpha-2\u0027, revision: \u0027f148142cf8\u0027, time: \u00272019-07-01T21:30:10\u0027\nSystem info: host: \u0027DESKTOP-HJ4MA0G\u0027, ip: \u0027172.21.112.1\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002711.0.16.1\u0027\nDriver info: driver.version: unknown\nremote stacktrace: \tGetHandleVerifier [0x00007FF6550E8EF2+54786]\n\t(No symbol) [0x00007FF655055612]\n\t(No symbol) [0x00007FF654F0A64B]\n\t(No symbol) [0x00007FF654F3DC22]\n\t(No symbol) [0x00007FF654F3D07C]\n\t(No symbol) [0x00007FF654F37E03]\n\t(No symbol) [0x00007FF654F353BE]\n\t(No symbol) [0x00007FF654F73FBB]\n\t(No symbol) [0x00007FF654F73A30]\n\t(No symbol) [0x00007FF654F6BC43]\n\t(No symbol) [0x00007FF654F40941]\n\t(No symbol) [0x00007FF654F41B84]\n\tGetHandleVerifier [0x00007FF655437F52+3524194]\n\tGetHandleVerifier [0x00007FF65548D800+3874576]\n\tGetHandleVerifier [0x00007FF655485D7F+3843215]\n\tGetHandleVerifier [0x00007FF655185086+694166]\n\t(No symbol) [0x00007FF655060A88]\n\t(No symbol) [0x00007FF65505CA94]\n\t(No symbol) [0x00007FF65505CBC2]\n\t(No symbol) [0x00007FF65504CC83]\n\tBaseThreadInitThunk [0x00007FFDF8BE7344+20]\n\tRtlUserThreadStart [0x00007FFDF94626B1+33]\n\nBuild info: version: \u00274.1.3\u0027, revision: \u00277b1ebf28ef\u0027\nSystem info: host: \u0027DESKTOP-HJ4MA0G\u0027, ip: \u0027172.21.112.1\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002711.0.16.1\u0027\nDriver info: org.openqa.selenium.remote.RemoteWebDriver\nCommand: [null, newSession {capabilities\u003d[Capabilities {acceptInsecureCerts: true, browserName: chrome, goog:chromeOptions: {args: [--disable-gpu, disable-infobars, --disable-dev-shm-usage, --no-sandbox, --disable-extensions, start-maximized, --remote-allow-origins\u003d*], extensions: []}, platformName: windows}], desiredCapabilities\u003dCapabilities {acceptInsecureCerts: true, browserName: chrome, goog:chromeOptions: {args: [--disable-gpu, disable-infobars, --disable-dev-shm-usage, --no-sandbox, --disable-extensions, start-maximized, --remote-allow-origins\u003d*], extensions: []}, platform: WINDOWS}}]\nCapabilities {}\r\n\tat org.openqa.selenium.remote.ProtocolHandshake.createSession(ProtocolHandshake.java:126)\r\n\tat org.openqa.selenium.remote.ProtocolHandshake.createSession(ProtocolHandshake.java:84)\r\n\tat org.openqa.selenium.remote.ProtocolHandshake.createSession(ProtocolHandshake.java:62)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:156)\r\n\tat org.openqa.selenium.remote.TracedCommandExecutor.execute(TracedCommandExecutor.java:51)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:567)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.startSession(RemoteWebDriver.java:248)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.\u003cinit\u003e(RemoteWebDriver.java:164)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.\u003cinit\u003e(RemoteWebDriver.java:146)\r\n\tat StepDefinitions.Hooks.startTest(Hooks.java:50)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "I navigate to url",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDefinitions.NavigationSteps.i_navigate_to_url()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "name": "As a user, i want to validate if I can search using the search field",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@SmokeScenario"
    },
    {
      "name": "@search"
    },
    {
      "name": "@regression"
    },
    {
      "name": "@SmokeTest"
    }
  ]
});
formatter.step({
  "name": "The item to be \"MPK MINI PLAY MK3 MINI CONTROLLER KEYBOARD WITH SPEAKERS\"",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitions.SearchPageSteps.and_the_item_to_be_searched(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "I validate if i am redirected to the \"MPK MINI PLAY MK3 MINI CONTROLLER KEYBOARD WITH SPEAKERS\" item",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitions.SearchPageSteps.i_validate_if_i_am_redirected_to_the_searched_item(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "error_message": "java.lang.NullPointerException\r\n\tat StepDefinitions.Hooks.tearDown(Hooks.java:66)\r\n",
  "status": "failed"
});
formatter.scenarioOutline({
  "name": "As a user, i want to validate if I I receive search results even if there are typos or content isn\u0027t found",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@SmokeTest"
    }
  ]
});
formatter.step({
  "name": "The item to be \"\u003csearched\u003e\"",
  "keyword": "And "
});
formatter.step({
  "name": "I validate if i am redirected to the \"\u003csearched\u003e\" item",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "searched"
      ]
    },
    {
      "cells": [
        "TESTING SEARCH ITEMS"
      ]
    }
  ]
});
formatter.background({
  "name": "Launch website",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "error_message": "org.openqa.selenium.SessionNotCreatedException: Could not start a new session. Response code 500. Message: session not created: This version of ChromeDriver only supports Chrome version 118\nCurrent browser version is 120.0.6099.72 with binary path C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe\nBuild info: version: \u00274.0.0-alpha-2\u0027, revision: \u0027f148142cf8\u0027, time: \u00272019-07-01T21:30:10\u0027\nSystem info: host: \u0027DESKTOP-HJ4MA0G\u0027, ip: \u0027172.21.112.1\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002711.0.16.1\u0027\nDriver info: driver.version: unknown\nremote stacktrace: \tGetHandleVerifier [0x00007FF6550E8EF2+54786]\n\t(No symbol) [0x00007FF655055612]\n\t(No symbol) [0x00007FF654F0A64B]\n\t(No symbol) [0x00007FF654F3DC22]\n\t(No symbol) [0x00007FF654F3D07C]\n\t(No symbol) [0x00007FF654F37E03]\n\t(No symbol) [0x00007FF654F353BE]\n\t(No symbol) [0x00007FF654F73FBB]\n\t(No symbol) [0x00007FF654F73A30]\n\t(No symbol) [0x00007FF654F6BC43]\n\t(No symbol) [0x00007FF654F40941]\n\t(No symbol) [0x00007FF654F41B84]\n\tGetHandleVerifier [0x00007FF655437F52+3524194]\n\tGetHandleVerifier [0x00007FF65548D800+3874576]\n\tGetHandleVerifier [0x00007FF655485D7F+3843215]\n\tGetHandleVerifier [0x00007FF655185086+694166]\n\t(No symbol) [0x00007FF655060A88]\n\t(No symbol) [0x00007FF65505CA94]\n\t(No symbol) [0x00007FF65505CBC2]\n\t(No symbol) [0x00007FF65504CC83]\n\tBaseThreadInitThunk [0x00007FFDF8BE7344+20]\n\tRtlUserThreadStart [0x00007FFDF94626B1+33]\n\nBuild info: version: \u00274.1.3\u0027, revision: \u00277b1ebf28ef\u0027\nSystem info: host: \u0027DESKTOP-HJ4MA0G\u0027, ip: \u0027172.21.112.1\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002711.0.16.1\u0027\nDriver info: org.openqa.selenium.remote.RemoteWebDriver\nCommand: [null, newSession {capabilities\u003d[Capabilities {acceptInsecureCerts: true, browserName: chrome, goog:chromeOptions: {args: [--disable-gpu, disable-infobars, --disable-dev-shm-usage, --no-sandbox, --disable-extensions, start-maximized, --remote-allow-origins\u003d*], extensions: []}, platformName: windows}], desiredCapabilities\u003dCapabilities {acceptInsecureCerts: true, browserName: chrome, goog:chromeOptions: {args: [--disable-gpu, disable-infobars, --disable-dev-shm-usage, --no-sandbox, --disable-extensions, start-maximized, --remote-allow-origins\u003d*], extensions: []}, platform: WINDOWS}}]\nCapabilities {}\r\n\tat org.openqa.selenium.remote.ProtocolHandshake.createSession(ProtocolHandshake.java:126)\r\n\tat org.openqa.selenium.remote.ProtocolHandshake.createSession(ProtocolHandshake.java:84)\r\n\tat org.openqa.selenium.remote.ProtocolHandshake.createSession(ProtocolHandshake.java:62)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:156)\r\n\tat org.openqa.selenium.remote.TracedCommandExecutor.execute(TracedCommandExecutor.java:51)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:567)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.startSession(RemoteWebDriver.java:248)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.\u003cinit\u003e(RemoteWebDriver.java:164)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.\u003cinit\u003e(RemoteWebDriver.java:146)\r\n\tat StepDefinitions.Hooks.startTest(Hooks.java:50)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "I navigate to url",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDefinitions.NavigationSteps.i_navigate_to_url()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "name": "As a user, i want to validate if I I receive search results even if there are typos or content isn\u0027t found",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@SmokeScenario"
    },
    {
      "name": "@search"
    },
    {
      "name": "@regression"
    },
    {
      "name": "@SmokeTest"
    }
  ]
});
formatter.step({
  "name": "The item to be \"TESTING SEARCH ITEMS\"",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitions.SearchPageSteps.and_the_item_to_be_searched(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "I validate if i am redirected to the \"TESTING SEARCH ITEMS\" item",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitions.SearchPageSteps.i_validate_if_i_am_redirected_to_the_searched_item(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "error_message": "java.lang.NullPointerException\r\n\tat StepDefinitions.Hooks.tearDown(Hooks.java:66)\r\n",
  "status": "failed"
});
});