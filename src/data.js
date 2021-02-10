// FILTRAR LOS DATOS POR TIPO
export const filterDataByType = (data, condition) => {
  if (condition === 'all') {
    return data;
  } else {
    return data.filter(dataFilter => dataFilter.type.includes(condition));
  }
};

// FILTRAR LOS DATOS POR NOMBRE
export const filterDataByName = (data, condition) => {
  if (condition === 'all') {
    return data;
  } else {
    return data.filter(dataFilter => dataFilter.name.includes(condition))
  }
};

// FILTRAR LOS DATOS POR REGIÓN
export const filterDataByRegion = (data, condition) => {
  if (condition === 'all') {
    return data;
  } else {
    return data.filter(dataFilter => dataFilter.generation['name'].includes(condition))
  }
};
//FILTRAR DATOS POR NUMERO
export const filterDataByNum =(data, condition) =>{
  return data.filter(dataFilter => condition.includes(parseInt(dataFilter.num)))
}

// MOSTRAR LOS DATOS POR ORDEN A-Z / Z-A
export const orderDataByName = (data, condition) => {
  if (condition === 'nameAsc') {
    // 1 = b va antes que a // -1 = a va antes que b
    return data.sort((a, b) => (a.name > b.name) ? 1 : -1);
  }
  else {
    // 1 = a va antes que b // -1 = b va antes que a
    return data.sort((a, b) => (b.name > a.name) ? 1 : -1);
  }
};

// MOSTRAR LOS DATOS POR ORDEN DE NÚMERO
export const orderDataByNum = (data, condition) => {
  if (condition === 'numAsc') {
    return data.sort((a, b) => a.num - b.num);
  }
  else {
    return data.sort((a, b) => b.num - a.num);
  }
};

// MOSTRAR LOS DATOS POR ORDEN DE CP
export const orderDataByCP = (data, condition) => {
  if (condition === 'cpAsc') {
    return data.sort((a, b) => a.stats['max-cp'] - b.stats['max-cp']);
  }
  else {
    return data.sort((a, b) => b.stats['max-cp'] - a.stats['max-cp']);
  }
};

// MOSTRAR LOS DATOS POR ORDEN DE HP
export const orderDataByHP = (data, condition) => {
  if (condition === 'hpAsc') {
    return data.sort((a, b) => a.stats['max-hp'] - b.stats['max-hp']);
  }
  else {
    return data.sort((a, b) => b.stats['max-hp'] - a.stats['max-hp']);
  }
};
