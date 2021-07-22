let body = document.body;

let getName = () => {
  let url = window.location.toString();
  let userName = url.split('=');
  if (userName[1]) {
    username = userName[1];
  } else {
    username = 'IlyuzaCode'
  }
  return username;
}

let data = new Date().toLocaleDateString();
let userData = document.createElement('p');

const getData = new Promise((resolve, reject) => {
  setTimeout(() => data ? resolve(userData.innerHTML = data) : reject('Данные отсутствуют'), 2000);
});


Promise.all([getData])
  .then(() => fetch(`https://api.github.com/users/${getName()}`))
  .then(res => res.json())
  .then(json => {
        console.log(json.avatar_url);
        console.log(json.name);
        console.log(json.bio);
        console.log(json.html_url);

    let img = new Image();
    img.src = json.avatar_url;
        body.append(img);

        let name = document.createElement('p');
        if (json.name != null) {
            name.innerHTML = json.name;
        } else {
            name.innerHTML = 'Информация об имени пользователя недоступна';
        }

        body.append(name);

        name.addEventListener("click", () => location.assign(`https://github.com/${checkUsername(url)}`));

        let bio = document.createElement('p');
        if (json.bio != null) {
            bio.innerHTML = json.bio;
        } else {
            bio.innerHTML = 'Информация о bio пользователя недоступна';
        }
        body.append(bio);
        body.append(userData);

    })

    .catch(err => document.body.innerHTML = ('Информация о пользователе недоступна'));

const preloader = document.getElementById('preloader');
setTimeout(() => preloader.classList.add('hidden'), 2000);
