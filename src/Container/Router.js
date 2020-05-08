import React, {Component, lazy, Suspense} from 'react';
import {Route, Switch} from "react-router-dom";
import Layout from "../Components/Common/Layout";
import PageNotFound from "../Components/Common/PageNotFound";

const routes = [
    {
        path: '/',
        component: lazy(() => import('../Components/Home/Home')),
        exact: true,
    },{
        path: '/overview',
        component: lazy(() => import('../Components/About/Overview')),
        exact: true,
    },{
        path: '/certificates',
        component: lazy(() => import('../Components/About/Certificate')),
        exact: true,
    },{
        path: '/facilities',
        component: lazy(() => import('../Components/About/Facilities')),
        exact: true,
    },{
        path: '/team',
        component: lazy(() => import('../Components/About/Team')),
        exact: true,
    },{
        path: '/category/:id',
        component: lazy(() => import('../Components/Category/Category')),
        exact: true,
    },{
        path: '/product/:id',
        component: lazy(() => import('../Components/Category/Product')),
        exact: true,
    },{
        path: '/researches',
        component: lazy(() => import('../Components/Research/ListResearch')),
        exact: true,
    },{
        path: '/research/:id',
        component: lazy(() => import('../Components/Research/Research')),
        exact: true,
    },{
        path: '/news',
        component: lazy(() => import('../Components/News/ListNews')),
        exact: true,
    },{
        path: '/news/:id',
        component: lazy(() => import('../Components/News/News')),
        exact: true,
    },{
        path: '/blogs',
        component: lazy(() => import('../Components/Blogs/ListBlogs')),
        exact: true,
    },{
        path: '/blog/:id',
        component: lazy(() => import('../Components/Blogs/Blog')),
        exact: true,
    },{
        path: '/contact',
        component: lazy(() => import('../Components/Contact/Contact')),
        exact: true,
    },{
        path: '/careers',
        component: lazy(() => import('../Components/Career/ListCareers')),
        exact: true,
    },{
        path: '/career/:id',
        component: lazy(() => import('../Components/Career/Career')),
        exact: true,
    },{
        path: '/apply',
        component: lazy(() => import('../Components/Career/Apply')),
        exact: true,
    }
];

class Router extends Component {
    constructor({match}) {
        super();
        this.path = match
    }

    render() {
        return (
            <Suspense fallback={<div>Loading...</div>}>
                <Switch>
                    {routes.map((route, idx) => (
                        <Route exact={route.exact} key={idx} path={`${route.path}`}>
                            <Layout>
                                <route.component/>
                            </Layout>
                        </Route>
                    ))}
                    <Route component={PageNotFound}/>
                </Switch>
            </Suspense>


        );
    }
}
export default Router
