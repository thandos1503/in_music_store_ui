 #Author
 #Date
 #Description
 @SmokeScenario @header
 Feature: Header 
 
 Background: Launch website 

	Given I navigate to url 
 
 @SmokeTest 
 Scenario:
 As a user, i want to validate header Content appears
 Then I should see the cookie banner
 When I click the close cookie banner button 
 Then The header includes the logo, account and help icons
 And I click the account button
 When I click the Allow Cookies Button
 Then The account icon links to the account login page
 And I click the logo to go the home page
 Then All content loads on page
 #Then All links are properly linked to appropriate pages

# @SmokeTest 
# Scenario:
# As a user, i want to validate header Content appears
# I am rendered the correct site by my GeoIp (cart only in US)
#The promo bar only appears in the US
#The header is sticky
#I can navigate to all content in the header
#I can navigate through the menu
#The logo links to the homepage
#When I click on the cart, the mini cart expands
#When items are added to the cart, this number is displayed in the orange circle of the cart icon
#When on mobile, clicking on the cart icon brings me directly to cart
#When browsing as a user, the wishlist icon brings me to my wishlist
#When browsing as a guest, the wishlist icon brings me to the account login page
#When logged in and items are added to the wishlist, this number is displayed in the orange circle of the wishlist icon
#I can search using the search field 
#The search field expands with suggested content upon typing
#Upon completing a search, I am brought to a page of results 
#I receive search results even if there are typos or content isn't found
#On mobile, only the logo and cart are visible in header
#On mobile, clicking the X in the search field clears the text of my search
#The support icon links me to the support pageked to appropriate pages
 