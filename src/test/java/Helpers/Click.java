package Helpers;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;

public class Click {

	public static void ElementClick(WebDriver driver, By element) {
		
		driver.findElement(element).click();;
	}	
}
