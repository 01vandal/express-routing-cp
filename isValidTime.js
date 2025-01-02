

const isValidTime = (req, res, next) => {
    const now = new Date();
    const day = now.getDay();
    const hour = now.getHours();

    const isWeekday = day >= 1 && day <= 5;
    const isWithinHours = hour >= 9 && hour < 17;

    return isWeekday && isWithinHours
}


module.exports = isValidTime;