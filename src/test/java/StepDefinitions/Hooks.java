package StepDefinitions;

import java.io.IOException;
import java.net.URL;
import java.util.Properties;
import java.time.Duration;

import org.openqa.selenium.Dimension;
import org.openqa.selenium.Platform;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeOptions;
import org.openqa.selenium.remote.DesiredCapabilities;
import org.openqa.selenium.remote.RemoteWebDriver;
import io.cucumber.java.After;
import io.cucumber.java.Before;
import io.github.bonigarcia.wdm.WebDriverManager;


public class Hooks {
	String projectPath = System.getProperty("user.dir");
	public static WebDriver driver;

	@Before
	public void startTest() throws IOException {
		
		Properties prop = new Properties();
		prop.load(Hooks.class.getClassLoader().getResourceAsStream("inmusicstore.properties"));
		String platform = prop.getProperty("platform");
		
		WebDriverManager.chromedriver().setup();
       
		DesiredCapabilities caps = new DesiredCapabilities();
        
		ChromeOptions options = new ChromeOptions();
		options.addArguments("--disable-gpu");
		options.addArguments("disable-infobars");
		options.addArguments("--disable-dev-shm-usage");
		options.addArguments("--no-sandbox");
		options.addArguments("--disable-extensions");
		options.addArguments("start-maximized");
		options.addArguments("--remote-allow-origins=*");
		options.setAcceptInsecureCerts(true);
		//options.addArguments("--headless");
		caps.setBrowserName("chrome");
		caps.setCapability(ChromeOptions.CAPABILITY, options);

		if (platform.contains("localhost"))
		{
			caps.setPlatform(Platform.WINDOWS);
			Hooks.driver = new RemoteWebDriver(new URL("http://localhost:4444/wd/hub"), caps);
		}
		else if (platform.contains("grid")) 
		{
			caps.setPlatform(Platform.LINUX);
			Hooks.driver = new RemoteWebDriver(new URL("http://grid:5GFXx3wx@3.13.144.56/wd/hub"), caps);
		}
		
		Hooks.driver.manage().timeouts().implicitlyWait(Duration.ofSeconds(60));
        Hooks.driver.manage().timeouts().pageLoadTimeout(Duration.ofSeconds(120));
        Dimension dimension = new Dimension(1920, 1080);
        Hooks.driver.manage().window().setSize(dimension);
	}
	
	@After
	public void tearDown(){
		driver.close();
	    driver.quit();
	}

	public static WebDriver getDriver() { 
	return driver;
	}
}
