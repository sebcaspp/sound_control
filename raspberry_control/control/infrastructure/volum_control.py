from control.infrastructure.gpio.gpio_factory import get_gpio_controller
from time import sleep


class VolumeControl():
    def __init__(self, volume_value):
        self.gpio_controller = get_gpio_controller()
        self.up_down = self.gpio_controller.up_down
        self.inc     = self.gpio_controller.inc
        self.volume_value = 0
        self.decrement_to_zero()        
        self.set_volume(volume_value)
        
    def increase_volume(self) -> int:
        self.gpio_controller.set_output_hight(self.up_down)
        self.gpio_controller.toggle_output(self.inc)
        self.volume_value = self.volume_value + 1
        return self.volume_value
        

    def decrease_volume(self) -> int:
        self.gpio_controller.set_output_low(self.up_down)
        self.gpio_controller.toggle_output(self.inc)
        self.volume_value = self.volume_value -1
        return self.volume_value
        
    
    def set_volume(self, value) -> int:
        new_value_volume:int = (self.volume_value - value)
        if (new_value_volume < 0):
            while self.volume_value < value:
                self.increase_volume()  
        else: 
            while self.volume_value > value: 
                self.decrease_volume()
        return self.volume_value
    
    
    def decrement_to_zero(self):   
        for i in range(100):
            self.decrease_volume() 
        self.volume_value = 0
      
    def mute(self):
        pass



    

