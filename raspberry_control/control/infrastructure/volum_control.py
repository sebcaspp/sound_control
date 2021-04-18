from control.infrastructure.gpio.gpio_factory import get_gpio_controller
from time import sleep


class VolumeControl():
    def __init__(self):
        self.gpio_controller = get_gpio_controller()
        self.up_down = self.gpio_controller.up_down
        self.inc     = self.gpio_controller.inc
        self.decrement_to_zero()        
        
    def increase_volume(self,actual_volume:int) -> int:
        self.gpio_controller.set_output_hight(self.up_down)
        self.gpio_controller.toggle_output(self.inc)
        return actual_volume +1
        

    def decrease_volume(self,actual_volume:int) -> int:
        self.gpio_controller.set_output_low(self.up_down)
        self.gpio_controller.toggle_output(self.inc)
        return actual_volume -1
        
    
    def set_volume(self, actual_volume:int, new_volume:int) -> int:
        new_value_volume:int = ( actual_volume - new_volume)
        value:int=0
        if (new_value_volume < 0):
            value = self.increase_volume(actual_volume)      
            while value < new_volume:
                value = self.increase_volume(value)  
        else: 
            value = self.decrease_volume(actual_volume)      
            while value > new_volume: 
                value = self.decrease_volume(value)
        return value 
    
    
    def decrement_to_zero(self):   
        for i in range(100):
            self.decrease_volume(0) 
      
    def mute(self):
        pass



    

