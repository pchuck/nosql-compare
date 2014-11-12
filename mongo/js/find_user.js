conn = new Mongo()
db = conn.getDB("demo")

var c = db.userdata.find( { lastName : "burke" } )
while ( c.hasNext() ) printjson( c.next() )

