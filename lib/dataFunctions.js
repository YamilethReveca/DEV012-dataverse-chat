export const sortData = (data, sortBy, sortOrder) => {
  const sort = data.sort((x, y) => {
    //se crean dos constantes con los valores de los parametros por los que se va a ordenar la data.
    const valX = x[sortBy];
    const valY = y[sortBy];
    //si el orden es ascendente retornará -1 si X es menor que Y para indicar en que posición queda el elemento.
    if (sortOrder === "asc") {
      if (valX < valY) {
        return -1;
      }
      //si x es mayor que y, retornará 1
      if (valX > valY) {
        return 1;
      }
      // si el orden es descendente y X es menor que Y se retornará 1 para indicar en que posición queda el elemento.
    } else if (sortOrder === "desc") {
      if (valX < valY) {
        return 1;
      }
      //si x es mayor que y retorna -1
      if (valX > valY) {
        return -1;
      }
      //se retorna 0 en caso de que ambos valores sean iguales. (en caso de que no sea asc ni desc)
    } else {
      return 0;
    }
  });
  return sort;
};


export const sortBounty = (dataset, sortOrder) => {
  const sortedCharacters = dataset.sort((a, b) => {
    //tomamos ambos parametros y le quitamos todo lo que no sea digitos y lo reemplazamos por un espacio vacio. El 10 es el segundo parametro de parseInt para indicar que es sistema decimal. (base 10)
    const bountyA = parseInt(a.facts.bounty.replace(/[^0-9]/g, ''), 10);
    const bountyB = parseInt(b.facts.bounty.replace(/[^0-9]/g, ''), 10);
    //si el orden es ascendente a bountyA se le resta bountyB y si el resultado es un numero negativo significa que B es mayor a A.
    if (sortOrder === "asc") {
      return bountyA - bountyB;
      //si el orden es descendente a bountyB se le resta bountyA y si el resultado es un numero negativo significa que A es mayor a B.
    } else if (sortOrder === "desc") {
      return bountyB - bountyA;
    }
  });
  return sortedCharacters;
};


export const filterData = (data, filterBy, value) => {
  return data.filter((object) => {
    //object es el parametro para la función filter.Si se elige un filterBy "seaOfOrigin", "originCrew" o "status" la función retorna los elementos que dentro del filterBy sean iguales que el valor seleccionado.
    if (object.facts[filterBy]) {
      return object.facts[filterBy] === value;
    }
    //si el elemento no coincide con el valor de value no se agrega al resultado del filtro.
    return false;
  });
};


export const computeStats = (data, analyzeProperty, value) => {
  //mapeamos la data  para crear un nuevo array con los datos que queremos calcular. Y si el elemento cumple con ser igual al valor de value retorna 1.
  const mapped = data.map(element => element.facts[analyzeProperty] === value ? 1 : 0);
  //ya con los elementos evaluados y mapeados al resultado de map, se le aplica un reduce para verificar cuantos de esos elementos retornan 1 y los suma (acumula).
  const reduceData = mapped.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
  //se calcula el porcentaje dividiendo el resultado de el reduce con la longitud de la data (24) y luego se multiplica por 100.
  const percentage = (reduceData / data.length) * 100;
  //devuelve el resultado y se decide retornar redondeando a dos decimales.
  return percentage.toFixed(2);
};

export const computeStatsBounty = (data, bounty, value) => {
  //creamos un nuevo array con los elementos que queremos calcular. 
  const bountyParsed = data.map(element => {
    //se convierte de string a numero y se reemplaza todo lo que no sea numero por espacio vacio.
    return parseInt(element.facts[bounty].replace(/[^0-9]/g, ''), 10);
  });
  //mapeamos la data  para crear un nuevo array con los datos que queremos calcular. Y si el elemento cumple con ser igual al valor de value retorna 1.
  const mapped = bountyParsed.map(parsedValue => (parsedValue >= value ? 1 : 0));
  //ya con los elementos evaluados y mapeados al resultado de map, se le aplica un reduce para verificar cuantos de esos elementos retornan 1 y los suma (acumula).
  const reduceData = mapped.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
  //se calcula el porcentaje dividiendo el resultado de el reduce con la longitud de la data (24) y luego se multiplica por 100.
  const percentage = (reduceData / data.length) * 100;
  //devuelve el resultado y se decide retornar redondeando a dos decimales.
  return percentage.toFixed(2);
};