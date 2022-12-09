import loginPage  from "../pages/login";
import feedbackPage from "../pages/feedback";
import dynamicPage from "../pages/dynamic";


Feature('pretaacomments_test');

Scenario('Add random comments', ({I}) => {
  I.amOnPage('/login');
  loginPage.login()
  feedbackPage.feedback()
  dynamicPage.dynamic()

});



