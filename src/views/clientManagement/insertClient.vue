<template>
    <Modal
        v-model="modal1"
        title="新增客户端"
        @on-ok="handleSubmit('formValidate')"
        @on-cancel="cancel">
        <i-form ref="formValidate" :model="formValidate" :rules="ruleValidate" :label-width="80">
        <Form-item label="客户端IP" prop="IP_address">
            <i-input v-model="formValidate.IP_address" placeholder="请输入客户端IP地址"></i-input>
        </Form-item>
        <Form-item label="操作系统版本" prop="OS_version">
            <i-input v-model="formValidate.OS_version" placeholder="请输入操作系统版本"></i-input>
        </Form-item>
        <Form-item label="ADB版本" prop="ADB_version">
            <i-input v-model="formValidate.ADB_version" placeholder="请输入ADB版本"></i-input>
        </Form-item>
         <Form-item label="客户端版本" prop="Client_version">
            <i-input v-model="formValidate.Client_version" placeholder="请输入客户端版本"></i-input>
        </Form-item>
        </i-form>
    </Modal>
</template>
<script>
export default {
  name: "insertClient",
  props: ["showInsertClient"],
  watch: {
    showInsertClient() {
      this.modal1 = this.showInsertClient;
    }
  },
  data() {
    return {
      modal1: false,
      formValidate: {
        IP_address: "",
        OS_version: "",
        ADB_version: "",
        Client_version: ""
      },
      ruleValidate: {
        IP_address: [
          { required: true, message: "客户端IP不能为空", trigger: "blur" }
        ],
        OS_version: [
          { required: true, message: "操作系统不能为空", trigger: "blur" }
        ],
        ADB_version: [
          { required: true, message: "adb版本不能为空", trigger: "blur" }
        ],
        Client_version: [
          { required: true, message: "客户端版本不能为空", trigger: "blur" }
        ]
      }
    };
  },
  methods: {
    handleSubmit(name) {
      this.$refs[name].validate(valid => {
        if (valid) {
          callback();
        } else {          
          this.$Message.success("提交成功!");
        }
      });

      this.$emit("hidden-dialog");
    },
    cancel() {
      this.$emit("hidden-dialog");
    }
  }
};
</script>