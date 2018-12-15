<style>
.issue-data {
  margin-top: 10px;
  margin-left: 8px;
  margin-right: 8px;
  margin-bottom: 8px;
}
</style>
<template>
  <div>
    <i-input
      @on-change="handleChange"
      v-model="searchValue"
      placeholder="请输入项目名"
      style="width:200px;margin-left:10px"
    ></i-input>
    <Button type="primary" @click="handleSearch">搜索</Button>
    <Button type="primary" @click="handleUpdate" :disabled="disableButton">修改</Button>
    <Table
      border
      @on-row-click="handleRowClick"
      highlight-row
      class="issue-data"
      ref="issueTable"
      :columns="columns1"
      :data="datas"
    ></Table>
    <Modal v-model="modal1" title="修改问题列表" @on-ok="ok" @on-cancel="cancel">
      <i-form :label-width="80">
        <Form-item label="项目名">
          <i-input v-model="Rowdata.project" :disabled="true"></i-input>
        </Form-item>
        <Form-item label="测试内容">
          <Cascader :data="data" v-model="value1"></Cascader>
        </Form-item>
        <Form-item label="描述">
          <i-input v-model="Rowdata.description" type="textarea"></i-input>
        </Form-item>
        <Form-item label="原因">
          <i-input v-model="Rowdata.reason" type="textarea"></i-input>
        </Form-item>
      </i-form>
    </Modal>
  </div>
</template>
<script>
export default {
  name: "issueList",
  methods: {
    handleChange(e) {
      if (e.target.value === "") return (this.datas = this.value);
    },
    handleSearch(searchValue) {
      this.datas = this.datas.splice(searchValue, 1);
    },
    handleUpdate() {
      this.modal1 = true;
    },
    handleRowClick(eve) {
      this.disableButton = false;
      this.Rowdata = eve;
    },
    ok() {},
    cancel() {}
  },
  data() {
    var Rowdata = {};

    return {
      columns1: [
        { title: "项目名", key: "project" },
        { title: "测试内容", key: "category" },
        { title: "描述", key: "description" },
        { title: "原因", key: "reason" }
      ],
      datas: [
        {
          project: "1",
          category: "AQ",
          description: "xxxxxxxx ",
          reason: "adb"
        },
        {
          project: "2",
          category: "AQ/perf/RR",
          description: "xxtest ",
          reason: "adbddddd"
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
      disableButton: true,
      modal1: false,
      value1: [],
      searchValue: "",
      Rowdata: {
        project: "",
        category: "",
        description: "",
        reason: ""
      }
    };
  }
};
</script>