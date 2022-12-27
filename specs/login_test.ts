
import loginPage  from "../pages/login";
import feedbackPage from "../pages/feedback";
import submitPage from "../pages/submit";

Feature('pretaafeedback_test');

Scenario('login check', ({I}) => {

 loginPage.login()
    
  });


Scenario('go to feedback', ({I}) => {
   
    feedbackPage.feedback()

});
  
    Scenario('submit feedback', ({I}) => {
  
    
    submitPage.submit()

    });

