package Helpers;

import java.time.Duration;
import java.util.function.Function;

import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;

public class Wait {
	
public static void waitForPageLoad(WebDriver driver,int time) {
		
		try {
			WebDriverWait wait = new WebDriverWait(driver,Duration.ofSeconds(time));
		    wait.until(new Function<WebDriver, Boolean>() {
		        public Boolean apply(WebDriver driver) {
		            System.out.println("Current Window State       : "
		                + String.valueOf(((JavascriptExecutor) driver).executeScript("return document.readyState")));
		            return String
		                .valueOf(((JavascriptExecutor) driver).executeScript("return document.readyState"))
		                .equals("complete");
		        }
		    });
		}
		catch(Throwable error) {
    	 	Assert.fail("Page did not Load, Please investigate");
     }
	}

	public static void waitAwhile(int time) throws InterruptedException {
		
		Thread.sleep(Duration.ofSeconds(time).toMillis());
	}
	
	public static void waitForAnElementToBeVisible(WebDriver driver,By element, int time) {
		
		WebElement wb = driver.findElement(element);
		WebDriverWait wait = new WebDriverWait(driver, Duration.ofSeconds(time));
		wait.until(ExpectedConditions.visibilityOf(wb));
	}
}
