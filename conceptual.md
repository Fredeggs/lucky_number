### Conceptual Exercise

Answer the following questions below:

- What is RESTful routing?
    Restful routing provides mapping to routes to make HTTP requests such as GET or POST requests. This can ultimately allow the application's user full CRUD actions.  

- What is a resource?
    A resource is an object with a type, associated data, relationships to other resources, and a set of methods that operate on it

- When building a JSON API why do you not include routes to render a form that when submitted creates a new user?
    A JSON API is generally intended to just return JSON data based on the request made by the client. The rendering of a form is better handled by the front end of the aplication, allowing the app to be more responsive since there does not need to be a page refresh.

- What does idempotent mean? Which HTTP verbs are idempotent?
    An HTTP request verb is considered idempotent if that same request can be made over and over while leaving the server in the same state. AKA the verb has no side effects. The GET, HEAD, PUT, and DELETE methods are idempotent.

- What is the difference between PUT and PATCH?
    PUT updates an entire resource. PATCH updates only a portion of the data contained within a resource. An example of a PUT is updated the title, picture and content within a blog post. A PATCH in this example would be something like only updating the title of the blog post.

- What is one way encryption?
    Encryption is the process of encoding information. One way encryption ensures that there's no way to decrypt the already-encrypted information. (or at least it will take a very long time)

- What is the purpose of a `salt` when hashing a password?
    Salts create unique passwords even in the instance of two users choosing the same passwords and help to mitigate hash table attacks by forcing attackers to re-compute them using the salts for each user.

- What is the purpose of the Bcrypt module?
    Bcrypt allows building a password security platform that can evolve alongside hardware technology to guard against the threats that the future may bring, such as attackers having the computing power to crack passwords twice as fast

- What is the difference between authorization and authentication?
    Authentication is the process of determining whether or not a user is actually a valid user. Authorization is the level of access the authenticated user has within the application
