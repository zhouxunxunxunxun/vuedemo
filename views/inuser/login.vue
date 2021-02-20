<template>

    <div class="login">
        <div class="title_line"></div>
        <div class="title">XUPT</div>
        <div class="title_line"></div>
        <input type="text" class="input" placeholder="用户名" v-model="inputValue"/>
        <input type="password" class="input" placeholder="密码" v-model="inputPass"/>
        <div class="radio">
        <label for="user">用户</label>&nbsp;<input type="radio" name="dio" value="0" v-model="picked" checked id="user"/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <label for="manager">管理员</label>&nbsp;<input type="radio" name="dio" value="1" v-model="picked" id="manager"/>
        </div>
        <div class="register_btn" @click="login">登录</div>
        <div class="register_link" @click="register">快速注册</div>
        <div class="register_link" @click="findpass">密码找回</div>
    </div>
</template>

<script>
    import store from "@/modules/login.js";
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
            store.state.islogin = true;
            if(this.picked == 0){
                   this.$axios.post("http://222.24.63.61:8080/user/login", {user_nick:this.inputValue,user_password:this.inputPass})
                    .then((res) => {
                    //登录失败,先不讨论
                    if (res.status != 200) {
                                alert('登录失败');
                    } else{

                    if(res.data=='success'){
                            alert("登陆成功");
                            localStorage.setItem("login",true);
                            localStorage.setItem("name",this.inputValue);
                            this.$router.push("/home");
                        }else if(res.data == 'lose'){
                            alert("登录失败");
                        }
                    }
                        
                });
            }else{
               this.$axios.post("http://222.24.63.61:8080/admin/login", {name:this.inputValue,password:this.inputPass})
                    .then((res) => {
                    //登录失败,先不讨论
                    if (res.status != 200) {
                                alert('登录失败');
                    } else{
                        if(res.data=='success'){
                            alert("登陆成功");
                            localStorage.setItem("login",true);
                            localStorage.setItem("manager",this.inputValue);
                            this.$router.push("/manager");
                        }else if(res.data == 'lose'){
                            alert("登录失败");
                        }
                    }
                        
                });
            }
         
    },
    register(){
        this.$router.push("/register");
    },
    findpass(){
        this.$router.push("/findpass");
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
