package Pages;

import static org.junit.Assert.fail;

import java.awt.List;
import java.util.ArrayList;
import java.util.Dictionary;
import java.util.Hashtable;
import java.util.Iterator;

import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.WindowType;

import Helpers.Click;
import Helpers.ElementsValidation;
import Helpers.Scroll;

public class FooterPage {

	WebDriver driver = null;
	
	private By footer = By.xpath("//footer");
	private By privacypolicy = By.xpath("//a[text()='Privacy Policy']");
	private By termspage = By.xpath("//a[text()='Terms of Use']");
	private By followus = null;
	private By shops = null;
	private By spamericanexpress = By.id("American-E");
	private By spvisa = By.id("visa");
	private By spklarna = By.id("Klarna");
	private By spmastercard = By.xpath("//*[@id='html-body']/div[1]/footer/div/section/div/div/div[2]/div/div[1]/div/div[2]/div[3]");
	private By spdiscover = By.id("surface1");
	private By clickcompanyinfo = By.xpath("//footer/div/section/div/div/div[1]/div[2]/div/div[2]/a[1]");
	private By companyinfo = By.xpath("//h3[text()='About inMusic and Jack O’Donnell']");
	private By clickcareers = By.xpath("//footer/div/section/div/div/div[1]/div[2]/div/div[2]/a[2]");
	private By careers = By.xpath("//h1[text()='A Note From Our CEO']");
	private By clickhelpsupport = By.xpath("//footer/div/section/div/div/div[1]/div[3]/div/div[2]/div[1]/a");		
	private By helpsupport = By.xpath("//h2[text()='How can we help you today?']");
	private By clickregisterproduct = By.xpath("//footer/div/section/div/div/div[1]/div[3]/div/div[2]/div[4]/a");
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
	
	Dictionary dictFollowUs = new Hashtable();
	Dictionary dictshops = new Hashtable();
	Dictionary dictinfo = new Hashtable();
	Dictionary dicthelp = new Hashtable();
	
	public FooterPage(WebDriver driver) {
		
		this.driver = driver;
		
		dictFollowUs.put(1, "inMusicStore - Home | Facebook");
		dictFollowUs.put(2, "inMusic Store (@inmusic_store) / ]Twitter");
		dictFollowUs.put(3, "inMusic Store (@inmusic_store_online) • Instagram photos and videos");
		
		dictshops.put(1, "Studio & Production");
		dictshops.put(2, "Pianos & Keyboards");
		dictshops.put(3, "Drums");
		dictshops.put(4, "DJ");
		dictshops.put(5, "Live Sound & PA");
		dictshops.put(6, "Guitars");
		dictshops.put(7, "Parts & Accessories");
		
		dictinfo.put(1, "About inMusic and Jack O’Donnell");
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
		
		Click.ElementClick(this.driver, privacypolicy);
	}
	
	public void clickTermsPage() {
		
		Click.ElementClick(this.driver, termspage);
	}
	
