export const send = (formData, sent, sub) => {
  fetch(
    "./form.php",
    {
      method: "POST",
      body: formData
    }
  ).then((res) => {
    if (!res.ok) {
      throw new Error("File not Found");
    }
    return res.text();
  }).then((value) => {
    sent.innerHTML = value;
    sub.style.display = "none";
    sent.style.display = "block";
    setTimeout(() => {
      sent.style.display = "none";
      sent.innerHTML = "";
      sub.style.display = "block";
    }, 5000);
  }).catch((error) => {
    sent.innerHTML = error;
    sub.style.display = "none";
    sent.style.display = "block";
    setTimeout(() => {
      sent.style.display = "none";
      sent.innerHTML = "";
      sub.style.display = "block";
    }, 5000);
  }); 
}

export const reply = (bool, obj, msg) => {
  const node = obj.parentElement.querySelector(".msg");

  if (!node && bool) {
    obj.classList.add("red");
    const newNode = document.createElement("span");
    newNode.className = "msg";
    newNode.innerHTML = msg;
    obj.parentElement.insertBefore(newNode, obj);
  } else if (node && !bool) {
    node.remove();
    obj.classList.remove("red");
  }
}
