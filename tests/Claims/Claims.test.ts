import plugins from '../../plugins';

const {config, claimsPage} = inject();

Feature('Claims').retry(0);

Scenario('Login and file a Claim', async ({I}) => {
    //Navigating to the webpage URL
    I.openPage(config.urls.claimsWebsite, 'Welcome to AKKO Claims');
    //Logging in with provided test data
    I.loginToClaimsWebsite(config.auth.phoneNumber, config.auth.passcode);
    //Adding a claim
    await claimsPage.addNewClaim();
});