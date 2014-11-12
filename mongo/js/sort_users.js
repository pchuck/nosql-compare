conn = new Mongo()
db = conn.getDB("demo")

var byName = db.userdata.aggregate(
  [
    { $sort : { lastName : 1 } }
  ]
)

while ( byName.hasNext() ) printjson( byName.next() )


var byMonth = db.userdata.aggregate(
  [
    { $project :
       {
         month_joined : { $month : "$joined" },
         lastName : "$lastName",
         _id : 0
       }
    },
    { $sort : { month_joined : 1 } }
  ]
)

while ( byDate.hasNext() ) printjson( byDate.next() )

