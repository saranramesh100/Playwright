import{test,expect} from '@playwright/test';
import { Home } from '../pages/home';
import { Login } from '../pages/login';

test("Airwallex",async({page})=>{
    const home = new Home(page);
    await home.navigate();

    const login = new Login(page);
     await login.Selectcode();
     await login.entercreds("7010514741","123@12233");
     await login.verifyError("the mobile number or password you entered is wrong, please try again.")
     

})