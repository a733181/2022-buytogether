<template>
  <teleport v-if="props.loaded" to="body">
    <div class="z-40 fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
      <div id="cssload-global">
        <div id="cssload-top" class="cssload-mask">
          <div class="cssload-plane"></div>
        </div>
        <div id="cssload-middle" class="cssload-mask">
          <div class="cssload-plane"></div>
        </div>

        <div id="cssload-bottom" class="cssload-mask">
          <div class="cssload-plane"></div>
        </div>
      </div>
    </div>
    <div class="fixed top-0 left-0 z-30 w-full h-full bg-black/80"></div>
  </teleport>
</template>

<script setup>
const props = defineProps({
  loaded: Boolean,
  default: true,
});
</script>

<style scoped>
/* https://cssload.net/en/miscellaneous/3 */
#cssload-global {
  width: 68px;
  margin: auto;
  margin-top: 49px;
  position: relative;
  cursor: pointer;
  height: 58px;
}

.cssload-mask {
  position: absolute;
  border-radius: 2px;
  overflow: hidden;
  perspective: 1000;
  -o-perspective: 1000;
  -ms-perspective: 1000;
  -webkit-perspective: 1000;
  -moz-perspective: 1000;
  backface-visibility: hidden;
  -o-backface-visibility: hidden;
  -ms-backface-visibility: hidden;
  -webkit-backface-visibility: hidden;
  -moz-backface-visibility: hidden;
}

.cssload-plane {
  background: rgb(204, 85, 0);
  width: 400%;
  height: 100%;
  position: absolute;
  z-index: 100;
  transform: translate3d(0px, 0, 0);
  -o-transform: translate3d(0px, 0, 0);
  -ms-transform: translate3d(0px, 0, 0);
  -webkit-transform: translate3d(0px, 0, 0);
  -moz-transform: translate3d(0px, 0, 0);
  perspective: 1000;
  -o-perspective: 1000;
  -ms-perspective: 1000;
  -webkit-perspective: 1000;
  -moz-perspective: 1000;
  backface-visibility: hidden;
  -o-backface-visibility: hidden;
  -ms-backface-visibility: hidden;
  -webkit-backface-visibility: hidden;
  -moz-backface-visibility: hidden;
}

#cssload-top .cssload-plane {
  z-index: 2000;
  animation: cssload-trans1 1.5s ease-in infinite 0s backwards;
  -o-animation: cssload-trans1 1.5s ease-in infinite 0s backwards;
  -ms-animation: cssload-trans1 1.5s ease-in infinite 0s backwards;
  -webkit-animation: cssload-trans1 1.5s ease-in infinite 0s backwards;
  -moz-animation: cssload-trans1 1.5s ease-in infinite 0s backwards;
}

#cssload-middle .cssload-plane {
  background: rgb(253, 187, 116);
  transform: translate3d(0px, 0, 0);
  -o-transform: translate3d(0px, 0, 0);
  -ms-transform: translate3d(0px, 0, 0);
  -webkit-transform: translate3d(0px, 0, 0);
  -moz-transform: translate3d(0px, 0, 0);
  animation: cssload-trans2 1.5s linear infinite 0.35s backwards;
  -o-animation: cssload-trans2 1.5s linear infinite 0.35s backwards;
  -ms-animation: cssload-trans2 1.5s linear infinite 0.35s backwards;
  -webkit-animation: cssload-trans2 1.5s linear infinite 0.35s backwards;
  -moz-animation: cssload-trans2 1.5s linear infinite 0.35s backwards;
}

#cssload-bottom .cssload-plane {
  z-index: 2000;
  animation: cssload-trans3 1.5s ease-out infinite 0.81s backwards;
  -o-animation: cssload-trans3 1.5s ease-out infinite 0.81s backwards;
  -ms-animation: cssload-trans3 1.5s ease-out infinite 0.81s backwards;
  -webkit-animation: cssload-trans3 1.5s ease-out infinite 0.81s backwards;
  -moz-animation: cssload-trans3 1.5s ease-out infinite 0.81s backwards;
}

