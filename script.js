let posts = [{
    'profile-pic': 'img/1.png',
    'username': 'Burgerlove',
    'location': 'Stuttgart',
    'image': 'img/1.png',
    'likes': 147,
    'description': 'Unsere Burger sind die besten !',
    'hashtags': '#burger#insta',
    'time': 'VOR 2 STUNDEN',
    'comments': [],
    'tools': 'img/heart.png',
    'tools0': 'img/herz.png',
    'tools2': 'img/comment.png',
    'tools3': 'img/send.png',
    'tools4': 'img/save-instagram.png',
    'tools8': 'img/lesezeichen.png',
},


{
    'profile-pic': 'img/2.png',
    'username': 'Tastyburgers',
    'location': 'Berlin',
    'image': 'img/2.png',
    'likes': 4351,
    'description': 'Kommt unbedingt vorbei !',
    'hashtags': '#burger#911#insta',
    'time': 'VOR 5 STUNDEN',
    'comments': [],
    'tools': 'img/heart.png',
    'tools0': 'img/herz.png',
    'tools2': 'img/comment.png',
    'tools3': 'img/send.png',
    'tools4': 'img/save-instagram.png',
    'tools8': 'img/lesezeichen.png',
},


{
    'profile-pic': 'img/3.png',
    'username': 'Burgerme',
    'location': 'Chemnitz',
    'image': 'img/3.png',
    'likes': 187,
    'description': 'Muss jeder mal probiert haben',
    'hashtags': '#burger#insta#eat#food',
    'time': 'VOR 9 STUNDEN',
    'comments': [],
    'tools': 'img/heart.png',
    'tools0': 'img/herz.png',
    'tools2': 'img/comment.png',
    'tools3': 'img/send.png',
    'tools4': 'img/save-instagram.png',
    'tools8': 'img/lesezeichen.png',
},


{
    'profile-pic': 'img/4.png',
    'username': 'Smashit',
    'location': 'Dortmund',
    'image': 'img/4.png',
    'likes': 454,
    'description': 'SMASH',
    'hashtags': '#burger#insta#yummy',
    'time': 'VOR 14 STUNDEN',
    'comments': [],
    'tools': 'img/heart.png',
    'tools0': 'img/herz.png',
    'tools2': 'img/comment.png',
    'tools3': 'img/send.png',
    'tools4': 'img/save-instagram.png',
    'tools8': 'img/lesezeichen.png',
},


{
    'profile-pic': 'img/5.png',
    'username': 'Burger439',
    'location': 'Erlangen',
    'image': 'img/5.png',
    'likes': 1243,
    'description': 'Soo lecker',
    'hashtags': '#burger#erlangen#439',
    'time': 'VOR 19 STUNDEN',
    'comments': [],
    'tools': 'img/heart.png',
    'tools0': 'img/herz.png',
    'tools2': 'img/comment.png',
    'tools3': 'img/send.png',
    'tools4': 'img/save-instagram.png',
    'tools8': 'img/lesezeichen.png',
},
];


function show(params) {
    document.getElementById('foryou').innerHTML = '';
    for (let i = 0; i < posts.length; i++) {
        const post = posts[i];
        document.getElementById('foryou').innerHTML += `
    <div class="postzbox">
        <div class="position">
            <img class="miniatur" src="${post['profile-pic']}">
             <div>
                <div class="author">${post['username']}</div>
                    <div class="location">${post['location']}</div>
                    </div>
        </div>
        <img class="img" src="${post['image']}">
        <div class="post-nav">
            <div class="post-nav-icons-left">
                       <img class="iconsz" id="heart-${i}" onclick="changeColorToRed(${i})" src="${post['tools']}">
                       <img class="iconsz d-none" id="heartchange-${i}" onclick="changeColorToRed0(${i})" src="${post['tools0']}">
                <img class="icons" src="${post['tools2']}"">
                <img class="icons" src="${post['tools3']}">
            </div>
            <div class="post-nav-icons-right">
            <img class="iconsz" id="bookmark-${i}" onclick="changeColorToBlue(${i})" src="${post['tools4']}">
            <img class="iconsz d-none" id="bookmarkchange-${i}" onclick="changeColorToBlue0(${i})" src="${post['tools8']}">
            </div>
            </div>
            <div class="likes"><b id="likes-${i}">Gefällt ${post['likes']} Personen</b></div>
            <div class="tags">
                <div class="usernamepost">${post['username']}</div>
                <div class="description">${post['description']}</div>
                <div class="hash">${post['hashtags']}</div>
            </div>
            <div class="comm">
            <div class="commentuser"><b></b></div>
            <div class="comment" id="myposts${i}"></div>  
          </div>
          <div class="post-comment-input-container">
          <input type="text" placeholder=" Kommentieren" id="message${i}" class="post-comment-input">
          <div class="deletecomm">
          <button class="btnsz" type="submit" onclick="addPost(${i})">Post</button>
          <button class="btnsz" onclick="removeComment(${i})">Delete</button>
            </div>`;
    }
}


