// html skeleton provider
function template(title, initialState = {}, content = ""){
  let scripts = ` <script>
    window.__STATE__ = ${JSON.stringify(initialState)}
  </script>
  <script src="assets/client.js"></script>
  `
  let page = `<!DOCTYPE html>
              <html lang="en">
              <head>
                <meta charset="utf-8">
                <title> ${title} </title>
                <link href="assets/style.css" rel="stylesheet">
              </head>
              <body>
                <div class="content">
                   <div id="app" class="wrap-inner">
                      <!--- magic happens here -->  ${content}
                   </div>
                </div>

                  ${scripts}
              </body>
              `;

  return page;
}

module.exports = template;
