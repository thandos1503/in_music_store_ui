package Helpers;

import org.openqa.selenium.By;
import org.openqa.selenium.NoSuchElementException;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;

public class ElementsValidation {

public static void findElement(WebDriver driver, By element) {
	pageLoaded.waitForPageLoaded(driver);
	driver.findElement(element);
}	
	
public static void ElementsDoesNotExists(WebDriver driver, By element) {
	pageLoaded.waitForPageLoaded(driver);	
	try {
		WebElement el = driver.findElement(element);
		
		if(el.isDisplayed() == true)
		{
			throw new NoSuchElementException("Element does Exist. Please Investigate!");	
		}
	}
	catch(NoSuchElementException e)	{
		
	}
}


		public static boolean ElementIsEnabled(WebDriver driver, By element) {
	
		try {
			driver.findElement(element).isEnabled();
			return true;
		}
		catch (org.openqa.selenium.NoSuchElementException e) {
	        return false;
			}
	}


	public static boolean isElementPresent(WebDriver driver, By element) {
	    try {
	        driver.findElement(element);
	        return true;
	    } catch (org.openqa.selenium.NoSuchElementException e) {
	        return false;
	    }
	}
}
