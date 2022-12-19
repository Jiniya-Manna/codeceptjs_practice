
import invalidemailPage  from "../pages/invalidemail";
import pwdblankPage from "../pages/pwdblank";
import emailblankPage from "../pages/emailblank";
import forgotpwdPage from "../pages/forgotpwd";


Feature('pretaacomments_test');

Scenario('Invalid email validation', ({I}) => {


invalidemailPage.invalidEmail()


}
)

Scenario('Password field blank validation', ({I}) => {

 
  pwdblankPage.pwdblank()
  }
  ).tag('@slow').tag('important');

  
  Scenario('Email field blank validation', ({I}) => {

    emailblankPage.emailBlank()
    }
    )

    Scenario('ForgotPwd_invalid email validation', ({I}) => {

      forgotpwdPage.forgotPwd()
      }
      )
    
  
