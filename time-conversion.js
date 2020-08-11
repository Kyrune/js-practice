//  Convert time from an AM/PM format to a 24 hour format (military time).

function timeConversion(s) {
    let civTime = s.slice(-2);
    let milTime = s.slice(0, -2).split(":");
    
    if (civTime === "AM" && milTime[0] === "12") {
        // Catching edge-case of 12AM
        milTime[0] = "00";
    } else if (civTime === "PM") {
        // Everything with PM can just be modular'd and added with 12
        // The max will be 23
        milTime[0] = (milTime[0] % 12) + 12
    }
    
    return milTime.join(":");
}