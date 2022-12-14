import loginPage = require("../pages/login");
Feature('login');
Scenario('PretaaLogin_test', ({ I  }) => {
Before(async ({I}) => {
loginPage.login()
});
After(async ({I}) => { 
I.click('[href="/logout"]');
});
I.wait(2);
});

