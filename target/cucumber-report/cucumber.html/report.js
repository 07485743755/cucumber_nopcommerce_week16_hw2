$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/java/resources/featureFile/computer.feature");
formatter.feature({
  "line": 1,
  "name": "Computers tab test",
  "description": "\r\nAs a user I want to navigate to all pages which open from computers tab drop down",
  "id": "computers-tab-test",
  "keyword": "Feature"
});
formatter.before({
  "duration": 4113640300,
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
  "duration": 120054700,
  "status": "passed"
});
formatter.match({
  "location": "ComputersStepdefs.iMouseHoverOnComputersTab()"
});
formatter.result({
  "duration": 1236807200,
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
  "duration": 1298456300,
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
  "duration": 64154000,
  "status": "passed"
});
formatter.after({
  "duration": 734104200,
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
  "duration": 3084164600,
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
      "name": "@Sanity"
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
  "duration": 21000,
  "status": "passed"
});
formatter.match({
  "location": "ComputersStepdefs.iMouseHoverOnComputersTab()"
});
formatter.result({
  "duration": 1185062300,
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
  "duration": 1295289700,
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
  "duration": 59346700,
  "status": "passed"
});
formatter.after({
  "duration": 755079500,
  "status": "passed"
});
formatter.before({
  "duration": 3087083800,
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
      "name": "@Sanity"
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
  "duration": 26600,
  "status": "passed"
});
formatter.match({
  "location": "ComputersStepdefs.iMouseHoverOnComputersTab()"
});
formatter.result({
  "duration": 1177251800,
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
  "duration": 1664577700,
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
  "duration": 60035800,
  "status": "passed"
});
formatter.after({
  "duration": 743426700,
  "status": "passed"
});
formatter.before({
  "duration": 3151458100,
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
      "name": "@Sanity"
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
  "duration": 27700,
  "status": "passed"
});
formatter.match({
  "location": "ComputersStepdefs.iMouseHoverOnComputersTab()"
});
formatter.result({
  "duration": 1223066800,
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
  "duration": 1385372000,
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
  "duration": 73167300,
  "status": "passed"
});
formatter.after({
  "duration": 780974200,
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
  "duration": 3016388100,
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
  "duration": 44600,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepdefs.iClickOnLoginLink()"
});
formatter.result({
  "duration": 1178482100,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepdefs.iShouldNavigateToLoginPageSuccessfully()"
});
formatter.result({
  "duration": 45080700,
  "status": "passed"
});
formatter.after({
  "duration": 1434028100,
  "status": "passed"
});
formatter.uri("src/test/java/resources/featureFile/register.feature");
formatter.feature({
  "line": 1,
  "name": "Register Test",
  "description": "As a user I want to register on nopCommerce web site",
  "id": "register-test",
  "keyword": "Feature"
});
formatter.before({
  "duration": 3129649200,
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
  "duration": 51200,
  "status": "passed"
});
formatter.match({
  "location": "RegisterStepdefs.iClickOnRegisterLink()"
});
formatter.result({
  "duration": 665222900,
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
  "duration": 1061690500,
  "status": "passed"
});
formatter.after({
  "duration": 950032500,
  "status": "passed"
});
});