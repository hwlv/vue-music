<template>
  <div class="">
    singer detail
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    props:{

    },
    computed: {}
    ,
    data() {
      return {
        songs: []
      }
    },
    created() {

    },
    methods:{

    },
    components: {

    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  @import "~common/stylus/variable"

  .singer-detail
    position: fixed
    z-index:100
    top:0
    left:0
    right:0
    bottom :0

  .slide-enter-active, .slide-leave-active
    transition: all 0.3s

  .slide-enter, .slide-leave-to
    transform: translate3d(100%, 0, 0)
</style>
