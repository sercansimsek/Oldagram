const posts = [
	{
		name: "Vincent van Gogh",
		username: "vincey1853",
		location: "Zundert, Netherlands",
		avatar: "images/avatar-vangogh.jpg",
		post: "images/post-vangogh.jpg",
		comment: "just took a few mushrooms lol",
		likes: 21,
	},
	{
		name: "Gustave Courbet",
		username: "gus1819",
		location: "Ornans, France",
		avatar: "images/avatar-courbet.jpg",
		post: "images/post-courbet.jpg",
		comment: "i'm feelin a bit stressed tbh",
		likes: 4,
	},
	{
		name: "Joseph Ducreux",
		username: "jd1735",
		location: "Paris, France",
		avatar: "images/avatar-ducreux.jpg",
		post: "images/post-ducreux.jpg",
		comment:
			"gm friends! which coin are YOU stacking up today?? post below and WAGMI!",
		likes: 152,
	},
];

const mainContent = document.querySelector(".main");

function render() {
	let listItems = "";
	for (let i = 0; i < posts.length; i++) {
		listItems += `
        <section class="main-person">
				<img
					src="${posts[i].avatar}"
					class="main-avatar"
					alt="postholder's avatar image"
				/>
				<div class="avatar-info">
					<span class="main-name">${posts[i].name}</span>
					<span class="main-location">${posts[i].location}</span>
				</div>
			</section>

			<section class="post">
				<img
					src="${posts[i].post}"
					class="main-post"
					alt="postholder's post"
				/>
			</section>

			<section class="post-info container">
				<div class="post-icons">
					<img src="images/icon-heart.png" alt="heart icon" class="post-icon" />
					<img src="images/icon-comment.png" alt="comment icon" class="post-icon"/>
					<img src="images/icon-dm.png" alt="direct message icon" class="post-icon"/>
				</div>

				<div class="post-likes">
					<span class="post-like">${posts[i].likes} likes</span>
				</div>

				<div class="post-comments">
					<span class="post-commentar">${posts[i].username}</span> <span class="post-comment">${posts[i].comment}</span>
				</div>
			</section>
        `;
	}

	mainContent.innerHTML = listItems;

	const postImages = document.querySelectorAll(".main-post");
	postImages.forEach((img, index) => {
		img.addEventListener("dblclick", function () {
			posts[index].likes++;
			render();
		});
	});
}

render();
