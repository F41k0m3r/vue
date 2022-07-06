import {createRouter, createWebHistory} from "vue-router";
import Main from "@/pages/Main";
import PostPages from "@/pages/PostPages";
import About from "@/pages/About";
import PostPageWithStore from "@/pages/PostPageWithStore";
import PostPageWithCompositionApi from "@/pages/PostPageWithCompositionApi";

const routes = [
    {
        path:'/',
        component:Main
    },
    {
        path: '/posts',
        component: PostPages
    },
    {
        path: '/about',
        component: About
    },
    {
        path:'/store',
        component: PostPageWithStore
    },
    // {
    //     path:'/composition',
    //     component: PostPageWithCompositionApi
    // }
]

const router = createRouter({
    routes,
    history:createWebHistory()
})

export default router;
