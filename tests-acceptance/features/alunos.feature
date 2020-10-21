Feature: As a professor
         I want to register students
         So that I can manage their learning goals

# Scenario: Registering student with non registered CPF
# Given I am at the students page
# Given I cannot see a student with CPF "683" in the students list
# When I try to register the student "Mari" with CPF "683"
# Then I can see "Mari" with CPF "683" in the students list

# Scenario: Registering student with registered CPF
# Given I am at the students page
# Given I can see a student with CPF "684" in the students list
# When I try to register the student "Pedro" with CPF "684"
# Then I cannot see "Pedro" with CPF "684" in the students list
# And I can see an error message

Scenario: Remove student with registered CPF
Given I am at the students page
Given I can see a student with CPF "685" in the students list
When I try to remove the student "Clarissa" with CPF "685"
Then I cannot see "Clarissa" with CPF "685" in the students list