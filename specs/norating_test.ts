

import noratingPage  from "../pages/norating";
import loginPage from "../pages/login";
import feedbackPage from "../pages/feedback";
import forgotpwdPage from "../pages/forgotpwd";


Feature('pretaafeedback_test');

Scenario('feedback_norating', ({I}) => {
   
    I.amOnPage('/login');
    loginPage.login()
    feedbackPage.feedback()
    noratingPage.norating()

});

