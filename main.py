pins.set_pull(DigitalPin.P2, PinPullMode.PULL_UP)

def on_forever():
    if pins.digital_read_pin(DigitalPin.P2) == 0:
        basic.show_number(1)
        pins.digital_write_pin(DigitalPin.P0, 0)
        pins.digital_write_pin(DigitalPin.P1, 1)
        basic.pause(200)
        pins.digital_write_pin(DigitalPin.P0, 1)
        pins.digital_write_pin(DigitalPin.P1, 0)
        basic.pause(200)
    else:
        pins.digital_write_pin(DigitalPin.P0, 0)
        pins.digital_write_pin(DigitalPin.P1, 0)
        basic.show_number(0)
basic.forever(on_forever)
