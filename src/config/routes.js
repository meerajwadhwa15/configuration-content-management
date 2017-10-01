const Routes = {
    route: {
        API_PATH: '/api',
        DEFAULT: '/',
        LOGIN: '/login',
        REGISTER: '/register',
        LOGOUT: '/logout',
        DASHBOARD: '/dashboard',
        NOT_FOUND: '/not-found',
        UN_AUTHORIZED: '/un-authorized',
        CONFIGURATION: '/configuration',
        ALL_CONFIGURATION: '/configuration/all',
        APPROVE_CONFIGURATION: '/configuration/approve',
        PUBLISH_CONFIGURATION: '/configuration/publish'
    }
};

Routes.ADMIN_ROUTES = [Routes.route.REGISTER, Routes.route.APPROVE_CONFIGURATION, Routes.route.PUBLISH_CONFIGURATION, Routes.route.ALL_CONFIGURATION];
Routes.UNAUTH_ROUTES = [Routes.route.DEFAULT, Routes.route.LOGIN, Routes.route.LOGOUT];

export default Routes;