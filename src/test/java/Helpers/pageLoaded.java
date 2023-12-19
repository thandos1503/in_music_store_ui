package Helpers;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.support.ui.ExpectedCondition;
import org.openqa.selenium.support.ui.WebDriverWait;

import java.time.Duration;

import org.junit.Assert;
import org.openqa.selenium.JavascriptExecutor;

public class pageLoaded {

	public static void waitForPageLoaded(WebDriver driver) {

        ExpectedCondition<Boolean> expectation = new ExpectedCondition<Boolean>() {
           
        	public Boolean apply(WebDriver driver) {
             return ((JavascriptExecutor)driver).executeScript("return document.readyState").equals("complete");
           }
         };

         WebDriverWait wait = new WebDriverWait(driver,Duration.ofSeconds(60));
         try {
                wait.until(expectation);
         } catch(Throwable error) {
        	 	Assert.fail("Page did not Load, Please investigate");
         }
    } 
	
	
}
