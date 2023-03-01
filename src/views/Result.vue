<template>
  <div class="image__placeholder">
    <!-- 图片预览组件 -->
    <div class="block">
      <el-image :src="dataSrc">
        <div slot="placeholder" class="image-slot">
          加载中<span class="dot">...</span>
        </div>
      </el-image>
      <!-- 把el-row标签放在el-image标签的外面 -->
    </div>

    <!-- 按钮组件 -->
    <br />
    <el-row>
      <el-button @click="$router.push('/')" type="primary">重新识别</el-button>
      <el-button type="primary" plain>复制到剪切板</el-button>
    </el-row>

    <!-- 代码高亮组件 -->

    <br />
    <div class="gl-view-rootbox">
      <json-viewer
        :value="jsonData"
        :expand-depth="5"
        copyable
        boxed
        sort
        style="width: 100%"></json-viewer>
      <!-- <pre v-highlight><code>const s = code</code></pre> -->
    </div>
  </div>
</template>

<script>
import store from '../store'

export default {
  data() {
    return {
      code: ``,
      imgSrc: '',
      dataSrc: '',
      jsonData: ''
    }
  },
  beforeMount() {
    this.imgSrc = store.get('ImgData/file')
    this.code = JSON.stringify(store.get('ImgData/imgData'))
    this.jsonData = store.get('ImgData/imgData')
    console.log(store.get('ImgData/imgData'))
    const fileReader = new FileReader()
    fileReader.readAsDataURL(this.imgSrc.raw)
    fileReader.onload = event => {
      console.log(event)
      try {
        const { result } = event.target
        console.log(result)
        this.dataSrc = result
      } catch (e) {
        console.log(e)
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.block {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 410px;
  width: 630px;
  margin: 0 auto;
  position: relative;
  border: 1px dashed #d9d9d9;
  border-radius: 6px; /* 添加这一行，让图片的边框变成圆角 */
}

.el-image {
  /* 添加以下样式 */
  max-width: 100%;
  max-height: 100%;
  object-fit: contain;
  margin: 2px;
  border-radius: 6px; /* 添加这一行，让图片的边框变成圆角 */
}

.el-row {
  /* 添加以下样式 */
  display: flex;
  justify-content: center;
  margin-right: 5px;
}

.gl-view-rootbox {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  /* height: 410px; */
  width: 630px;
  margin: 0 auto;
  position: relative;
  /* border: 1px dashed #020b1a; */
  /* overflow: auto; */
  padding: 0; /* 添加这一行，去掉gl-view-rootbox的内边距 */
}

pre {
  /* 添加以下样式 */
  width: 100%; /* 添加这一行，让代码块铺满rootbox */
  /* height: 100%; */ /* 删除这一行，让代码块的高度自适应 */
  margin: 0; /* 添加这一行，去掉代码块的外边距 */
  padding: 0; /* 添加这一行，去掉代码块的内边距 */
  font-size: 20px; /* 添加这一行，让代码块里面的代码字体大一些 */
  counter-reset: line; /* 添加这一行，设置一个计数器 */
}
// values are default one from jv-light template
</style>
