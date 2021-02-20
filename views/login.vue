<template>

    <div class="login">
        <div class="title_line"></div>
        <div class="title">Budapest</div>
        <div class="title_line"></div>
        <input type="text" class="input" placeholder="用户名" v-model="inputValue"/>
        <input type="password" class="input" placeholder="密码" v-model="inputPass"/>
        <div class="radio">
        <label for="user">用户</label>&nbsp;<input type="radio" name="radio" value="0" v-model="picked" checked>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <label for="manager">管理员</label>&nbsp;<input type="radio" name="radio" value="1" v-model="picked">
        </div>
        <div class="register_btn" @click="login">登录</div>
        <div class="register_link" @click="register">快速注册</div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            inputValue:'',
            inputPass:'',
            picked:''
        }
    },
    methods: {

        login(){
            this.$http.post("http://129.204.185.247:8000/api/app01/login", {username:this.inputValue,password:this.inputPass})
            .then((data) => {
            //登录失败,先不讨论
            if (data.status != 200) {
          //iViewUi的友好提示
                alert('登录失败');
            //登录成功  
            } else{
                
                //用户名 登录状态
                this.$store.state.name = data.body.data.name;
                //session 登录状态
                this.$store.state.sessionId = data.body.data.session_id;
                //userId 用户中心
                this.$store.state.userId = data.body.data.user_id;
                //userLogin 导航守卫
                // this.$store.state.userLogin = true;

                this.$store.state.email = data.body.data.user_email;
        //设置Vuex登录标志为true，默认userLogin为false
                this.$store.dispatch("userLogin", true);
          //Vuex在用户刷新的时候userLogin会回到默认值false，所以我们需要用到HTML5储存
          //我们设置一个名为Flag，值为isLogin的字段，作用是如果Flag有值且为isLogin的时候，证明用户已经登录了。
                
                localStorage.setItem("Name", data.body.data.name);
                localStorage.setItem("Session", data.body.data.session_id);
                localStorage.setItem("UserId", data.body.data.user_id);
                // localStorage.setItem("Email", data.body.data.user_email);
          //iViewUi的友好提示
        //   console.log(this.$store.state);
         
          alert(data.body.msg);
          
          //登录成功后跳转到指定页面
        if(data.body.msg=='登陆成功'){
            // this.$store.state.isLogin = true;
            // console.log(this.$store.state.isLogin);
            if(this.picked == 0){
                localStorage.setItem("Flag", "isLogin");
                 this.$router.push("/home");
            }else{
                this.$router.push("/manager");
            }
        }
            
        }
            // console.log(data);
        });
    },
    register(){
        this.$router.push("/register");
    }
    },
}
</script>

<style scoped>
     * {
            margin: 0px;
            padding: 0px;
        }

        .login{
            /*background: blue;*/
            position: relative;
            margin-left: auto;
            margin-right: auto;
            margin-top: 100px;
            width: 500px;
            height: 200px;
        }

        .title {
            position: relative;
            display: inline-block;
            width: 260px;
            font-size: 50px;
            color: #222;
            text-align: center;
            background: white;
            float: left;
            margin-bottom: 10px;
        }

        .title_line {
            display: inline-block;
            float: left;
            width: 120px;
            height: 4px;
            margin-top: 50px;
            background: #222;
        }

        .input {
            display: block;
            margin-left: auto;
            margin-right: auto;
            width: 440px;
            height: 40px;
            padding: 5px 24px;
            font-size: 16px;
            font-color: #666;
            margin-top: 15px;
        }

        .register_btn {
            position: relative;
            display: block;
            width: 490px;
            margin-left: auto;
            margin-right: auto;
            background: #222;
            color: white;
            text-align: center;
            height: 38px;
            line-height: 38px;
            margin-top: 10px;
            font-size: 14px;
            cursor: pointer;
        }
        
        .register_link {
            color: gray;
            float: right;
            margin-top: 10px;
            margin-right: 10px;
            cursor: pointer;
        }
        .radio{
            /* border:1px solid black; */
            height: 40px;
            text-align: center;
            line-height: 40px;
            font-size: 18px;
        }
</style>
