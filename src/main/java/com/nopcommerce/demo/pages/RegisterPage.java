package com.nopcommerce.demo.pages;

import com.nopcommerce.demo.utility.Utility;
import org.apache.log4j.LogManager;
import org.apache.log4j.Logger;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;

public class RegisterPage extends Utility {

    private static final Logger log= LogManager.getLogger(HomePage.class.getName());

    String emailId;
    @FindBy(xpath = "//h1[contains(text(),'Register')]")
    WebElement registerPageTitleText;
    @FindBy(id = "FirstName")
    WebElement firstNameField;
    @FindBy(xpath = "//input[@id='LastName']")
    WebElement lastNameField;
    @FindBy(xpath = "//input[@id='Email']")
    WebElement emailField;
    @FindBy(id = "Password")
    WebElement passwordField;
    @FindBy(id = "ConfirmPassword")
    WebElement confirmPasswordField;
    @FindBy(id = "register-button")
    WebElement registerButton;
    @FindBy(id = "FirstName-error")
    WebElement firstNameErrorMessage;
    @FindBy(xpath = "//div[contains(text(),'Your registration completed')]")
    WebElement registrationSuccessMessage;



    public String GetTitleTextFromRegisterPage(){

        log.info("Getting text from : "+registerPageTitleText.toString());
        return getTextFromElement(registerPageTitleText);
    }

    public void enterFirstName(String firstName){

        sendTextToElement(firstNameField,firstName);
        log.info("Send text : "+firstName+" to "+firstNameField.toString());
    }

    public void enterLastName(String lastName){

        sendTextToElement(lastNameField,lastName);
        log.info("send text : "+lastName+" to "+lastNameField.toString());
    }

    public void enterEmailId(String userName,String domain){

        sendTextToElement(emailField,userName+generateRandomNumber()+domain);
        log.info("Send text : "+userName+generateRandomNumber()+domain+" to "+emailField.toString());
    }

    public void enterPassword(String password){

        sendTextToElement(passwordField,password);
        log.info("Send text : "+password+" to "+passwordField.toString());
    }
    public void enterConfirmationPassword(String confirmationPassword){

        sendTextToElement(confirmPasswordField,confirmationPassword);
        log.info("Send text : "+confirmationPassword+" to "+confirmPasswordField.toString());
    }
    public void clickOnRegisterButton(){

        clickOnElement(registerButton);
        log.info("Clicking on : "+registerButton.toString());
    }
    public String getErrorMessageFromFirstNameField(){

        log.info("Getting error message from : "+firstNameErrorMessage.toString());
        return getTextFromElement(firstNameErrorMessage);
    }
    public String getRegistrationSuccessMessage(){

        log.info("Getting registration success message From : "+registrationSuccessMessage.toString());
        return getTextFromElement(registrationSuccessMessage);
    }
}
