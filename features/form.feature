# Feature: Submit Practice Form Successfully

#
#   Scenario: Fill only mandatory fields and submit the form
#     Given I am on the automation practice form page
#     When I fill "First Name"
#     And I fill "Last Name"
#     And I select "Male" as gender
#     And I fill "Mobile"
#     And I click the submit button
#     Then I should see the success modal