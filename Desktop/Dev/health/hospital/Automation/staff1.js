Feature('autoamtion');

Scenario('testautomation', ({ I }) => {
    I.amOnPage('https://ultimateqa.com/');
    I.click('[id="menu-home-page-menu"] li:nth-child(1) a');
    I.seeElement('[class="collections__heading"]');
    I.waitForElement('[class="collections__heading"]' ,3);
    I.click('[class="products__list-item"]:nth-child(1)');
});
