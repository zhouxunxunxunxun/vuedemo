<template>
<div class="changepass">
    <div class="content">
        <div class="headline">
            <span class="headline-content">修改密码</span>
        </div>
        <div class="op-wrapper">
            <div class="step">
                <div class="input">
                    <span>旧密码</span>
                    <input id="password" type="password"  placeholder="旧密码" v-model="oldPass"/>
                </div>
                <div class="input">
                    <span>新密码：</span>
                    <input id="rePassword" type="password"  placeholder="新密码" v-model="newPass"/>
                </div>
                <div class="input">
                    <button @click="confirmAlter()">确认修改</button>
                </div>
            </div>
        </div>
</div>
</div>

</template>

<script>
export default {
    data() {
        return {
            oldPass:'',
            newPass:''
        }
    },
    methods: {
        confirmAlter(){
            this.$axios.post("http://222.24.63.61:8080/user/update_password",{old_password:this.oldPass,new_password:this.newPass}).then((res)=>{
                // console.log(res.data);
                if(res.data == 'success'){
                    alert("修改成功！");
                    this.$router.push("/");
                }else{
                    alert("修改失败！");
                }
            })
        }
    },
}
</script>

<style scoped>
    * {
    margin: 0px;
    padding: 0px;
}
.header--mini {
    border-bottom: 2px solid #4b4b4b;
    min-width: 1190px;
    color: #666
}

.header--mini .wrapper {
    margin: 0 auto;
    padding: 10px 0;
    width: 1190px;
    overflow: hidden
}
.header--mini .site-logo {
    float: left;
    width: 200px;
    height: 36px;
    overflow: hidden;
    line-height: 36px;
    font-family: \@楷体;
    font-size: 20px;
    font-weight: 600;
    color: #4b4b4b;
    text-decoration: none;
}
.header--mini .login-block {
    float: right;
    line-height: 36px
}
.header--mini .login-block .tip {
    margin-right: 10px
}

.header--mini .login-block .btn {
    padding: 3px 10px;
    overflow: hidden;
    color: #fff;
    background-color: #4b4b4b;
    border-color: #4b4b4b;
    border-radius: 2px;
    cursor: pointer;
    text-decoration: none;
}

.content {
    position: relative;
    width:90%;
    margin: 0 auto;
    padding-top: 20px;
}

.content .headline {
    margin-bottom: 19px;
    border-bottom: 2px solid #DDD;
    color: #333;
    font-size: 18px;
    text-align: left
}

.content .headline .headline-content {
    display: inline-block;
    margin-bottom: -2px
}
.content .op-wrapper {
    position: relative;
    border: 1px solid #DDD;
    padding: 30px 0 30px;
    background: #FFF;
    margin-bottom: 60px;
    height: 380px;
    box-sizing: border-box
}
.step {
    position: relative;
    margin: 0 auto;
}
.input {
    position: relative;
    text-align: left;
    width: 290px;
    display: block;
    padding-top: 10px;
    margin-top: 10px;
    margin-left: auto;
    margin-right: auto;

}
.input input {
    padding: 5px;
}
.input span {
    width: 80px;
    display: inline-block;
    cursor: pointer;
}
.input button {
    display: inline-block;
    position: absolute;
    color: #fff;
    background-color: #4b4b4b;
    border-color: #4b4b4b;
    border-radius: 5px;
    font-size: 12px;
    text-align: center;
    width: 90%;
    height: 30px;
    cursor: pointer;
    line-height: 30px;
    margin-top: 20px;
}
.spansendcode{
    display: inline-block;
    position: absolute;
    padding: 3px 10px;
    overflow: hidden;
    color: #fff;
    background-color: #4b4b4b;
    border-color: #4b4b4b;
    border-radius: 5px;
    font-size: 12px;
    text-align: center;
    width: 80px;
    height: 20px;
    cursor: pointer;
    top: 50%;
    margin-top: -10px;
    line-height: 20px;
    margin-left: 10px;
}
</style>