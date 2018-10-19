<style scoped lang="less">
    .index{
        width: 100%;
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        text-align: center;
        background-image: url('/src/images/login-bg.jpg');
        .login {
            margin: auto;
            position: relative; 
            top: 50%;
            width: 380px;
            height: 200px;
            background: #fff;
            border-radius: 4px;
            padding: 20px;
            &-input {
                margin: 15px;
            }
            &>h3 {
                border-bottom: 1px solid #222;
            }
        }
        .ivu-row-flex{
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
                        <Input v-model="username" placeholder="Please input your username..." style="width: 300px" />
                    </div>
                    <div class="login-input">
                        <Input v-model="password" placeholder="Please input your password..." style="width: 300px" />
                    </div>
                    <Button @click="log_in= true" >login</Button>
                </div>
            </Col>
        </Row>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                username: '',
                password: '',
            }
        },
        methods: {
            handleStart () {
                this.$Modal.info({
                    title: 'Bravo',
                    content: 'Now, enjoy the convenience of iView.'
                });           
            }        
        }
    }
    
</script>
