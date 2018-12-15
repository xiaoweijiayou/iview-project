<template>  
<Modal
v-model="modal1"
        title="新增项目信息"
        @on-ok="ok"
        @on-cancel="cancel"
        :styles="{top: '15px'}">  
    <i-form ref="formValidate" :model="formValidate" :rules="ruleValidate" :label-width="80" >
        <Form-item label="项目名" prop="projectName" >    
            <i-input  placeholder="请输入项目名"></i-input>  
        </Form-item>
        <Form-item label="起始时间" prop="startTime" >  
        <FormItem prop="startTime">
            <DatePicker type="date" placeholder="请选择起始日期"   v-model="formValidate.startTime"></DatePicker>
        </FormItem>    
        </Form-item>
        <Form-item label="结束时间" prop="endTime" >    
           <FormItem prop="endTime">
            <DatePicker type="date" placeholder="请选择结束日期" v-model="formValidate.endTime"></DatePicker> 
        </FormItem>
        </Form-item>
        <Form-item label="model NO" prop="modelNO" >    
            <i-input  placeholder="请输入model NO"></i-input>  
        </Form-item>
        <Form-item label="AP" prop="AP" >    
            <i-input  placeholder="请输入AP"></i-input>  
        </Form-item>
        <Form-item label="安卓版本" prop="androidVersion" >    
            <i-input  placeholder="请输入安卓版本"></i-input>  
        </Form-item>
          <Form-item label="软件版本" prop="softdVersion" >    
            <i-input  placeholder="请输入软件版本"></i-input>  
        </Form-item>
        <Form-item label="内核版本" prop="kerneldVersion" >    
            <i-input  placeholder="请输入内核版本"></i-input>  
        </Form-item>
        
    </i-form>
</Modal>     

    
</template>
<script>
export default {
    name:"insertProject" ,
    props: ["showInsertProject"],
    watch: {
    showInsertProject() {
      this.modal1 = this.showInsertProject;
    }
  },
    methods :{
        ok(){
            this.$emit("hidden-dialog");
        },
        cancel(){
            this.$emit("hidden-dialog");
        },
      
        },
    data(){
        return {
        modal1: true,
        formValidate : {
            projectName: "",
            startTime: "",
            endTime: "",
            modelNO: "",
            AP:'',  

        },
        ruleValidate: {

        },
    }
}
}
</script>