<style lang='less'>
.set-table {
  display: inline-block;
  margin: 10px 10px;
  .ivu-table {
    overflow-y: auto;
  }
}
.set-page {
  display: inline-block;
  margin: 0 0 0 25px;
}
</style>
<template>
  <div>
    <label style="margin: 0 6px 6px 6px">测试项选择</label>
    <Cascader
      :data="data"
      v-model="value1"
      style="width:150px; display:inline-block"
      @on-change="handleChangeCascader"
    ></Cascader>
    <label style="margin: 0 10px 8px 6px">项目名</label>
    <Select v-model="modelProject" style="width:150px" @on-change="handleChangeProject">
      <Option v-for="item in projectList" :value="item.value" :key="item.value">{{ item.label }}</Option>
    </Select>
    <Button type="default" style=" margin-right: 5px;">刷新</Button>
    <Button @click="handleRun" type="default" style=" margin-right: 5px;">运行</Button>
    <Button type="default">停止</Button>
    <Button type="default" style=" margin-left: 5px;">重启</Button>
    <Table
      @on-select="handleRowSelected"
      @on-select-cancel="handleRowSelected"
      class="set-table"
      border
      :columns="columns1"
      :data="data1"
      highlight-row
      style="height: 400px;"
    ></Table>
    <Page
      class="change-page"
      :total="meta.total"
      show-sizer
      show-elevator
      show-total
      :current="meta.page"
      @on-change="handlePageChange"
      @on-page-size-change="handleSizeChange"
    />
    <Table class="set-table" border :columns="columns2" :data="data2" :style="tableHeight"></Table>
  </div>
</template>
<script>
import { devices, getProjectId, getProjectDevices, runDevices } from "@/api/data";
import expandRow from "./tableExpand.vue";

