import quests from '../data.js';

const ul = document.querySelector('ul');
//every quest on page as a link

quests.forEach(quest => {
    const li = document.createElement('li');
    const link = document.createElement('a');

    li.appendChild(link);

    link.textContent = quest.title;
    link.href = `/quest/?id=${quest.id}`;

    ul.append(li);
    
});