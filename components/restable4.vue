<template>
     <el-table
    :data="tableData"
    style="width: 100%;"  max-height="600px">
    <el-table-column
      label="id"
      width="80">
      <template slot-scope="scope">
        <!-- <i class="el-icon-time"></i> -->
        <span style="margin-left: 10px">{{ scope.row.apply_id }}</span>
      </template>
    </el-table-column>
    <el-table-column
      label="账户名"
      width="120">
      <template slot-scope="scope">
          <div slot="reference" class="name-wrapper">
            <el-tag size="medium">{{ scope.row.apply_name }}</el-tag>
          </div>
      </template>
    </el-table-column>
    <el-table-column
      label="申请时间"
      width="180">
      <template slot-scope="scope">
          <div slot="reference" class="name-wrapper">
            <el-tag size="medium">{{ scope.row.apply_time }}</el-tag>
          </div>
      </template>
    </el-table-column>
    <el-table-column
      label="主机名"
      width="130">
      <template slot-scope="scope">

          <div slot="reference" class="name-wrapper">
            <el-tag size="medium">{{ scope.row.zhuji_name }}</el-tag>
          </div>
      </template>
    </el-table-column>
    <el-table-column
      label="使用途径"
      width="300">
      <template slot-scope="scope" >
          <div slot="reference" class="name-wrapper">
            <el-tag size="medium">{{ scope.row.apply_use }}</el-tag>
          </div>
      </template>
    </el-table-column>
    <el-table-column label="操作" min-width="180">
      <template slot-scope="scope">
        <el-button
          size="mini"
          @click="dialogFormVisible1 = true">通过</el-button>
        <!-- <el-button
          size="mini"
          type="danger"
          @click="handleDelete(scope.$index, scope.row)">拒绝</el-button> -->
          <el-button size="mini" type="danger"  plain @click="dialogFormVisible = true" >拒绝</el-button>


        <el-dialog title="拒绝原因" :visible.sync="dialogFormVisible">
        <el-form :model="form">
            <el-form-item label="原因">
              <el-input type="textarea" v-model="form.desc"></el-input>
            </el-form-item>
        </el-form>
        <div slot="footer" class="dialog-footer">
            <el-button @click="dialogFormVisible = false">取 消</el-button>
            <el-button type="primary" @click="dialogFormVisible = false;handleDelete(scope.$index, scope.row)" >确 定</el-button>
        </div>
        </el-dialog>
        <el-dialog title="选择主机" :visible.sync="dialogFormVisible1">
        <el-form :model="form1">
            <el-form-item label="主机">
              <el-select v-model="form1.id" placeholder="请选择主机">
              <el-option v-for="item in form1.options" :key="item.zhuji_id"  :label="item.zhuji_name   +'    端口:'+  item.zhuji_duankou + '    地址:'+item.zhuji_dizhi+'    类型:'+item.zhuji_style" :value="item.zhuji_id"></el-option>
              </el-select>
            </el-form-item>
        </el-form>
        <div slot="footer" class="dialog-footer">
            <el-button @click="dialogFormVisible1 = false">取 消</el-button>
            <el-button type="primary" @click="dialogFormVisible1 = false;handleEdit(scope.$index, scope.row)" >确 定</el-button>
        </div>
        </el-dialog>
      </template>
    </el-table-column>
  </el-table>

</template>

<script>
export default {
    data() {
      return {
        tableData: [],
        dialogFormVisible: false,
        dialogFormVisible1: false,
            form: {
            delivery: false,
            desc: ''
            },
             form1: {
            delivery: false,
            desc: '',
            options:[],
            id:''
            },
          formLabelWidth: '120px'
      }
    },
    methods: {
      handleEdit(index, row) {
        this.$axios.post("http://222.24.63.61:8080/apply/pass_leixing4",{apply_id:row.apply_id,zhuji_id:this.form1.id})
        .then((res)=>{
          if(res.data == 'success'){
            alert("已通过！");
             this.$axios.get("http://222.24.63.61:8080/apply/query_apply4").then((res)=>{
                this.tableData = res.data;  
            })
          }
              
        })
      },
      handleDelete(index, row,desc) {
        this.$axios.post("http://222.24.63.61:8080/apply/refuse",{apply_id:row.apply_id,apply_remark:this.form.desc})
        .then((res)=>{
          if(res.data == 'success'){
             this.$axios.get("http://222.24.63.61:8080/apply/query_apply4").then((res)=>{
                this.tableData = res.data;  
            })
          }
          
        })
        
      }
    },
    created() {
        this.$axios.get("http://222.24.63.61:8080/apply/query_apply4").then((res)=>{
          this.tableData = res.data;  
        })
        this.$axios.get("http://222.24.63.61:8080/zhuji/query_leixing4").then((res)=>{
          this.form1.options = res.data;
        })
    },
}
</script>

<style scoped>

</style>