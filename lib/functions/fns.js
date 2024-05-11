export function convertMins(minutes) {
    var hours = Math.floor(minutes / 60);
    var remainingMinutes = minutes % 60;
    return { hours: hours, minutes: remainingMinutes };
}