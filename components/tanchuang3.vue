<template>
    <div class="tanchuang">
        <el-button plain @click="dialogFormVisible = true;">申请</el-button>


        <el-dialog title="资源申请" :visible.sync="dialogFormVisible">
        <el-form :model="form">
            <el-form-item label="使用途径" :label-width="formLabelWidth">
            <el-input v-model="form.tujing" autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item label="申请使用天数" :label-width="formLabelWidth">
            <el-input v-model="form.day" autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item label="密码" :label-width="formLabelWidth">
            <el-input v-model="form.password" autocomplete="off"></el-input>
            </el-form-item>
             <el-form-item label="主机名" :label-width="formLabelWidth">
           <el-select v-model="form.name" placeholder="请选择主机进行排队">
                <el-option v-for="item in form.options" :key="item.name"  :label="item.name   +' 还需等待'+  item.time+'天'" :value="item.name"></el-option>
            </el-select>
            </el-form-item>
        </el-form>
        <div slot="footer" class="dialog-footer">
            <el-button @click="dialogFormVisible = false">取 消</el-button>
            <el-button type="primary" @click="dialogFormVisible = false;apply()">确 定</el-button>
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
            name:'',
            password:'',
            region: '',
            date1: '',
            date2: '',
            delivery: false,
            type: [],
            resource: '',
            desc: '',
            options:[]
            },
            formLabelWidth: '120px'
        }
    },
    methods: {
        apply(){
             this.$axios.post("http://222.24.63.61:8080/apply/add3",{apply_use:this.form.tujing,apply_day:this.form.day,apply_password:this.form.password,name:this.form.name}).then((res)=>{
                if(res.data == 'success'){
                    alert("申请成功！");
                }else{
                    alert("申请失败！");
                }
            })
        }
    },
    created() {
        this.$axios.get("http://222.24.63.61:8080/apply/query_windows").then((res)=>{
            this.form.options = res.data;
        })
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