const router=require('koa-router')();
const DB=require('../../module/db.js');

router.get('/',async (ctx)=>{
    let result=await DB.find('admin',{});
    // console.log(result);
    await ctx.render('admin/admin/index',{list:result});
})
router.get('/list',async (ctx)=>{
    let result=await DB.find('admin',{});
    // console.log(result);
    await ctx.render('admin/admin/index',{list:result});
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
