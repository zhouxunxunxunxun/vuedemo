<template>
    <div class="resource">
    <el-button type="primary" plain @click="dialogFormVisible = true">新建资源</el-button>

        <el-dialog title="新增资源" :visible.sync="dialogFormVisible">
        <el-form ref="form" :model="form" label-width="80px">
  <el-form-item label="资源名称">
    <el-input v-model="form.name"></el-input>
  </el-form-item>
  <el-form-item label="资源描述">
    <el-input type="textarea" v-model="form.desc"></el-input>
  </el-form-item>
    <el-form-item label="文档上传">
              <el-upload
              class="upload-demo"
              action="http://222.24.63.61:8080/user/upload"
              :on-preview="handlePreview"
              :on-remove="handleRemove"
              :before-remove="beforeRemove"
              multiple
              :limit="3"
              :on-exceed="handleExceed"
              :file-list="fileList">
              <el-button size="small" type="primary">点击上传</el-button>
            </el-upload>
            </el-form-item>
  <el-form-item>
    <el-button type="primary" @click="dialogFormVisible = false;resource()">立即创建</el-button>
    <el-button @click="dialogFormVisible = false">取消</el-button>
  </el-form-item>
</el-form>
        </el-dialog>
    <el-table
    :data="tableData"
    style="width: 100%">
    <el-table-column
      label="资源id"
      width="120">
      <template slot-scope="scope">
          <div slot="reference" class="name-wrapper">
            <el-tag size="medium">{{ scope.row.resource_id }}</el-tag>
          </div>
      </template>
    </el-table-column>
    <el-table-column
      label="资源名称"
      width="180">
      <template slot-scope="scope">
          <div slot="reference" class="name-wrapper">
            <el-tag size="medium">{{ scope.row.resource_name }}</el-tag>
          </div>
      </template>
    </el-table-column>
    <el-table-column
      label="资源描述"
      width="400">
      <template slot-scope="scope">
        <el-popover trigger="hover" placement="top">
          <p>资源描述: {{ scope.row.resource_content }}</p>
          <div slot="reference" class="name-wrapper">
            <el-tag size="medium">{{ scope.row.resource_content }}</el-tag>
          </div>
           </el-popover>
      </template>
    </el-table-column>
    <el-table-column label="操作" min-width="140">
      <template slot-scope="scope">
         <el-dialog title="修改资源" :visible.sync="dialogFormVisible1">
        <el-form :model="form1">
            <el-form-item label="资源名称">
              <el-input type="text" v-model="form1.name"></el-input>
            </el-form-item>
          
            <el-form-item label="资源描述">
              <el-input type="textarea" v-model="form1.desc"></el-input>
            </el-form-item>
              <el-form-item label="文档上传">
              <el-upload
              class="upload-demo"
              action="https://222.24.63.61:8080/user/upload"
              :on-preview="handlePreview"
              :on-remove="handleRemove"
              :before-remove="beforeRemove"
              multiple
              :limit="3"
              :on-exceed="handleExceed"
              :file-list="fileList">
              <el-button size="small" type="primary">点击上传</el-button>
            </el-upload>
            </el-form-item>
        </el-form>
        <div slot="footer" class="dialog-footer">
            <el-button @click="dialogFormVisible1 = false">取 消</el-button>
            <el-button type="primary" @click="dialogFormVisible1 = false;handleEdit()" >修 改</el-button>
        </div>
        </el-dialog>
        <el-button type="primary" icon="el-icon-edit" circle @click="dialogFormVisible1 = true;change(scope.$index, scope.row)"></el-button>
        <el-button @click="handleDelete(scope.$index, scope.row)" type="danger" icon="el-icon-delete" circle></el-button>
      </template>
    </el-table-column>
  </el-table>
</div>
</template>

<script>
 export default {
    data() {
      return {
        tableData: [],
        dialogTableVisible: false,
        dialogFormVisible: false,
        form: {
          name: '',
          delivery: false,
          desc: '',
          url:''
        },
        dialogFormVisible1: false,
            form1: {
            delivery: false,
            desc: '',
            name:'',
            url:'',
            id:''
            },
        formLabelWidth: '120px',
      }
    },
    methods: {
       resource(){
        this.$axios.post("http://222.24.63.61:8080/resource/add",{resource_name:this.form.name,resource_content:this.form.desc,resource_url:this.form.url})
        .then((res)=>{
          this.$axios.get("http://222.24.63.61:8080/resource/query").then((res)=>{
          this.tableData = res.data;
      })
        })
      },
      change(index,row){
        this.form1.name = row.resource_name;
        this.form1.desc = row.resource_content;
        this.form1.url = row.resource_url;
        this.form1.id = row.resource_id;
      },
      handleEdit() {
        this.$axios.post("http://222.24.63.61:8080/resource/update",{resource_id:this.form1.id,resource_name:this.form1.name,resource_content:this.form1.desc,resource_url:this.form1.url})
        .then((res)=>{
          this.$axios.get("http://222.24.63.61:8080/resource/query").then((res)=>{
          this.tableData = res.data;
      })
        })
      },
      handleDelete(index, row) {
        this.$axios.post("http://222.24.63.61:8080/resource/delete",{resource_id:row.resource_id})
        .then((res)=>{
          this.$axios.get("http://222.24.63.61:8080/resource/query").then((res)=>{
        this.tableData = res.data;
      })
        })
      }
    },
    created() {
      this.$axios.get("http://222.24.63.61:8080/resource/query").then((res)=>{
        this.tableData = res.data;
      })
    },
  }
</script>

<style scoped>

</style>