const fs = require('fs');
const nraf = require('nraf');

const PORT = 3000;

const app = nraf();

app.post("/", (req, res) => {
  const code = req.body.code;
  const filename = req.body.filename;
  writeToFile(filename, code);
  res.end();
});

app.listen(PORT, () => {
  console.log("Server running on PORT", PORT);
});

function writeToFile(filename, content) {
  const filenameWithExtension = `${filename}.html`;

  const htmlContent = `
    <!DOCTYPE html>
    <html lang="en">
      ${content}
    </html>
  `;

  const data = htmlContent.trim();

  fs.writeFile(filenameWithExtension, data, (err) => {
    if(err) {
      console.log(err);
    } else {
      console.log('File successfully written!');
    }
  });
}