from control.infrastructure.gpio.gpio_factory import get_gpio_controller
from time import sleep


class VolumeControl():
    def __init__(self, volume_value):
        self.gpio_controller = get_gpio_controller()
        self.volume_value = 0
        self.up_down = self.gpio_controller.up_down
        self.inc     = self.gpio_controller.inc
        self.set_volume(volume_value)
        self.decrementToZero()

    def increase_volume(self):
        self.gpio_controller.set_output_hight(self.up_down)
        self.gpio_controller.toggle_output(self.inc)
        self.volume_value =self.volume_value + 1
        pass

    def decrease_volume(self):
        self.gpio_controller.set_output_low(self.up_down)
        self.gpio_controller.toggle_output(self.inc)
        self.volume_value =self.volume_value -1        
        pass
    
    def set_volume(self, value):
        new_value_volume:int = (self.volume_value - value)
        if (new_value_volume < 0):
            while self.volume_value != value:
                self.increase_volume()  
        else: 
            while self.volume_value != value: 
                self.decrease_volume()  
    
    def decrement_to_zero():   
        for i in range(100):
            self.decrement();            
    def mute():
        pass



    

