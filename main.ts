radio.onReceivedNumber(function (receivedNumber) {
    if (!(isSender)) {
        basic.clearScreen()
        count = receivedNumber % 25
        led.plot(count % 5, count / 5)
    }
})
let count = 0
let isSender = false
isSender = false
count = 0
radio.setGroup(1)
radio.setFrequencyBand(0)
radio.setTransmitPower(7)
if (isSender) {
    basic.showString("S")
} else {
    basic.showString("X")
}
loops.everyInterval(1000, function () {
    if (isSender) {
        radio.sendNumber(count)
        count += 1
    }
})
