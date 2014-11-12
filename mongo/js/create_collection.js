conn = new Mongo();
db = conn.getDB("demo");
db.createCollection("userdata");
