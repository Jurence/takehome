const {I} = inject();

export = {
    fields: {
        affectedItems: '//a[@href="affected-items"]',
    },
    buttons: {
        fileNewClaim: '.btn-file-claim',
        affectedItems: '//span[normalize-space()="Select Affected Items"]'
    },
    elements: {
        affectedItems: '//a[@href="affected-items"]',
        selectDevice: '.device__head',
        deviceIsSelected: '//div[@class="check-status checked"]/*[1]'
    },

    async addNewClaim() {
        const textsToVerify = ['Select Affected Items', 'Select Type of Loss', 'Describe the Incident',
            'Confirm Address', 'Review & Submit'];
        I.click(this.buttons.fileNewClaim);
        let visibleTexts = [];

        for (let text of textsToVerify) {
            I.see(text);
            const textVisible = await I.grabTextFrom(`//*[contains(text(),'${text}')]`);
            visibleTexts.push(textVisible);
        }
        console.log('claim page core elements are verified as visible');
        I.click(this.buttons.affectedItems);
        I.click(this.elements.selectDevice);
        I.seeElement(this.elements.deviceIsSelected); // Comment this line to see a success in test case and uncomment to see the bug


        //Due to the inability to proceed with the claim submission because of the disabled CTAs, this was more
        //like a high level insight on how to approach this task.

    }
}