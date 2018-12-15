<style scoped>
    .frame {
        padding-left: 240px;
    }
</style>
<template>
    <div class="frame" :style="contentHeight">
        <bread-crumb />
        <router-view></router-view>
    </div>
</template>

<script>
    import breadCrumb from '../layout/breadCrumb'
    export default {
        name: 'frame',
        components: {            
            breadCrumb,           
        },
        
        data() {
            return {
                screenHeight: 0,
            }
        },
        computed: {
            contentHeight () {
                return {
                    height: `${this.screenHeight - 64}px`
                }
            }
        },
        mounted() {
            this.screenHeight = window.innerHeight
        }
    }
</script>