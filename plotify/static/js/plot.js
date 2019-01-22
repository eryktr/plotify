$(document).ready( () => {
    let plotBtn = $("#plot_btn");
    plotBtn.click(function () {
        let expression = $("#function1").val();
        alert(expression);
    });

});