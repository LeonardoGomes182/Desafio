google.charts.load('current', { 'packages': ['corechart', 'bar'] });
google.charts.setOnLoadCallback(drawStuff);

function drawStuff(resultado) {

    var resultado = sessionStorage.getItem('resultado');
    var respostas = JSON.parse(resultado);

    var chartDiv = document.getElementById('chart_div');

    var data = google.visualization.arrayToDataTable([
        ['', '',  ''],
        ['Matemática', 3, respostas.matematica],
        ['História', 3, respostas.historia],
        ['Geografia', 3, respostas.geografia]
    ]);

    var classicOptions = {
        width: 700,
        heigth: 800
    };

    function drawClassicChart() {
        var classicChart = new google.visualization.ColumnChart(chartDiv);
        classicChart.draw(data, classicOptions);
    }

    drawClassicChart();

    document.querySelector("#resultado").innerHTML = "Parabéns! Você tirou " + respostas.porcentagem;
};

