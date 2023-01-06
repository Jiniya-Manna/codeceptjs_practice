import editgrpPage from "../pages/editgrp";
import loginPage from "../pages/login";
Feature('editgroup');
Scenario('go to edit',async ({ I }) => { 
  loginPage.login()
  editgrpPage.editgrpA()
});