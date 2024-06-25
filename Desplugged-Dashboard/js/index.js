const navEL = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
    if(window.scrollY >= 56)
        {
            navEL.classList.remove('navbar-scrolled');
        }else if (window.scrollY <56 )
            {
                navEL.classList.add('navbar-scrolled');
            }
    
})

const ctxTempodeUso = document.getElementById('tempoDeUso').getContext('2d');
        const barChart1 = new Chart(ctxTempodeUso, {
            type: 'bar',
            data: {
                labels: ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex' ,'Sab'],
                datasets: [{
                    label: 'Tempo de uso',
                    data: [2, 4, 8, 5, 9.4, 7.6, 8.5],
                    backgroundColor: [
                        'rgba(255, 0, 0, 0.2)',   
                        'rgba(0, 128, 0, 0.2)',   
                        'rgba(0, 0, 255, 0.2)',   
                        'rgba(128, 0, 128, 0.2)', 
                        'rgba(0, 255, 255, 0.2)', 
                        'rgba(255, 0, 255, 0.2)',
                        'rgba(255, 165, 0, 0.2)'  
                    ],
                    borderColor: [
                        'rgba(255, 0, 0, 1)',   
                        'rgba(0, 128, 0, 1)',   
                        'rgba(0, 0, 255, 1)',  
                        'rgba(128, 0, 128, 1)', 
                        'rgba(0, 255, 255, 1)',
                        'rgba(255, 0, 255, 1)',
                        'rgba(255, 165, 0, 1)'  
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

        const ctxVerificarRedes = document.getElementById('vezesQueVerificouAsRedes').getContext('2d');
        const barChart2 = new Chart(ctxVerificarRedes, {
            type: 'bar',
            data: {
                labels: ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex' ,'Sab'],
                datasets: [{
                    label: 'Vezes que verificou as redes',
                    data: [12, 20, 22, 10, 8, 9, 15 ],
                    backgroundColor:[
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(153, 102, 255, 0.2)',
                    'rgba(255, 159, 64, 0.2)',
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(201, 203, 207, 0.2)',
                ],

                borderColor: [    
                    'rgba(54, 162, 235, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)',
                    'rgba(255, 99, 132, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(201, 203, 207, 1)',
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

        const ctxDificuldadeDormir = document.getElementById('dificuldadeParaDormir').getContext('2d');
        const lineChart1 = new Chart(ctxDificuldadeDormir, {
            type: 'line',
            data: {
                labels: ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex' ,'Sab'],
                datasets: [{
                    label: 'Dificuldade para dormir',
                    data: [15, 30, 75, 25, 88, 63, 50],
                    backgroundColor: 'rgba(54, 162, 235, 0.2)',
                    borderColor: 'rgba(54, 162, 235, 1)',
                    borderWidth: 4,
                    fill: false
                }]
            },
            options: {
                scales: {
                    y: {
                        beginAtZero: true,
                        ticks: {
                        callback: function(value){
                        return value + '%';
                        }
                        }
                    }
                }
            }
        });

        const ctxVariacoesDeHumor = document.getElementById('variacoesDeHumor').getContext('2d');
        const lineChart2 = new Chart(ctxVariacoesDeHumor, {
            type: 'line',
            data: {
                labels: ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex' ,'Sab'],
                datasets: [{
                    label: 'variacoes De Humor',
                    data: [3, 5, 1, 7, 2, 5,6],
                    backgroundColor: 'rgba(54, 162, 235, 0.2)',
                    borderColor: 'rgba(54, 162, 235, 1)',
                    borderWidth: 4,
                    fill: false
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

        const ctxResponsabilidades = document.getElementById('negligenciaDeResponsabilidades').getContext('2d');
        const lineChart3 = new Chart(ctxResponsabilidades, {
            type: 'line',
            data: {
                labels: ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex' ,'Sab'],
                datasets: [{
                    label: 'Negligencia De Responsabilidades(%)',
                    data: [5, 7, 2, 8, 6, 10, 4],
                    backgroundColor: 'rgba(54, 162, 235, 0.2)',
                    borderColor: 'rgba(54, 162, 235, 1)',
                    borderWidth: 4,
                    fill: false
                }]
            },
            options: {
                scales: {
                    y: {
                        beginAtZero: true,
                     
                            }
                        }
                        
                    }
                }
            
        );

