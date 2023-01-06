import loginPage from "../pages/login";
import feedbackPage from "../pages/feedback";
Feature('feedback');
Scenario('feedback_test', ({ I }) => {
    loginPage.login();
    feedbackPage.feedback();
});


 