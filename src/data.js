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
export const filterDataByNum = (data, condition) => {
  return data.filter(dataFilter => condition.includes(parseInt(dataFilter.num)))
}; 



export const sortData = (data, sortBy, sortOrder) => {
 
  // MOSTRAR LOS DATOS POR ORDEN A-Z / Z-A

  if (sortBy === 'spawn') { 
    if (sortOrder === 'Asc') {
      return data.sort((a, b) => a['spawn-chance'] - b['spawn-chance'])
    } else {
      return data.sort((a, b) => b['spawn-chance'] - a['spawn-chance'])
    }
     
  } 


  if (sortBy === 'name') { 
    if (sortOrder === 'Asc') {  
      return data.sort((a, b) => (a.name > b.name) ? 1 : -1) 
    }
    else { 
      return data.sort((a, b) => (b.name > a.name) ? 1 : -1) 
    }
     
  } 
  // MOSTRAR LOS DATOS POR ORDEN DE NÚMERO
  else if (sortBy === 'num') {
    if (sortOrder === 'Asc') {
      return data.sort((a, b) => a.num - b.num)
    } else {
      return data.sort((a, b) => b.num - a.num)
    }
  } 
  // MOSTRAR LOS DATOS POR ORDEN DE CP 
  else if (sortBy === 'cp') {
    if (sortOrder === 'Asc') {
          // 1 = b va antes que a // -1 = a va antes que b 
      return data.sort((a, b) => a.stats['max-cp'] - b.stats['max-cp']);
    } else {
          // 1 = a va antes que b // -1 = b va antes que a 
      return data.sort((a, b) => b.stats['max-cp'] - a.stats['max-cp']);
    }
  } 
  // MOSTRAR LOS DATOS POR ORDEN DE HP
  else if (sortBy === 'hp') {
    if (sortOrder === 'Asc') {
      return data.sort((a, b) => a.stats['max-hp'] - b.stats['max-hp']);
    } else {
      return data.sort((a, b) => b.stats['max-hp'] - a.stats['max-hp']);
    }
  }   
  else {
    return data;
  } 
}

// Poderes y daño de poderes

export const attackName = (attack) => {
  const name = attack.map(name => name.name);
  return name;
};

export const calculateDmgStab = (specialAttack, typePokemon) => {
  const result = specialAttack.map((obj) => {
    let stab = 0;
    const damage = Number(obj['base-damage']); 
    if (typePokemon.includes(obj.type)) {
      stab = ((damage * 0.2)); 
    }    
    return Number((stab + damage))
  });
  return result  
}; 

export const calculateDps = (specialAttack, pokemonType) => {
  const result = specialAttack.map((obj) => {
    let stab = 0;

    const attackType = obj.type;
    const baseDamage = Number(obj['base-damage']);
    const attackDuration = Number(obj['move-duration-seg']);
 
    if (pokemonType.includes(attackType)) {
       stab = Number((baseDamage * 0.2)) ; 
    }

    return Math.round(((stab + baseDamage) / attackDuration)); 
  });
  return result  
};

export const calculateEps = (specialAttack) => {

  const result = specialAttack.map((obj) => {
    const moveDuration = Number(obj['move-duration-seg']); 
    const energy = Number(obj.energy);

    return (energy / moveDuration); 
  });
  return result   
};
 