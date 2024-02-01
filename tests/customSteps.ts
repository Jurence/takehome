export = function() {

const { config } = inject();

    return actor({
        openPage: function (url: string, visibleText: string){
            this.amOnPage(url);
            this.wait(5);
            this.waitForText(visibleText);
        },
        loginToClaimsWebsite: function (phoneNumber: number, password: number){
            this.amOnPage(config.urls.claimsWebsite);
            this.waitForElement('//button[normalize-space()="Login"]');
            this.fillField('//input[@value="(___) ___-____"]', phoneNumber);
            this.fillField('//input[@name="password"]', password);
            this.click('//button[normalize-space()="Login"]');
            this.wait(3);
            this.waitForInvisible('.loading-page', 15);
            this.waitForText('My Claims');
        },
    });
}