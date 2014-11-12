conn = new Mongo();
db = conn.getDB("demo");

var c = db.userdata.find()
while ( c.hasNext() ) printjson( c.next() )

