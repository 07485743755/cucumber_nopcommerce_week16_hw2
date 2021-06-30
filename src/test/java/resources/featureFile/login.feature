Feature: Login test

  As a User I want to login in to nopCommerce website

  @Smoke @Sanity @Regression
  Scenario: User should navigate to login page successfully
    Given I am on homepage
    When I click on loginLink
    Then I should navigate to login page successfully

  @Smoke @Regression
  Scenario: User should login successfully with valid credentials
    Given I am on homepage
    When I click on loginLink
    And   I enter email"alina908@gmail.com"
    And   I enter password"Alina12345"
    And   I click on login button
    Then  I should login successfully

  @Regression
  Scenario Outline:Verify the error message with invalid credentials
    Given I am on homepage
    When I click on loginLink
    And  I enter email"<email>"
    And  I enter password"<password>"
    And  I click on login button
    Then I should see the error message "<error message>"

    Examples:
      | email            | password | error message                                                    |
      | nids1@yahoo.com  | N12345   | Login was unsuccessful. Please correct the errors and try again. |
      | nids@yahoo.com   | N12395   | Login was unsuccessful. Please correct the errors and try again. |
      | nids17@yahoo.com | N17345   | Login was unsuccessful. Please correct the errors and try again. |
