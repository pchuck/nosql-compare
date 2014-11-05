conn = new Mongo()
db = conn.getDB("demo")

var jpm = db.userdata.aggregate(
  [
    { $project : { month_joined : { $month : "$joined" } } },
    { $group : { _id : {month_joined:"$month_joined"}, 
              number : { $sum : 1 } } },
    { $sort : { "_id.month_joined" : 1 } }
  ]
)

while ( jpm.hasNext() ) printjson( jpm.next() )
