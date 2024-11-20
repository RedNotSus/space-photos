const apiUrl = `https://images-api.nasa.gov/search?q=supernova&media_type=image`;

fetch(apiUrl)
  .then((response) => response.json())
  .then((data) => {
    const gallery = document.getElementById("gallery");
    const items = data.collection.items;

    items.forEach((item) => {
      const imgBox = document.createElement("div");
      imgBox.className = "img-box";

      const img = document.createElement("img");
      img.src = item.links[0].href;
      img.alt = item.data[0].title;

      const transparentBox = document.createElement("div");
      transparentBox.className = "transparent-box";

      const caption = document.createElement("div");
      caption.className = "caption";

      const title = document.createElement("p");
      title.textContent = item.data[0].title;

      caption.appendChild(title);
      transparentBox.appendChild(caption);
      imgBox.appendChild(img);
      imgBox.appendChild(transparentBox);
      gallery.appendChild(imgBox);
    });
  })
  .catch((error) => console.error("Error fetching data:", error));
