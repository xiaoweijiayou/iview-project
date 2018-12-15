<template>
    <div>
    <Breadcrumb style="height:'160px'" separator='>'>
        <BreadcrumbItem to="/home">
            <Icon type="ios-home-outline"></Icon> 首页
        </BreadcrumbItem>
        <BreadcrumbItem v-for="(item,index) in breadList" :key="index" to="{path:item.path}">
        {{item.meta.CName}}

         </BreadcrumbItem>
        
        
    </Breadcrumb>
    </div>
</template>
<script>
    export default {
        name: 'breadCrumb',  
        data(){
            return{
                breadList: ''
            }
        } ,          
    }
</script>
