 #Author
 #Date
 #Description
 @SmokeScenario @login @regression
 Feature: Login 
 
 Background: Launch website 

	Given I navigate to url 
 
  @SmokeTest
 Scenario Outline: As a user, i want to validate if i can login with an valid account in RoW
 And I click the account button
 Then The account icon links to the account login page
 And I enter correct "<email>" address
 And I enter valid "<password>"
 And I click the sign in button
 Then i have successfully logged in
 
 Examples:
 |email|password|
 |thandos1503@gmail.com|Abc123##|

 
 @SmokeTest 
 Scenario Outline: As a user, i want to validate if i can login with an valid account in US
 And I click the account button
 Then I should see the shopping cart
 Then The account icon links to the account login page
 And I enter correct "<email>" address
 And I enter valid "<password>"
 And I click the sign in button
 Then i have successfully logged in
 Then I should see the shopping cart
 
 Examples:
 |email|password|
 |Thandos1311@outlook.com|Abc123##| 
 
 @SmokeTest
 Scenario Outline: As a user, i want to validate if i get an error message when i login with an invalid account
 And I click the account button
 Then The account icon links to the account login page
 And I enter correct "<email>" address
 And I enter valid "<password>"
 And I click the sign in button
 Then I see an error message
 
  Examples:
 |email|password|
 |thandos1503@gmail.com|sadsfdfw|
 
 @SmokeTest
 Scenario: As a user, i want to validate if i am redirected to the privacy policy page when i click the Privacy policy link 
 And I click the account button
 Then The account icon links to the account login page
 And I click the Privacy Policy
 Then I am in the privacy page
 
 @SmokeTest 
 Scenario: As a user, i want to validate if i am redirected to the terms of use page when i click the terms of use link 
 And I click the account button
 Then The account icon links to the account login page
 And I click the terms of use
 Then I am in the terms of use page
  
 @SmokeTest
 Scenario: As a user, i want to validate if i am redirected to the forgot when i click the forgot link 
 And I click the account button
 Then The account icon links to the account login page
 And I click the forgot
 Then I am in the forgot page
 
@SmokeTest
 Scenario Outline: As a user, i want to validate if i can see the My Registered Product column
 And I click the account button
 Then The account icon links to the account login page
 And I enter correct "<email>" address
 And I enter valid "<password>"
 And I click the sign in button
 Then I can see the My Registered product panel
 
 Examples:
 |email|password|
 |Thandos1311@outlook.com|Abc123##|
 
 @SmokeTest
 Scenario Outline: As a user, i want to validate if i am On the My Product Page i can click register new product 
 And I click the account button
 Then The account icon links to the account login page
 And I enter correct "<email>" address
 And I enter valid "<password>"
 And I click the sign in button
 Then I can see the My Registered product panel
 And I click the register new product button
 Then I should be on the Product registration page
 
 Examples:
 |email|password|
 |Thandos1311@outlook.com|Abc123##| 
 
 
 @SmokeTest
 Scenario Outline: As a user, i want to validate if i See the Full Dropdown Menu for the account on the top right 
 And I click the account button
 Then The account icon links to the account login page
 And I enter correct "<email>" address
 And I enter valid "<password>"
 And I click the sign in button
 And I click the logged in account button
 And I Click My account
 Then I Must be in My account page
 And I click the logged in account button
 And I Click My product
 Then I Must be in my product page
 And I click the logged in account button
 And I Click My offers
 Then I Must be in My offers page
 And I click the logged in account button
 And I Click My returns
 Then I Must be in My returns page
 And I click the logged in account button
 And I Click My information
 Then I Must be in My information page
 
 Examples:
 |email|password|
 |Thandos1311@outlook.com|Abc123##| 
 
 @debug
 Scenario Outline: As a user, i want to validate On the My Info page, I can upate my DOB and receive an error if I'm not 18+ 
 And I click the account button
 Then The account icon links to the account login page
 And I enter correct "<email>" address
 And I enter valid "<password>"
 And I click the sign in button
 Then i have successfully logged in
 And I click the logged in account button
 And I Click My information
 Then I Must be in My information page
 And I enter YOB of "2020"
 And I Click Save
 Then I Must see and error message pop up
  
 Examples:
 |email|password|
 |Thandos1311@outlook.com|Abc123##| 
 
@SmokeTest
 Scenario Outline: As a user, i want to validate On the My Info page, I can update my name 
 And I click the account button
 Then The account icon links to the account login page
 And I enter correct "<email>" address
 And I enter valid "<password>"
 And I click the sign in button
 And I click the logged in account button
 And I Click My information
 Then I Must be in My information page
 And I enter new firstname
 And I Click Save
 Then I Must Update User info PopUp
  
 Examples:
 |email|password|
 |thandos1503@gmail.com|Abc123##| 
 
 @SmokeTest
 Scenario Outline: As a user, i want to validate On the My Info page, I can update my interests 
 And I click the account button
 Then The account icon links to the account login page
 And I enter correct "<email>" address
 And I enter valid "<password>"
 And I click the sign in button
 And I click the logged in account button
 And I Click My information
 Then I Must be in My information page
 And I click new interest
 And I Click Save
 Then I Must Update User info PopUp
 And I click new interest
 And I Click Save  
 Examples:
 |email|password|
 |Thandos1311@outlook.com|Abc123##| 
 
 @SmokeTest
 Scenario Outline: As a user, i want to validate On the dashboard, I see my registered products 
 And I click the account button
 Then The account icon links to the account login page
 And I enter correct "<email>" address
 And I enter valid "<password>"
 And I click the sign in button
 And I click the logged in account button
 And I click and see all your product registrations
 Then I should be in the registered products page
  
 Examples:
 |email|password|
 |thandos1503@gmail.com|Abc123##| 
 
 @SmokeTest
 Scenario Outline: As a user, i want to validate On the dashboard, I can click register new product and i am redirected to the product registration page 
 And I click the account button
 Then The account icon links to the account login page
 And I enter correct "<email>" address
 And I enter valid "<password>"
 And I click the sign in button
 And I click the logged in account button
 Then I should see the orders Button
 And I click the order Button
 Then I should see my orders
  
 Examples:
 |email|password|
 |thandos1503@gmail.com|Abc123##|
 
 
 @SmokeTest
 Scenario Outline: As a user, I want to validate On the My Info page, I can subscribe and unsubscribe to brands 
 And I click the account button
 Then The account icon links to the account login page
 And I enter correct "<email>" address
 And I enter valid "<password>"
 And I click the sign in button
 Then i have successfully logged in
 And I click the logged in account button
 And I Click My information
 Then I Must be in My information page
 And I subscribe to a brand
 Then I must see the successfully sibcribed message
 And I unsubscribe to a brand
 Then I Should successfully unsusbscribed  
 Examples:
 |email|password|
 |Thandos1311@outlook.com|Abc123##| 
 