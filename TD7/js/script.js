//Ex 1
const bookApi = "https://anapioficeandfire.com/api";

const showBooks = function (response) {
  console.log("Status: " + response.status + "\nStatusText:" + response.statusText + "\nOk: " + response.ok + "\nURL: " + response.url);

  // console.log(response.ok)
  if(response.ok)
  {
    response.json().then(res => {
      res.forEach(elt => {
        console.log(elt.name + " (" + elt.isbn + ") : " + elt.numberOfPages + " pages")
      })
    });
  }

}

fetch(bookApi + "/books")
.then(showBooks)
.catch(error => {
  console.log(error.message);
});


//Q2
function bookDetails(noBook)
{
  fetch(bookApi + "/books/" + noBook)
    .then((response) => {
      if (response.ok)
      {
        response.json().then(res => {
          let print = "Book name: " + res.name + "\nISBN: " + res.isbn + "\nAuthors:\n";
          res.authors.forEach(a => {
            print += "\t - " + a + "\n";
          });
          const d = new Date(res.released);
          print += "Pages: " + res.numberOfPages + "\nPublisher: " + res.publisher + "\nReleased : " + String(d.getDate()).padStart(2, '0') + "/" + String(d.getMonth() + 1).padStart(2, '0') + "/" + d.getFullYear();
          console.log(print);
        })
      }
    })
    .catch(error => {
      console.log(error.message);
    });
}

bookDetails(1);