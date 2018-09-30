const router=require('koa-router')();

router.get('/',async (ctx)=>{
    await ctx.render('admin/index');
})
router.get('/list',async (ctx)=>{
    await ctx.render('admin/admin/index');
})
router.get('/add',async (ctx)=>{
    await ctx.render('admin/admin/add');
})
router.get('/edit',async (ctx)=>{
    await ctx.render('admin/admin/edit');
})
router.get('/delete',async (ctx)=>{
    ctx.body='用户删除'
})
module.exports=router.routes();/**暴露并启动路由 */
