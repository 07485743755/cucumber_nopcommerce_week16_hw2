package com.nopcommerce.demo.pages;

import com.nopcommerce.demo.utility.Utility;
import org.apache.log4j.LogManager;
import org.apache.log4j.Logger;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;

public class ComputersPage extends Utility {

    private static final Logger log= LogManager.getLogger(HomePage.class.getName());


    @FindBy(xpath = "//div[@class='page-title']//h1")
    WebElement pageTitleText;

    public String getPageTitleText(){
        log.info("Getting text from : "+pageTitleText.toString()+"<br>");
        return getTextFromElement(pageTitleText);
    }
}
