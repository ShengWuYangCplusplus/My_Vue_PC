<template>
  <div>
    <el-card>
      <div slot="header">添加员工</div>
      <el-form size="mini" :model="form" labelWidth="130px" labelPosition="left">
        <el-form-item label="登记时间">
          <el-input v-model="form.time"></el-input>
        </el-form-item>
        <el-form-item label="头像">
          <el-upload
            action="/upload/image"
            name="avatar"
            :show-file-list="false"
            :on-success="handleAvatarSuccess"
            :before-upload="beforeAvatarUpload"
          >
            <img v-if="imageUrl" :src="imageUrl" class="avatar" />
            <i v-else class="el-icon-plus avatar-uploader-icon"></i>
          </el-upload>
        </el-form-item>
        <img :src="readyImg" alt="">
        <el-form-item label>
          <el-button type="primary" @click="save">提 交</el-button>
          <el-button plain @click="$router.go(-1)">取 消</el-button>
        </el-form-item>
      </el-form>
    </el-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      form: {},
      imageUrl: null,
      readyImg:null
    };
  },
  methods: {
    save() {},
    handleAvatarSuccess(res, file) {
      console.log(res)
      this.imageUrl = URL.createObjectURL(file.raw);
      this.readyImg=res.path
    },
    beforeAvatarUpload(file) {
      const isJPG = file.type === "image/jpeg"||file.type==='image/png';
      const isLt2M = file.size / 1024 / 1024 < 2;

      if (!isJPG) {
        this.$message.error("上传头像图片只能是 JPG 格式!");
      }
      if (!isLt2M) {
        this.$message.error("上传头像图片大小不能超过 2MB!");
      }
      return isJPG && isLt2M;
    }
  }
};
</script>

<style>
</style>