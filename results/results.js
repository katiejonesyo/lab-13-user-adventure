import loadProfile from '../common/load-profile.js';
import { getUser } from '../data/api.js';
import scoreHp from './score-hp.js';
import scoreFlower from './score-flower.js';
import { hpMessages, aliveFlowerMessages, deadFlowerMessages } from './messages.js';

loadProfile();

const user = getUser();

const storyDisplay = document.getElementById('story-display');

const hpResult = scoreHp(user.hp);
const flowerResult = scoreFlower(user.flower);
const hpMessage = hpMessages[hpResult];

let flowerMessages = null;
if (hpResult === 'dead') {
    flowerMessages = deadFlowerMessages;
}
else {
    flowerMessages = aliveFlowerMessages;
}

const flowerMessage = flowerMessages[flowerResult];

let story = 'After your adventures, ';
story += user.name + ' the ' + user.race + ', ';
story += hpMessage + ' and ' + flowerMessage + '.';

storyDisplay.textContent = story;