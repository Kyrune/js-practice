// An arcade game player wants to climb to the top of the leaderboard and track their ranking. The game uses Dense Ranking, so its leaderboard works like this:

// The player with the highest score is ranked number 1 on the leaderboard.
// Players who have equal scores receive the same ranking number, and the next player(s) receive the immediately following ranking number.

function climbingLeaderboard(scores, alice) {
    let positions = [];
    let distScore = [...new Set(scores)];
    let aliceIndex = 0;
    let i = distScore.length - 1;

    alice.forEach(element => {
         while (i >= 0) {
             if (element >= distScore[i]) {
                 i--;
             } else {
                 positions.push(i + 2);
                 break;
             }
         }
         if (i < 0) positions.push(1);
    });
    return positions;
}