	public void clickpage(String page) {
		
		
		String shoptext = "//footer/div/section/div/div/div[1]/div[1]/div[2]/a";
		String followustext = "//*[@id='html-body']/div[1]/footer/div/section/div/div/div[2]/div/div[2]/div/div[2]/a";
		
		
		if (page.contains("studio & Production")) {
			shoptext = shoptext + "[1]"; 
			this.shops = By.xpath(shoptext);
			Click.ElementClick(this.driver, this.shops);
		}
		else if (page.contains("Pianos & Keyboards")) {
			shoptext = shoptext + "[2]";
			this.shops = By.xpath(shoptext);
			Click.ElementClick(this.driver, this.shops);
		}
		else if (page.contains("Drums")) {
			shoptext = shoptext + "[3]";
			this.shops = By.xpath(shoptext);
			Click.ElementClick(this.driver, this.shops);
		}
		else if (page.contains("DJ")) {
			shoptext = shoptext + "[4]";
			this.shops = By.xpath(shoptext);
			Click.ElementClick(this.driver, this.shops);
		}
		else if (page.contains("Live Sound & PA")) {
			shoptext = shoptext + "[5]";
			this.shops = By.xpath(shoptext);
			Click.ElementClick(this.driver, this.shops);
		}
		else if (page.contains("Guitars")) {
			shoptext = shoptext + "[6]";
			this.shops = By.xpath(shoptext);
			Click.ElementClick(this.driver, this.shops);
		}
		else if (page.contains("Parts & Accessories")) {
			shoptext = shoptext + "[7]";
			this.shops = By.xpath(shoptext);
			Click.ElementClick(this.driver, this.shops);
		}
		else if (page.contains("facebook")) {
			followustext = followustext + "[1]";
			this.followus = By.xpath(followustext);
			Click.ElementClick(this.driver, this.followus);
		}
		else if (page.contains("twitter")) {
			followustext = followustext + "[2]";
			this.followus = By.xpath(followustext);
			Click.ElementClick(this.driver, this.followus);
		}
		else if (page.contains("instagam")) {
			followustext = followustext + "[3]";
			this.followus = By.xpath(followustext);
			Click.ElementClick(this.driver, this.followus);
		}
		else if (page.contains("About inMusic")) {
			Click.ElementClick(this.driver, this.clickcompanyinfo);
		}
		else if (page.contains("Careers")) {
			Click.ElementClick(this.driver, this.clickcareers);
		}
		else if (page.contains("Help/Support")) {
			Click.ElementClick(this.driver, this.clickhelpsupport);
		}
		/*else if (page.contains("Software Support")) {
			Click.ElementClick(this.driver, this.sofwaresupport);
		}
		else if (page.contains("Hardware Support")) {
			Click.ElementClick(this.driver, this.hardwaresupport);
		}*/
		else if (page.contains("Register a Product")) {
			Click.ElementClick(this.driver, this.clickregisterproduct);
		}
		else if (page.contains("Shipping & Returns Policy")) {
			Click.ElementClick(this.driver, this.clickshippingandreturns);
		}
		else if (page.contains("Warranty Information")) {
			Click.ElementClick(this.driver, this.clickwarranty);
		}
		else if (page.contains("Klarna Financing")) {
			Click.ElementClick(this.driver, this.clickklarnafinancing);
		}
		else if (page.contains("Dealer Locator")) {
			Click.ElementClick(this.driver, this.clickdealerlocator);
		}
	}
	
	public void validatePageLinks(String page) {
		
		ArrayList<String> newTab = new ArrayList<String>(driver.getWindowHandles());
		String text = null;
		String actualTitle = this.driver.getTitle();
		By elementbase = By.xpath("//span[@class='base']");
		
		if (page.contains("facebook")) {
			Assert.assertEquals(actualTitle,dictFollowUs.get(1)); 
		}
		else if (page.contains("twitter")) {
			if(actualTitle.contains("Twitter")) {
			}
			else{
				Assert.fail();
			}
		}
		else if(page.contains("instagam")){
			Assert.assertEquals(actualTitle,dictFollowUs.get(3));
		}
		else if(page.contains("About inMusic")){
			this.driver.switchTo().window(newTab.get(1));
			text = this.driver.findElement(companyinfo).getText();
			Assert.assertEquals(text,dictinfo.get(1));
		}
		else if(page.contains("Careers")){
			this.driver.switchTo().window(newTab.get(1));
			text = this.driver.findElement(careers).getText();
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
		
	}
	
	public void ValidateSecurePayments() {
		
		ElementsValidation.isElementPresent(this.driver, spamericanexpress);
		ElementsValidation.isElementPresent(this.driver, spvisa);
		ElementsValidation.isElementPresent(this.driver, spklarna);
		ElementsValidation.isElementPresent(this.driver, spmastercard);
		ElementsValidation.isElementPresent(this.driver, spdiscover);
	}
}
