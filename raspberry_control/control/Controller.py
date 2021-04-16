from control.VolumeRepository import VolumeRepository
from control.infrastructure.volum_control import VolumeControl


class Controller():
    def __init__(self, volume_repository: VolumeRepository, volume_control: VolumeControl):
        self.volum_control     = volume_control
        self.volume_repository = volume_repository

    def increment_volume(self):
        actual_value = self.volum_control.increase_volume()
        self.volume_repository.set_state(actual_value)
        return self.ok_result()
    
    def decrement_volume(self):
        actual_value = self.volum_control.decrease_volume()
        self.volume_repository.set_state(actual_value)
        return self.ok_result()

    def set_volume(self,value):
        actual_value = self.volum_control.set_volume(value)
        self.volume_repository.set_state(actual_value)
        return self.ok_result()

    def ok_result(self):
        return {"result": "ok"}