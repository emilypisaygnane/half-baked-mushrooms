import { renderMushroom, renderFriend } from './render-utils.js';

const friendsEl = document.querySelector('.friends');
const friendInputEl = document.getElementById('friend-input');
const mushroomsEl = document.querySelector('.mushrooms');
const addMushroomButton = document.getElementById('add-mushroom-button');
const addFriendButton = document.getElementById('add-friend-button');

let mushroomCount = 3;

const friendData = [
    {
        name: 'Erich',
        satisfaction: 2,
    },
    {
        name: 'Sarah',
        satisfaction: 3,
    },
    {
        name: 'Missael',
        satisfaction: 1,
    },
    {
        name: 'Soraya',
        satisfaction: 2,
    },
];

addMushroomButton.addEventListener('click', () => {
    if (Math.random() > 0.5) {
        alert('found a mushroom!');

        mushroomCount++;
        displayMushrooms();
    } else {
        alert('no luck!');
    }
});

addFriendButton.addEventListener('click', () => {

    };

    
});

function findFriendByName(name, friends) {
    for (let friend of friends) {
        if (friend.name === name) {
            return friend;
        }
    }

}

function displayFriends() {
    friendsEl.textContent = '';

    for (let friend of friendData) {
        const friendEl = renderFriend(friend);
        // use renderFriend to make a friendEl
        friendEl.addEventListener('click', () => {
            const friendSatisfaction = findFriendByName(friend.name, friendData);

            if (mushroomCount === 0) {
                alert('you have no more mushrooms, go find some! your friends are hungry!');
            }
            if (mushroomCount > 0 && friendSatisfaction.satisfaction < 3) {
                friendSatisfaction.satisfaction++;
                mushroomCount--;

                displayFriends();
                displayMushrooms();
            }
        });

        friendsEl.append(friendEl);
    }
}

function displayMushrooms() {
    mushroomsEl.textContent = '';

    for (let i = 0; i < mushroomCount; i++) {
        const mushroomEl = renderMushroom();

        mushroomsEl.append(mushroomEl);
    }
}

displayFriends();
displayMushrooms();
