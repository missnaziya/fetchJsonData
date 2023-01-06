fetch("https://jsonplaceholder.typicode.com/photos")
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        let dataBody = document.querySelector("#data-output");
        let output = "";
        for (let info of data) {
            output += `
        <tr>
        <td>${info.albumId}</td>
        <td>${info.id}</td>
        <td>${info.title}</td>
        <td>${info.url}</td>
        <td>${info.thumbnailUrl}</td>
        </tr>
        `;
        }

        dataBody.innerHTML = output;
    })

