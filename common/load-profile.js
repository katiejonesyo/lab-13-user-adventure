import { getUser } from '../data/api.js';
import isDead from './is-dead.js';

function loadProfile() {
    
    const name = document.getElementById('name');
    const avatar = document.getElementById('avatar');
    const hp = document.getElementById('hp');
    const flower = document.getElementById('flower');

    const user = getUser();

    if (!user) {
        window.location = './';
    }

    name.textContent = user.name;
    avatar.src = '../assets/avatars/' + user.race + '.jpg';
    flower.textContent = user.flower;

    if (isDead(user)) {
        hp.textContent = 'You chose wrong!';
    }
    else {
        hp.textContent = user.hp;
    }

}

export default loadProfile;