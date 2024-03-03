// Load all posts
const loadAllPosts = async (cat) => {
    const res = await fetch(`https://openapi.programming-hero.com/api/retro-forum/posts?category=${cat}`)
    const data = await res.json()
    // console.log(data.posts)
    const allPosts = data.posts
    displayAllPosts(allPosts)
}
loadAllPosts('')


const displayAllPosts = (allPosts) => {
    const allPostsContainer = document.getElementById('all-posts-container')
    allPostsContainer.textContent = "";
    allPosts.forEach(post => {
        // console.log(post)
        const div = document.createElement('div')
        div.innerHTML = `
            <div class="flex flex-col md:flex-row gap-8 p-8 shadow-xl bg-[#F3F3F5] rounded-xl mb-10">
            <div class="indicator">
                <span class="indicator-item badge ${post.isActive ? 'badge-error' : 'badge-success'}"></span>
                <div class="grid w-20 h-20 bg-slate-50 place-items-center rounded-xl">
                    <img class="w-full rounded-xl" src="${post.image}" alt="">
                </div>
            </div>
            <div class="space-y-4 w-full">
                <div class="space-y-2">
                    <div><span class="mr-4"># ${post.category}</span> <span>Author : ${post?.author?.name}</span></div>
                    <h4 class="text-xl font-bold">${post.title}</h4>
                    <p>${post.description}</p>
                </div>
                <hr>
                <div class="flex justify-between flex-col md:flex-row gap-4">
                    <div class="flex gap-6 items-center">
                        <div class="flex gap-4"><img src="images/message.svg" alt=""><span>${post.comment_count}</span>
                        </div>|
                        <div class="flex gap-4"><img src="images/icon-eye.svg" alt=""><span>${post.view_count}</span>
                        </div>|
                        <div class="flex gap-4"><img src="images/clock-hour-9.svg"
                                alt=""><span>${post.posted_time}</span>
                        </div>
                    </div>
                    <button onclick='readNews("${post.title}", "${post.view_count}")' class="btn bg-indigo-100"><img class="w-7" src="images/green-message-icon.png" alt=""></button>
                </div>
            </div>
            </div>
        `
        allPostsContainer.appendChild(div)

    });
    toggleLoadingSpinner(false)
}



// handle search
const handleSearch = () => {
    const searchInput = document.getElementById('search-input').value
    // console.log(searchInput)
    loadAllPosts(searchInput)
}



let newsCount = document.getElementById('news-count').innerText;
const readNews = (title, view) => {
    // console.log('read done', title, view)
    const readNewsContainer = document.getElementById('read-news-container')

    const div = document.createElement('div')
    div.classList = 'flex justify-between p-4 bg-slate-50 rounded-xl'
    div.innerHTML = `
    <p>${title}</p>
    <div class="flex items-center gap-2">
        <div class="w-8">
            <img src="images/icon-eye.svg" alt="">
        </div>
        <p>${view}</p>
    </div>
    `
    readNewsContainer.appendChild(div)

    newsCount++
    document.getElementById('news-count').innerText = newsCount
    // console.log(newsCount)
}



function toggleLoadingSpinner(isLoading) {
    const loadingSpinner = document.getElementById('loading-spinner-container')
    if (isLoading) {
        loadingSpinner.classList.remove('hidden')
    } else{
        // loadingSpinner.classList.set('hidden')
    }
}
// const toggleLoadingSpinner = (isLoading) => {
//     const loadingSpinner = document.getElementById('loading-spinner-container')
//     if (isLoading) {
//         loadingSpinner.classList.remove('hidden')
//     }
// }



// Load all latest post:-
const loadAllLatestPosts = async () => {
    // console.log('loadAllLatestPosts')
    const latestPostContainer = document.getElementById('latest-post-container')

    const res = await fetch(`https://openapi.programming-hero.com/api/retro-forum/latest-posts`)
    const data = await res.json()
    // console.log(data)

    data.forEach(item => {
        // console.log(item)

        const div = document.createElement('div')
        div.classList = 'rounded-xl max-w-[421px] border bg-base-100 shadow-xl p-10 space-y-6'
        div.innerHTML = `
        <figure><img class="rounded-xl" src="${item.cover_image}" alt="Shoes" />
        </figure>
        <div class=" space-y-5">
            <div class="flex">
                <img src="images/calender-icon.svg" alt="">
                <p>${item?.author?.posted_date ?? 'No publish date'}</p>
            </div>
            <h2 class="card-title font-bold">${item.title}</h2>
            <p>${item.description}</p>
            <div class="flex gap-6">
                <div class="w-11">
                    <img class="rounded-full" src="${item.profile_image}"/>
                </div>
                <div>
                    <p class="text-xl font-bold">${item?.author?.name}</p>
                    <p>${item?.author?.designation ? item.author.designation : 'Unknown'}</p>
                </div>
            </div>
        </div>
    `
        latestPostContainer.appendChild(div)
    })


}

loadAllLatestPosts()