#cssload-top {
  width: 52px;
  height: 19px;
  left: 19px;
  transform: skew(-15deg, 0);
  -o-transform: skew(-15deg, 0);
  -ms-transform: skew(-15deg, 0);
  -webkit-transform: skew(-15deg, 0);
  -moz-transform: skew(-15deg, 0);
  z-index: 100;
}

#cssload-middle {
  width: 32px;
  height: 19px;
  left: 19px;
  top: 15px;
  transform: skew(-15deg, 40deg);
  -o-transform: skew(-15deg, 40deg);
  -ms-transform: skew(-15deg, 40deg);
  -webkit-transform: skew(-15deg, 40deg);
  -moz-transform: skew(-15deg, 40deg);
}

#cssload-bottom {
  width: 52px;
  height: 19px;
  top: 29px;
  transform: skew(-15deg, 0);
  -o-transform: skew(-15deg, 0);
  -ms-transform: skew(-15deg, 0);
  -webkit-transform: skew(-15deg, 0);
  -moz-transform: skew(-15deg, 0);
}

@keyframes cssload-trans1 {
  from {
    transform: translate3d(52px, 0, 0);
  }
  to {
    transform: translate3d(-244px, 0, 0);
  }
}

@-o-keyframes cssload-trans1 {
  from {
    -o-transform: translate3d(52px, 0, 0);
  }
  to {
    -o-transform: translate3d(-244px, 0, 0);
  }
}

@-ms-keyframes cssload-trans1 {
  from {
    -ms-transform: translate3d(52px, 0, 0);
  }
  to {
    -ms-transform: translate3d(-244px, 0, 0);
  }
}

@-webkit-keyframes cssload-trans1 {
  from {
    -webkit-transform: translate3d(52px, 0, 0);
  }
  to {
    -webkit-transform: translate3d(-244px, 0, 0);
  }
}

@-moz-keyframes cssload-trans1 {
  from {
    -moz-transform: translate3d(52px, 0, 0);
  }
  to {
    -moz-transform: translate3d(-244px, 0, 0);
  }
}

@keyframes cssload-trans2 {
  from {
    transform: translate3d(-156px, 0, 0);
  }
  to {
    transform: translate3d(52px, 0, 0);
  }
}

@-o-keyframes cssload-trans2 {
  from {
    -o-transform: translate3d(-156px, 0, 0);
  }
  to {
    -o-transform: translate3d(52px, 0, 0);
  }
}

@-ms-keyframes cssload-trans2 {
  from {
    -ms-transform: translate3d(-156px, 0, 0);
  }
  to {
    -ms-transform: translate3d(52px, 0, 0);
  }
}

@-webkit-keyframes cssload-trans2 {
  from {
    -webkit-transform: translate3d(-156px, 0, 0);
  }
  to {
    -webkit-transform: translate3d(52px, 0, 0);
  }
}

@-moz-keyframes cssload-trans2 {
  from {
    -moz-transform: translate3d(-156px, 0, 0);
  }
  to {
    -moz-transform: translate3d(52px, 0, 0);
  }
}

@keyframes cssload-trans3 {
  from {
    transform: translate3d(52px, 0, 0);
  }
  to {
    transform: translate3d(-214px, 0, 0);
  }
}

@-o-keyframes cssload-trans3 {
  from {
    -o-transform: translate3d(52px, 0, 0);
  }
  to {
    -o-transform: translate3d(-214px, 0, 0);
  }
}

@-ms-keyframes cssload-trans3 {
  from {
    -ms-transform: translate3d(52px, 0, 0);
  }
  to {
    -ms-transform: translate3d(-214px, 0, 0);
  }
}

@-webkit-keyframes cssload-trans3 {
  from {
    -webkit-transform: translate3d(52px, 0, 0);
  }
  to {
    -webkit-transform: translate3d(-214px, 0, 0);
  }
}

@-moz-keyframes cssload-trans3 {
  from {
    -moz-transform: translate3d(52px, 0, 0);
  }
  to {
    -moz-transform: translate3d(-214px, 0, 0);
  }
}
</style>
