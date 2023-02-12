<template>
  <div class="upload">
    <el-upload class="upload-demo" drag action="https://jsonplaceholder.typicode.com/posts/" multiple @success="handleUploadSuccess">
      <div class="upload-tips">
        <i class="el-icon-upload"></i>
        <div class="el-upload__text">将文件拖到此处，或<em>点击上传</em></div>
      </div>
      <!-- <div class="el-upload__tip" slot="tip">请上传图片，且不超过500kb</div> -->
    </el-upload>

    <div class="preview-container">
      <img v-for="img in images" :src="img" class="preview-image"/>
    </div>

    <br>
    <br>
    <el-row>
      <el-button @click="$router.push('/result')" type="primary">开始识别</el-button>
    </el-row>

  </div>
</template>

<script>
import router from '@/router';

export default {
  name: "VueTestMain",
  data() {
    return {
      images: []
    };
  },
  mounted() {
  },
  methods: {
    handleUploadSuccess(response, file, fileList) {
      // 添加新的预览图片
      this.images.push(URL.createObjectURL(file.raw));
    }
  },
  components: { router }
};
</script>

<style lang="scss">
.upload {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.el-upload-dragger {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 430px;
  width: 630px;
}

.upload-tips {
  margin-top: -100px;
}

.preview-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-top: 20px;
}

.preview-image {
  width: 200px;
  height: 200px;
  margin: 10px;
}
</style>
