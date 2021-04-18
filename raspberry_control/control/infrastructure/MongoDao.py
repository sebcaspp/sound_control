import pymongo
from bson.objectid import ObjectId
import datetime

class MongoDao():
    def __init__(self,password):
        #client = pymongo.MongoClient("localhost", 27017)
        client = pymongo.MongoClient("mongodb://raspberry_control:"+password+"@sound-control-shard-00-00.4utx6.mongodb.net:27017,sound-control-shard-00-01.4utx6.mongodb.net:27017,sound-control-shard-00-02.4utx6.mongodb.net:27017/volume?ssl=true&replicaSet=atlas-1nai1o-shard-0&authSource=admin&retryWrites=true&w=majority")
        self.db = client.volume        
        self.VALUE = "value"
        self.DATE  = "date"

    def get_actual_state(self) -> int:
        state = self.db.actual_state.find_one()
        return int(state[self.VALUE])

    def update_state(self, value:int) -> int:
        new_state = { self.VALUE: value,    self.DATE:  datetime.datetime.utcnow()  }

        old_state = self.db.actual_state.find_one()
        if(old_state is None):
            volume_id = self.db.actual_state.insert_one( new_state ) 
            print( "volume saved -> ", volume_id )
        else:        
            self.db.actual_state.replace_one( { '_id': ObjectId( old_state['_id'] ) }, new_state )
            print("updated")
        return value
