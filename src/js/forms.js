export const send = (formData, sent, sub) => {
  let promise = new Promise((resolve, reject) => {
    let req = new XMLHttpRequest();
    req.open("POST", "form.php", true);
    req.addEventListener("load", () => {
      if (req.status === 200) {
        resolve(req.responseText);
      } else {
        reject("File not Found");
      }
    });
    req.send(formData);
  });
  promise.then((value) => {
    sent.innerHTML = value;
    sub.style.display = "none";
    sent.style.display = "block";
    setTimeout(() => {
      sent.style.display = "none";
      sent.innerHTML = "";
      sub.style.display = "block";
    }, 5000);
  }
  ).catch((error) => {
    sent.innerHTML = error;
    sub.style.display = "none";
    sent.style.display = "block";
    setTimeout(() => {
      sent.style.display = "none";
      sent.innerHTML = "";
      sub.style.display = "block";
    }, 5000);
  }
  );
}

export const reply = (bool, obj, msg) => {
  const node = document.getElementById(`msg${obj.id}`);
  if (!node && bool) {
    obj.classList.add("red");
    const newNode = document.createElement("span");
    newNode.className = "msg";
    newNode.id = `msg${obj.id}`;
    newNode.innerHTML = msg;
    obj.previousElementSibling.append(newNode);
  } else if (node && !bool) {
    node.remove();
    obj.classList.remove("red");
  }
}
