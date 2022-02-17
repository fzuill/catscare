radio.onReceivedString(function (receivedString) {
    count += 1
    basic.showNumber(count)
})
let count = 0
count = 0
radio.setGroup(1)
radio.setFrequencyBand(0)
radio.setTransmitPower(7)
basic.showNumber(5)
loops.everyInterval(1000, function () {
    radio.sendString("Kitty")
})
