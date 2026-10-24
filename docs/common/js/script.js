async function insertCommonParts(path, id) {
  const response = await fetch(path);

  if (!response.ok) {
    console.log("HTMLの読み込みに失敗しました");
    return;
  }

  const html = await response.text();
  document.getElementById(id).innerHTML = html;
}

insertCommonParts("/common/header.html", "header");
insertCommonParts("/common/footer.html", "footer");