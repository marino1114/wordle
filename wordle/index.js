function submitScore(nickname, attempts) {
    const newScoreRef = firebase.database().ref('rankings').push();
    newScoreRef.set({
        nickname: nickname,
        attempts: attempts
    });
}
function getRanking() {
    firebase.database().ref('rankings').orderByChild('attempts').limitToFirst(10).on('value', (snapshot) => {
        const rankingDiv = document.getElementById('ranking');
        rankingDiv.innerHTML = '';
        snapshot.forEach((childSnapshot) => {
            const rank = childSnapshot.val();
            const rankElement = document.createElement('div');
            rankElement.textContent = `${rank.nickname}: ${rank.attempts}회 시도`;
            rankingDiv.appendChild(rankElement);
        });
    });
}
