/*
Fetch the list of 642 open APIs from
https://api.publicapis.org/entries

Create a my-api component
display the name and category of the API,
the description, and also display the type 
of Auth (if any) and whether or not the API 
supports HTTPS

Use CSS Grid to style my-api
The title and category should be 
listed as Title (Category) 
and should link to the API docs

The grid should have 4 rows
3rem, 1rem, 4rem, 3rem respectively
and 3 columns each 1/3rd of available width

Finally, display all of the APIs
*/

// getApis async function
async function fetchApis() {
  const publicApisUrl = "https://api.publicapis.org/entries";
  const response = await fetch(publicApisUrl);
  const jsonData = await response.json();

  return jsonData;
}

// get api html function
function getApiHtml(apiData) {
  /*
    display the name and category of the API,
the description, and also display the type 
of Auth (if any) and whether or not the API 
supports HTTPS
  */
  return `
    <div class="api">
      <div class="api-name">
        ${apiData.API} (${apiData.Category})
      </div>
      <div class="api-description">
        ${apiData.Description}
      </div>
      ${apiData.Auth ? '<div class="api-auth">' + apiData.Auth + "</div>" : ""}
      <div class="api-https">
        ${apiData.HTTPS ? "Supports HTTPS" : "Does not support HTTPS"}
      </div>
    </div>
  `;
}

function render(apis) {
  return `
    <div class="apis">
      ${apis.map((api) => getApiHtml(api)).join("")}
    </div>
  `;
}

// display apis function
function displayApis(allApis) {
  const apis = allApis.entries.slice(0, 50);

  document.body.innerHTML = render(apis);
}

fetchApis().then(displayApis);
