<template>
    <User v-if="false"/>
    <NotFound v-if="false"/>
    <Error v-if="false"/>
</template>


<script>
import User from '@/views/User.vue'
import NotFound from '@/components/NotFound.vue'
import Error from '@/components/Error.vue'


export default {
    components: { 
        User,
        NotFound,
        Error
    }
}
</script>