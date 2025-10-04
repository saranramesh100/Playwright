export class Home{
    constructor(page){
        this.page=page;
        this.loginbtn=this.page.locator("//a[text()='Log in']").nth(0);
    }
    async navigate(){
        await this.page.goto("https://www.airwallex.com/app/login?region=row",{timeout : 60000})
    }
}