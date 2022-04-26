<template>
    <div>
        <div class="fixed bottom-0 w-full bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-200 flex overflow-x-auto z-40 transition" style="background-image: url('/img/ukr.png'); background-size: 3em; background-repeat: repeat">
            <a rel="noreferrer" target="_blank" :href="linkProps" class="m-1 mx-auto text-base font-medium">{{ textProps }}</a>	
        </div>
        <!-- page size -->
        <div class="py-3"/>
    </div>
</template>

<script>
export default {
    name: "BannerU",

    props:[
        'textProps',
        'linkProps'
    ]
}
</script>