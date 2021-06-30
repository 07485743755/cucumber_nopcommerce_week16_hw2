Feature: Computers tab test

  As a user I want to navigate to all pages which open from computers tab drop down

  @Sanity @Smoke @Regression
  Scenario: Verify that user should navigate to Desktops page successfully
    Given I am on homepage
    When I mouse hover on Computers tab
    And I select "Desktops" link from Computers tab drop down
    Then I should navigate to Desktops page successfully with title text "Desktops"

  @Smoke @Regression
  Scenario: Verify that user should navigate to NoteBooks page successfully
    Given I am on homepage
    When I mouse hover on Computers tab
    And I select "Notebooks" link from Computers tab drop down
    Then I should navigate to Notebooks page successfully with title text "Notebooks"

  @Regression
  Scenario: Verify that user should navigate to Software page successfully
    Given I am on homepage
    When I mouse hover on Computers tab
    And I select "Software" link from Computers tab drop down
    Then I should navigate to Software page successfully with title text "Software"

  @Sanity @Smoke @Regression
  Scenario Outline:Verify that User should navigate to "<ComputersDropDownTab>"page successfully
    Given I am on homepage
    When I mouse hover on Computers tab
    And I select "<ComputersDropDownTab>" link from Computers tab drop down
    Then I should navigate to "<ComputersDropDownTab>"page successfully
    Examples:
      | ComputersDropDownTab |
      | Desktops             |
      | Notebooks            |
      | Software             |