from control.infrastructure.MongoDao import MongoDao

class VolumeRepository():
    def __init__( self, mongoDado: MongoDao ):
        self.db = mongoDado

    def get_actual_state(self):
        actual_state=self.db.get_actual_state()
        if(actual_state is None):
            return 0
        else:
            return actual_state
    
    def set_state(self, value):
        self.db.update_state(value)