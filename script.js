let modal = document.querySelector(".delete-modal-container");
let feeds = document.querySelectorAll(".feed");
let feedSection = document.querySelector(".feed-section");
let feed;

document.addEventListener("click", function(e) {
    if (e.target.classList[0] == 'delete') {
        modal.style.display = "block";
        feed = e.target.parentElement.parentElement.parentElement;
        console.log(feed);
    }
    else if (e.target.classList[0] == 'modal-cancel') {
        modal.style.display = "none";
    }
    else if (e.target.classList[0] == 'modal-delete') {
        deleteFeed(feed, feeds);
        modal.style.display = "none";
    }
    else if (e.target.classList[0] == 'post' && e.target.parentElement.previousElementSibling.previousElementSibling.value != "") {
        createFeed(e.target.parentElement.previousElementSibling.previousElementSibling.value);
        e.target.parentElement.previousElementSibling.previousElementSibling.value = "";
    }
    else if (e.target.classList[0] == 'like') {
        if(e.target.src == 'https://d2beiqkhq929f0.cloudfront.net/public_assets/assets/000/064/029/original/heart.png?1706888679'){
            e.target.src = 'https://d2beiqkhq929f0.cloudfront.net/public_assets/assets/000/064/025/original/state_clicked.png?1706888455';
        }
        else{
            e.target.src = 'https://d2beiqkhq929f0.cloudfront.net/public_assets/assets/000/064/029/original/heart.png?1706888679';
        }
    }
    else if (e.target.classList[0] == 'comment') {
        
    }
    else if (e.target.classList[0] == 'edit') {
        window.alert('Now content is editable');
        e.target.parentElement.parentElement.nextElementSibling.contentEditable = "true";
    }
})

function deleteFeed (feed, feeds) {
    feedSection.removeChild(feed);
}

function createFeed (text) {
    let newFeed = document.createElement("div");
        newFeed.className = "feed";
        let newFeedTopBar = document.createElement("div");
        newFeedTopBar.className = "feed-top-bar";
        newFeed.appendChild(newFeedTopBar);
        let newFeedTopBarInside = document.createElement("div");
        newFeedTopBarInside.className = "feed-top-bar-inside";
        
        let img = document.createElement("img");
        img.src = 'https://d2beiqkhq929f0.cloudfront.net/public_assets/assets/000/064/031/original/profile_image.png?1706888739';
        img.className = 'person-icon';
        newFeedTopBarInside.appendChild(img);
        
        let h3 = document.createElement('h3');
        h3.innerText = 'Name';
        newFeedTopBarInside.appendChild(h3);
        
        let p = document.createElement('p');
        p.innerText = "@akkakakak";
        newFeedTopBarInside.appendChild(p);
        
        newFeedTopBar.appendChild(newFeedTopBarInside);

        let div = document.createElement('div');
        div.className = 'feed-top-bar-inside';
        
        let img1 = document.createElement("img");
        img1.src = 'https://d2beiqkhq929f0.cloudfront.net/public_assets/assets/000/064/028/original/edit.png?1706888661';
        img1.className = 'edit other-icons';
        div.appendChild(img1);
        
        let img2 = document.createElement("img");
        img2.src = 'https://d2beiqkhq929f0.cloudfront.net/public_assets/assets/000/064/030/original/delete-color-filled.png?1706888714';
        img2.className = 'delete other-icons';
        div.appendChild(img2);

        newFeedTopBar.appendChild(div);

        let p2 = document.createElement('p');
        p2.innerText = text;
        newFeed.appendChild(p2);

        let img3 = document.createElement("img");
        img3.src = 'https://d2beiqkhq929f0.cloudfront.net/public_assets/assets/000/064/026/original/comment.png?1706888619';
        img3.className = 'comment';
        newFeed.appendChild(img3);

        let img4 = document.createElement("img");
        img4.src = 'https://d2beiqkhq929f0.cloudfront.net/public_assets/assets/000/064/029/original/heart.png?1706888679';
        img4.className = 'like';
        newFeed.appendChild(img4);
        add(newFeed, feeds);
}

function add (newFeed) {
    feedSection.appendChild(newFeed);
}