<template>
  <script type="text/html" title="marker">
    <div class="marker-icon">
      <ul
        id="<%=id%>"
        title="<%=address%>"
        style="transform: rotate(<%=rotate%>deg) translate(-50%,-50%);"
      >
        <li></li>
        <li><%=number%></li>
        <li></li>
      </ul>
    </div>
  </script>
</template>

<style lang="stylus">
.marker-icon
  position relative
  top 5px

  ul
    position absolute
    top 50%
    left 50%
    margin 0
    padding 0
    display inline-flex
    font-family sans-serif
    font-size 7px
    font-weight bold
    text-transform uppercase
    transform-origin 0 0
    cursor default

    li
      padding 3px
      border 1px solid
      list-style-type none
      color #ffffff
      border-color #000000
      background-color #2196f3

      &:empty
        padding 0
        border-right 0

      &:first-child
        border-top-left-radius 50%
        border-bottom-left-radius 50%

      &:nth-child(even)
        text-transform none
        white-space nowrap
        border-left none
        overflow hidden
        text-overflow ellipsis
        max-width 35px

      &:last-child
        border-left none
        border-top-right-radius 50%
        border-bottom-right-radius 50%
</style>
