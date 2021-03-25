from control.infrastructure.gpio.GpioController import GpioController
from control.infrastructure.gpio.RaspberryGpioController import RaspberryGpioController

def get_gpio_controller()-> GpioController: 
    return RaspberryGpioController("raspberry_controller")