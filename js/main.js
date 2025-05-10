let recipientInput = document.getElementById("recipient-name");
    let bardashtInput = document.getElementById("bardasht-input");
    let bardashtBtn = document.getElementById("bardasht-btn");
    let mojoodiText = document.querySelector(".mojoodi-text");
    let buyBtn = document.querySelector(".modal-footer .btn-secondary");
    let saleBtn = document.querySelector(".modal-footer .btn-primary");

    let kifePool = 0;

    buyBtn.onclick = function () {
        let amount = parseFloat(recipientInput.value);
        if (isNaN(amount) || amount <= 0) {
            alert("لطفا مبلغ معتبر وارد کنید");
            return;
        }
        kifePool += amount;
        recipientInput.value = "";
        mojoodiText.textContent = kifePool.toFixed(2);
    };

    bardashtBtn.onclick = function () {
        let amount = parseFloat(bardashtInput.value);
        if (isNaN(amount) || amount <= 0) {
            alert("لطفا مبلغ معتبر وارد کنید");
            return;
        }
        if (kifePool < amount) {
            alert("موجودی شما کافی نیست!");
            return;
        }
        kifePool -= amount;
        bardashtInput.value = "";
        mojoodiText.textContent = kifePool.toFixed(2);
    };

    saleBtn.onclick = function () {
        let amount = parseFloat(bardashtInput.value);
        if (isNaN(amount) || amount <= 0) {
            alert("لطفا مبلغ معتبر وارد کنید");
            return;
        }
        if (kifePool < amount) {
            alert("موجودی شما کافی نیست!");
            return;
        }
        kifePool -= amount;
        bardashtInput.value = "";
        mojoodiText.textContent = kifePool.toFixed(2);
    };