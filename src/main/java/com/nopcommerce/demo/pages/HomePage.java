package com.nopcommerce.demo.pages;

import com.nopcommerce.demo.utility.Utility;
import org.apache.log4j.LogManager;
import org.apache.log4j.Logger;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.FindBys;


import java.util.List;

public class HomePage extends Utility {


    private static final Logger log= LogManager.getLogger(HomePage.class.getName());

    @FindBy(linkText = "Log in")
    WebElement loginLink;
    @FindBy(xpath = "//a[@class='ico-register']")
    WebElement registerLink;
    @FindBy(xpath = "//a[contains(text(),'Log out')]")
    WebElement logoutLink;
    @FindBy(xpath = "(//a[contains(text(),'Computers ')])[1]")
    WebElement computersTab;
    @FindBys({@FindBy(xpath = "(//ul[@class='sublist first-level'])[1]//a")})
    List<WebElement> computersTabDropDown;


    public void clickOnLoginLink() {

        clickOnElement(loginLink);
        log.info("Clicking on login link : " + loginLink.toString());
    }

    public void clickOnRegisterLink() {

        clickOnElement(registerLink);
        log.info("Clicking on login link : " + registerLink.toString());
    }

    public String getTextFromLogoutButton(){

        log.info("Getting text from : "+logoutLink.toString());
        return getTextFromElement(logoutLink);
    }

    public void mouseHoverOnComputersTab(){

        log.info("Mouse hover on : "+computersTab.toString());
        mouseHoverToElement(computersTab);
    }

    public void selectFromComputersDropDown(String menu){

        for (WebElement element:computersTabDropDown){

            log.info("Getting text from : "+element.toString()+" compare it with : "+menu);
            if (element.getText().equalsIgnoreCase(menu)){

                log.info("Mouse hover and click on element : "+element.toString());
                mouseHoverToElementAndClick(element);
                break;
            }
        }

    }
}
