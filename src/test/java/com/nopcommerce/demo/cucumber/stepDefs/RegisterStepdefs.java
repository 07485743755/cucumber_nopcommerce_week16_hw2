package com.nopcommerce.demo.cucumber.stepDefs;

import com.nopcommerce.demo.pages.HomePage;
import com.nopcommerce.demo.pages.RegisterPage;
import com.nopcommerce.demo.utility.Utility;
import cucumber.api.PendingException;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.junit.Assert;

public class RegisterStepdefs {
    @When("^I click on register link$")
    public void iClickOnRegisterLink() {
        new HomePage().clickOnRegisterLink();
    }

    @Then("^I should navigate to register page with page title text \"([^\"]*)\"$")
    public void iShouldNavigateToRegisterPageWithPageTitleText(String expectedPageTitleText) throws InterruptedException {
        Thread.sleep(1000);
        Assert.assertEquals(expectedPageTitleText, new RegisterPage().GetTitleTextFromRegisterPage());
    }

    @And("^I enter firstName \"([^\"]*)\"in first name field$")
    public void iEnterFirstNameInFirstNameField(String firstName) throws InterruptedException {
        Thread.sleep(1000);
        new RegisterPage().enterFirstName(firstName);

    }

    @And("^I enter last name \"([^\"]*)\"in last name field$")
    public void iEnterLastNameInLastNameField(String lastName) throws InterruptedException {
        Thread.sleep(500);
        new RegisterPage().enterLastName(lastName);
    }

    @And("^I enter email\\(user \"([^\"]*)\" and domain \"([^\"]*)\"\\) in email field$")
    public void iEnterEmailUserAndDomainInEmailField(String userName, String domain) {
        new RegisterPage().enterEmailId(userName, domain);
    }

    @And("^I enter password \"([^\"]*)\"and confirm password\"([^\"]*)\" in confirm password field$")
    public void iEnterPasswordAndConfirmPasswordInConfirmPasswordField(String password, String confirmPassword) {
        new RegisterPage().enterPassword(password);
        new RegisterPage().enterConfirmationPassword(confirmPassword);
    }

    @And("^I click on register button$")
    public void iClickOnRegisterButton() {
        new RegisterPage().clickOnRegisterButton();
    }

    @Then("^I should get error message \"([^\"]*)\" on register page$")
    public void iShouldGetErrorMessageOnRegisterPage(String expectedErrorMessage) throws InterruptedException {
        Thread.sleep(500);
        Assert.assertEquals(expectedErrorMessage, new RegisterPage().getErrorMessageFromFirstNameField());
    }


    @Then("^I should register successful with registration successful message\"([^\"]*)\"$")
    public void iShouldRegisterSuccessfulWithRegistrationSuccessfulMessage(String expectedRegistrationSuccessMessage) throws InterruptedException {
        Thread.sleep(500);
        Assert.assertEquals(expectedRegistrationSuccessMessage, new RegisterPage().getRegistrationSuccessMessage());
    }

    @And("^I enter email\"([^\"]*)\" in email field$")
    public void iEnterEmailInEmailField(String email)  {
        new RegisterPage().enterEmailId(email);
    }
}
