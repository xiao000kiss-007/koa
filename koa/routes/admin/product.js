const router=require('koa-router')();
const DB=require('../../module/db.js');


router.get('/',async (ctx)=>{
    let result=await DB.find('products',{});
    // console.log(result);
    await ctx.render('admin/product/index',{list:result});
})
router.get('/add',async (ctx)=>{
    await ctx.render('admin/product/add');
})
router.get('/edit',async (ctx)=>{
    await ctx.render('admin/product/edit');
})
router.get('/delete',async (ctx)=>{
    ctx.body='product删除'
})
module.exports=router.routes();/**暴露并启动路由 */
