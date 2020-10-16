export default [
    {
        id:'path1',
        title: 'Tunnel',

        map: {
        top: '89%',
        left: ' 44%'
        },

        image: 'path1.jpg',
        desceiption: `bgrtegbeqrtbrteb
        `,

        choices: [{
        id: 'negotiate',
            description: 'Negotiate with them',
            result: `
           ergqertgqerg 
        `,
            hp: 0,
            gold: 35
        }, {
            id: 'fight',
            description: 'Stand Your Ground!',
            result: `
            tthrthjrthrt
        `,
            hp: -30,
            gold: 50
        }, {
            id: 'run',
            description: 'Run away',
            result: `
            adfgsrthrthhr
         `,
            hp: -50,
            gold: 0
        }]
    
    },
    {
        id: 'path2',
        title: 'Wooden Path',
        map: {
            top: '17%',
            left: '37%'
        },
        image: 'path2.jpg',
        audio: 'path2.wav',
        action: 'path2.aiff',
        description: `
        ef3rfregfe3f3 g3g3
    `,
        choices: [{
            id: 'run',
            description: 'Run Away',
            result: `
            wergr3geqrgerg. 
        `,
            hp: -35,
            gold: 35
        }, {
            id: 'fight',
            description: 'Stand Your Ground!',
            result: `
            You attempt to charge towards the dragon, who sees you approach
            and let's loose a fireball. You wake up the next morning and the
            village has been completely burned to the ground.
            Oh, and you take 45 hp damage.
        `,
            hp: -45,
            gold: 0
        }, {
            id: 'worms',
            description: 'Throw Bag of Worms',
            result: `
            rfergerqgqergqegeqr3
        `,
            hp: 0,
            gold: 90
        }]
    },
    {
        id: 'family',
        title: 'The Mush Family!!',
        map: {
            top: '31%',
            left: '5%'
        },
        prerequisites: ['path1', 'path2'],
        image: 'mushroom.png',
        audio: 'mushroom.wav',
        action: 'mushroom.wav',
        description: `
        ergergreg
    `,
        choices: [{
            id: 'give',
            description: 'Give Mush back to their family!',
            result: 'Yay! You have returned mush back to their family! They gift you 40 small forrest flowers as thanks.',
            hp: 0,
            gold: 40
        }, {
            id: 'keep',
            description: 'Keep Mush because you\'re best buds now.',
            result: 'Oh no! That has made Mush sad. Even though you two are best buds now, you have made the wrong choice. Mush\'s family will now kill you.',
            hp: -50,
            gold: 0
        }, {
            
        }]
    }

];