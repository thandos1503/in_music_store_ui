package Pages;

import java.util.ArrayList;
import java.util.Dictionary;
import java.util.Hashtable;

import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;

import Helpers.Click;
import Helpers.ElementsValidation;
import Helpers.Scroll;
import Helpers.Wait;

public class FooterPage {

	WebDriver driver = null;
	
	private By footer = By.xpath("//footer");
	private By privacypolicy = By.xpath("//footer//section//a[text()='Privacy Policy']");
	private By termspage = By.xpath("//footer//section//a[text()='Terms of Use']");
	private By followus = null;
	private By shops = null;
	private By spamericanexpress = By.id("American-E");
	private By spvisa = By.id("visa");
	private By applepay = By.id("Apple-pay");
	private By affirm = By.id("Affirm_2_Color_-_HEX");
	private By spmastercard = By.xpath("//footer//section//div[@class='payment-wrapper'][1]//following::div[5]");
	private By spdiscover = By.id("surface1");
	private By clickcompanyinfo = By.xpath("//footer//section//div//a[text()='About inMusic']");
	private By companyinfo = By.xpath("//h3[text()='About inMusic and Jack O�Donnell']");
	private By clickcareers = By.xpath("//footer//section//div//a[text()='Careers']");
	private By careers = By.xpath("//h2[text()='A Note From Our CEO']");
	private By clickhelpsupport = By.xpath("//footer//section//div//a[contains(text(),'Help/Support')]");		
	private By helpsupport = By.xpath("//h2[text()='How can we help you today?']");
	private By clickregisterproduct = By.xpath("//footer//section//div//a[contains(text(),'Register a Product')]");
	private By registerprduct = By.xpath("//h1[text()='Get full access to our family of brands']");
	//private By sofwaresupport = By.xpath("//*[@id='html-body']/div[1]/footer/div/section/div/div/div[1]/div[3]/div/div[2]/div[2]/a");
	//private By hardwaresupport = By.xpath("//*[@id='html-body']/div[1]/footer/div/section/div/div/div[1]/div[3]/div/div[2]/div[3]/a");
	private By clickshippingandreturns = By.xpath("//footer/div/section/div/div/div[1]/div[3]/div/div[2]/div[5]/a");
	private By shippingandreturns = By.xpath("//span[text()='Shipping & Returns']");
	private By clickwarranty = By.xpath("//footer/div/section/div/div/div[1]/div[3]/div/div[2]/div[6]/a");
	private By warranty = By.xpath("//span[text()='Warranty']");
	private By clickklarnafinancing = By.xpath("//footer/div/section/div/div/div[1]/div[3]/div/div[2]/div[7]/a");
	private By klarnafinancing = By.xpath("//span[text()='Shop now, pay with Klarna']");
	private By clickdealerlocator = By.xpath("//footer/div/section/div/div/div[1]/div[3]/div/div[2]/div[8]/a");
	private By dealerlocator = By.xpath("//span[text()='Dealer Locator']");
	
	private By socialtwitter = By.xpath("//*[@id='modal-header']/span/span");
		
	Dictionary<Integer, String> dictFollowUs = new Hashtable<Integer, String>();
	Dictionary<Integer, String> dictshops = new Hashtable<Integer, String>();
	Dictionary<Integer, String> dictinfo = new Hashtable<Integer, String>();
	Dictionary<Integer, String> dicthelp = new Hashtable<Integer, String>();
	
	public FooterPage(WebDriver driver) {
		
		this.driver = driver;
		
		dictFollowUs.put(1, "inMusicStore");
		dictFollowUs.put(2, "Sign in to Twitter");
		dictFollowUs.put(3, "Don't have an account? Sign up");
		
		dictshops.put(1, "Studio & Production");
		dictshops.put(2, "Pianos & Keyboards");
		dictshops.put(3, "Drums");
		dictshops.put(4, "DJ");
		dictshops.put(5, "Live Sound & PA");
		dictshops.put(6, "Guitars");
		dictshops.put(7, "Parts & Accessories");
		
		dictinfo.put(1, "About inMusic and Jack O�Donnell");
		dictinfo.put(2, "A Note From Our CEO");
	
		dicthelp.put(1, "How can we help you today?");
		dicthelp.put(2, "suport?");
		dicthelp.put(3, "suport?");
		dicthelp.put(4, "Get full access to our family of brands");
		dicthelp.put(5, "Shipping & Returns");
		dicthelp.put(6, "Warranty");
		dicthelp.put(7, "Shop now, pay with Klarna");
		dicthelp.put(8, "Dealer Locator");
		
	}
	
