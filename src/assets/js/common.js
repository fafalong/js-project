$(function(){
  navFix();
  function navFix(){
    var topbar=$("#topbar");
    $(window).scroll(function(){
      var scrolltop=$(this).scrollTop();
      if(scrolltop>100){
          topbar.css({
            'position':'fixed',
            'left':'0',
            'top':'0',
            'z-index':'10',
            'background':'#fff'
          })
      }else{
        topbar.css({
          'position':'relative'
        })
      }
    })
  }
  bottomBar();
  function bottomBar(){
    var menuList=$('#bottom-menu>div');
    $.each(menuList,function(i){
      menuList.eq(i).click(function(){
        menuList.eq(0).find('img').attr('src','../../static/img/index.png')
        menuList.eq(1).find('img').attr('src','../../static/img//find.png')
        menuList.eq(3).find('img').attr('src','../../static/img//msg.png')
        menuList.eq(4).find('img').attr('src','../../static/img//my.png')
        if(i==0){
          $(this).find('img').attr('src','../../static/img/index-a.png')
        }else if(i==1){
          $(this).find('img').attr('src','  ../../static/img/find-a.png')
        }else if(i==2){
          alert(2)
        }else if(i==3){
            $(this).find('img').attr('src',' ../../static/img/msg-a.png')
        }else if(i==4){
          $(this).find('img').attr('src','../../static/img/my-a.png')
        }
      })
    })
    menuList.eq(0).click();
  }
  searchStren();
  function searchStren(){

  }
})
