<template>
  <div>


    <div class="page-wrapper">
      <div class="page1 page">
        <span @click="show($event)">填空题</span>
        <div class="page-btn">
          <a href="javascript:;">1</a>
          <a href="javascript:;">2</a>
          <a href="javascript:;">3</a>
        </div>

      </div>
      <div class="page2 page">
        <span @click="show($event)">选择题</span>
        <div class="page-btn">
          <a href="javascript:;">1</a>
          <a href="javascript:;">2</a>
        </div>
      </div>
      <div class="page3 page">
        <span @click="show($event)">解答题</span>
        <div class="page-btn">
          <a href="javascript:;">1</a>
        </div>
      </div>
    </div>
    <div class="huoxin">
      <img class="aliens" src="../assets/aliens.gif" alt="">
      <img class="earthman" src="../assets/earthman.gif" alt="">
    </div>
  </div>
</template>

<script>
  import $ from "jquery"
  export default {
    name: 'hello',
    data () {
      return {
        msg: 'Welcome to Your Vue.js App'
      }
    },
    methods: {
      show(e){
        var a = e.currentTarget
        var name = e.target.innerHTML;
        var width = 0;
//        $('.page a').hide();
        switch (name) {
          case "填空题":
            width = 190
            break;
          case "选择题":
            width = 90
            break;
          case "解答题":
            width = 90
            break;
        }
        $(a).parent('.page').stop().animate({
          width: width
        }, 500).siblings().stop().animate({
          width: '48px'
        }, 500, function () {
          $(a).parent().siblings().find('.page-btn').css({
            display: "none",
          });
//        console.log(a);
          $(a).next('.page-btn').css({
            display: "inline-block",
//          width: "auto"
          });
        });

      }
    }
  }
  const c = (a) => (b) => a + b;
  console.log(c(3)(5))//8

  //  console.log($);
  //  $(document).on('.page','click',function () {
  //    alert(3);
  //  });
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="stylus" rel="stylesheet/stylus">
  .huoxin {
    img {
      width: 200px;
    }
  }

  .page-wrapper {
  //border :1px solid #43adff;
  //padding :5px;
  //background-color : #bfbfbf;

    .page {
      display: inline-block;
      padding-right: 10px;
      height: 30px;
      overflow: hidden;
      width: 48px;
      position: relative;
      .page-btn {
        display: none;
        vertical-align: top;
        position: absolute;
        left: 54px;
      }
      a {
        display: inline-block;
        text-decoration: none;
        vertical-align: middle;
        padding: 0 15px;
        border: 1px solid #e2e2e2;
        height: 28px;
        line-height: 28px;
        background-color: #43adff;
        color: #333;
        font-size: 12px;
        &:hover {
          background-color: #abfffc;
        }
      }
      .active {
        background-color: #abfffc;
      }

    }
    .page1 {
      width: 190px;
      .page-btn {
        display: inline-block;
      }
    }
    .page2, .page3 {
      .page-btn {
        width: 0;
      }
      a {
        /*display: none;*/
      }
    // border-right:1px solid #fff;

    }
    font-weight: normal;
  }
</style>
