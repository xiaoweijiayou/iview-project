<style>
.ini-table {
  width: 100%;
  height: 100%;
  text-align: center;    
}
</style>
<template>
<i-form ref="iniTable" :model="iniTable" :rules="ruleValidate" :label-width="120" class="ini-table">
        <Form-item label="freeSize" prop="freeSize">
            <i-input v-model="iniTable.freeSize" clearable></i-input>
        </Form-item>
        <Form-item label="SW_interval_1" prop="SW_interval_1">
            <i-input v-model="iniTable.SW_interval_1" clearable></i-input>
        </Form-item>
        <Form-item label="SW_interval_2" prop="SW_interval_2">
            <i-input v-model="iniTable.SW_interval_2" clearable></i-input>
        </Form-item>
         <Form-item label="AR_interval" prop="AR_interval">
            <i-input v-model="iniTable.AR_interval" clearable></i-input>
        </Form-item>
        <Form-item label="iozone_rand_round" prop="iozone_rand_round">
            <i-input v-model="iniTable.iozone_rand_round" clearable></i-input>
        </Form-item>
        <Form-item label="iozone_seq_round" prop="iozone_seq_round">
            <i-input v-model="iniTable.iozone_seq_round" clearable></i-input>
        </Form-item>
        <Form-item label="iozone_tbw_round" prop="iozone_tbw_round">
            <i-input v-model="iniTable.iozone_tbw_round" clearable></i-input>
        </Form-item>
        <Form-item>
            <i-button>确定</i-button>
            <i-button>取消</i-button>
        </Form-item>
        </i-form>    
</template>
<script>
export default{
     data() {
    return {
        iniTable: {
            freeSize:'20',
        SW_interval_1: "10",
        SW_interval_2: "30",
        AR_interval: "120",
        iozone_rand_round:'3',
        iozone_seq_round:'3',
        iozone_tbw_round:'999999',
      },
      ruleValidate: {
          freeSize:[
          { required: true, message: "free size 不能为空", trigger: "blur" }
        ],
      }
    }
  },  

}
</script>
