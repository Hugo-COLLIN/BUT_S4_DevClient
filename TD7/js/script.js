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