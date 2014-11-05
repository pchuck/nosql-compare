# nosql/mongodb example
#
#   js queries, map/reduce and aggregation
#
DB_HOST=localhost:27017
DB_NAME=demo

start:
	mongod --dbpath ./mdb-db &

client:
	mongo $(DB_HOST)

create_db:
	echo "use demo" | mongo $(DB_HOST)

create_collection:
	mongo $(DB_HOST) scripts/create_collection.js

insert_data:
	mongo $(DB_HOST) scripts/create_testdata.js

initialize: create_db create_collection insert_data

dump_data:
#	mongo $(DB_HOST)/$(DB_NAME) --eval "db.userdata.find()"
	mongo $(DB_HOST)/$(DB_NAME) scripts/dump_testdata.js

find_user:
	mongo $(DB_HOST)/$(DB_NAME) scripts/find_user.js

sort_users:
	mongo $(DB_HOST)/$(DB_NAME) scripts/sort_users.js

joins_per_month:
	mongo $(DB_HOST)/$(DB_NAME) scripts/joins_per_month.js

top_interests:
	mongo $(DB_HOST)/$(DB_NAME) scripts/top_interests.js

clean:
#	echo "use demo; db.dropDatabase();" | mongo $(DB_HOST)
	mongo $(DB_HOST)/$(DB_NAME) scripts/drop_database.js

