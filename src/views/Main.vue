<template>
  <div>
    <el-upload class="upload-demo" drag action="https://jsonplaceholder.typicode.com/posts/" multiple>
      <i class="el-icon-upload"></i>
      <div class="el-upload__text">将文件拖到此处，或<em>点击上传</em></div>
      <div class="el-upload__tip" slot="tip">请上传图片，且不超过500kb</div>
    </el-upload>

    <el-row>
      <el-button  @click="$router.push('/result')" type="primary">开始识别</el-button>
    </el-row>

  </div>
</template>

<script>
import router from '@/router';


export default {
    name: "VueTestMain",
    data() {
        return {};
    },
    mounted() {
    },
    methods: {
        // 点击跳转事件
        clickRes(item) {
            console.log(item);
        }
    },
    components: { router }
};
</script>

<style lang="scss" scoped>
.upload-demo{
  background-position : center;
}


</style>