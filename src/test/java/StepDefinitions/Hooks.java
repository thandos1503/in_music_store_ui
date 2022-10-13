package StepDefinitions;

import java.util.concurrent.TimeUnit;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.chrome.ChromeOptions;

import io.cucumber.java.After;
import io.cucumber.java.Before;
import io.github.bonigarcia.wdm.WebDriverManager;

public class Hooks {
	String projectPath = System.getProperty("user.dir");
	public static WebDriver driver;

	@Before
	public void startTest() {
		WebDriverManager.chromedriver().setup();
		
        ChromeOptions options = new ChromeOptions();
        
        options.setHeadless(true);
        options.addArguments("window-size=1920,1200");
        this.driver=new ChromeDriver(options);
        
        //driver.get("https://opensource-demo.orangehrmlive.com/");
		
		//System.setProperty("webdriver.chrome.driver", projectPath + "/src/test/resources/Drivers/chromedriver.exe");
				
		this.driver = new ChromeDriver();
		this.driver.manage().timeouts().implicitlyWait(30, TimeUnit.SECONDS);
		this.driver.manage().timeouts().pageLoadTimeout(120, TimeUnit.SECONDS);
		this.driver.manage().window().maximize();
	}

	@After
	public void tearDown() {

	    driver.close();
	    driver.quit();
	}

	public static WebDriver getDriver() { 
	return driver;
	}
}
