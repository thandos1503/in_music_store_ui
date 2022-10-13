package Helpers;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;

public class SendText {

	public static void SendKeys(WebDriver driver, By element, String text) {
		
		driver.findElement(element).sendKeys(text);
	}
}
