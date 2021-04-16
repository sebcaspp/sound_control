from control.VolumeRepository import VolumeRepository
from control.infrastructure.volum_control import VolumeControl


class Controller():
    def __init__(self, volume_repository: VolumeRepository, volume_control: VolumeControl):
        self.volum_control     = volume_control
        self.volume_repository = volume_repository
        actual_volume:int = self.volume_repository.get_actual_state()
        self.volum_control.set_volume(0, actual_volume)
        
    def increment_volume(self):
        actual_volume:int = self.volume_repository.get_actual_state()
        new_volume = self.volum_control.increase_volume(actual_volume)
        updated_volume:int = self.volume_repository.set_state(new_volume)
        return self.ok_result(updated_volume)
    
    def decrement_volume(self):
        actual_volume:int = self.volume_repository.get_actual_state()
        new_volume = self.volum_control.decrease_volume(actual_volume)
        updated_volume:int = self.volume_repository.set_state(new_volume)
        return self.ok_result(updated_volume)

    def set_volume(self,value):
        actual_volume:int = self.volume_repository.get_actual_state()
        new_volume = self.volum_control.set_volume(actual_volume,value)
        updated_volume:int = self.volume_repository.set_state(actual_value)
        return self.ok_result(updated_volume)

    def ok_result(self,value:int):
        return {"actualVolume": value }
