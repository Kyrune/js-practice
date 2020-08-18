// Maria plays college basketball and wants to go pro. Each season she maintains a record of her play. 
// She tabulates the number of times she breaks her season record for most points and least points in a game. 
// Points scored in the first game establish her record for the season, and she begins counting from there.

function breakingRecords(scores) {
    let maxScore = scores[0];
    let minScore = scores[0];

    let maxScoreIncrease = 0;
    let minScoreIncrease = 0;

    for (let i = 0; i < scores.length; i++) {
        if (maxScore < scores[i]) {
            maxScore = scores[i];
            maxScoreIncrease++;
        }
        if (minScore > scores[i]) {
            minScore = scores[i];
            minScoreIncrease++;
        }
    }
    return [maxScoreIncrease, minScoreIncrease];
}