var xmlhttp = new XMLHttpRequest();
var url="https://track-pak-covid.herokuapp.com/Track_Covid_Pak_API";
xmlhttp.open("GET",url,true);
xmlhttp.send();
xmlhttp.onreadystatechange = function () {
  if (this.readyState == 4 && this.status == 200) {
    var data = JSON.parse(this.responseText);
    // Map JSON labels  back to values array
    console.log(data);
    var province =data.map(function(elem){
        return elem.Province;
    });
    let tc =data.map(function(elem){
        return elem['Total cases'].replace(',','');
        
    });
    var ac =data.map(function(elem){
        return elem['Active cases'].replace(',','');
    });
    var re =data.map(function(elem){
        return elem.Recoveries.replace(',','');
    });
    var rep =data.map(function(elem){
        return elem['Recovery %'];
    });
    var d =data.map(function(elem){
        return elem.Deaths.replace(',','');
    });
    var dp =data.map(function(elem){
        return elem['Death %'];
    });
    
            var ctx = document.getElementById('myChart').getContext('2d');
            var myChart = new Chart(ctx, {
            type: 'bar',
            data: {
                labels: province,
                datasets: [{
                    label: 'Province Wise Total Cases',
                    data: tc,
                    backgroundColor: [
                        
                       
                       
                        'rgba(153, 102, 255, 0.2)',
                        
                    ],
                    borderColor: [
                        
                        
                        
                        'rgba(153, 102, 255, 1)',
                        
                    ],
                    borderWidth: 1
                }]
            },
            options: {
                scales: {
                    y: {
                        beginAtZero: true
                    }
                }
            }
        });


        var ctx = document.getElementById('myline').getContext('2d');
            var myChart = new Chart(ctx, {
            type: 'line',
            data: {
                labels: province,
                datasets: [{
                    label: 'Province Wise Active Cases',
                    data: ac,
                    backgroundColor: [
                        
                        'rgba(54, 162, 235, 0.2)'
                        
                    ],
                    borderColor: [
                        'rgba(54, 162, 235, 1)'
                        
                    ],
                    borderWidth: 1
                }]
            },
            options: {
                scales: {
                    y: {
                        beginAtZero: true
                    }
                }
            }
        });


        var ctx = document.getElementById('a').getContext('2d');
            var myChart = new Chart(ctx, {
            type: 'bar',
            data: {
                labels: province,
                datasets: [{
                    label: 'Province Wise Recoveries',
                    data: re,
                    backgroundColor: [
                        
                        'rgba(54, 162, 235, 0.2)',
                       
                       
                        
                    ],
                    borderColor: [
                        
                        'rgba(54, 162, 235, 1)',
                        
                        
                        
                    ],
                    borderWidth: 1
                }]
            },
            options: {
                scales: {
                    y: {
                        beginAtZero: true
                    }
                }
            }
        });


        var ctx = document.getElementById('mm').getContext('2d');
            var myChart = new Chart(ctx, {
            type: 'line',
            data: {
                labels: province,
                datasets: [{
                    label: 'Province Wise Deaths',
                    data: d,
                    backgroundColor: [
                        
                        'rgba(255, 99, 132, 0.2)'
                        
                    ],
                    borderColor: [
                        'rgb(255, 99, 132)'
                    
                        
                    ],
                    borderWidth: 1
                }]
            },
            options: {
                scales: {
                    y: {
                        beginAtZero: true
                    }
                }
            }
        });


        


    
    }
}







