package Helpers;

import org.openqa.selenium.By;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.interactions.Actions;

public class Scroll {

	
	public static boolean ScrollToElement(WebDriver driver, By element){
	
		WebElement elem = driver.findElement(element);
		((JavascriptExecutor) driver).executeScript("arguments[0].scrollIntoView(true);", elem);
			
		int x = elem.getLocation().getX();
				
		if (x != 0) {
			return true;
		}
		else {
			return false;
		}
	}
	
	public static void HoverToElement(WebDriver driver, By element){
		pageLoaded.waitForPageLoaded(driver);
		WebElement ele = driver.findElement(element);
		Actions action = new Actions(driver);
		action.moveToElement(ele).perform();
	}
	
	public static void ScrollDown(WebDriver driver) {
		pageLoaded.waitForPageLoaded(driver);
		JavascriptExecutor js = ((JavascriptExecutor) driver);
		js.executeScript("window.scrollTo(0, document.body.scrollHeight);");
	}
	
	public static void ScrollUp(WebDriver driver) {
		pageLoaded.waitForPageLoaded(driver);
		JavascriptExecutor js = ((JavascriptExecutor) driver);
		js.executeScript("window.scrollTo(0, -document.body.scrollHeight);");
	}
	
}
