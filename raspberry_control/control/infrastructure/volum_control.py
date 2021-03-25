from control.infrastructure.gpio.gpio_factory import get_gpio_controller
from time import sleep


class VolumeControl():
    def __init__(self, volume_value):
        self.gpio_controller = get_gpio_controller()
        self.volume_value = volume_value
        self.up_down = self.gpio_controller.up_down
        self.inc     = self.gpio_controller.inc

    def increase_volume(self):
        self.gpio_controller.set_output_hight(self.up_down)

        pass

    def decrease_volume(self):
        self.gpio_controller.set_output_low(self.up_down)

        pass

    def set_volume(self, value):
        pass

def blink_out(out:Output):
    print(out)
    print("value -> ", out.value)
    if out.value == 1:
        out.off()
    else: 
        out.on()

cont = 1

while True:
    if(cont == 200):
        blink_out(up_down)
        cont=0
    
    blink_out(inc)
    cont+=1
    print(cont)
    sleep(0.5)

    

