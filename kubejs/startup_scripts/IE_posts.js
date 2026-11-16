const iePosts = [
    'immersiveengineering:treated_post',
    'immersiveengineering:steel_post',
    'immersiveengineering:alu_post'
]


StartupEvents.modifyCreativeTab('minecraft:building_blocks', event => {
    iePosts.forEach(item => event.remove(item))
})


StartupEvents.modifyCreativeTab('minecraft:search', event => {
    iePosts.forEach(item => event.remove(item))
})