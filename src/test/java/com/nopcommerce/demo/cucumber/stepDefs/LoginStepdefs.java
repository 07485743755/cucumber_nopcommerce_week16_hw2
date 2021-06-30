package com.nopcommerce.demo.cucumber.stepDefs;

import com.nopcommerce.demo.pages.HomePage;
import com.nopcommerce.demo.pages.LoginPage;
import cucumber.api.PendingException;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.junit.Assert;

public class LoginStepdefs {
    @Given("^I am on homepage$")
    public void iAmOnHomepage() {
    }

    @When("^I click on loginLink$")
    public void iClickOnLoginLink() {
        new HomePage().clickOnLoginLink();
    }

    @Then("^I should navigate to login page successfully$")
    public void iShouldNavigateToLoginPageSuccessfully() {
        Assert.assertEquals("Welcome, Please Sign In!",new LoginPage().getWelcomeText());
    }

    @And("^I enter email\"([^\"]*)\"$")
    public void iEnterEmail(String emailId) throws InterruptedException {
        Thread.sleep(1000);
        new LoginPage().enterEmailId(emailId);
    }

    @And("^I enter password\"([^\"]*)\"$")
    public void iEnterPassword(String password)  {
       new LoginPage().enterPassword(password);
    }

    @And("^I click on login button$")
    public void iClickOnLoginButton() {
        new LoginPage().clickOnLoginButton();
    }

    @Then("^I should login successfully$")
    public void iShouldLoginSuccessfully() {
        Assert.assertEquals("Log out",new HomePage().getTextFromLogoutButton());
    }



    @Then("^I should see the error message \"([^\"]*)\"$")
    public void iShouldSeeTheErrorMessage(String expectedErrorMessage)  {

        Assert.assertTrue(new LoginPage().getErrorMessage().contains(expectedErrorMessage));
    }
}
