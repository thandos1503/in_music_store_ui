package StepDefinitions;

import java.util.concurrent.TimeUnit;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.chrome.ChromeOptions;
import org.openqa.selenium.firefox.FirefoxDriver;
import org.openqa.selenium.firefox.FirefoxOptions;
import org.openqa.selenium.firefox.FirefoxProfile;

import io.cucumber.java.After;
import io.cucumber.java.Before;
import io.github.bonigarcia.wdm.WebDriverManager;

public class Hooks {
	String projectPath = System.getProperty("user.dir");
	public static WebDriver driver;

	@Before
	public void startTest() {
		WebDriverManager.chromedriver().setup();
		//WebDriverManager.firefoxdriver().setup();
		//FirefoxOptions options = new FirefoxOptions();
		 //FirefoxProfile profile = new FirefoxProfile();
        ChromeOptions options = new ChromeOptions();
        
		 
		 //profile.setPreference("network.proxy.type", 1);
		 //profile.setPreference("network.proxy.http", "71.86.129.131");
		 //profile.setPreference("network.proxy.http_port", 8080);
		 //profile.setPreference("network.proxy.ssl", "71.86.129.131");
		 //profile.setPreference("network.proxy.ssl_port", 8080);
		 
		 //options.setProfile(profile);
		 
        options.setHeadless(true);
        options.addArguments("window-size=1920,1200");
        this.driver=new ChromeDriver(options);
		//this.driver = new FirefoxDriver(options);
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
