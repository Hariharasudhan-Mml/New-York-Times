var results;
async function getting() {
  const datas = await fetch(
    "https://api.nytimes.com/svc/topstories/v2/arts.json?api-key=5PZzpZKHnzd32BkpUzHDtOxQUatRQXDr");
  const data = await datas.json();
 results = data.results;
  let dates = new Date(data.results[0].created_date);
  let date1 = dates.toString();
  let month = date1.substr(4, 6);
  let date = date1.substring(0, 16);
  document.querySelector('h6').innerText = date;

  
function change(event) {

document.querySelectorAll('section').forEach(remove=>{
remove.classList.add('hide');
remove.classList.remove('active');
})
  document.getElementById(event.target.innerText.toLowerCase()).classList.remove('hide');
};
let nav = [];
results.forEach(data => {
 
  if (!nav.includes(data.section)) {
    nav.push(data.section);
  }

})


nav.forEach(data => {
 
  let li = document.createElement('li');
  li.className = "nav-item text-center";
  li.addEventListener('click', change);
  document.querySelector('.nav').appendChild(li);
  let link = document.createElement('a');
  link.className = "nav-link";
  link.href = "#" + data;
  link.innerText = data.toUpperCase()
  li.appendChild(link);
});

let arts = results.filter(section => {
  return section.section === nav[0];
})

let movies = results.filter(section => {
  return section.section === nav[1];
})
//
let theater = results.filter(section => {
  return section.section === nav[2];
})

//
let home = results.filter(section => {
  return section.section === nav[3];
})
//
let books = results.filter(section => {

  return section.section === nav[4];
})

//
let science = results.filter(section => {
  return section.section === nav[5];
})
//
let style = results.filter(section => {
  return section.section === nav[6];
})
//
let magazine = results.filter(section => {
  return section.section === nav[7];
})


arts.forEach(data => {
document.querySelector("#"+data.section).className="active";
  let card = document.createElement('div');
  card.className = "card m-4";
  document.querySelector("#" + data.section).appendChild(card);

  let row = document.createElement('div');
  row.className = "row d-flex align-items-center";
  card.appendChild(row);

  let col_1 = document.createElement('div');
  col_1.className = "col-lg-8"
  row.appendChild(col_1);

  let card_body = document.createElement('div');
  card_body.className = "card-body";
  col_1.appendChild(card_body);

  let section = document.createElement('h2');
  section.id = "section";
  section.innerText = data.section.toUpperCase();
  card_body.appendChild(section);

  let title = document.createElement('p');
  title.id = "title";
  title.innerText = data.title;
  card_body.appendChild(title);

  let byline = document.createElement('cite');
  byline.className = 'text-muted d-inline-block ps-400';
  byline.innerText = "-" + data.byline;
  card_body.appendChild(byline);


  let date = document.createElement('h5');
  date.id = "id";
  date.innerText = month;
  card_body.appendChild(date);

  let abstract = document.createElement('p');
  abstract.id = "abstract";
  abstract.innerText = data.abstract;
  card_body.appendChild(abstract);

  let link = document.createElement('a');
  link.className = "continue-Reading";
  link.innerText = "Continue Reading";
  link.href = data.short_url;
  card_body.appendChild(link);


  let col_2 = document.createElement('div');
  col_2.className = "col-lg-4 ";
  row.appendChild(col_2);

  let img = document.createElement('img');
  img.className = "card-img  img-thumbnail"
  img.src = data.multimedia[4].url;
  col_2.appendChild(img);

})


theater.forEach(data => {
  document.querySelector("#"+data.section).className="hide";
  let card = document.createElement('div');
  card.className = "card m-4";
  document.querySelector("#" + data.section).appendChild(card);

  let row = document.createElement('div');
  row.className = "row d-flex align-items-center";
  card.appendChild(row);

  let col_1 = document.createElement('div');
  col_1.className = "col-lg-8"
  row.appendChild(col_1);

  let card_body = document.createElement('div');
  card_body.className = "card-body";
  col_1.appendChild(card_body);

  let section = document.createElement('h2');
  section.id = "section";
  section.innerText = data.section.toUpperCase();
  card_body.appendChild(section);

  let title = document.createElement('p');
  title.id = "title";
  title.innerText = data.title;
  card_body.appendChild(title);

  let byline = document.createElement('cite');
  byline.className = 'text-muted d-inline-block ps-400';
  byline.innerText = "-" + data.byline;
  card_body.appendChild(byline);


  let date = document.createElement('h5');
  date.id = "id";
  date.innerText = month;
  card_body.appendChild(date);

  let abstract = document.createElement('p');
  abstract.id = "abstract";
  abstract.innerText = data.abstract;
  card_body.appendChild(abstract);

  let link = document.createElement('a');
  link.className = "continue-Reading";
  link.innerText = "Continue Reading";
  link.href = data.short_url;
  card_body.appendChild(link);


  let col_2 = document.createElement('div');
  col_2.className = "col-lg-4 ";
  row.appendChild(col_2);

  let img = document.createElement('img');
  img.className = "card-img  img-thumbnail"
  img.src = data.multimedia[4].url;
  col_2.appendChild(img);
});


books.forEach(data => {
  document.querySelector("#"+data.section).className="hide";
  let card = document.createElement('div');
  card.className = "card m-4 ";
  document.querySelector("#" + data.section).appendChild(card);

  let row = document.createElement('div');
  row.className = "row d-flex align-items-center";
  card.appendChild(row);

  let col_1 = document.createElement('div');
  col_1.className = "col-lg-8"
  row.appendChild(col_1);

  let card_body = document.createElement('div');
  card_body.className = "card-body";
  col_1.appendChild(card_body);

  let section = document.createElement('h2');
  section.id = "section";
  section.innerText = data.section.toUpperCase();
  card_body.appendChild(section);

  let title = document.createElement('p');
  title.id = "title";
  title.innerText = data.title;
  card_body.appendChild(title);

  let byline = document.createElement('cite');
  byline.className = 'text-muted d-inline-block ps-400';
  byline.innerText = "-" + data.byline;
  card_body.appendChild(byline);


  let date = document.createElement('h5');
  date.id = "id";
  date.innerText = month;
  card_body.appendChild(date);

  let abstract = document.createElement('p');
  abstract.id = "abstract";
  abstract.innerText = data.abstract;
  card_body.appendChild(abstract);

  let link = document.createElement('a');
  link.className = "continue-Reading";
  link.innerText = "Continue Reading";
  link.href = data.short_url;
  card_body.appendChild(link);


  let col_2 = document.createElement('div');
  col_2.className = "col-lg-4 ";
  row.appendChild(col_2);

  let img = document.createElement('img');
  img.className = "card-img  img-thumbnail"
  img.src = data.multimedia[4].url;
  col_2.appendChild(img);
});

home.forEach(data => {
  document.querySelector("#"+data.section).className="hide";

  let card = document.createElement('div');
  card.className = "card m-4";
  document.querySelector("#" + data.section).appendChild(card);

  let row = document.createElement('div');
  row.className = "row d-flex align-items-center";
  card.appendChild(row);

  let col_1 = document.createElement('div');
  col_1.className = "col-lg-8"
  row.appendChild(col_1);

  let card_body = document.createElement('div');
  card_body.className = "card-body";
  col_1.appendChild(card_body);

  let section = document.createElement('h2');
  section.id = "section";
  section.innerText = data.section.toUpperCase();
  card_body.appendChild(section);

  let title = document.createElement('p');
  title.id = "title";
  title.innerText = data.title;
  card_body.appendChild(title);

  let byline = document.createElement('cite');
  byline.className = 'text-muted d-inline-block ps-400';
  byline.innerText = "-" + data.byline;
  card_body.appendChild(byline);


  let date = document.createElement('h5');
  date.id = "id";
  date.innerText = month;
  card_body.appendChild(date);

  let abstract = document.createElement('p');
  abstract.id = "abstract";
  abstract.innerText = data.abstract;
  card_body.appendChild(abstract);

  let link = document.createElement('a');
  link.className = "continue-Reading";
  link.innerText = "Continue Reading";
  link.href = data.short_url;
  card_body.appendChild(link);


  let col_2 = document.createElement('div');
  col_2.className = "col-lg-4 ";
  row.appendChild(col_2);

  let img = document.createElement('img');
  img.className = "card-img  img-thumbnail"
  img.src = data.multimedia[4].url;
  col_2.appendChild(img);
})

movies.forEach(data => {
  document.querySelector("#"+data.section).className="hide";

  let card = document.createElement('div');
  card.className = "card m-4";
  document.querySelector("#" + data.section).appendChild(card);

  let row = document.createElement('div');
  row.className = "row d-flex align-items-center";
  card.appendChild(row);

  let col_1 = document.createElement('div');
  col_1.className = "col-lg-8"
  row.appendChild(col_1);

  let card_body = document.createElement('div');
  card_body.className = "card-body";
  col_1.appendChild(card_body);

  let section = document.createElement('h2');
  section.id = "section";
  section.innerText = data.section.toUpperCase();
  card_body.appendChild(section);

  let title = document.createElement('p');
  title.id = "title";
  title.innerText = data.title;
  card_body.appendChild(title);

  let byline = document.createElement('cite');
  byline.className = 'text-muted d-inline-block ps-400';
  byline.innerText = "-" + data.byline;
  card_body.appendChild(byline);


  let date = document.createElement('h5');
  date.id = "id";
  date.innerText = month;
  card_body.appendChild(date);

  let abstract = document.createElement('p');
  abstract.id = "abstract";
  abstract.innerText = data.abstract;
  card_body.appendChild(abstract);

  let link = document.createElement('a');
  link.className = "continue-Reading";
  link.innerText = "Continue Reading";
  link.href = data.short_url;
  card_body.appendChild(link);


  let col_2 = document.createElement('div');
  col_2.className = "col-lg-4 ";
  row.appendChild(col_2);

  let img = document.createElement('img');
  img.className = "card-img  img-thumbnail"
  img.src = data.multimedia[4].url;
  col_2.appendChild(img);
})

science.forEach(data => {
  document.querySelector("#"+data.section).className="hide";

  let card = document.createElement('div');
  card.className = "card m-4";
  document.querySelector("#" + data.section).appendChild(card);

  let row = document.createElement('div');
  row.className = "row d-flex align-items-center";
  card.appendChild(row);

  let col_1 = document.createElement('div');
  col_1.className = "col-lg-8"
  row.appendChild(col_1);

  let card_body = document.createElement('div');
  card_body.className = "card-body";
  col_1.appendChild(card_body);

  let section = document.createElement('h2');
  section.id = "section";
  section.innerText = data.section.toUpperCase();
  card_body.appendChild(section);

  let title = document.createElement('p');
  title.id = "title";
  title.innerText = data.title;
  card_body.appendChild(title);

  let byline = document.createElement('cite');
  byline.className = 'text-muted d-inline-block ps-400';
  byline.innerText = "-" + data.byline;
  card_body.appendChild(byline);


  let date = document.createElement('h5');
  date.id = "id";
  date.innerText = month;
  card_body.appendChild(date);

  let abstract = document.createElement('p');
  abstract.id = "abstract";
  abstract.innerText = data.abstract;
  card_body.appendChild(abstract);

  let link = document.createElement('a');
  link.className = "continue-Reading";
  link.innerText = "Continue Reading";
  link.href = data.short_url;
  card_body.appendChild(link);


  let col_2 = document.createElement('div');
  col_2.className = "col-lg-4 ";
  row.appendChild(col_2);

  let img = document.createElement('img');
  img.className = "card-img  img-thumbnail"
  img.src = data.multimedia[4].url;
  col_2.appendChild(img);
})


style.forEach(data => {
  document.querySelector("#"+data.section).className="hide";

  let card = document.createElement('div');
  card.className = "card m-4";
  document.querySelector("#" + data.section).appendChild(card);

  let row = document.createElement('div');
  row.className = "row d-flex align-items-center";
  card.appendChild(row);

  let col_1 = document.createElement('div');
  col_1.className = "col-lg-8"
  row.appendChild(col_1);

  let card_body = document.createElement('div');
  card_body.className = "card-body";
  col_1.appendChild(card_body);

  let section = document.createElement('h2');
  section.id = "section";
  section.innerText = data.section.toUpperCase();
  card_body.appendChild(section);

  let title = document.createElement('p');
  title.id = "title";
  title.innerText = data.title;
  card_body.appendChild(title);

  let byline = document.createElement('cite');
  byline.className = 'text-muted d-inline-block ps-400';
  byline.innerText = "-" + data.byline;
  card_body.appendChild(byline);


  let date = document.createElement('h5');
  date.id = "id";
  date.innerText = month;
  card_body.appendChild(date);

  let abstract = document.createElement('p');
  abstract.id = "abstract";
  abstract.innerText = data.abstract;
  card_body.appendChild(abstract);

  let link = document.createElement('a');
  link.className = "continue-Reading";
  link.innerText = "Continue Reading";
  link.href = data.short_url;
  card_body.appendChild(link);


  let col_2 = document.createElement('div');
  col_2.className = "col-lg-4 ";
  row.appendChild(col_2);

  let img = document.createElement('img');
  img.className = "card-img  img-thumbnail"
  img.src = data.multimedia[4].url;
  col_2.appendChild(img);
})


magazine.forEach(data => {
  document.querySelector("#"+data.section).className="hide";

  let card = document.createElement('div');
  card.className = "card m-4";
  document.querySelector("#" + data.section).appendChild(card);

  let row = document.createElement('div');
  row.className = "row d-flex align-items-center";
  card.appendChild(row);

  let col_1 = document.createElement('div');
  col_1.className = "col-lg-8"
  row.appendChild(col_1);

  let card_body = document.createElement('div');
  card_body.className = "card-body";
  col_1.appendChild(card_body);

  let section = document.createElement('h2');
  section.id = "section";
  section.innerText = data.section.toUpperCase();
  card_body.appendChild(section);

  let title = document.createElement('p');
  title.id = "title";
  title.innerText = data.title;
  card_body.appendChild(title);

  let byline = document.createElement('cite');
  byline.className = 'text-muted d-inline-block ps-400';
  byline.innerText = "-" + data.byline;
  card_body.appendChild(byline);


  let date = document.createElement('h5');
  date.id = "id";
  date.innerText = month;
  card_body.appendChild(date);

  let abstract = document.createElement('p');
  abstract.id = "abstract";
  abstract.innerText = data.abstract;
  card_body.appendChild(abstract);

  let link = document.createElement('a');
  link.className = "continue-Reading";
  link.innerText = "Continue Reading";
  link.href = data.short_url;
  card_body.appendChild(link);


  let col_2 = document.createElement('div');
  col_2.className = "col-lg-4 ";
  row.appendChild(col_2);

  let img = document.createElement('img');
  img.className = "card-img  img-thumbnail"
  img.src = data.multimedia[4].url;
  col_2.appendChild(img);

});

}
getting();



