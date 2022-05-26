@Google
Feature: Google Main Page


  Scenario: Verifying Google Title
    Given I open Google page
    Then I see "Google" in the title

  Scenario: Opening a search engine page
    Given I open Google page
    Then I see "title" in the title