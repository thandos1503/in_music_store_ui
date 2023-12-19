package Helpers;

import java.time.Duration;

import org.openqa.selenium.By;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.TimeoutException;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.ui.WebDriverWait;
import org.openqa.selenium.support.ui.ExpectedConditions;

public class Click {

	public static void ElementClick(WebDriver driver, By element) {
		pageLoaded.waitForPageLoaded(driver);
		driver.findElement(element).click();
	}	
	
	public static void JavaClick(WebDriver driver, By element) {
		pageLoaded.waitForPageLoaded(driver);
		WebElement myElement = driver.findElement(element);
		JavascriptExecutor executor = (JavascriptExecutor)driver;
		executor.executeScript("arguments[0].click();", myElement);
	}
	
	public static boolean ElementIsClickable(WebDriver driver, By element, int time) {
		pageLoaded.waitForPageLoaded(driver);
		try {
		       new WebDriverWait(driver, Duration.ofSeconds(time)).until(ExpectedConditions.elementToBeClickable(element));
		       return true;
		}
		catch(TimeoutException e) {
		       return false;
		}
	}
}
