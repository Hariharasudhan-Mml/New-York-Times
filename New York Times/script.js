async function getting() {
  const datas = await fetch(
    "https://api.nytimes.com/svc/topstories/v2/arts.json?api-key=5PZzpZKHnzd32BkpUzHDtOxQUatRQXDr");
  const data = await datas.json();
  const results = data.results;
   let dates = new Date(data.results[0].created_date);
  let date1 = dates.toString();
  let month = date1.substr(4, 6);
  let date = date1.substring(0, 16);
  document.querySelector('h6').innerText = date;

    
  results.forEach(data => {
    let card = document.createElement('div');
    card.className = "card m-4";
    document.querySelector('main').appendChild(card);

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

    let byline=document.createElement('cite');
    byline.className='text-muted d-inline-block ps-400';
    byline.innerText="-"+data.byline;
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






}
getting();