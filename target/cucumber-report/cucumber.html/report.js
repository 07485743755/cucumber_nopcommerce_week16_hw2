$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/java/resources/featureFile/1register.feature");
formatter.feature({
  "line": 1,
  "name": "Register Test",
  "description": "As a user I want to register on nopCommerce web site",
  "id": "register-test",
  "keyword": "Feature"
});
formatter.before({
  "duration": 3879621500,
  "status": "passed"
});
formatter.scenario({
  "line": 5,
  "name": "User should navigate to register page successfully",
  "description": "",
  "id": "register-test;user-should-navigate-to-register-page-successfully",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 4,
      "name": "@Sanity"
    },
    {
      "line": 4,
      "name": "@Smoke"
    },
    {
      "line": 4,
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "I click on register link",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "I should navigate to register page with page title text \"Register\"",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStepdefs.iAmOnHomepage()"
});
formatter.result({
  "duration": 94901800,
  "status": "passed"
});
formatter.match({
  "location": "RegisterStepdefs.iClickOnRegisterLink()"
});
formatter.result({
  "duration": 550050900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Register",
      "offset": 57
    }
  ],
  "location": "RegisterStepdefs.iShouldNavigateToRegisterPageWithPageTitleText(String)"
});
formatter.result({
  "duration": 1051793600,
  "status": "passed"
});
formatter.after({
  "duration": 668335100,
  "status": "passed"
});
formatter.before({
  "duration": 2854107400,
  "status": "passed"
});
formatter.scenario({
  "line": 11,
  "name": "Verify user get error message with leave mandatory field(first name) blank while register",
  "description": "",
  "id": "register-test;verify-user-get-error-message-with-leave-mandatory-field(first-name)-blank-while-register",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 10,
      "name": "@Smoke"
    },
    {
      "line": 10,
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "line": 12,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 13,
  "name": "I click on register link",
  "keyword": "When "
});
formatter.step({
  "line": 14,
  "name": "I enter last name \"Salvator\"in last name field",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I enter email(user \"alina\" and domain \"@gmail.com\") in email field",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "I enter password \"Alina12345\"and confirm password\"Alina12345\" in confirm password field",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "I click on register button",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "I should get error message \"First name is required.\" on register page",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStepdefs.iAmOnHomepage()"
});
formatter.result({
  "duration": 85600,
  "status": "passed"
});
formatter.match({
  "location": "RegisterStepdefs.iClickOnRegisterLink()"
});
formatter.result({
  "duration": 1351981100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Salvator",
      "offset": 19
    }
  ],
  "location": "RegisterStepdefs.iEnterLastNameInLastNameField(String)"
});
formatter.result({
  "duration": 651125700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "alina",
      "offset": 20
    },
    {
      "val": "@gmail.com",
      "offset": 39
    }
  ],
  "location": "RegisterStepdefs.iEnterEmailUserAndDomainInEmailField(String,String)"
});
formatter.result({
  "duration": 159735500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Alina12345",
      "offset": 18
    },
    {
      "val": "Alina12345",
      "offset": 50
    }
  ],
  "location": "RegisterStepdefs.iEnterPasswordAndConfirmPasswordInConfirmPasswordField(String,String)"
});
formatter.result({
  "duration": 165812800,
  "status": "passed"
});
formatter.match({
  "location": "RegisterStepdefs.iClickOnRegisterButton()"
});
formatter.result({
  "duration": 93344800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "First name is required.",
      "offset": 28
    }
  ],
  "location": "RegisterStepdefs.iShouldGetErrorMessageOnRegisterPage(String)"
});
formatter.result({
  "duration": 561406200,
  "status": "passed"
});
formatter.after({
  "duration": 672934600,
  "status": "passed"
});
formatter.uri("src/test/java/resources/featureFile/computer.feature");
formatter.feature({
  "line": 1,
  "name": "Computers tab test",
  "description": "\r\nAs a user I want to navigate to all pages which open from computers tab drop down",
  "id": "computers-tab-test",
  "keyword": "Feature"
});
formatter.before({
  "duration": 3064705200,
  "status": "passed"
});
formatter.scenario({
  "line": 6,
  "name": "Verify that user should navigate to Desktops page successfully",
  "description": "",
  "id": "computers-tab-test;verify-that-user-should-navigate-to-desktops-page-successfully",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 5,
      "name": "@Sanity"
    },
    {
      "line": 5,
      "name": "@Smoke"
    },
    {
      "line": 5,
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "line": 7,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "I mouse hover on Computers tab",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "I select \"Desktops\" link from Computers tab drop down",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I should navigate to Desktops page successfully with title text \"Desktops\"",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStepdefs.iAmOnHomepage()"
});
formatter.result({
  "duration": 32200,
  "status": "passed"
});
formatter.match({
  "location": "ComputersStepdefs.iMouseHoverOnComputersTab()"
});
formatter.result({
  "duration": 1216911100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Desktops",
      "offset": 10
    }
  ],
  "location": "ComputersStepdefs.iSelectLinkFromComputersTabDropDown(String)"
});
formatter.result({
  "duration": 1350072700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Desktops",
      "offset": 65
    }
  ],
  "location": "ComputersStepdefs.iShouldNavigateToDesktopsPageSuccessfullyWithTitleText(String)"
});
formatter.result({
  "duration": 48675200,
  "status": "passed"
});
formatter.after({
  "duration": 846900700,
  "status": "passed"
});
formatter.before({
  "duration": 3017495500,
  "status": "passed"
});
formatter.scenario({
  "line": 13,
  "name": "Verify that user should navigate to NoteBooks page successfully",
  "description": "",
  "id": "computers-tab-test;verify-that-user-should-navigate-to-notebooks-page-successfully",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 12,
      "name": "@Smoke"
    },
    {
      "line": 12,
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "line": 14,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 15,
  "name": "I mouse hover on Computers tab",
  "keyword": "When "
});
formatter.step({
  "line": 16,
  "name": "I select \"Notebooks\" link from Computers tab drop down",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "I should navigate to Notebooks page successfully with title text \"Notebooks\"",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStepdefs.iAmOnHomepage()"
});
formatter.result({
  "duration": 28500,
  "status": "passed"
});
formatter.match({
  "location": "ComputersStepdefs.iMouseHoverOnComputersTab()"
});
formatter.result({
  "duration": 1175435800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Notebooks",
      "offset": 10
    }
  ],
  "location": "ComputersStepdefs.iSelectLinkFromComputersTabDropDown(String)"
});
formatter.result({
  "duration": 1537403500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Notebooks",
      "offset": 66
    }
  ],
  "location": "ComputersStepdefs.iShouldNavigateToNotebooksPageSuccessfullyWithTitleText(String)"
});
formatter.result({
  "duration": 44607000,
  "status": "passed"
});
formatter.after({
  "duration": 756161800,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 27,
  "name": "Verify that User should navigate to \"\u003cComputersDropDownTab\u003e\"page successfully",
  "description": "",
  "id": "computers-tab-test;verify-that-user-should-navigate-to-\"\u003ccomputersdropdowntab\u003e\"page-successfully",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 26,
      "name": "@Sanity"
    },
    {
      "line": 26,
      "name": "@Smoke"
    },
    {
      "line": 26,
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "line": 28,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 29,
  "name": "I mouse hover on Computers tab",
  "keyword": "When "
});
formatter.step({
  "line": 30,
  "name": "I select \"\u003cComputersDropDownTab\u003e\" link from Computers tab drop down",
  "keyword": "And "
});
formatter.step({
  "line": 31,
  "name": "I should navigate to \"\u003cComputersDropDownTab\u003e\"page successfully",
  "keyword": "Then "
});
formatter.examples({
  "line": 32,
  "name": "",
  "description": "",
  "id": "computers-tab-test;verify-that-user-should-navigate-to-\"\u003ccomputersdropdowntab\u003e\"page-successfully;",
  "rows": [
    {
      "cells": [
        "ComputersDropDownTab"
      ],
      "line": 33,
      "id": "computers-tab-test;verify-that-user-should-navigate-to-\"\u003ccomputersdropdowntab\u003e\"page-successfully;;1"
    },
    {
      "cells": [
        "Desktops"
      ],
      "line": 34,
      "id": "computers-tab-test;verify-that-user-should-navigate-to-\"\u003ccomputersdropdowntab\u003e\"page-successfully;;2"
    },
    {
      "cells": [
        "Notebooks"
      ],
      "line": 35,
      "id": "computers-tab-test;verify-that-user-should-navigate-to-\"\u003ccomputersdropdowntab\u003e\"page-successfully;;3"
    },
    {
      "cells": [
        "Software"
      ],
      "line": 36,
      "id": "computers-tab-test;verify-that-user-should-navigate-to-\"\u003ccomputersdropdowntab\u003e\"page-successfully;;4"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 2896622400,
  "status": "passed"
});
formatter.scenario({
  "line": 34,
  "name": "Verify that User should navigate to \"Desktops\"page successfully",
  "description": "",
  "id": "computers-tab-test;verify-that-user-should-navigate-to-\"\u003ccomputersdropdowntab\u003e\"page-successfully;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 26,
      "name": "@Smoke"
    },
    {
      "line": 26,
      "name": "@Sanity"
    },
    {
      "line": 26,
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "line": 28,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 29,
  "name": "I mouse hover on Computers tab",
  "keyword": "When "
});
formatter.step({
  "line": 30,
  "name": "I select \"Desktops\" link from Computers tab drop down",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 31,
  "name": "I should navigate to \"Desktops\"page successfully",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStepdefs.iAmOnHomepage()"
});
formatter.result({
  "duration": 21500,
  "status": "passed"
});
formatter.match({
  "location": "ComputersStepdefs.iMouseHoverOnComputersTab()"
});
formatter.result({
  "duration": 1202215200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Desktops",
      "offset": 10
    }
  ],
  "location": "ComputersStepdefs.iSelectLinkFromComputersTabDropDown(String)"
});
formatter.result({
  "duration": 1327784700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Desktops",
      "offset": 22
    }
  ],
  "location": "ComputersStepdefs.iShouldNavigateToPageSuccessfully(String)"
});
formatter.result({
  "duration": 43265400,
  "status": "passed"
});
formatter.after({
  "duration": 669418600,
  "status": "passed"
});
formatter.before({
  "duration": 2982574000,
  "status": "passed"
});
formatter.scenario({
  "line": 35,
  "name": "Verify that User should navigate to \"Notebooks\"page successfully",
  "description": "",
  "id": "computers-tab-test;verify-that-user-should-navigate-to-\"\u003ccomputersdropdowntab\u003e\"page-successfully;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 26,
      "name": "@Smoke"
    },
    {
      "line": 26,
      "name": "@Sanity"
    },
    {
      "line": 26,
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "line": 28,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 29,
  "name": "I mouse hover on Computers tab",
  "keyword": "When "
});
formatter.step({
  "line": 30,
  "name": "I select \"Notebooks\" link from Computers tab drop down",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 31,
  "name": "I should navigate to \"Notebooks\"page successfully",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStepdefs.iAmOnHomepage()"
});
formatter.result({
  "duration": 20300,
  "status": "passed"
});
formatter.match({
  "location": "ComputersStepdefs.iMouseHoverOnComputersTab()"
});
formatter.result({
  "duration": 1167193400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Notebooks",
      "offset": 10
    }
  ],
  "location": "ComputersStepdefs.iSelectLinkFromComputersTabDropDown(String)"
});
formatter.result({
  "duration": 1600296700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Notebooks",
      "offset": 22
    }
  ],
  "location": "ComputersStepdefs.iShouldNavigateToPageSuccessfully(String)"
});
formatter.result({
  "duration": 73088200,
  "status": "passed"
});
formatter.after({
  "duration": 799959000,
  "status": "passed"
});
formatter.before({
  "duration": 2948440700,
  "status": "passed"
});
formatter.scenario({
  "line": 36,
  "name": "Verify that User should navigate to \"Software\"page successfully",
  "description": "",
  "id": "computers-tab-test;verify-that-user-should-navigate-to-\"\u003ccomputersdropdowntab\u003e\"page-successfully;;4",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 26,
      "name": "@Smoke"
    },
    {
      "line": 26,
      "name": "@Sanity"
    },
    {
      "line": 26,
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "line": 28,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 29,
  "name": "I mouse hover on Computers tab",
  "keyword": "When "
});
formatter.step({
  "line": 30,
  "name": "I select \"Software\" link from Computers tab drop down",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 31,
  "name": "I should navigate to \"Software\"page successfully",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStepdefs.iAmOnHomepage()"
});
formatter.result({
  "duration": 21200,
  "status": "passed"
});
formatter.match({
  "location": "ComputersStepdefs.iMouseHoverOnComputersTab()"
});
formatter.result({
  "duration": 1171410100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Software",
      "offset": 10
    }
  ],
  "location": "ComputersStepdefs.iSelectLinkFromComputersTabDropDown(String)"
});
formatter.result({
  "duration": 1342882600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Software",
      "offset": 22
    }
  ],
  "location": "ComputersStepdefs.iShouldNavigateToPageSuccessfully(String)"
});
formatter.result({
  "duration": 46780000,
  "status": "passed"
});
formatter.after({
  "duration": 647495400,
  "status": "passed"
});
formatter.uri("src/test/java/resources/featureFile/login.feature");
formatter.feature({
  "line": 1,
  "name": "Login test",
  "description": "\r\nAs a User I want to login in to nopCommerce website",
  "id": "login-test",
  "keyword": "Feature"
});
formatter.before({
  "duration": 2801009900,
  "status": "passed"
});
formatter.scenario({
  "line": 6,
  "name": "User should navigate to login page successfully",
  "description": "",
  "id": "login-test;user-should-navigate-to-login-page-successfully",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 5,
      "name": "@Smoke"
    },
    {
      "line": 5,
      "name": "@Sanity"
    },
    {
      "line": 5,
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "line": 7,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "I click on loginLink",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "I should navigate to login page successfully",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStepdefs.iAmOnHomepage()"
});
formatter.result({
  "duration": 23300,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepdefs.iClickOnLoginLink()"
});
formatter.result({
  "duration": 1188014500,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepdefs.iShouldNavigateToLoginPageSuccessfully()"
});
formatter.result({
  "duration": 40605000,
  "status": "passed"
});
formatter.after({
  "duration": 654928300,
  "status": "passed"
});
formatter.before({
  "duration": 2212556300,
  "status": "passed"
});
formatter.scenario({
  "line": 12,
  "name": "User should login successfully with valid credentials",
  "description": "",
  "id": "login-test;user-should-login-successfully-with-valid-credentials",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 11,
      "name": "@Smoke"
    },
    {
      "line": 11,
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "line": 13,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 14,
  "name": "I click on loginLink",
  "keyword": "When "
});
formatter.step({
  "line": 15,
  "name": "I enter email\"alina98@gmail.com\"",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "I enter password\"Alina12345\"",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "I click on login button",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "I should login successfully",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStepdefs.iAmOnHomepage()"
});
formatter.result({
  "duration": 18500,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepdefs.iClickOnLoginLink()"
});
formatter.result({
  "duration": 1185720400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "alina98@gmail.com",
      "offset": 14
    }
  ],
  "location": "LoginStepdefs.iEnterEmail(String)"
});
formatter.result({
  "duration": 1122679700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Alina12345",
      "offset": 17
    }
  ],
  "location": "LoginStepdefs.iEnterPassword(String)"
});
formatter.result({
  "duration": 129455100,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepdefs.iClickOnLoginButton()"
});
formatter.result({
  "duration": 523234900,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepdefs.iShouldLoginSuccessfully()"
});
formatter.result({
  "duration": 18235159300,
  "error_message": "org.openqa.selenium.NoSuchElementException: Cannot locate an element using xpath\u003d//a[contains(text(),\u0027Log out\u0027)]\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027DESKTOP-7FSFVSR\u0027, ip: \u0027192.168.0.15\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_121\u0027\nDriver info: driver.version: RemoteWebDriver\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:327)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:428)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:353)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:69)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:38)\r\n\tat com.sun.proxy.$Proxy18.getText(Unknown Source)\r\n\tat com.nopcommerce.demo.utility.Utility.getTextFromElement(Utility.java:52)\r\n\tat com.nopcommerce.demo.pages.HomePage.getTextFromLogoutButton(HomePage.java:45)\r\n\tat com.nopcommerce.demo.cucumber.stepDefs.LoginStepdefs.iShouldLoginSuccessfully(LoginStepdefs.java:45)\r\n\tat ✽.Then I should login successfully(src/test/java/resources/featureFile/login.feature:18)\r\n",
  "status": "failed"
});
formatter.after({
  "duration": 4446900,
  "error_message": "org.openqa.selenium.NoSuchWindowException: no such window: target window already closed\nfrom unknown error: web view not found\n  (Session info: chrome\u003d91.0.4472.124)\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027DESKTOP-7FSFVSR\u0027, ip: \u0027192.168.0.15\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_121\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 91.0.4472.124, chrome: {chromedriverVersion: 90.0.4430.24 (4c6d850f087da..., userDataDir: C:\\Users\\Nidhi\\AppData\\Loca...}, goog:chromeOptions: {debuggerAddress: localhost:62005}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nSession ID: 5d236d1d7ba027b333d0d5d6f00ad78e\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:609)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.getScreenshotAs(RemoteWebDriver.java:295)\r\n\tat com.nopcommerce.demo.utility.Utility.getScreenshot(Utility.java:251)\r\n\tat com.nopcommerce.demo.cucumber.Hooks.tearDown(Hooks.java:25)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:498)\r\n\tat cucumber.runtime.Utils$1.call(Utils.java:40)\r\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:16)\r\n\tat cucumber.runtime.Utils.invoke(Utils.java:34)\r\n\tat cucumber.runtime.java.JavaHookDefinition.execute(JavaHookDefinition.java:60)\r\n\tat cucumber.runtime.Runtime.runHookIfTagsMatch(Runtime.java:224)\r\n\tat cucumber.runtime.Runtime.runHooks(Runtime.java:212)\r\n\tat cucumber.runtime.Runtime.runAfterHooks(Runtime.java:206)\r\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:46)\r\n\tat cucumber.runtime.junit.ExecutionUnitRunner.run(ExecutionUnitRunner.java:102)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:63)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:18)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:238)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:63)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:236)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:53)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:229)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:309)\r\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:70)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:95)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:38)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:238)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:63)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:236)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:53)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:229)\r\n\tat org.junit.internal.runners.statements.RunAfters.evaluate(RunAfters.java:27)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:309)\r\n\tat cucumber.api.junit.Cucumber.run(Cucumber.java:100)\r\n\tat org.junit.runner.JUnitCore.run(JUnitCore.java:160)\r\n\tat com.intellij.junit4.JUnit4IdeaTestRunner.startRunnerWithArgs(JUnit4IdeaTestRunner.java:69)\r\n\tat com.intellij.rt.junit.IdeaTestRunner$Repeater.startRunnerWithArgs(IdeaTestRunner.java:33)\r\n\tat com.intellij.rt.junit.JUnitStarter.prepareStreamsAndStart(JUnitStarter.java:220)\r\n\tat com.intellij.rt.junit.JUnitStarter.main(JUnitStarter.java:53)\r\n",
  "status": "failed"
});
});