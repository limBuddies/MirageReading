import NotFound from "@/pages/NotFound";
import Home from "@/pages/Home";
import Bookshelf from "@/pages/Bookshelf";
import Detail from "@/pages/Detail";
import Recite from "@/pages/Recite";
import Profile from "@/pages/Profile";
import Signup from "@/pages/Signup";
import Login from "@/pages/Login";
import Read from "@/pages/Read";
import Tweets from "@/pages/Tweets";
import Searching from "@/pages/Searching";

// 应用路由表
export default [
    {path: '/', component: Home, meta: {title: '主页'}},
    {path: '/detail', component: Detail, meta: {title: '书籍'}},
    {path: '/bookshelf', component: Bookshelf, meta: {title: '书籍推荐'}},
    {path: '/profile', component: Profile, meta: {title: '个人页面'}},
    {path: '/recite', component: Recite, meta: {title: '单词背诵'}},
    {path: '/signup', component: Signup, meta: {title: '注册'}},
    {path: '/login', component: Login, meta: {title: '登录'}},
    {path: '/read', component: Read, meta: {title: '阅读'}},
    {path: '/tweets', component: Tweets, meta: {title: '动弹'}},
    {path: '/search', component: Searching, meta: {title: '搜索'}},
    // 处理404情况
    {path: '*', component: NotFound, meta: {title: '404'}},
]