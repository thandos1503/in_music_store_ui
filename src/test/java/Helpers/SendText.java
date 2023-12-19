package Helpers;

import org.openqa.selenium.By;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;

public class SendText {

	public static void SendKeys(WebDriver driver, By element, String text) {
		pageLoaded.waitForPageLoaded(driver);
		driver.findElement(element).sendKeys(text);
	}
	
	public static void SendKeysJava(WebDriver driver, By element, String text) {
		pageLoaded.waitForPageLoaded(driver);
		WebElement wb = driver.findElement(element);
		JavascriptExecutor jse = (JavascriptExecutor)driver;
		jse.executeScript("arguments[0].value='" + text + "';", wb);
	}
	
}
