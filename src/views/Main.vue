<template>
  <div class="upload">
    <!-- 上传组件 -->
    <el-upload
      v-if="!imgUrl"
      class="upload-demo"
      drag
      action="https://jsonplaceholder.typicode.com/posts/"
      multiple
      accept=".jpg,.jpeg,.png"
      :auto-upload="true"
      :on-change="imgSaveToUrl"
      :on-success="handleSuccess"
    >
      <i class="el-icon-upload"></i>
      <div class="el-upload__text">将文件拖到此处，或<em>点击上传</em></div>
    </el-upload>


    <!-- 预览组件 -->
    <div v-else class="preview">
      <el-upload
        class="upload-demo"
        drag
        action="https://jsonplaceholder.typicode.com/posts/"
        multiple
        accept=".jpg,.jpeg,.png"
        :auto-upload="false"
        :on-change="imgSaveToUrl"
      >
        <img :src="imgUrl" @click="showDialog" />
      </el-upload>
    </div>


    <!-- 弹窗组件 -->
    <!-- <el-dialog :visible.sync="dialogVisible" width="50%"> -->
      <!-- <img width="100%" :src="imgUrl" /> -->
    <!-- </el-dialog> -->

    <br>
    <el-row>
      <el-button @click="$router.push('/result')" type="primary">开始识别</el-button>
    </el-row>
  </div>
</template>

<script>
export default {
  data() {
    return {
      imgUrl: "", // 本地图片地址
      dialogVisible: false, // 弹窗显示状态
    };
  },
  methods: {
    // 处理上传成功的文件
    handleSuccess(response, file, fileList) {
      // response是服务器返回的数据，file是上传的文件，fileList是上传的文件列表
      // 你可以在这里做一些操作，比如保存文件的信息，显示文件的链接等
      console.log(response);

      this.uploadImg();
      console.log(response, file, fileList);
    },

    // 保存本地图片地址
    imgSaveToUrl(file) {
      this.imgUrl = URL.createObjectURL(file.raw);
    },
    // 显示弹窗
    showDialog() {
      this.dialogVisible = true;
    },
    // 上传图片
    uploadImg() {
      // 调用接口上传图片，成功后清空本地图片地址
      this.imgUrl = "";
    },
  },
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
  height: 410px;
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

.preview img {
  width: 100%;
  height: 100%;
  object-fit: contain;
}


.el-upload-list__item-name {
  text-align: center;
}

.el-upload-list__item-name {
  text-align: center;
  /* 添加一个动画 */
  transition: display 1s;
  display: none;
}

</style>