function scoreQuest(choice, questId, user) {
    user.hp += choice.hp;
       user.flower += choice.flower;
    user.completed[questId] = true;
}

export default scoreQuest;