<template>
<div class="main_panel">
    <div class="title_line"></div>
    <div class="title">XUPT</div>
    <div class="title_line"></div>
    <input type="text" class="input" placeholder="姓   名" id="account" v-model="inputName"/>
    <input type="text" class="input" placeholder="邮    箱" id="email" v-model="inputEmail"/>
    <select id="select" class="inputSelect" @change="changename()" placeholder="部    门">
        <option value="" hidden>部&nbsp;&nbsp;&nbsp;门</option>
        <option v-for="item in options" :key="item.department_id" :value="item.department_name" placeholder="部    门">{{item.department_name}}</option>
    </select>
    <input type="text" class="input" placeholder="登    录    名" id="nick" v-model="inputNick"/>
    <input type="password" class="input" placeholder="密    码" id="password" v-model="inputPass"/>
    <input type="password" class="input" placeholder="确认密码" id="repeat" v-model="inputinPass"/>
    <input type="tel" class="input" placeholder="电    话" id="tel" v-model="inputTel"/>
    <div class="register_btn" @click="register()">注册</div>
</div>

</template>

<script>
export default {
    data() {
        return {
            myVal:'',
            inputName:'',
            inputEmail:'',
            inputPass:'',
            inputinPass:'',
            inputTel:'',
            inputNick:'',
            options:[]
        }
    },
    methods: {
        register(){
            this.$axios.post("http://222.24.63.61:8080/user/register",{user_name:this.inputName,user_nick:this.inputNick,user_password:this.inputinPass,user_email:this.inputEmail,
                user_phone:this.inputTel,user_department:this.myVal}).then(()=>{
                alert("注册成功");
                this.$router.push("/");
            })
        },
        changename(){
            let value = document.getElementById('select').value;
            this.myVal = value;
        }
    },
    created(){
        this.$axios.get("http://222.24.63.61:8080/department/query").then((res)=>{
            this.options = res.data;
        })
    }
}
</script>

<style scoped>
     * {
            margin: 0px;
            padding: 0px;
        }

        .main_panel {
            /*background: blue;*/
            position: relative;
            margin-left: auto;
            margin-right: auto;
            margin-top: 50px;
            width: 500px;
            height: 200px;
        }

        .title {
            position: relative;
            display: inline-block;
            width: 260px;
            font-size: 70px;
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
            color: #666;
            margin-top: 15px;
        }

        .inputSelect {
            display: block;
            margin-left: 5px;
            /* margin-right: auto; */
            width: 490px;
            height: 52px;
            padding: 5px 24px;
            font-size: 16px;
            color: #666;
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
</style>