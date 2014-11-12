# nosql/mongodb example
#
#   js queries, map/reduce and aggregation
#
MDB_HOST=localhost:27017
MDB_NAME=demo

start:
	mongod --config conf/mongod.conf &

client:
	mongo $(MDB_HOST)

create_db:
	echo "use demo" | mongo $(MDB_HOST)

create_collection:
	mongo $(MDB_HOST) js/create_collection.js

insert_data:
	mongo $(MDB_HOST) js/create_testdata.js

initialize: create_db create_collection insert_data

dump_data:
#	mongo $(MDB_HOST)/$(MDB_NAME) --eval "db.userdata.find()"
	mongo $(MDB_HOST)/$(MDB_NAME) js/dump_testdata.js

find_user:
	mongo $(MDB_HOST)/$(MDB_NAME) js/find_user.js

sort_users:
	mongo $(MDB_HOST)/$(MDB_NAME) js/sort_users.js

joins_per_month:
	mongo $(MDB_HOST)/$(MDB_NAME) js/joins_per_month.js

top_interests:
	mongo $(MDB_HOST)/$(MDB_NAME) js/top_interests.js

clean:
#	echo "use demo; db.dropDatabase();" | mongo $(MDB_HOST)
	mongo $(MDB_HOST)/$(MDB_NAME) js/drop_database.js

