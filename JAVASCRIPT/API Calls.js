const factpara=document.querySelector("#fact");
const btn=document.querySelector("#btn");
const getfacts = async () => {
    console.log("getting data....");
    let response = await fetch(URL);
    console.log(response.status); //json format
    let data = await response.json();
    factpara.innerText=data[2].text;
};

