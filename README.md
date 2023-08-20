# Final Project


**1️⃣ How to Run in Local**
----
* Clone this repository
```
git clone https://github.com/nursyifaziza/final-project
```
* In root directory, install dependencies
```
npm install
```
* In each frontend and backend directory, install dependencies too
```
cd backend
npm install
```
```
cd frontend
npm install
```
* Change directory to backend, then run seeder and run the server
```
node seeds/seed.js
```
```
node index.js
```
* Lastly, open new terminal, change directory to frontend, and run it
```
npm start
```


**2️⃣ Database Structure**
----
* Video
```
{
  title: String,
  url: String,
  thumbnail: String
}
```

* Product
```
{
    title: String,
    link: String,
    price: Number,
    videoId: {type: ObjectId, ref: 'Video'},
}
```

* Comment
```
{
    username: {type: String, required: true},
    text: {type: String, required: true},
    timestamp: {type: Date, default: Date.now},
    videoId: {type: ObjectId, ref: 'Video'},
}
```

**3️⃣ API Structure**
----
| HTTP Verb    | Endpoint           | Actions                          |
| :---         | :---               | :---                             |
| GET          | /api/videos        | Get all videos                   |
| GET          | /api/videos/:id    | Get a video detail by videoId    |
| GET          | /api/products/:id  | Get all products by videoId      |
| GET          | /api/comments/:id  | Get all comments by videoId      |
| POST         | /api/comments/:id  | Post a comment on a video        |

**4️⃣ List of API Contracts**
----
**GET /videos**
----
  Returns all videos.
* **URL Params**  
  None
* **Data Params**  
  None
* **Headers**  
  Content-Type: application/json  
* **Success Response:**  
* **Code:** 200  
  **Content:**  
```

[
   {<video_object>},
   {<video_object>},
   {<video_object>},
   {<video_object>},
   {<video_object>}
]
```
* **Error Response:**  
  * **Code:** 500  
  **Content:** `{ "message" : "Internal server error" }`

**GET /video/:id**
----
  Returns the specified video.
* **URL Params**  
  id=[string]
* **Data Params**  
  None
* **Headers**  
  Content-Type: application/json  
* **Success Response:** 
* **Code:** 200  
  **Content:**  `{ <video_object> }` 
* **Error Response:**  
  * **Code:** 404  
  **Content:** `{ "message" : "Video not exist" }`
  * **Code:** 500  
  **Content:** `{ "message" : "Internal server error" }`

**GET /products/:id**
----
  Returns all products associated with the specified video.
* **URL Params**  
  *Required:* `id=[string]`
* **Data Params**  
  None
* **Headers**  
  Content-Type: application/json  
* **Success Response:**  
* **Code:** 201  
  **Content:**  
```
[
   {<product_object>},
   {<product_object>},
   {<product_object>}
]
```
* **Error Response:**  
  * **Code:** 404  
  **Content:** `{ "message" : "Currently, there are no products associated with this video" }`
  * **Code:** 500  
  **Content:** `{ "message" : "Internal server error" }`

**GET /comments/:id**
----
  Returns all comments associated with the specified video.
* **URL Params**  
  *Required:* `id=[string]`
* **Data Params**  
  None
* **Headers**  
  Content-Type: application/json  
* **Success Response:**  
* **Code:** 200  
  **Content:**  
```
[
   {<product_object>},
   {<product_object>},
   {<product_object>}
]
```
* **Error Response:**  
  * **Code:** 404  
  **Content:** `{ "message" : "Comments are empty" }`
  * **Code:** 500  
  **Content:** `{ "message" : "Internal server error" }`

**POST /comments/:id**
----
  Creates a new comment on the associated video and returns the new object.
* **URL Params**  
  *Required:* `id=[string]`
* **Headers**  
  Content-Type: application/json  
* **Data Params**  
```
  {
    "username": string,
    "comment": string
  }
```
* **Success Response:**  
* **Code:** 201  
  **Content:**  `{ <comment_object> }`
* **Error Response:**  
  * **Code:** 400 
  **Content:** `{ "message" : "Error creating comment: ", error }`
  * **Code:** 500  
  **Content:** `{ "message" : "Failed to create comment" }`