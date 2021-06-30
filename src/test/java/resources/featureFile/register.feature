Feature: Register Test
  As a user I want to register on nopCommerce web site

  @Sanity @Smoke @Regression
  Scenario: User should navigate to register page successfully
    Given I am on homepage
    When I click on register link
    Then I should navigate to register page with page title text "Register"

  @Smoke @Regression
  Scenario: Verify user get error message with leave mandatory field(first name) blank while register
    Given I am on homepage
    When I click on register link
    And I enter last name "Salvator"in last name field
    And I enter email(user "alina" and domain "@gmail.com") in email field
    And I enter password "Alina12345"and confirm password"Alina12345" in confirm password field
    And I click on register button
    Then I should get error message "First name is required." on register page

  @Regression
  Scenario: Verify user should register successfully with fill all mandatory field on register page
    Given I am on homepage
    When I click on register link
    And I enter firstName "Alina"in first name field
    And I enter last name "Salvator"in last name field
    And I enter email(user "alina" and domain "@gmail.com") in email field
    And I enter password "Alina12345"and confirm password"Alina12345" in confirm password field
    And I click on register button
    Then I should register successful with registration successful message"Your registration completed"
