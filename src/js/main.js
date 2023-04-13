const BASE_URL = "http://localhost:3000";

// ====================================  READ =======================================

// function fetchBooks() {
//   return fetch(`${BASE_URL}/books`)
//     .then((res) => res.json())
//     .catch(error => console.log(error));
// }

// function FetchBookByID(bookId) {
//   return fetch(`${BASE_URL}/books/${bookId}`)
//     .then((res) => res.json())
//     .catch((error) => {
//       console.log(error);
//     });
// }

// fetchBooks();
// FetchBookByID(10);
// FetchBookByID(1);

//* Це необхідно для того, щоб fetch() правильно зреагував на статус код 404, який, технічно, не є помилкою, але для клієнта - це неуспішний результат.

// fetch("https://jsonplaceholder.typicode.com/users")
//   .then((response) => {
//     if (!response.ok) {
//       throw new Error(response.status);
//     }
//     return response.json();
//   })
//   .then((data) => {
//     // Data handling
//   })
//   .catch((error) => {
//     // Error handling
//   });


// ====================================  CREATE =======================================

function addBook(book) {
  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(book),
  };
  return fetch(`${BASE_URL}/books`, options).then((res) => res.json());
}

// addBook({
//   title: "Тестовая книга по CSS",
//   author: "Roman Zeno",
//   genres: ["CSS"],
//   rating: 9,
// });
