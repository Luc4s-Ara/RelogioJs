const hoursHand = document.querySelector(".hand.hours");
const minutesHand = document.querySelector(".hand.minutes");
const secondsHand = document.querySelector(".hand.seconds");

const setRotation = (element, rotationPercentage) => {
    element.style.setProperty("--rotation", rotationPercentage * 360);
}

const setClock = () => {
    const currentDate = new Date();

    const secondsPercetange = currentDate.getSeconds() / 60;
    const minutesPercetange = (secondsPercetange + currentDate.getMinutes())/ 60;
    const hoursPercetange = (minutesPercetange + currentDate.getHours())/ 12;

    setRotation(secondsHand, secondsPercetange);
    setRotation(minutesHand, minutesPercetange);
    setRotation(hoursHand, hoursPercetange);
};

setClock();

setInterval(setClock, 1000)