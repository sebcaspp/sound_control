from control.infrastructure.MongoDao import MongoDao
from control.VolumeRepository import VolumeRepository
from control.Controller import Controller
from control.infrastructure.volum_control import VolumeControl
host              = "0.0.0.0"
password          = "ss"
database          = MongoDao(password)
volume_repository = VolumeRepository(database)
volume_control    = VolumeControl(0)

controller        = Controller(volume_repository, volume_control)