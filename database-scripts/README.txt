To reproduce the database setup locally:

1. Run the setup.sql script to set up the tables and schema
2. Run the data.sql script to fill in the tables

Best practices for setting up tables and schema:
- make the column names not plural, keep them single
- keep the colimn names a single word
- normalization which involves keeping information is smaller
related tables instead of just one huge table if applicable
- documentation and ER diagrams are also important
- use stored procedures to execute the same query 
- add foreign keys if needed to avoid data integrity issues
- an example of using a foreign key is if you want to use an enum in sql server
you can have a table that holds the enum values and then connect that enum 
table with a foreign key to another table to ensure the values entered
for tht column are limited to values in the enum table
-use indexes to access any row quickly
-use NULL to represent unknown or default values in a table 
rather than an empty string or space which could be the default value for 
strings

website reference: https://modeldba.com/guides/best-practices-for-database-design/

Actions Items:
Find out more on schema and indexes!
Steps of normalization -> 1NF, 2NF, 3NF

1 Normal Form for a table
- column names must be unique

2NF
No partial dependencies. 
Imagine we have a table that has two columns that make up
the key. If one other column is connected in some way and 
depends on one of the columns in the overall key than we have a partial dependency.
The column is dependent partially on the key.
The best solution is to move that column into a separate table.

3NF
There are no transitive dependencies.
This means that one random column should not depend on another 
random column. The column must depend on the primary key at best
but not another column that is not the key

How to fix:
Move the two columns to a separate table and this helps avoid
data duplication.