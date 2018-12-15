<style lang='less'>
.project-table {
    margin-top: 10px;
    margin-left: 8px;
    margin-right: 8px;
    margin-bottom: 8px;
}
</style>
<template>
<div>
    <Table ref="tables" class="project-table" border :columns="columns" :data="datas"
      @on-row-click="handleRowClick" highlight-row></Table>
    <Button style="margin: 0 0 0 8px;" type="primary" @click="exportExcel">导出为csv文件</Button>
</div>    
</template>
<script>
export default {
    name: 'projectTable',
    data() {
      return {
        columns:[
          {title: '项目名', key: 'project', sortable: true},
          {title: '起始时间', key: 'start_time', sortable: true},
          {title: '结束时间', key: 'end_time',sortable:true},
          {title:'Model NO', key:'model_no'},
          {title:'AP', key:'AP'},
          {title:'安卓版本', key:'android_version'},
          {title:'软件版本', key:'soft_version'},
          {title:'内核版本', key:'kernel_version'}, 
          {title:'状态', key:'status'},     
        ],
        datas:[
          { 
            project:'1',
            start_time:'2',
            end_time:'3',
            model_no:'4',
            AP:'5',
            android_version:'6',
            soft_version:'7',
            kernel_version:'8',
            status:'ongoing',
          }
        ],
      }
    },
    methods:{
      handleRowClick(eve) {
        this.$emit('handle-button') 
       
      },
      exportExcel () {
         this.$refs.tables.exportCsv({
        filename: `table-projectInfo.csv`
      })
    }
  }
}
</script>
