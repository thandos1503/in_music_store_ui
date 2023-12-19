package PageFactory;

import java.util.concurrent.TimeUnit;

import org.openqa.selenium.NoSuchElementException;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.support.CacheLookup;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.How;
import org.openqa.selenium.support.PageFactory;
import org.openqa.selenium.support.ui.WebDriverWait;

public class CookiesPage_PF {

	WebDriver driver = null;
	String projectPath = System.getProperty("user.dir");
	
	@FindBy(how = How.XPATH, using = "//span[contains(text(),'We use cookies to make your experience better.')]")
	@CacheLookup
	WebElement CookieBar;
	
	@FindBy(how = How.XPATH, using = "//button[@class='btn btn-primary']")
	@CacheLookup
	WebElement AllowCookie;
	
	@FindBy(how = How.XPATH, using = "//button[@aria-label='Close panel'][1]")
	@CacheLookup
	WebElement CloseCookieBanner;
	
	public CookiesPage_PF(WebDriver driver) {
		this.driver = driver;
		 //wait = new WebDriverWait(driver, 90);
	     PageFactory.initElements(driver, this);
		
		
		
		System.setProperty("webdriver.chrome.driver", projectPath + "/src/test/resources/Drivers/chromedriver.exe");
		
		this.driver = new ChromeDriver();
		this.driver.manage().timeouts().implicitlyWait(30,TimeUnit.SECONDS);
		this.driver.manage().timeouts().pageLoadTimeout(40, TimeUnit.SECONDS);
		this.driver.manage().window().maximize();
		
		
	}

	public void navigateToHomePage() {
		this.driver.navigate().to("https://inmusicstore:webshop@magento.staging.imbtest.com/");
		PageFactory.initElements(driver, this);
	}
	
	//this is for the navigation page
	public void refreshHomePage() {
		this.driver.navigate().refresh();
	}
	
	public void validateCookieBannerExists() throws InterruptedException {
		CookieBar.wait(30000);
		CookieBar.isDisplayed();
	}
	
	public void clickAcceptCookie() {
		AllowCookie.click();
	}
	
	public void validateCookieBannerMustNotAppear() {
		try {
			
			if(CookieBar.isDisplayed() == true)
			{
				throw new NoSuchElementException("Integer already added.");	
			}
		}
		catch(NoSuchElementException e)
		{}
	}
	
	public void clickCloseCookieBanner() {
		CloseCookieBanner.click();
	}
}
