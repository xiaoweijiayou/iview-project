<style lang='less'>
.password-form {
  width: 100%;
  height: 100%;
  text-align: center;
  margin-right: 200px;
  align: center;
}
</style>
<template>
  <i-form
    class="password-form"
    ref="changePassword"
    :model="changePassword"
    :rules="ruleValidate"
    :label-width="100"
  >
    <Form-item label="旧密码" prop="oldpassword">
      <i-input v-model="changePassword.oldpassword" type="password" placeholder="旧密码"></i-input>
    </Form-item>
    <Form-item label="新密码" prop="newpassword">
      <i-input v-model="changePassword.newpassword" type="password" placeholder="新密码"></i-input>
    </Form-item>
    <Form-item label="确定新密码" prop="repeatpassword">
      <i-input v-model="changePassword.repeatpassword" type="password" placeholder="确认密码"></i-input>
    </Form-item>
    <i-button>确定</i-button>
    <i-button>取消</i-button>
  </i-form>
</template>
<script>
export default {
  methods: {},
  data() {
    var validatepsw = function(rule, value, callback) {
      if (value === "") {
        callback(new Error("请输入密码"));
      } else {
        callback();
      }
    };
    var validaterepeatpassord = function(rule, value, callback) {
      if (value === "") {
        callback(new Error("确认密码不能为空"));
      } else if (this.changePassword.newpassword != value) {
        callback(new Error("两次密码不一致"));
      } else {
        callback();
      }
    }.bind(this);
    return {
      changePassword: {
        oldpassword: "",
        newpassword: "",
        repeatpassword: ""
      },
      ruleValidate: {
        oldpassword: [{ validator: validatepsw, trigger: "blur" }],

        newpassword: [
          { required: true, message: "请输入新密码", trigger: "blur" }
        ],
        repeatpassword: [{ validator: validaterepeatpassord, trigger: "blur" }]
      }
    };
  }
};
</script>