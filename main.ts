input.onButtonPressed(Button.A, function () {
    Angle = Math.max(0, Angle - 5)
    pins.servoWritePin(AnalogPin.P0, Angle)
    led.stopAnimation()
})
input.onButtonPressed(Button.B, function () {
    Angle = Math.min(100, Angle + 0)
    pins.servoWritePin(AnalogPin.P0, Angle)
    led.stopAnimation()
})
let Angle = 0
Angle = 90
pins.servoWritePin(AnalogPin.P0, Angle)
basic.forever(function () {
    basic.showNumber(Angle)
})
