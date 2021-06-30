package com.nopcommerce.demo.pages;

import com.nopcommerce.demo.utility.Utility;
import org.apache.log4j.LogManager;
import org.apache.log4j.Logger;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;


public class LoginPage extends Utility {


    private static final Logger log = LogManager.getLogger(LoginPage.class.getName());

    @FindBy(id = "Email")
    WebElement emailField;

    @FindBy(id = "Password")
    WebElement passwordField;

    @FindBy(xpath = "//button[@class='button-1 login-button']")
    WebElement loginBtn;

    @FindBy(xpath = "//div[@class='page-title']//h1")
    WebElement welcomeText;

    @FindBy(xpath = "//div[@class='message-error validation-summary-errors']")
    WebElement errorMessage;

    public void enterEmailId(String emilId) {

        sendTextToElement(emailField, emilId);
        log.info("Entering email address : " + emilId + " to email field : " + emailField.toString());
    }

    public void enterPassword(String password) {

        sendTextToElement(passwordField, password);
        log.info("Entering password : " + password + " to password field : " + passwordField.toString());
    }

    public void clickOnLoginButton() {

        clickOnElement(loginBtn);
        log.info("Clicking on login button : " + loginBtn.toString());
    }

    public String getWelcomeText() {

        log.info("Getting text from : " + welcomeText.toString());
        return getTextFromElement(welcomeText);
    }

    public String getErrorMessage() {

        log.info("Getting text from : " + errorMessage.toString());
        return getTextFromElement(errorMessage);
    }
}
