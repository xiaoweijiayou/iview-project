<template>
  <Table
    @on-selection-change="selectionSelect"
    :disabled="true"
    border
    :columns="columns"
    :data="data1"
  ></Table>
</template>
<script>
export default {
  data() {
    return {
      columns: [
        {
          type: "selection",
          width: 50
        },
        {
          title: "设备编号",
          key: "SNO"
        },
        {
          title: "系统版本",
          key: "OS_verson"
        },
        {
          title: "内核版本",
          key: "Kernel_version"
        },
        {
          title: "CPU信息",
          key: "CPU_info"
        },
        {
          title: "剩余空间",
          key: "Free_size"
        },
        {
          title: "设备状态",
          key: "status",
          filters: [
            {
              label: "running",
              value: 1
            },
            {
              label: "idel",
              value: 2
            }
          ],
          filterMultiple: false,
          filterMethod(value, row) {
            if (value === 1) {
              return row.status == "running";
            } else if (value === 2) {
              return row.status == "idel";
            }
          }
        }
      ],
      data1: [
        {
          SNO: "15######",
          OS_verson: "181FSKPS",
          Kernel_version: "KBCKHW",
          CPU_info: "009KK",
          Free_size: "22G",
          status: "idel",
          _disabled: false,
          _checked: false
        },
        {
          SNO: "15######",
          OS_verson: "181FSKPS",
          Kernel_version: "KBCKHW",
          CPU_info: "009KK",
          Free_size: "22G",
          status: "idel",
          _disabled: false,
          _checked: false
        }
      ]
    };
  },
  methods: {
    selectionSelect(data, e) {
      console.log("thes" + data);
      console.log("thes" + e);
    }
  }
};
</script>
