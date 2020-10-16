const path1 = {
    id: 'path1',
    title: 'Bridge',
    map: {
        top: '89%',
        left: '44%'
    },
    description: `
        Your cross the bridge only to find a grouping of ugly and angry Banana Slugs ready to eat Mush! 
        What do you do?
    `,
    choices: [{
        id: 'negotiate',
        description: 'Negotiate',
        result: `
            You negotiate and offer them some large moss bits for trade to keep walking without harm. 
        `,
        hp: 0,
        flower: 35
    }, {
        id: 'fight',
        description: 'Fight!',
        result: `
            You fight to the death in hopes Mush can escape and roll to freedom without you.
        `,
        hp: -30,
        flower: 50
    }, {
        id: 'run',
        description: 'Run!',
        result: `
            You run because you know slugs are slow and to be honest it's your best chance at survival.
        `,
        hp: -50,
        flower: 0
    }]
};

const path2 = {
    id: 'path2',
    title: 'Dirt Path',
    map: {
        top: '17%',
        left: '37%'
    },
    description: `
        You decide to take the dirt path to find Mush's family but come across some Portland kids foreging for mushrooms.
    `,
    choices: [{
        id: 'give',
        description: 'Give them Mush',
        result: `
            You give them Mush and run back to your original Mush-less journey. Luckily,
            on your way you find a sack with 15 flowers in it.
            Unfortunately, it's fake and poisoned so you take 40 hp damage. That's what you get for giving away your friend. Tsk Tsk.
        `,
        hp: -35,
        flower: 35
    }, {
        id: 'fight',
        description: 'Stand Your Ground!',
        result: `
            You attempt to fight the hipsters and show them that even their American Spirits can't stop you fron getting Mush home.
           Sadly, the over bearing scent from their all natural essentional oil eco-friendly beard oil knocks you out and you take 45 hp damage.
        `,
        hp: -45,
        flower: 0
    }, {
        id: 'Disguise',
        description: 'You disguisde yourselves and make a break for it',
        result: `
            You come up with a sneaky idea to disguise yourselves as tree branches. They'll never notice you as they are too busy looking for Mushrooms.
            You manage to sneak past jsut in time and youre awarded 90 .
        `,
        hp: 0,
        flower: 90
    }]
};


const family = {
    id: 'family',
    title: 'Mush\'s Family',
    map: {
        top: '31%',
        left: '5%'
    },
    prerequisites: ['path1', 'path2'],
    image: 'mushfam.jpg',
    audio: 'yay.wav',
    description: `
        You can see Mush's family off in the distance! You realize how close you are when suddenly you get caught in a hunter's trap! 
        Mush goes flying while you are stuck in the net. What do you do?
    `,
    choices: [{
        id: 'chew',
        description: 'Chew Through Net',
        result: 'You break free!',
        hp: 0,
        flower: 40
    }, {
        id: 'roll',
        description: 'You tell Mush to roll to their family and you will die in the net in his honor.',
        result: 'Well you died so here is 50 hp damage',
        hp: -50,
        flower: 0
    }, {
        id: 'rope',
        description: 'There is a mystery rope. Pull it?',
        result: 'You manage to pull the rope and break free leding you to Mush and their family. ',
        hp: 35,
        flower: 0
    }]
};

const quests = [
    path1, 
    path2,
    family
];

export default quests;