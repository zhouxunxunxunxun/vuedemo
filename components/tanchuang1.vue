<template>
    <div class="tanchuang">
        <el-button  plain @click="dialogFormVisible = true" >申请</el-button>


        <el-dialog title="资源申请" :visible.sync="dialogFormVisible">
        <el-form :model="form">
            
            <el-form-item label="使用途径" :label-width="formLabelWidth">
            <el-input v-model="form.tujing" autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item label="申请使用天数" :label-width="formLabelWidth">
            <el-input v-model="form.day" autocomplete="off"></el-input>
            </el-form-item>
              <el-form-item label="账户名" :label-width="formLabelWidth">
            <el-input v-model="form.applyname" autocomplete="off"></el-input>
            </el-form-item>
            
            <el-form-item label="密码" :label-width="formLabelWidth">
            <el-input v-model="form.password" autocomplete="off"></el-input>
            </el-form-item>
            <el-alert
            title="设定集群用户的密码,一旦审核通过，系统将自动为您在Hadoop集群中建立账号，此处设定的密码即为此账号的密码。"
            type="error" style="font-weight:bold;font-size:20px;width:100%;">
            </el-alert>
             
        </el-form>
        <div slot="footer" class="dialog-footer">
            <el-button @click="dialogFormVisible = false">取 消</el-button>
            <el-button type="primary" @click="dialogFormVisible = false;apply()" >确 定</el-button>
        </div>
        </el-dialog>

    </div>

    
</template>

<script>
export default {
    data() {
        return {
            dialogFormVisible: false,
            form: {
            tujing: '',
            day:'',
            password:'',
            region: '',
            applyname:'',
            date1: '',
            date2: '',
            delivery: false,
            type: [],
            resource: '',
            desc: ''
            },
            formLabelWidth: '120px'
        }
    },
    methods:{
        apply(){
            this.$axios.post("http://222.24.63.61:8080/apply/add1",{apply_use:this.form.tujing,apply_day:this.form.day,apply_password:this.form.password,apply_name:this.form.applyname}).then((res)=>{
                if(res.data=='success'){
                    alert("申请成功！");
                }else{
                    alert("申请失败！");
                }
            })
        }
    },

}
</script>

<style scoped>
     .el-table .warning-row {
    background: oldlace;
  }

  .el-table .success-row {
    background: #f0f9eb;
  }
</style>