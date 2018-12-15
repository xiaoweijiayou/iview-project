<style scoped lang="less">
.index {
  width: 100%;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  text-align: center;
  background-image: url("/src/images/login-bg.jpg");
  background-repeat: no-repeat;
  .login {
    margin: auto;
    position: relative;
    top: 50%;
    right: -30%;
    width: 300px;
    height: 200px;
    background: #fff;
    border-radius: 4px;
    padding: 20px;
    &-input {
      margin: 15px;
    }
    & > h3 {
      border-bottom: 1px #222;
    }
  }
  .ivu-row-flex {
    height: 100%;
  }
}
</style>
<template>
  <div class="index">
    <Row type="flex" justify="center" align="middle">
      <Col span="24">
        <div class="login">
          <h3>欢迎登录</h3>
          <div class="login-input">
            <Input prefix="ios-contact" placeholder="用户名" v-model="username" style="width: 225px"/>
          </div>
          <div class="login-input">
            <Input prefix="ios-lock" type='password' placeholder="密码" v-model="password" style="width: 225px"/>
          </div>
          <Button @click="handleSubmit" type="primary">login</Button>
        </div>
      </Col>
    </Row>
  </div>
</template>
<script>
export default {
  data() {
    return {
      username: "",
      password: ""
    };
  },
  methods: {
    handleSubmit() {
      if (this.username == "" || this.password == "") {
        this.$Notice.error({
          title: "用户名、密码不能为空"
        });
        this.$router.push({
          path: "/"
        });
      } else {
        var ses = Window.sessionStorage;    
        this.$router.push({
          path: "/home"
        });
      }
    }
  }
};
</script>
