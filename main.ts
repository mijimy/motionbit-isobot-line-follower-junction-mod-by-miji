function kanan () {
    motionbit.runMotor(MotionBitMotorChannel.M1, MotionBitMotorDirection.Forward, 255)
    motionbit.runMotor(MotionBitMotorChannel.M3, MotionBitMotorDirection.Forward, 0)
    basic.pause(500)
}
function line_follow_by_junction (num: number) {
    Junction = 0
    last_state_count = 0
    while (Junction < num) {
        read_sensor()
        junction_count()
        Follow_line()
        basic.pause(100)
    }
}
function stop () {
    motionbit.brakeMotor(MotionBitMotorChannel.All)
}
input.onButtonPressed(Button.A, function () {
    // J1
    line_follow_by_junction(1)
    kiri()
    // J2
    line_follow_by_junction(1)
    kanan()
    line_follow_by_junction(1)
    kanan()
    line_follow_by_junction(2)
    kiri()
    line_follow_by_junction(1)
    stop()
})
function Follow_line () {
    if (I3 == 0) {
        motionbit.runMotor(MotionBitMotorChannel.M1, MotionBitMotorDirection.Forward, 255)
        motionbit.runMotor(MotionBitMotorChannel.M3, MotionBitMotorDirection.Forward, 255)
    } else if (I2 == 0) {
        motionbit.runMotor(MotionBitMotorChannel.M1, MotionBitMotorDirection.Forward, 0)
        motionbit.runMotor(MotionBitMotorChannel.M3, MotionBitMotorDirection.Forward, 255)
    } else if (I4 == 0) {
        motionbit.runMotor(MotionBitMotorChannel.M1, MotionBitMotorDirection.Forward, 255)
        motionbit.runMotor(MotionBitMotorChannel.M3, MotionBitMotorDirection.Forward, 0)
    }
}
function kiri () {
    motionbit.runMotor(MotionBitMotorChannel.M1, MotionBitMotorDirection.Forward, 0)
    motionbit.runMotor(MotionBitMotorChannel.M3, MotionBitMotorDirection.Forward, 255)
    basic.pause(500)
}
function read_sensor () {
    I1 = pins.digitalReadPin(DigitalPin.P16)
    I2 = pins.digitalReadPin(DigitalPin.P15)
    I3 = pins.digitalReadPin(DigitalPin.P14)
    I4 = pins.digitalReadPin(DigitalPin.P13)
    I5 = pins.digitalReadPin(DigitalPin.P12)
}
function terus () {
    motionbit.runMotor(MotionBitMotorChannel.M1, MotionBitMotorDirection.Forward, 255)
    motionbit.runMotor(MotionBitMotorChannel.M3, MotionBitMotorDirection.Forward, 255)
}
function junction_count () {
    if (I1 == 0 && I3 == 0) {
        if (last_state_count == 0) {
            Junction += 1
            last_state_count = 1
        }
    } else if (I5 == 0 && I3 == 0) {
        if (last_state_count == 0) {
            Junction += 1
            last_state_count = 1
        }
    } else {
        last_state_count = 0
    }
}
function pusing () {
    motionbit.runMotor(MotionBitMotorChannel.M1, MotionBitMotorDirection.Forward, 255)
    motionbit.runMotor(MotionBitMotorChannel.M3, MotionBitMotorDirection.Backward, 255)
    basic.pause(500)
}
let I5 = 0
let I1 = 0
let I4 = 0
let I2 = 0
let I3 = 0
let last_state_count = 0
let Junction = 0
basic.showString("Go")
Junction = 0
basic.showNumber(Junction)
basic.forever(function () {
    basic.showNumber(Junction)
    basic.pause(100)
})
