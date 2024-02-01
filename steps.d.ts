type steps_file = typeof import('./tests/customSteps');
type config = typeof import('./tests/config');
type claimsPage = typeof import('./tests/Claims/pages/Claims.page');

declare namespace CodeceptJS {
    interface SupportObject {
        I: I,
        current: any,
        config: config,
        claimsPage: claimsPage
    }
    interface I extends ReturnType<steps_file>, WithTranslation<any> {}
    namespace Translation {
        interface Actions{}
    }
}