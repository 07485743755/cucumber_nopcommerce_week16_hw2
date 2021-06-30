package com.nopcommerce.demo.cucumber.stepDefs;

import com.nopcommerce.demo.pages.*;
import cucumber.api.PendingException;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.junit.Assert;

public class ComputersStepdefs {
    @When("^I mouse hover on Computers tab$")
    public void iMouseHoverOnComputersTab() throws InterruptedException {
        Thread.sleep(1000);
        new HomePage().mouseHoverOnComputersTab();
    }

    @And("^I select \"([^\"]*)\" link from Computers tab drop down$")
    public void iSelectLinkFromComputersTabDropDown(String menu)  {
       new HomePage().selectFromComputersDropDown(menu);
    }

    @Then("^I should navigate to Desktops page successfully with title text \"([^\"]*)\"$")
    public void iShouldNavigateToDesktopsPageSuccessfullyWithTitleText(String expectedPageTitleText)  {
        Assert.assertEquals(expectedPageTitleText,new DesktopsPage().getDesktopsPageTitle());
    }

    @Then("^I should navigate to Notebooks page successfully with title text \"([^\"]*)\"$")
    public void iShouldNavigateToNotebooksPageSuccessfullyWithTitleText(String expectedPageTitleText) {
       Assert.assertEquals(expectedPageTitleText,new NoteBooksPage().getPageTitleFromNotebooksPage());
    }

    @Then("^I should navigate to Software page successfully with title text \"([^\"]*)\"$")
    public void iShouldNavigateToSoftwarePageSuccessfullyWithTitleText(String expectedPageTitleText) {
       Assert.assertEquals(expectedPageTitleText,new SoftwarePage().getSoftWarePageTitleText());
    }

    @Then("^I should navigate to \"([^\"]*)\"page successfully$")
    public void iShouldNavigateToPageSuccessfully(String expectedText)  {

        Assert.assertEquals(expectedText,new ComputersPage().getPageTitleText());
    }
}
