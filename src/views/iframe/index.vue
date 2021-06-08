<template>
  <div class="app-container">
    <el-card :shadow="defalutData.cardShadow">
      <div class="operate-container">
        <div>
          <i class="viteIcon viteiframe" style="margin-right: 5px"></i>
          <span>iframe</span>
        </div>
      </div>
      <iframe src="" frameborder="0" width="100%" height="600px"></iframe>
    </el-card>
  </div>
</template>

<script>
import { ref } from 'vue';
export default {
  name: 'iframe-',
  setup() {
    // 判断是否用户是否翻墙
    function checkWebSiteOnline(config) {
      let img = new Image();
      img.onload = function () {
        if (typeof config.success == 'function') config.success(config.url);
      };
      img.onerror = function () {
        if (typeof config.error == 'function') config.error(config.url);
      };
      img.src = config.url + '&' + Math.random();
    }

    let href = ref('');
    let status = false;

    //判断能否翻墙
    checkWebSiteOnline({
      url: '',
      success: function (url) {
        console.log('加载成功');
        status = true;
      },
      error: function (url) {
        console.log('加载失败');
        status = false;
      },
    });

    setTimeout(() => {
      if (status) {
        href.value = '';
      } else {
        href.value = '';
      }
    }, 1000);

    return {
      href,
    };
  },
};
</script>

<style scoped lang="scss"></style>
