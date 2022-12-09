
import login  from "../pages/login";
import feedbackPage from "../pages/feedback";
import submitPage from "../pages/submit";

Feature('pretaafeedback_test');

Scenario('login_check', ({ I }) => {

    I.amOnPage('/login');
    login.login()
    
  });

Scenario('go to feedback', ({I}) => {
   
    feedbackPage.feedback()

});
  
    Scenario('submit feedback', ({ I}) => {
  
      submitPage.submit()

    });

