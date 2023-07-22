radio.onReceivedNumber(function (receivedNumber) {
    if (receivedNumber == 1) {
        makerbit.playMp3TrackFromFolder(1, 1, Mp3Repeat.No)
        basic.showIcon(IconNames.No)
    } else {
        makerbit.runMp3Command(Mp3Command.STOP)
        basic.showIcon(IconNames.SmallSquare)
    }
})
radio.setGroup(38)
makerbit.connectSerialMp3(DigitalPin.P2, DigitalPin.P1)
makerbit.setMp3Volume(50)
let strip = neopixel.create(DigitalPin.P16, 12, NeoPixelMode.RGB)
basic.showIcon(IconNames.Yes)
basic.forever(function () {
    strip.showRainbow(1, 360)
    basic.pause(2000)
    strip.showColor(neopixel.colors(NeoPixelColors.Red))
    basic.pause(2000)
    strip.showColor(neopixel.colors(NeoPixelColors.Green))
    basic.pause(2000)
    strip.showColor(neopixel.colors(NeoPixelColors.Blue))
    basic.pause(2000)
    strip.showColor(neopixel.colors(NeoPixelColors.Purple))
    basic.pause(2000)
})
