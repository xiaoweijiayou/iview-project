<template>
	<div>
		<Cascader :data="data" v-model="value1" style="width:150px"></Cascader>  
	</div>
</template>
<script>
export default {
  data() {
    return {
      value1: [],
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
      ]
    };
  }
};
</script>
