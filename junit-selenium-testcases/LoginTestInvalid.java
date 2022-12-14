package com.example.IiitbHandshakeBackend;// Generated by Selenium IDE

import org.junit.After;
import org.junit.Before;
import org.junit.Test;
import org.openqa.selenium.*;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.interactions.Actions;
import org.springframework.boot.test.context.SpringBootTest;

import java.io.IOException;
import java.util.HashMap;
import java.util.Map;

@SpringBootTest
public class LoginTestInvalid {
  private WebDriver driver;
  private Map<String, Object> vars;
  JavascriptExecutor js;
  @Before
  public void setUp() {
    driver = new ChromeDriver();
    js = (JavascriptExecutor) driver;
    vars = new HashMap<String, Object>();
  }
  @After
  public void tearDown() {
    driver.quit();
  }
  @Test
  public void test1() throws InterruptedException, IOException{
    driver.get("http://localhost:3000/");
    driver.manage().window().setSize(new Dimension(1154, 694));
    driver.findElement(By.id("username")).click();
    driver.findElement(By.id("username")).sendKeys("Nikunj");
    driver.findElement(By.id("examplePassword")).click();
    driver.findElement(By.id("examplePassword")).sendKeys("123");
    {
      WebElement dropdown = driver.findElement(By.id("select"));
      dropdown.findElement(By.xpath("//option[. = 'Student']")).click();
    }
    {
      WebElement element = driver.findElement(By.id("select"));
      Actions builder = new Actions(driver);
      builder.moveToElement(element).clickAndHold().perform();
    }
    {
      WebElement element = driver.findElement(By.id("select"));
      Actions builder = new Actions(driver);
      builder.moveToElement(element).perform();
    }
    {
      WebElement element = driver.findElement(By.id("select"));
      Actions builder = new Actions(driver);
      builder.moveToElement(element).release().perform();
    }
    driver.findElement(By.cssSelector(".form-check")).click();
    Thread.sleep(2500);
    driver.findElement(By.cssSelector(".form-check-input")).click();
    Thread.sleep(2500);
    driver.findElement(By.cssSelector(".btn-secondary")).click();
    Thread.sleep(2500);
    driver.findElement(By.linkText("Logout")).click();
    Thread.sleep(2500);
  }
}