	public void scrollToFooter() {
		
		Scroll.ScrollToElement(this.driver, footer);
	}
	
	public void clickPrivacyPage() {
		
		try {
			Click.JavaClick(this.driver, privacypolicy);
		} catch (Throwable error) {
			Assert.fail("Privacy page Click failed, Please investigate");
		}
	}
	
	public void clickTermsPage() {
		
		try {
			Click.JavaClick(this.driver, termspage);
		} catch (Throwable error) {
			Assert.fail("Terms page click Failed, Please investigate");
		}
	}
	
	public void clickpage(String page) {
		
		String shoptext = "//footer/div/section/div/div/div[1]/div[1]/div[2]/a";
		String followustext = "//*[@id='html-body']/div[1]/footer/div/section/div/div/div[2]/div/div[2]/div/div[2]/a";
			
		try {
			Wait.waitAwhile(3);
			if (page.contains("studio & Production")) {
				shoptext = shoptext + "[1]"; 
				this.shops = By.xpath(shoptext);
				Click.JavaClick(this.driver, this.shops);
			}
			else if (page.contains("Pianos & Keyboards")) {
				shoptext = shoptext + "[2]";
				this.shops = By.xpath(shoptext);
				Click.JavaClick(this.driver, this.shops);
			}
			else if (page.contains("Drums")) {
				shoptext = shoptext + "[3]";
				this.shops = By.xpath(shoptext);
				Click.JavaClick(this.driver, this.shops);
			}
			else if (page.contains("DJ")) {
				shoptext = shoptext + "[4]";
				this.shops = By.xpath(shoptext);
				Click.JavaClick(this.driver, this.shops);
			}
			else if (page.contains("Live Sound & PA")) {
				shoptext = shoptext + "[5]";
				this.shops = By.xpath(shoptext);
				Click.JavaClick(this.driver, this.shops);
			}
			else if (page.contains("Guitars")) {
				shoptext = shoptext + "[6]";
				this.shops = By.xpath(shoptext);
				Click.JavaClick(this.driver, this.shops);
			}
			else if (page.contains("Parts & Accessories")) {
				shoptext = shoptext + "[7]";
				this.shops = By.xpath(shoptext);
				Click.JavaClick(this.driver, this.shops);
			}
			else if (page.contains("facebook")) {
				followustext = followustext + "[1]";
				this.followus = By.xpath(followustext);
				Click.JavaClick(this.driver, this.followus);
			}
			else if (page.contains("twitter")) {
				followustext = followustext + "[2]";
				this.followus = By.xpath(followustext);
				Click.JavaClick(this.driver, this.followus);
			}
			else if (page.contains("instagam")) {
				followustext = followustext + "[3]";
				this.followus = By.xpath(followustext);
				Click.JavaClick(this.driver, this.followus);
			}
			else if (page.contains("About inMusic")) {
				Click.JavaClick(this.driver, this.clickcompanyinfo);
			}
			else if (page.contains("Careers")) {
				Click.JavaClick(this.driver, this.clickcareers);
			}
			else if (page.contains("Help/Support")) {
				Click.JavaClick(this.driver, this.clickhelpsupport);
			}
			/*else if (page.contains("Software Support")) {
				Click.ElementClick(this.driver, this.sofwaresupport);
			}
			else if (page.contains("Hardware Support")) {
				Click.ElementClick(this.driver, this.hardwaresupport);
			}*/
			else if (page.contains("Register a Product")) {
				Click.JavaClick(this.driver, this.clickregisterproduct);
			}
			else if (page.contains("Shipping & Returns Policy")) {
				Click.JavaClick(this.driver, this.clickshippingandreturns);
			}
			else if (page.contains("Warranty Information")) {
				Click.JavaClick(this.driver, this.clickwarranty);
			}
			else if (page.contains("Klarna Financing")) {
				Click.JavaClick(this.driver, this.clickklarnafinancing);
			}
			else if (page.contains("Dealer Locator")) {
				Click.JavaClick(this.driver, this.clickdealerlocator);
			}
		} catch (Throwable error) {
			Assert.fail("Footer clickpage failed, Please investigate");
			}
	}
	
