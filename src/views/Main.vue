<template>
  <div id="app">
    <el-upload
      ref="uploadPic"
      action=""
      :limit="1"
      list-type="picture-card"
      :auto-upload="false"
      :on-change="fileChange"
      v-loading="isLoading">
      <i slot="default" class="el-icon-plus"></i>
      <div slot="file" slot-scope="{ file }">
        <img class="el-upload-list__item-thumbnail" :src="file.url" alt="" />
        <span class="el-upload-list__item-actions">
          <span class="el-upload-list__item-delete" @click="handleRemove(file)">
            <i class="el-icon-delete"></i>
          </span>
        </span>
      </div>
    </el-upload>
    <div style="display: flex" class="button">
      <el-select v-model="value" style="width: 300px" placeholder="请选择">
        <el-option
          v-for="item in options"
          :key="item.value"
          :label="item.label"
          :value="item.value">
        </el-option>
      </el-select>
      <el-button @click="showData" :loading="isLoading">{{
        isLoading ? '识别中' : '识别'
      }}</el-button>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import store from '../store'

export default {
  name: 'App',
  data() {
    return {
      imgFile: '',
      isLoading: false,
      options: [
        {
          value: '0',
          label: '教育部学籍在线验证报告'
        },
        {
          value: '1',
          label: '教育部学历证书电子注册备案表'
        },
        {
          value: '2',
          label: '中国高等教育证书查询结果（零散查询）'
        }
      ],
      value: ''
    }
  },
  mounted() {},
  methods: {
    fileChange(file) {
      this.imgFile = file
    },
    handleRemove(file) {
      this.$refs.uploadPic.handleRemove(file)
    },
    showData() {
      this.isLoading = true
      const file = new FormData()
      let urlf = ''
      file.append('file', this.imgFile.raw)
      console.log(this.imgFile.raw)
      console.log(URL.createObjectURL(this.imgFile.raw))

      store.set('ImgData/file', this.imgFile)
      if (this.value !== '') {
        urlf = '?image_type=' + this.value
      }
      axios
        .post(`http://47.99.217.31:8007/ocr${urlf}`, file, {
          timeout: 300000
        })
        .then(res => {
          const data = res.data.result
          const keys = Object.keys(data).filter(item => item !== 'stencil')
          const result = []
          keys.forEach(item => {
            result.push(data[item])
          })
          store.set('ImgData/imgData', data)
          // sessionStorage.setItem('imgData', JSON.stringify(imgData))
          this.$router.push({ path: `/result` })
        })
      this.input = ''
    }
  }
}
</script>

<style lang="scss" scoped>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;

  display: flex;
  align-items: center;
  flex-direction: column;
}

.input {
  width: 40%;
  margin-bottom: 30px;

  /deep/.el-textarea__inner {
    width: 100%;
  }
}

.button {
  margin-top: 30px;
}

#editImgDialog {
  // 弹窗部分
  ::v-deep .yi-dialog {
    border-radius: 12px;
  }

  // 取消弹窗头部
  ::v-deep .yi-dialog__header {
    display: none;
  }

  // 取消弹窗内容padding
  ::v-deep .yi-dialog__body {
    padding: 0;
  }
}
</style>