export default {
  data() {
    return {
      total: 1,
      page: 1,
      modelProject: "",
      value1: [],
      total: 1,
      data1: [],
      data2: [],
      meta: {
        total: 0,
        page: 1,
        pages: 0,
        per_page: 10
      },
      projectList: [
        {
          value: "",
          label: ""
        }
      ],
      data: [
        {
          value: "DRAM",
          label: "DRAM",
          children: [
            {
              value: "SW",
              label: "SW"
            },
            {
              value: "AR",
              label: "AR"
            },
            {
              value: "MAP",
              label: "MAP"
            }
          ]
        },
        {
          value: "AQ",
          label: "AQ",
          children: [
            {
              value: "Scenario",
              label: "Scenario",
              children: [
                {
                  value: "MK1",
                  label: "MK1"
                },
                {
                  value: "MK2",
                  label: "MK2"
                },
                {
                  value: "SW1",
                  label: "SW1"
                },
                {
                  value: "SW2",
                  label: "SW2"
                },
                {
                  value: "AR",
                  label: "AR"
                }
              ]
            },
            {
              value: "Stress",
              label: "Stress",
              children: [
                {
                  value: "FC",
                  label: "FC"
                },
                {
                  value: "LRAF",
                  label: "LRAF"
                },
                {
                  value: "DJ",
                  label: "DJ"
                },
                {
                  value: "IT",
                  label: "IT"
                },
                {
                  value: "IVT",
                  label: "IVT"
                },
                {
                  value: "RD",
                  label: "RD"
                },
                {
                  value: "MIX",
                  label: "MIX"
                },
                {
                  value: "FSS",
                  label: "FSS"
                }
              ]
            },
            {
              value: "Perf",
              label: "Perf",
              children: [
                {
                  value: "Rand",
                  label: "Rand"
                },
                {
                  value: "Seq",
                  label: "Seq"
                },
                {
                  value: "TBW",
                  label: "TBW"
                }
              ]
            },
            {
              value: "LV",
              label: "LV",
              children: [
                {
                  value: "FC",
                  label: "FC"
                },
                {
                  value: "LRAF",
                  label: "LRAF"
                },
                {
                  value: "MK",
                  label: "MK"
                },
                {
                  value: "DJ",
                  label: "DJ"
                },
                {
                  value: "IT",
                  label: "IT"
                },
                {
                  value: "IVT",
                  label: "IVT"
                },
                {
                  value: "RD",
                  label: "RD"
                }
              ]
            },
            {
              value: "SPO",
              label: "SPO",
              children: [
                {
                  value: "PON",
                  label: "PON"
                },
                {
                  value: "POA",
                  label: "POA"
                }
              ]
            }
          ]
        },
        {
          value: "AE",
          label: "AE",
          children: [
            {
              value: "LST",
              label: "LST"
            },
            {
              value: "FRAG",
              label: "FRAG"
            },
            {
              value: "STR",
              label: "STR"
            },
            {
              value: "CAT",
              label: "CAT"
            },
            {
              value: "RST",
              label: "RST"
            },
            {
              value: "RB",
              label: "RB"
            }
          ]
        }
      ],
      columns1: [
        {
          type: "selection",
          width: 60,
          align: "center"
        },
        {
          title: "设备编号",
          key: "id"
        },
        {
          title: "info",
          key: "info"
        },
        {
          title: "项目编号",
          key: "projectid"
        },
        {
          title: "设备号",
          key: "sn"
        },
        {
          title: "客户端编号",
          key: "stationid"
        },
        {
          title: "状态",
          key: "status"
        },
        {
          title: "更新时间",
          key: "updatetime"
        },
        {
          title: "用户编号",
          key: "userid"
        }
      ],
      columns2: [
        {
          type: "expand",
          width: 50,
          render: (h, params) => {
            return h(expandRow, {
              props: {
                row: params.row
              }
            });
          }
        },
        {
          title: "项目编号",
          key: "projectid"
        },
        {
          title: "设备号",
          key: "sn"
        },
        {
          title: "状态",
          key: "status"
        }
      ],
      // data2: [
      //   {
      //     projectid: "1",
      //     id: 19,
      //     sn: "gdkhwijl",
      //     status: "running",
      //     stationid: "2",
      //     userid: 1
      //   }
      // ],
      runningParam: {},
      checkedTableData: [],
      tableHeight: {}
    };
  },
  methods: {
    handleRun() {
      this.getRunningParam()
      if (!this.runningParam.TC_Name) {
        this.$Message.error("请选择测试项");
        return
      } else if (!this.runningParam.projectid) {
        this.$Message.error("请选择项目");
        return
      } else if(!this.runningParam.sn) {
        this.$Message.error("请选择设备");
        return
      }
      // todo：调运行接口
      runDevices(this.runningParam).then((res) => {
        // 更新两个表格数据
        alert(res.data.result)
      })
    },
    getRunningParam() {
      let sn = ''
      this.checkedTableData.forEach(item => {
        sn += `${item.sn}+`
      })
      this.runningParam.sn = sn.substring(0, sn.length - 1)
      this.runningParam.projectid = this.modelProject
    },
    handleRowSelected(checkedData, currentData) {
      this.checkedTableData = checkedData
    },
    handleChangeCascader(value) {
      this.runningParam.TC_Name = value.join("/");
    },
    handlePageChange(page) {
      this.meta.page = page;
      this.changeTableData();
    },
    handleSizeChange(size) {
      this.meta.per_page = size;
      this.changeTableData();
    },
    changeTableData() {
      devices(this.meta.page, this.meta.per_page).then(res => {
        this.data1 = res.data && res.data.items;
        // this.setSelectData(this.data1);
        this.meta = res.data && res.data.meta;
      });
    },
    setSelectData(data) {
      let items = [];
      data.forEach(item => {
        items.push({
          label: item.projectid,
          value: item.projectid
        });
      });
      this.projectList = items;
    },
    initProjectList() {
      getProjectId().then(res => {
        let data = res.data.list;
        let items = [];
        data.forEach(item => {
          items.push({
            label: item.projectid,
            value: item.projectid
          });
        });
        this.projectList = items;
      });
    },
    handleChangeProject(value) {
      this.checkedTableData = []
      getProjectDevices(value).then((res) => {
        this.data1 = res.data && res.data.items
      })
      // todo: 填充正在运行表格
    }
  },
  mounted() {
    this.changeTableData(1);
    this.tableHeight = {
      height: `${document.body.clientHeight - 590}px`
    }
  },
  created() {
    this.initProjectList();
  }
};
</script>