function addPost(j) {
    let text = document.getElementById('message' + j).value
    posts[j]['comments'].push(text);
    let myposts = document.getElementById('myposts' + j);
    myposts.innerHTML = '';
    for (let i = 0; i < posts[j]['comments'].length; i++) {
        myposts.innerHTML += `
        <div class="comment1" id="comment${i}"><b>Metin:</b> &nbsp;&nbsp;${posts[j]['comments'][i]}</div>
        `;
    }
    text = document.getElementById('message' + j).value = '';
}


function removeComment(i) {
    posts[i]['comments'].splice(i);
    show();
}


function changeColorToRed(i) {
    document.getElementById(`heart-${i}`).classList.add('d-none');
    document.getElementById(`heartchange-${i}`).classList.remove('d-none');
    posts[i].likes++;
    document.getElementById(`likes-${i}`).innerHTML = `
Gefällt ${posts[i].likes} Personen`;
}


function changeColorToRed0(i) {
    document.getElementById(`heart-${i}`).classList.remove('d-none');
    document.getElementById(`heartchange-${i}`).classList.add('d-none');
    posts[i].likes--;
    document.getElementById(`likes-${i}`).innerHTML = `
    Gefällt ${posts[i].likes} Personen`;
}


function changeColorToBlue(i) {
    document.getElementById(`bookmark-${i}`).classList.add('d-none');
    document.getElementById(`bookmarkchange-${i}`).classList.remove('d-none');
}


function changeColorToBlue0(i) {
    document.getElementById(`bookmark-${i}`).classList.remove('d-none');
    document.getElementById(`bookmarkchange-${i}`).classList.add('d-none')
}

function follow() {
    document.getElementById(`follow`).classList.add('d-none');
    document.getElementById(`followed`).classList.remove('d-none');
}


function unfollow() {
    document.getElementById(`follow`).classList.remove('d-none');
    document.getElementById(`followed`).classList.add('d-none');
}


function follow2() {
    document.getElementById(`follow2`).classList.add('d-none');
    document.getElementById(`followed2`).classList.remove('d-none');
}


function unfollow2() {
    document.getElementById(`follow2`).classList.remove('d-none');
    document.getElementById(`followed2`).classList.add('d-none');
}


function follow3() {
    document.getElementById(`follow3`).classList.add('d-none');
    document.getElementById(`followed3`).classList.remove('d-none');
}


function unfollow3() {
    document.getElementById(`follow3`).classList.remove('d-none');
    document.getElementById(`followed3`).classList.add('d-none');
}


function follow4() {
    document.getElementById(`follow4`).classList.add('d-none');
    document.getElementById(`followed4`).classList.remove('d-none');
}


function unfollow4() {
    document.getElementById(`follow4`).classList.remove('d-none');
    document.getElementById(`followed4`).classList.add('d-none');
}


function follow5() {
    document.getElementById(`follow5`).classList.add('d-none');
    document.getElementById(`followed5`).classList.remove('d-none');
}


function unfollow5() {
    document.getElementById(`follow5`).classList.remove('d-none');
    document.getElementById(`followed5`).classList.add('d-none');
}