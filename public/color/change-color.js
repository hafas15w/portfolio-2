const randomColor = {
    button: document.querySelector("#random-color-button"),
    input: document.querySelector("#color-text"),
    init: function () {
        this.button.addEventListener("click", (e) => {
            this.GetRandomColor();
        });

        this.input.addEventListener("click", (e) => {
            this.CopyToClickBoard();
        });
    },

    GetRandomColor: function () {
        const RandNum = "#" + Math.floor(Math.random() * 16777215).toString(16);
        console.log(RandNum);
        this.input.value = RandNum;
        document.body.style.background = RandNum;
    },

    CopyToClickBoard: function () {
        const value = this.input.value;
        navigator.clipboard.writeText(value).then(function () {
            console.log("kolor został zapisany: " + value);
            alert("twój kolor został zapisany w schowku: " + value);
        });
    },
};
randomColor.init();
