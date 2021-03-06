const router=require('koa-router')();
const user=require('./admin/user.js');
const product=require('./admin/product.js');
const news=require('./admin/news.js');
const login=require('./admin/login.js');
const admin=require('./admin/admin.js');
let   url=require('url');

//配置中间件 获取url的地址
router.use(async(ctx,next)=>{
    //模板引擎配置全局的变量
    // console.log(ctx.request.header.host)
    ctx.state.__HOST__='http://'+ctx.request.header.host;
    let pathname=url.parse(ctx.request.url).pathname;
       //权限判断
    if(ctx.session.userinfo){
        await  next();
    }else{  //没有登录跳转到登录页面
        if(pathname=='/admin/login' || pathname=='/admin/login/doLogin'  || pathname=='/admin/login/code'){
            await  next();
        }else{
            ctx.redirect('/admin/login');
        }
    }
})

router.get('/',async(ctx)=>{
    await ctx.render('admin/admin/index.html');
})
router.use('/user',user)
router.use('/product',product)
router.use('/news',news)
router.use('/login',login)
router.use('/admin',admin)


module.exports=router.routes();/**暴露并启动路由 */
