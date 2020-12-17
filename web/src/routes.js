import NotFound from "@/pages/NotFound";
import Home1 from "@/pages/Home";
import Book from "@/pages/Book";

// 应用路由表
export default [
    {path: '/', component: Home1, meta: {title: '主页'}},
    {path: '/book', component: Book, meta: {title: '书籍'}},
    // 处理404情况
    {path: '*', component: NotFound, meta: {title: '404'}},
]