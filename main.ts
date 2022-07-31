pins.setPull(DigitalPin.P2, PinPullMode.PullUp)
basic.forever(function on_forever() {
    if (pins.digitalReadPin(DigitalPin.P2) == 0) {
        basic.showNumber(1)
        pins.digitalWritePin(DigitalPin.P0, 0)
        pins.digitalWritePin(DigitalPin.P1, 1)
        basic.pause(200)
        pins.digitalWritePin(DigitalPin.P0, 1)
        pins.digitalWritePin(DigitalPin.P1, 0)
        basic.pause(200)
    } else {
        pins.digitalWritePin(DigitalPin.P0, 0)
        pins.digitalWritePin(DigitalPin.P1, 0)
        basic.showNumber(0)
    }
    
})
