const generateReport = async () => {
  try {
    document.querySelector('.loading').style.display = 'block';
    document.querySelector('.report').style.display = 'none';

    const url = document.querySelector(".input-url").value;

    const response = await fetch(`/web-scrapper?url=${url}`);
    const data = await response.json();
    console.log(data);
  
    document.querySelector('.title').innerHTML = data?.title;
    document.querySelector('.meta-description').innerHTML = data?.metaDescription;
    document.querySelector('.links').innerHTML = data?.links.map((link, index) => `<li>${index + 1} - <a href="${link}" target="_blank">${link}</a></li>`).join('');
    document.querySelector('.images').innerHTML = data?.images.map((src, index) => `<li><span>${index + 1} - ${src}</span><img src="${src}" alt="Image"></li>`).join('');
  
    document.querySelector('.report').style.display = 'block';
    document.querySelector('.loading').style.display = 'none';
  }
  catch (error) {
    document.querySelector('.loading').style.display = 'none';
    document.querySelector('.report').style.display = 'none';
    alert("Error: Please enter a valid url!")
  }
}

document.getElementById('btn-generate').addEventListener('click', () => {
  generateReport();
});