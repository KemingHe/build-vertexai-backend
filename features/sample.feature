# features/sample.feature
Feature: Bank Account
  Scenario: Stores money
    Given A bank account w/ init balance of $250
    When $50 is deposited
    Then The bank account balance should be $300

