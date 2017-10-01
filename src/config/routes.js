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
    }
};

Routes.UNAUTH_ROUTES = [Routes.route.DEFAULT, Routes.route.LOGIN, Routes.route.LOGOUT];

export default Routes;