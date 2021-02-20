<template>
    <div class="register">
        <div class="title_line"></div>
        <div class="title">Budapest</div>
        <div class="title_line"></div>
        <input type="text" class="input" placeholder="用户名" v-model="inputValue"/>
        <input type="password" class="input" placeholder="密码" v-model="inputPass"/>
        <input type="password" class="input" placeholder="再输一遍" v-model="inputRePass"/>
        <input type="email" class="input" placeholder="邮箱" v-model="inputEmail"/>
        <div class="register_btn" @click="register">注册</div>
        <div class="register_link" @click="login">快速登陆</div>
    </div>

</template>

<script>
export default {
    data() {
        return {
            inputValue:'',
            inputPass:'',
            inputRePass:'',
            inputEmail:''
        }
    },
    methods: {
        register(){
            this.$http.post("http://129.204.185.247:8000/api/app01/register",{
                username:this.inputValue,
                password:this.inputPass,
                re_password:this.inputRePass,
                email:this.inputEmail
            }).then((data)=>{
                if(data.status==200){
                    alert(data.body.msg);
                    // console.log(data);
                    this.$router.push("/login");
                }
            })
        },
        login(){
            this.$router.push("/login");
        },
    }
}
</script>

<style scoped>
     * {
            margin: 0px;
            padding: 0px;
        }

        .register{
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
            margin-top: 30px;
            font-size: 14px;
            cursor: pointer;
        }
        
        .register_link {
            color: gray;
            float: right;
            margin-top: 20px;
            margin-right: 10px;
            cursor: pointer;
        }
</style>