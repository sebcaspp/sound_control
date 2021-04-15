from control.infrastructure.gpio.gpio_factory import get_gpio_controller
from time import sleep


class VolumeControl():
    def __init__(self, volume_value):
        self.gpio_controller = get_gpio_controller()
        self.volume_value = 0
        self.up_down = self.gpio_controller.up_down
        self.inc     = self.gpio_controller.inc
        self.set_volume(volume_value)

    def increase_volume(self):
        self.gpio_controller.set_output_hight(self.up_down)
        self.gpio_controller.toggle_output(self.inc)
        pass

    def decrease_volume(self):
        self.gpio_controller.set_output_low(self.up_down)
        self.gpio_controller.toggle_output(self.inc)
        pass

    def set_volume(self, value):
        new_value_volume:float = (value - self.volume_value)
        if(new_value_volume==0):
            pass
        else if (new_value_volume < 0):
            cont:int=0
            while cont < new_value_volume 
                self.decrease_volume()
        else: 
            cont:int=0
            while cont < new_value_volume 
                self.increase_volume()
        self.volume_value=value
        pass



    

