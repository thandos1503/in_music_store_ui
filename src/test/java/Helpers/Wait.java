package Helpers;

import java.time.Duration;
import java.util.function.Function;

import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.support.ui.WebDriverWait;



public class Wait {
	
public static void waitForPageLoad(WebDriver driver,int time) throws Exception {
		
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
		catch(Exception e)
		{
			throw new Exception("Page not  fully loaded:" + e.getMessage()); 
		}
	}

public static void waitAwhile(int time) throws InterruptedException {
	
	Thread.sleep(Duration.ofSeconds(time).toMillis());
}

}
