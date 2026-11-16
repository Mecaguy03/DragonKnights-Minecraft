const iePosts = [
    'immersiveengineering:treated_post',
    'immersiveengineering:steel_post',
    'immersiveengineering:alu_post'
]

ServerEvents.recipes(event => {
    iePosts.forEach(item => {
        event.remove({ output: item })
    })
})

RecipeViewerEvents.removeEntries('item', event => {
    iePosts.forEach(item => {
        event.remove(item)
    })
})