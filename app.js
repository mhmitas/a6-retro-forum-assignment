// Load all posts
const loadAllPosts = async () => {
    const res = await fetch('https://openapi.programming-hero.com/api/retro-forum/posts')
    const data = await res.json()
    // console.log(data.posts)

    const allPostsContainer = document.getElementById('all-posts-container')

    data.posts.forEach(post => {
        console.log(post)

        const div = document.createElement('div')
        div.innerHTML = `
        <div class="flex flex-col md:flex-row gap-8 p-8 shadow-xl bg-[#F3F3F5] rounded-xl mb-10">
        <div class="indicator">
            <span class="indicator-item badge badge-error"></span>
            <div class="grid w-20 h-20 bg-slate-50 place-items-center rounded-xl">
                <img class="w-full" src="images/flag.svg" alt="">
            </div>
        </div>
        <div class="space-y-4">
            <div class="space-y-2">
                <div><span class="mr-4"># Music</span> <span>Author : Awlad Hossain</span></div>
                <h4 class="text-xl font-bold">10 Kids Unaware of Their Halloween Costume</h4>
                <p>It’s one thing to subject yourself to ha Halloween costume mishap because, hey
                    that’s
                    your prerogative</p>
            </div>
            <hr>
            <div class="flex justify-between flex-col md:flex-row gap-4">
                <div class="flex gap-6">
                    <div class="flex gap-4"><img src="images/message.svg" alt=""><span>550</span>
                    </div>|
                    <div class="flex gap-4"><img src="images/icon-eye.svg" alt=""><span>550</span>
                    </div>|
                    <div class="flex gap-4"><img src="images/clock-hour-9.svg"
                            alt=""><span>550</span>
                    </div>
                </div>
                <img class="w-7" src="images/green-message-icon.png" alt="">
            </div>
        </div>
    </div>
        `
    allPostsContainer.appendChild(div)
    });
}

loadAllPosts()
