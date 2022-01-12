Feature: Create an appointment
  I want to test if it is possible to create an appointment in the app

  Scenario: Create an appointment to a defined user and doctor for today at a specific local
    Given I have visited the home page and navigate to the appointments
    When I click in the button to add and fill the form
    Then the page add the appointment


