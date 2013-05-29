var places = [
    ['Cameroun',34856,32064,'Yaoundé III, Mfoundi, Centre, 11852'],
    ['Cameroun',34864,32056,'Yaoundé V, Mfoundi, Centre, 215'],
    ['Cameroun',34864,32064,'Yaoundé III, Mfoundi, Centre, 11852'],
    ['Cameroun',34856,32056,'Mfoundi, Centre'],
    ['Martinique',21648,30072,'Fort-de-France'],
    ['France métropolitaine',32656,23608,'Lafon Féline, Le Bouscat, Bordeaux, Gironde, Aquitaine, 33110'],
    ['Brasil',25424,36536,'Mesorregião Central Espírito-Santense, Espírito Santo'],
    ['France métropolitaine',32656,23616,'Centre ville, Bordeaux, Gironde, Aquitaine, 33000'],
    ['Cameroun',34864,32048,'Lekié, Centre'],
    ['France métropolitaine',33184,22536,'Madeleine, 8e Arrondissement, Paris, Île-de-France, 75008']
];

function up(x, y) {
    return [14, ~~(Math.pow(2, -2) * x), ~~(Math.pow(2, -2) * y)];
}

var divs = d3.select('.density')
    .append('div')
    .selectAll('div.img')
    .data(places)
    .enter()
    .append('div')
    .attr('class', 'img');

divs.append('img')
    .attr('src', function(d) {
        return 'http://a.tile.openstreetmap.org/' + up(d[1], d[2]).join('/') + '.png';
    })
    .attr('title', function(d) {
        return d[0] + ': ' + d[3];
    });
