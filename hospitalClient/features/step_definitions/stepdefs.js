const { Given, When, Then } = require("@cucumber/cucumber");
const { By, until } = require('selenium-webdriver');
const { expect } = require('chai');
var seleniumWebdriver = require('selenium-webdriver');

const driver = new seleniumWebdriver.Builder().forBrowser('chrome').build();
//const driver = new seleniumWebdriver.Builder().forBrowser('firefox').build();

Given('I have visited the home page and navigate to the appointments', function (next) {
    driver.get('http://localhost:3000/').then(next);
    const element = driver.findElement(By.className('appointments'));
    element.click();
    const newOption = driver.findElement(By.className('add-new-appointment'));
    newOption.click();
});

When('I click in the button to add and fill the form', async function () {
    await driver.wait(until.elementLocated(By.id('doctor-select')), 2000);
    await driver.wait(until.elementIsVisible(driver.findElement(By.id('doctor-select'))), 3000)
    await driver.wait(until.elementIsEnabled(driver.findElement(By.id('doctor-select'))), 3000).click();
    let item_doctor = driver.wait(until.elementLocated(By.xpath("//*[@class=\"p-dropdown-items-wrapper\"]")), 2000).then(el => {
        el.click();
    });

    await driver.wait(until.elementLocated(By.id('patient-select')), 2000);
    await driver.wait(until.elementIsVisible(driver.findElement(By.id('patient-select'))), 3000)
    await driver.wait(until.elementIsEnabled(driver.findElement(By.id('patient-select'))), 3000).click();
    let item_patient = driver.wait(until.elementLocated(By.xpath("//*[@class=\"p-dropdown-items-wrapper\"]")), 2000).then(el => {
        el.click();
    });

    let date_input = driver.wait(until.elementLocated(By.className('date-input')), 2000);
    //date_input.click();
    let m = new Date();
    let dateString = m.getUTCFullYear() +"-"+ (m.getUTCMonth()+1) +"-"+ m.getUTCDate();
    date_input.sendKeys(dateString);

    let local_input = driver.wait(until.elementLocated(By.className('local-input')), 2000);
    local_input.sendKeys("D10");

    let submit_button = driver.wait(until.elementLocated(By.id('submit-button')), 2000);
    submit_button.click();
});

Then('the page add the appointment', function () {
    driver.wait(until.elementLocated(By.id('panel_message')), 3000).then(el => {
        let m = new Date();
        let dateString = m.getUTCFullYear() +"-0"+ (m.getUTCMonth()+1) +"-0"+ m.getUTCDate();
        driver.get('http://localhost:3000/appointment/list');
        let td = driver.wait(until.elementLocated((By.xpath('(//*[@class=\"p-datatable-tbody\"]/tr/td[@class=\"date_input\"])[1]'))), 2000);
        td.getText().then(s => expect(s).to.equal(dateString));
    });
});