function lucknumber() {
    const min = Math.ceil(Number(document.querySelector(".number-min").value));
    const max = Math.floor(Number(document.querySelector(".number-max").value));

    const result = Math.floor(Math.random() * (max - min + 1)) + min;

    document.querySelector(".result").value = result;

}