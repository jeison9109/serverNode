const obj = {
    '{"content":"<div>Test dev<br>Personas en operación: </div>\\n<table class': '\\"table\\">\\n<tbody>\\n<tr class=\\"\\">\\n<td>8</td>\\n</tr>\\n</tbody>\\n</table>\\n<div>Personas afectadas:</div>\\n<div>24</div>","description":"<div>Test dev<br>Personas en operación: </div>\\n<table class=\\"table\\">\\n<tbody>\\n<tr class=\\"\\">\\n<td>8</td>\\n</tr>\\n</tbody>\\n</table>\\n<div>Personas afectadas:</div>\\n<div>24</div>","locationa":"CAV Aguachica","category":"Categoría","title":"Lentitud en aplicación AC > Corporativos - Cambio Plan"}'
};

let str = '';

Object.keys(obj).forEach(key => {
    str += key + obj[key];
});

const obj2 = JSON.parse(str);
console.log(obj2.locationa);
console.log(obj2.title);