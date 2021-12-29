<template>
    <User v-if="false"/>
    <NotFound v-if="false"/>
</template>


<script>
import User from '@/views/User.vue'
import NotFound from '@/components/NotFound.vue'


export default {
    components: { 
        User,
        NotFound
    }
}
</script>