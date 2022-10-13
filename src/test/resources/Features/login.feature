 #Author
 #Date
 #Description
 @SmokeScenario @login
 Feature: Login 
 
 Background: Launch website 

	Given I navigate to url 
 
 @SmokeTest 
 Scenario:
 As a user, i want to validate if i can login with an valid account in RoW
 Then I should see the cookie banner
 When I click the close cookie banner button 
 And I click the account button
 When I click the Allow Cookies Button
 Then The account icon links to the account login page
 And I enter correct email address
 And I enter valid password
 And I click the sign in button
 Then i have successfully logged in
 
 @SmokeTest 
 Scenario:
  As a user, i want to validate if i can login with an valid account in US
 Then I should see the cookie banner
 When I click the close cookie banner button 
 And I click the account button
 When I click the Allow Cookies Button
 And I set CountryCode to US
 And I Reload the page
 Then I should see the shopping cart
 Then The account icon links to the account login page
 And I enter correct email address
 And I enter valid password
 And I click the sign in button
 Then i have successfully logged in
 Then I should see the shopping cart
 
 
 @SmokeTest 
 Scenario:
 As a user, i want to validate if i get an error message when i login with an invalid account
 Then I should see the cookie banner
 When I click the close cookie banner button 
 And I click the account button
 When I click the Allow Cookies Button
 Then The account icon links to the account login page
 And I enter correct email address
 And I enter invalid password
 And I click the sign in button
 Then I see an error message
 
 @SmokeTest
 Scenario:
 As a user, i want to validate if i am redirected to the privacy policy page when i click the Privacy policy link 
 Then I should see the cookie banner
 When I click the close cookie banner button 
 And I click the account button
 When I click the Allow Cookies Button
 Then The account icon links to the account login page
 And I click the Privacy Policy
 Then I am in the privacy page
 
 @SmokeTest 
 Scenario:
 As a user, i want to validate if i am redirected to the terms of use page when i click the terms of use link 
 Then I should see the cookie banner
 When I click the close cookie banner button 
 And I click the account button
 When I click the Allow Cookies Button
 Then The account icon links to the account login page
 And I click the terms of use
 Then I am in the terms of use page
  
 @SmokeTest
 Scenario:
 As a user, i want to validate if i am redirected to the forgot when i click the forgot link 
 Then I should see the cookie banner
 When I click the close cookie banner button 
 And I click the account button
 When I click the Allow Cookies Button
 Then The account icon links to the account login page
 And I click the forgot
 Then I am in the forgot page
 
 
 
 