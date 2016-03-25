import route from 'koa-route';
import * as users from '../controller/users';

export function routes (app) {
    app.use(route.get('/api/users', users.all));
    app.use(route.get('/api/user/:id', users.get));
};

export default routes;
