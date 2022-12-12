import datadrivenPage from "../pages/datadriven";

Feature('login');
let accounts = new DataTable(['login', 'password']);
accounts.add(['jiniya+1@itobuz.com', 'Password@50']); 
accounts.add(['jiniya+1+admin@itobuz.com', 'Password@50']);

Data(accounts).Scenario('PretaaLogin_test', ({I}) => {
   
    datadrivenPage.datadriven();

    
  });