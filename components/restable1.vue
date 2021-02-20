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
      label="使用途径"
      width="400">
      <template slot-scope="scope">
         <el-popover trigger="hover" placement="top">
          <p>使用途径: {{ scope.row.apply_use }}</p>
          <div slot="reference" class="name-wrapper">
            <el-tag size="medium">{{ scope.row.apply_use }}</el-tag>
          </div>
         </el-popover>
      </template>
    </el-table-column>
    <el-table-column label="操作" min-width="180">
      <template slot-scope="scope">
        <el-button
          size="mini"
          @click="handleEdit(scope.$index, scope.row)">通过</el-button>
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
            form: {
            delivery: false,
            desc: ''
            },
          formLabelWidth: '120px'
      }
    },
    methods: {
      handleEdit(index, row) {
        alert("已通过！");
        this.$axios.post("http://222.24.63.61:8080/apply/pass_ziyuan1",{apply_id:row.apply_id})
        .then((res)=>{
          
          if(res.data == 'success'){
            
            this.$axios.get("http://222.24.63.61:8080/apply/query_apply1").then((res)=>{
          this.tableData = res.data;  
        })
          }
              
        })
      },
      handleDelete(index, row) {
        this.$axios.post("http://222.24.63.61:8080/apply/refuse",{apply_id:row.apply_id,apply_remark:this.form.desc})
        .then((res)=>{
          if(res.data == 'success'){
            this.$axios.get("http://222.24.63.61:8080/apply/query_apply1").then((res)=>{
          this.tableData = res.data;  
        })
          }
          
        })
        
      }
    },
    created() {
        this.$axios.get("http://222.24.63.61:8080/apply/query_apply1").then((res)=>{
          this.tableData = res.data;  
        })
    },
}
</script>

<style scoped>

</style>