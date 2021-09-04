## Redis Installation ❤

1) For Windows
	- Enable WSL from "Turn Windows features on or off settings"
	- Restart the machine
	- Install Ubuntu20.04 from Windows Store
	- Open Ubuntu and setup name and password
	- Run the following commands:
		> sudo apt-get update
		> sudo apt-get upgrade
		> sudo apt-get install redis-server
		> sudo service redis-server restart
		> redis-cli

2) For Linux
	- Run the commands:
		> sudo apt-get install redis-server
		> sudo service redis-server restart
		> redis-cli

-----------------------------------------------------------------------

USAGE

about redis  commands

-redis cli              ->  to enter in redis (command line interface )

___________________________for strigs ________________________________________________________

- SET key value         ->  sets a value to a key                                : set < key name> <value>
- GET key				->  gets a value from a key                              : get <key name>
- ttl key				->	tttl(time to leave) it expire the key at given time  : ttl <key name> <time>
- KEYS *				->	show all exist  keys                                 : key * 
- DEL key			    ->	deletes a key and its value                          : del <key name>
- FLUSHALL				->	deletes all key                                      : flushall
- EXISTS key			->   if key exit return 1 otherwise 0 (for key check)    :  exists <key name>
- expire key time		->  automatically delete  the key after the specific time: expire <key>  <time>                                      
- setex key time value  ->  set and expire key at same time                      : setex <key name> <time> <value>


_______________________________For Arrays_____________________________________________________

- LPUSH array value        -> push the element at 0th index                     : lpush <key name> <value>
- RPUSH array value        -> add the element at last index                     : rpush <key name> <value>
- LRANGE array start stop  -> get range of elements from a list                 : lrange <key name>  <start> <end>
- LPOP array			   -> removes and gets  the first element of list       : lpop <key name> 
- RPOP array			   -> removes and gets  the last element of list 		: rpop <key name>



_______________________________For Sets_______________________________________________________

- SADD myset value         -> it dosent repeat the key                          : sadd <key name> <value>
- SMEMBERS myset		   -> to get  all the members of the set 	            : smembers <key>   



______________________________For Object/Hash_________________________________________________



- HSET key field value		-> sets the hash field with string value           : hset <key name1> <key name1.5> <value>
- HGET key field			-> gets the hash field with string value		   : hget <key name1> <key name1.5>
- HGETALL key				-> gets all the fields and values in a specific key: hgetall <key>
- HDEL key field			-> delete the hash field 						   : hdel <key> <field>
- HEXISTS key field			-> exist th hash field                             : hexists <key>

---------------------------------------------------------------------------------------
///////////////////////////////////////////////////////////////////////////////////////
---------------------------------------------------------------------------------------

Postgres Commands :->> 

        |  command   |                                     

1) psqual -u <user name>                           
2) CREATE USER <user name> WITH PASSWORD '123456';   
3) CREATE DATABASE devs;
4) \l                                              
5) \d <table name>                                  
6) DROP TABLE <table name>                           
7) \q           

	|   what they do ?   |
	
1) To enter in postgress ( we have to provide user name and password )
2) To create user name and password.
3) Database created.
4) List all available databases, then exit.
5) Show the whole table.
6) For delete table.
7) Quit.
