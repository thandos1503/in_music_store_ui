 #Author = Luthando Sibiya
 #Date
 #Description
 @SmokeScenario @search @regression
 Feature: Search
 
  Background: Launch website 

	Given I navigate to url
	
 @SmokeTest 
 Scenario Outline: As a user, i want to validate if I can search using the search field 
 And The item to be "<searched>"
 Then I validate if i am redirected to the "<searched>" item

	Examples:
	|searched|
	|MPK MINI PLAY MK3 MINI CONTROLLER KEYBOARD WITH SPEAKERS|
 
 @SmokeTest 
 Scenario Outline: As a user, i want to validate if I I receive search results even if there are typos or content isn't found
 And The item to be "<searched>"
 Then I validate if i am redirected to the "<searched>" item
 
	Examples:
	|searched|
	|TESTING SEARCH ITEMS|