conn = new Mongo()
db = conn.getDB("demo")

var ti = db.userdata.aggregate(
  [
    { $unwind : "$interests" },
    { $group : { _id : "$interests" , number : { $sum : 1 } } },
    { $sort : { number : -1 } },
    { $limit : 5 }
  ]
)

while ( ti.hasNext() ) printjson( ti.next() )

//
// generate a document for every user for every element in interests
//    { $unwind : "$interests" },
// collect all documents with the same interest and count each grouping
// 'id' is the interest, and number is the accumulated sum of each interest
//    { $group : { _id : "$interests" , number : { $sum : 1 } } },
// sort on the generated documents, by prevalence of interest
//    { $sort : { number : -1 } },
// limit the results to the top 5
//    { $limit : 5 }

