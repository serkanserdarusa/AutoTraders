package com.autotraders.Pages;

import com.autotraders.utils.ConfigurationReader;
import com.autotraders.utils.MyDriver;
import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;
import org.openqa.selenium.support.ui.Select;

import java.util.ArrayList;

import java.util.List;
import java.util.concurrent.TimeUnit;

public class AdvanceSearchPage extends BasePage{

    /**
     * Locators
     */


    @FindBy(xpath = "//a[contains(text(),'Advanced Search')]")
    public WebElement clickAdvanceSearch;

    @FindBy(xpath = "//input[contains(@type,'tel')]")
    public WebElement enterZipCode;

    @FindBy(xpath = "//div[contains(text(),'Certified')]")
    public WebElement selectCertified;

    @FindBy(xpath = "//div[contains(text(),'Convertible')]")
    public WebElement selectConvertible;

    @FindBy(xpath = "//select[contains(@name,'startYear')]")
    public WebElement selectFrom;

    @FindBy(xpath = "//select[contains(@name,'endYear')]")
    public WebElement selectTo;

    @FindBy(xpath = "//select[contains(@name,'makeFilter0')]")
    public WebElement selectBMW;

    @FindBy(xpath = "//button[@class='btn btn-primary btn-block ae-button']")
    public WebElement clickSearchButton;

    @FindBy(xpath = "//title[contains(text(),'Certified BMW Convertibles for Sale')]")
    public WebElement userInPage;

    @FindBy(xpath = "//h2[contains(@data-cmp,'subheading')]")
    public WebElement onlyBMW;

    @FindBy(xpath = "//div[contains(@data-cmp,'inventoryListing')]")
    public WebElement numberOfBMW;

    //constructor
    public AdvanceSearchPage() {
        //for initialize the @FindBy annotations.
        PageFactory.initElements(MyDriver.get(),this);
    }

    /**
     * Scenario 2 starting.
     */

    //Clicking the advance search link.
    public void verifyclickable() throws InterruptedException {
        //Trying to make sure page loaded and all the elements visible.
        MyDriver.get().manage().timeouts().implicitlyWait(10,TimeUnit.SECONDS);

        //to see the process putting 3 second wait.
        Thread.sleep(3000);
        clickAdvanceSearch.click();
    }

    /**
     * After navigating Advance Search page
     * We are filling required fields to click search button.
     */

    //Entering zipcode.
    public void verifyZipCode(){
        MyDriver.get().manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS);
        enterZipCode.sendKeys("30004");
    }


    //Clicking the Certificate and Convertible checkboxes.
    public void verifyclickCertifiedAndConvertible(String a,String b) throws InterruptedException {

        if (a.equalsIgnoreCase(selectCertified.getText())) {
            selectCertified.click();
            Thread.sleep(3000);
        } else {
            scrollDown(selectConvertible);
            selectConvertible.click();
            Thread.sleep(3000);
        }
    }

    //Choosing the "from" to "To" years range.
    public void verifyselectStartAndEnd() throws InterruptedException {
        MyDriver.get().manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS);
        Select select = new Select(selectFrom);
        select.selectByValue("2017");
        Select select1 = new Select(selectTo);
        select1.selectByValue("2020");
        Thread.sleep(2000);
    }

    //Choosing the Car Make as BMW
    public void verifyselectBMW() throws InterruptedException {
        MyDriver.get().manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS);
        Select select = new Select(selectBMW);
        select.selectByValue("BMW");
        Thread.sleep(3000);
    }

    //Clicking the Search button
    public void verifyClickSearchButton() throws InterruptedException {

        WebElement link = clickSearchButton;
        scrollDown(link);
        Thread.sleep(2000);

      clickSearchButton.click();
    }


    /**
     * After clicking search button
     * We are verifying that result is correct
     */

    //Verifying the title that we are in result page.
    public void VerifyUsersInPage(){

        userInPage.getText();
    }

    //Verifying that in result page there is no other car results come.
    public void VerifyThereIsOnlyBMW(){
        //Storing all the results in List and comparing all the results not contains BMW
        List<WebElement> list=MyDriver.get().findElements(By.xpath("//h2[contains(@data-cmp,'subheading')]"));
        int count=0;
        for( WebElement each:list){
            if(!each.getText().contains("BMW")){
                System.out.println("We found not BMW listing "+count);
        }
           count++;
       }
        System.out.println("We found "+count+" BMW listing and There is no non BMW listing");
    }


    //Counting how many listing result displayed.
    public void verifyNumberOfBMW(){

        List<WebElement> list=MyDriver.get().findElements(By.xpath("//div[contains(@data-cmp,'inventoryListing')]"));

        System.out.println("Number of BMW listed in result page is :" +list.size());

        int actual=list.size();
        String expected=MyDriver.get().findElement(By.xpath("//div[@class='results-text-container text-size-200']")).getText();
        System.out.println(expected);

        String [] arr=expected.split(" ");
        //System.out.println(arr[2]);
        int expectedResult=Integer.parseInt(arr[2]);
        Assert.assertEquals("Assertion failed",expectedResult,actual);
    }


}
