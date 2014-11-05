conn = new Mongo();
db = conn.getDB("demo");

fred = { firstName : "fred", lastName : "jones", 
         interests: ["skiing", "golf", "yoga", "racquetball"],
         joined : ISODate("2014-10-31")
       };
alice = { firstName : "alice", lastName : "burke",
         interests: ["tennis", "yoga"],
         joined : ISODate("2013-05-20")
        };
alex = { firstName : "alex", lastName : "bryce",
         interests: ["meditation", "yoga", "skiing"],
         joined : ISODate("2012-05-20")
        };
bill = { firstName : "bill", lastName : "simpson",
         interests: ["cycling", "rowing", "yoga"],
         joined : ISODate("2014-01-01")
       };


db.userdata.insert(fred);
db.userdata.insert(alice);
db.userdata.insert(alex);
db.userdata.insert(bill);

//k = { x : 3, y : 5 };
//db.userdata.insert(k);

