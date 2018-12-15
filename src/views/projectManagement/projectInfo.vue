<template>
<div>
   <label style="margin: 0 10px 8px 10px">项目名</label>
   <input style="width:200px; height:30px" placeholder="请输入项目名搜索" />
   <Button @click="handleSearch" type="primary" style='width:80px'>搜索</Button>
   <Button @click='insertProject' type="primary" style='width:80px vertical-align:center'>新增项目</Button> 
   <Button @click='updateProject' type="primary" style='width:80px vertical-align:center' :disabled="disableButton">修改项目</Button>
   <Button @click='deleteProject' type="primary" style='width:80px vertical-align:center' :disabled="disableButton">删除项目</Button>

   <project-table @handle-button="handleButton"></project-table> 
   <insert-project v-show="showInsertProject" :showInsertProject='showInsertProject' @hidden-dialog="hiddenDialog"></insert-project>   
</div>
    
</template>
<script>
import projectTable from './projectTable.vue'
import insertProject from './insertProject.vue'

    export default {

        components: {            
            projectTable,   
            insertProject,        
        },
        data() {
            return {
              showInsertProject: false,
              disableButton: true,
            }
        },
        methods : {
            insertProject() {  
                 this.showInsertProject = true;           
            },
            hiddenDialog() {
               this.showInsertProject = false;
            },
            handleSearch() {

            },
            updateProject() {

            },
            deleteProject() {

            },
            handleButton() {
                this.disableButton = false
            }
        },
       
    }
</script>