	public void validatePageLinks(String page) {
		
		ArrayList<String> newTab = new ArrayList<String>(driver.getWindowHandles());
		String text = null;
		By elementbase = By.xpath("//span[@class='base']");
		
		try {
			if (page.contains("facebook")) {
				
				this.driver.switchTo().window(newTab.get(1));
				String URL = this.driver.getCurrentUrl();
				Assert.assertEquals(URL, "https://www.facebook.com/inmusicstoreofficial");
			}
			else if (page.contains("twitter")) {
				this.driver.switchTo().window(newTab.get(1));
				text = this.driver.findElement(socialtwitter).getText();
				Assert.assertEquals(text, dictFollowUs.get(2));
			}
			else if(page.contains("instagam")){
				this.driver.switchTo().window(newTab.get(1));
				String URL = this.driver.getCurrentUrl();
				Assert.assertEquals(URL, "https://www.instagram.com/inmusic_store_online/");
			}
			else if(page.contains("About inMusic")){
				this.driver.switchTo().window(newTab.get(1));
				Wait.waitAwhile(3);
				text = this.driver.findElement(companyinfo).getText();
				Wait.waitAwhile(2);
				Assert.assertEquals(text,dictinfo.get(1));
			}
			else if(page.contains("Careers")){
				this.driver.switchTo().window(newTab.get(1));
				Wait.waitAwhile(3);
				text = this.driver.findElement(careers).getText();
				Wait.waitAwhile(2);
				Assert.assertEquals(text,dictinfo.get(2));
			}
			else if(page.contains("Help/Support")){
				this.driver.switchTo().window(newTab.get(1));
				text = this.driver.findElement(helpsupport).getText();
				Assert.assertEquals(text,dicthelp.get(1));
			}
			/*else if(page.contains("Software Support")){
				Assert.assertEquals(actualTitle,dicthelp.get(2));
			}
			else if(page.contains("Hardware Support")){
				Assert.assertEquals(actualTitle,dicthelp.get(3));
			}*/
			else if(page.contains("Register a Product")){
				text = this.driver.findElement(registerprduct).getText();
				Assert.assertEquals(text,dicthelp.get(4));
			}
			else if(page.contains("Shipping & Returns Policy")){
				text = this.driver.findElement(shippingandreturns).getText();
				Assert.assertEquals(text,dicthelp.get(5));
			}
			else if(page.contains("Warranty Information")){
				text = this.driver.findElement(warranty).getText();
				Assert.assertEquals(text,dicthelp.get(6));
			}
			else if(page.contains("Klarna Financing")){
				text = this.driver.findElement(klarnafinancing).getText();
				Assert.assertEquals(text,dicthelp.get(7));
			}
			else if(page.contains("Dealer Locator")){
				text = this.driver.findElement(dealerlocator).getText();
				Assert.assertEquals(text,dicthelp.get(8));
			}
			else if (page.contains("studio & Production")) {
				text = this.driver.findElement(elementbase).getText();
				Assert.assertEquals(text,dictshops.get(1)); 
			}
			else if (page.contains("Pianos & Keyboards")) {
				text = this.driver.findElement(elementbase).getText();
				Assert.assertEquals(text,dictshops.get(2));
			}
			else if (page.contains("Drums")) {
				text = this.driver.findElement(elementbase).getText();
				Assert.assertEquals(text,dictshops.get(3));
			}
			else if (page.contains("DJ")) {
				text = this.driver.findElement(elementbase).getText();
				Assert.assertEquals(text,dictshops.get(4));
			}
			else if (page.contains("Live Sound & PA")) {
				text = this.driver.findElement(elementbase).getText();
				Assert.assertEquals(text,dictshops.get(5));
			}
			else if (page.contains("Guitars")) {
				text = this.driver.findElement(elementbase).getText();
				Assert.assertEquals(text,dictshops.get(6));
			}
			else if (page.contains("Parts & Accessories")) {
				text = this.driver.findElement(elementbase).getText();
				Assert.assertEquals(text,dictshops.get(7));
			}
		} catch (Throwable error) {
		Assert.fail("validatePageLinks failed, Please investigate");
		}
	}
	
	public void ValidateSecurePayments(String item) {
		
		try {
			switch(item) {
			case "ApplePay":
				ElementsValidation.isElementPresent(this.driver, applepay);
				break;
			case "AmericanExpress":
				ElementsValidation.isElementPresent(this.driver, spamericanexpress);
				break;	
			case "Visa":
				ElementsValidation.isElementPresent(this.driver, spvisa);
				break;	
			case "MasterCard":
				ElementsValidation.isElementPresent(this.driver, spmastercard);
				break;	
			case "Discover":
				ElementsValidation.isElementPresent(this.driver, spdiscover);
				break;	
			case "Affirm":
				ElementsValidation.isElementPresent(this.driver, affirm);
				break;	
			default:
			     System.out.println("Invalid secure payment");
			     break;	
			}
		}catch (Throwable error) {
			Assert.fail("ValidateSecurePayments failed, Please investigate");
		}
	}
}
