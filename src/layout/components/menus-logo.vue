<template>
  <div class="menus-logo">
    <transition name="logo">
      <router-link
        v-if="collapse"
        key="collapse"
        class="logo-link"
        style="text-decoration: none"
        to="/"
      >
        <img
          style="width: 35px; height: 35px; margin-right: 5px"
          src="/src/assets/logo.svg"
        />
        <span v-show="collapse" class="logo-title">{{ systemName }}</span>
      </router-link>
      <router-link
        v-else
        key="not"
        class="logo-link"
        style="text-decoration: none"
        to="/"
      >
        <img style="width: 35px; height: 35px" src="/src/assets/logo.svg" />
      </router-link>
    </transition>
  </div>
</template>

<script>
import defalutData from '@/config/defalut-data';
export default {
  name: 'Logo',
  props: {
    collapse: {
      type: Boolean,
      default: true,
    },
  },
  data() {
    return {
      systemName: defalutData.name,
    };
  },
};
</script>

<style scoped>
/* .logo-leave-active,.logo-enter-active{
  transition: opacity .4s;
}
.logo-enter-from,.logo-leave-to{
  opacity: 0;
}
.logo-leave-from,.logo-enter-to{
  opacity: 1;
} */

.menus-logo {
  /* box-sizing: border-box; */
  /* padding: 10px; */
  min-height: 50px;
  width: 100%;
  height: 50px;
  overflow: hidden;
  border-bottom: 2px solid #f7f8f8;
}
.logo-link {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  text-decoration: none;
  margin: auto;
  width: 80%;
}
.logo-title {
  margin: 0;
  font-size: 18px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  font-weight: bold;
}
</style>
