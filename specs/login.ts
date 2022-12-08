import loginPage = require("../pages/login");
Feature('login');
Scenario('PretaaLogin_test', ({ I  }) => {
loginPage.login()
I.click('[href="/logout"]');
I.wait(2);
});

