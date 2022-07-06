
export const postModule = {
    state: () => ({
        posts: [
            {title:'aboba', body:'boba', id:1},
            {title:'boba', body:'aboba', id:2},
            {title:'qwe', body:'zxc', id:3}
        ],
        selectedSort: '',
        searchQuery:'',
        sortOptions: [
            {value: 'title', name: 'По названию',},
            {value: 'body', name: 'По описанию',},
        ]
    }),
    getters:{
        sortedPosts(state) {
            return [...state.posts].sort((post1, post2) => post1[state.selectedSort]?.localeCompare(post2[state.selectedSort]))
        },
        sortedAndSearchedPosts(state, getters) {
            return getters.sortedPosts.filter(post => post.title.toLowerCase().includes(state.searchQuery.toLowerCase()))
        }
    },
    mutations:{
        setPosts(state, posts) {
            state.posts = posts
        },
        setSelectedSort(state, selectedSort) {
            state.selectedSort = selectedSort
        },
        setSearchQuery(state, searchQuery) {
            state.searchQuery = searchQuery
        },
    },
    action:{

    },
    namespaced:true
}

