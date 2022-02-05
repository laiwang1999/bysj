<template>
  <!--  TODO 需要完善登录页面的登录，注册，页面设计-->
  <div id="background">
    <el-row :gutter="20">
      <el-col :span="8"></el-col>
      <el-col :span="6" :offset="8">

        <div class="grid-content bg-purple">
          <el-form ref="form" :model="form" label-width="80px" :label-position="labelPosition">
            <el-form-item label="用户名">
              <el-input v-model="form.username"></el-input>
            </el-form-item>
            <el-form-item label="密码">
              <el-input v-model="form.password" type="password"></el-input>
            </el-form-item>
            <el-form-item label="保存密码">
              <el-switch v-model="form.savePass"></el-switch>
            </el-form-item>
            <el-form-item>
              <el-button type="primary">登录</el-button>
              <el-button>注册</el-button>
            </el-form-item>
          </el-form>
        </div>
      </el-col>
      <el-col :span="6"></el-col>
    </el-row>

    <!--  <el-input v-model="formLine.username" placeholder="请输入账号"></el-input>-->
    <!--  <el-input v-model="formLine.password" placeholder="请输入密码"></el-input>-->
  </div>

</template>

<script>
export default {
  data() {
    return {
      form: {
        username: "",
        password: "",
        savePass: ""
      },
      labelPosition: "right"
    }
  },
  methods: {
    login: function () {

    }
  }
}
</script>

<style scoped>
#background {
  background: url("../assets/bgc.jpg") repeat;
}
</style>