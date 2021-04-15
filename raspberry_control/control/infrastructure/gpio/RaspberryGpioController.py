from control.infrastructure.gpio.GpioController import GpioController
from gpiozero import DigitalOutputDevice as Output 
from time import sleep

class RaspberryGpioController(GpioController):
    def __init__(self, name):
        #super(name)
        self.gpio_map = {
            self.inc    : Output(14),
            self.up_down: Output(15)
        }
        self.gpio_map[self.inc].on()


    def toggle_output(self, output):
        output = self.gpio_map[output]
        output.on()
        output.off()
        sleep(0.1)
        
        #?
        if output.value == 1:
            output.off()
        else: 
            output.on()

    def set_output_hight(self, output):
        self.gpio_map[output].on()
    
    def set_output_low(self, output):
        self.gpio_map[output].off()

   

