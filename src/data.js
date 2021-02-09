// FILTRAR LOS DATOS POR TIPO
const filterDataByType = (data, condition) => {
  if (condition === 'all') {
    return data;
  } return data.filter((dataFilter) => dataFilter.type.includes(condition));
};
// FILTRAR LOS DATOS POR NOMBRE
const filterDataByName = (data, condition) => {
  if (condition === 'all') {
    return data;
  }
  return data.filter((dataFilter) => dataFilter.name.includes(condition));
};
// FILTRAR LOS DATOS POR REGIÓN
const filterDataByRegion = (data, condition) => {
  if (condition === 'all') {
    return data;
  }
  return data.filter((dataFilter) => dataFilter.generation.name.includes(condition));
};
// FILTRAR DATOS POR NUMERO
const filterDataNum = (data, condit) => data.filter((poke) => condit.includes(parseInt(poke.num)));
// MOSTRAR LOS DATOS POR ORDEN A-Z / Z-A
const orderDataByName = (data, condition) => {
  if (condition === 'nameAsc') {
    // 1 = b va antes que a // -1 = a va antes que b
    return data.sort((a, b) => ((a.name > b.name) ? 1 : -1));
  }

  // 1 = a va antes que b // -1 = b va antes que a
  return data.sort((a, b) => ((b.name > a.name) ? 1 : -1));
};
// MOSTRAR LOS DATOS POR ORDEN DE NÚMERO
const orderDataByNum = (data, condition) => {
  if (condition === 'numAsc') {
    return data.sort((a, b) => a.num - b.num);
  }

  return data.sort((a, b) => b.num - a.num);
};
// MOSTRAR LOS DATOS POR ORDEN DE CP
const orderDataByCP = (data, condition) => {
  if (condition === 'cpAsc') {
    return data.sort((a, b) => a.stats['max-cp'] - b.stats['max-cp']);
  }

  return data.sort((a, b) => b.stats['max-cp'] - a.stats['max-cp']);
};
// MOSTRAR LOS DATOS POR ORDEN DE HP
const orderDataByHP = (data, condition) => {
  if (condition === 'hpAsc') {
    return data.sort((a, b) => a.stats['max-hp'] - b.stats['max-hp']);
  }

  return data.sort((a, b) => b.stats['max-hp'] - a.stats['max-hp']);
};
export {
  filterDataByType,
  filterDataByName,
  filterDataByRegion,
  filterDataNum,
  orderDataByCP,
  orderDataByNum,
  orderDataByHP,
  orderDataByName,
};
