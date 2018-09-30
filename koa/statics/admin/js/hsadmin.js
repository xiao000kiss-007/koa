$(function(){
    $('#code').click(function(){
        $(this).attr('src','/admin/login/code?t='+Math.random()*1000)
    })
    $("#loginForm").submit(function(){
        if($('#username').val()=='' || $("#password").val()=='' || $("#inputCode").val()==''){
            alert('用户名或者密码或者验证码不能为空')
            return false;
        }
        return true;
    })
})