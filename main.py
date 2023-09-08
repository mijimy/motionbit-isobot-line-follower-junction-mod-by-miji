def kanan():
    motionbit.run_motor(MotionBitMotorChannel.M1,
        MotionBitMotorDirection.FORWARD,
        255)
    motionbit.run_motor(MotionBitMotorChannel.M3, MotionBitMotorDirection.FORWARD, 0)
    basic.pause(500)
def line_follow_by_junction(num: number):
    global Junction, last_state_count
    Junction = 0
    last_state_count = 0
    while Junction < num:
        read_sensor()
        junction_count()
        Follow_line()
        basic.pause(100)
def stop():
    motionbit.brake_motor(MotionBitMotorChannel.ALL)

def on_button_pressed_a():
    # J1
    line_follow_by_junction(1)
    kiri()
    # J2
    line_follow_by_junction(1)
    kanan()
    line_follow_by_junction(1)
    kanan()
    line_follow_by_junction(2)
    kiri()
    line_follow_by_junction(1)
    stop()
input.on_button_pressed(Button.A, on_button_pressed_a)

def Follow_line():
    if I3 == 0:
        motionbit.run_motor(MotionBitMotorChannel.M1,
            MotionBitMotorDirection.FORWARD,
            255)
        motionbit.run_motor(MotionBitMotorChannel.M3,
            MotionBitMotorDirection.FORWARD,
            255)
    elif I2 == 0:
        motionbit.run_motor(MotionBitMotorChannel.M1, MotionBitMotorDirection.FORWARD, 0)
        motionbit.run_motor(MotionBitMotorChannel.M3,
            MotionBitMotorDirection.FORWARD,
            255)
    elif I4 == 0:
        motionbit.run_motor(MotionBitMotorChannel.M1,
            MotionBitMotorDirection.FORWARD,
            255)
        motionbit.run_motor(MotionBitMotorChannel.M3, MotionBitMotorDirection.FORWARD, 0)
def kiri():
    motionbit.run_motor(MotionBitMotorChannel.M1, MotionBitMotorDirection.FORWARD, 0)
    motionbit.run_motor(MotionBitMotorChannel.M3,
        MotionBitMotorDirection.FORWARD,
        255)
    basic.pause(500)
def read_sensor():
    global I1, I2, I3, I4, I5
    I1 = pins.digital_read_pin(DigitalPin.P16)
    I2 = pins.digital_read_pin(DigitalPin.P15)
    I3 = pins.digital_read_pin(DigitalPin.P14)
    I4 = pins.digital_read_pin(DigitalPin.P13)
    I5 = pins.digital_read_pin(DigitalPin.P12)
def terus():
    motionbit.run_motor(MotionBitMotorChannel.M1,
        MotionBitMotorDirection.FORWARD,
        255)
    motionbit.run_motor(MotionBitMotorChannel.M3,
        MotionBitMotorDirection.FORWARD,
        255)
def junction_count():
    global Junction, last_state_count
    if I1 == 0 and I3 == 0:
        if last_state_count == 0:
            Junction += 1
            last_state_count = 1
    elif I5 == 0 and I3 == 0:
        if last_state_count == 0:
            Junction += 1
            last_state_count = 1
    else:
        last_state_count = 0
def pusing():
    motionbit.run_motor(MotionBitMotorChannel.M1,
        MotionBitMotorDirection.FORWARD,
        255)
    motionbit.run_motor(MotionBitMotorChannel.M3,
        MotionBitMotorDirection.BACKWARD,
        255)
    basic.pause(500)
I5 = 0
I1 = 0
I4 = 0
I2 = 0
I3 = 0
last_state_count = 0
Junction = 0
basic.show_string("Go")
Junction = 0
basic.show_number(Junction)

def on_forever():
    basic.show_number(Junction)
    basic.pause(100)
basic.forever(on_forever)
