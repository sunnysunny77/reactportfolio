function send(formData, sent, sub) {
    let myPromise = new Promise(function (myResolve, myReject) {
        let req = new XMLHttpRequest();
        req.open("POST", "form.php", true);
        req.onload = function () {
            if (req.status == 200) {
                myResolve(req.responseText);
            } else {
                myReject("File not Found");
            }
        };
        req.send(formData);
    });
    myPromise.then(
        function (value) {
            sent.innerHTML = value;
            sub.style.display = "none";
            sent.style.display = "block";
            setTimeout(function () {
                sent.style.display = "none";
                sent.innerHTML = "";
                sub.style.display = "block";
            }, 5000);
        },
        function (error) {
            sent.innerHTML = error;
            sub.style.display = "none";
            sent.style.display = "block";
            setTimeout(function () {
                sent.style.display = "none";
                sent.innerHTML = "";
                sub.style.display = "block";
            }, 5000);
        }
    );
}

function reply(bool, obj, msg) {
    if (!document.getElementById("msg" + obj.id) && bool) {
        obj.classList.add("red");
        const newNode = document.createElement("span");
        newNode.className = "msg";
        newNode.id = "msg" + obj.id;
        newNode.innerHTML = msg;
        obj.previousElementSibling.appendChild(newNode);
    } else if (document.getElementById("msg" + obj.id) && !bool) {
        document.getElementById("msg" + obj.id).remove();
        obj.classList.remove("red");
    }
}

function validation(event) {
    let error;
    const formData = new FormData(this);
    const entries = formData.entries();
    const data = Object.fromEntries(entries);
    const name = this.children[0].children[1].children[0].children[2];
    const phone = this.children[0].children[1].children[1].children[2];
    const email = this.children[0].children[1].children[2].children[2];
    const message = this.children[0].children[1].children[3].children[2];
    if (/^[A-Z \.\-']{2,40}$/i.test(data.name)) {
        reply(false, name, null);
    } else {
        reply(true, name, "Enter your name");
        error = true;
    }
    if (/^[+]?[0-9]{3,15}$/.test(data.phone)) {
        reply(false, phone, null);
    } else {
        reply(true, phone, "+###############");
        error = true;
    }
    if (/^[\w.-]+@[\w.-]+\.[A-Za-z]{2,6}$/.test(data.email)) {
        reply(false, email, null);
    } else {
        reply(true, email, "Enter your email");
        error = true;
    }
    if (/[a-zA-Z0-9]/.test(data.message)) {
        reply(false, message, null);
    } else {
        reply(true, message, "Enter your message");
        error = true;
    }
    if (error) {
        const sub = this.children[2];
        sub.classList.add("red");
        sub.value = "Validation Error ⇡";
        setTimeout(function () {
            sub.value = "Send";
            sub.classList.remove("red");
        }, 5000);
    } else {
        send(formData, this.children[1], this.children[2]);
        this.reset();
    }
    event.preventDefault();
}

eventListner(document.getElementById("contact-form"),"submit",validation,false);


