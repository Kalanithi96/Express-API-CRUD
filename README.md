# Express API CRUD

Schema used to handle Post data:
  {
    title: String,
    body: String
  }

An API that contains one endpoint each for:
  1. Read all Post data from DB
  2. Read data of one Post
  3. Delete data of one Post
  4. Update data of one Post
  5. Create data for a Post

This API is put inside a Node container and connected to a Mongo container in same network.
Redis container is used to store the session data.
