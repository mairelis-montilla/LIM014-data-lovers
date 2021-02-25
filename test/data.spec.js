import {
  filterDataByType,
  filterDataByName,
  filterDataByRegion,
  sortData,
  attackName,
  calculateDmgStab,
  calculateDps,
  calculateEps,
  countTypes,
  countTypesSpawn
} from '../src/data.js';

//TEST FILTRAR
describe('Filter data by type  test', () => {

  // PRUEBA UNO DE FILTRO POR TIPO
  it('is a function', () => {
    expect(typeof filterDataByType).toBe('function');
  });


  // PRUEBA DOS DE FILTRO POR TIPO
  it('this function return default data', () => {
    const data = [{
        name: 'pokemon1',
        type: 'fire',
      },
      {
        name: 'pokemon2',
        type: 'grass',
      }
    ]

    const result = [{
        name: 'pokemon1',
        type: 'fire',
      },
      {
        name: 'pokemon2',
        type: 'grass',
      }
    ]
    expect(filterDataByType(data, 'all')).toEqual(result);
  });

  // PRUEBA TRES DE FILTRO POR TIPO 
  it('Return result to filter data by type', () => {
    const data = [{
        name: 'pokemon1',
        type: 'fire',
      },
      {
        name: 'pokemon2',
        type: 'grass',
      }
    ]
    const type = 'fire';
    const result = [{
      name: 'pokemon1',
      type: 'fire',
    }]
    expect(filterDataByType(data, type)).toEqual(result);
  });
});


describe('Filter data by name test', () => {
  // PRUEBA UNO DE FILTRO POR NOMBRE 
  it('is a function', () => {
    expect(typeof filterDataByName).toBe('function');
  });

  // PRUEBA DOS DE FILTRO POR NOMBRE 
  it('Return result to filter data by name', () => {
    const data = [{
        name: 'pokemon1',
        type: 'fire',
      },
      {
        name: 'pokemon2',
        type: 'grass',
      }
    ]
    const name = 'pokemon1';
    const result = [{
      name: 'pokemon1',
      type: 'fire',
    }]
    expect(filterDataByName(data, name)).toEqual(result);
  });

});

describe('Filter data by region test', () => {
  it('is a function', () => {
    expect(typeof filterDataByRegion).toBe('function');
  });

  it('Return result to filter data by region', () => {
    const data = [{
        name: 'pokemon1',
        generation: {
          name: 'kanto',
        }
      },
      {
        name: 'pokemon2',
        generation: {
          name: 'johto'
        }
      }
    ]
    const generation = 'all';
    const result = [{
        name: 'pokemon1',
        generation: {
          name: 'kanto',
        }
      },
      {
        name: 'pokemon2',
        generation: {
          name: 'johto'
        }
      }
    ]
    expect(filterDataByRegion(data, generation)).toEqual(result);
  });


  it('Return result to filter data by region', () => {
    const data = [{
        name: 'pokemon1',
        generation: {
          name: 'kanto',
        }
      },
      {
        name: 'pokemon2',
        generation: {
          name: 'johto'
        }
      }
    ]
    const generation = 'kanto';
    const result = [{
      name: 'pokemon1',
      generation: {
        name: 'kanto',
      }
    }];

    expect(filterDataByRegion(data, generation)).toEqual(result);
  });
});

// TEST ORDER
describe('order data by name  test', () => {

  // prueba 1
  it('is a function', () => {
    expect(typeof sortData).toBe('function');
  });

  // prueba 2
  it('order by name  A to Z', () => {
    const data = [{
        name: 'A',
      },
      {
        name: 'Z',
      },
      {
        name: 'D',
      }
    ];
    const result = [{
        name: 'A',
      },
      {
        name: 'D',
      },
      {
        name: 'Z',
      }
    ];
    const condition = 'name';
    const sortBy = 'Asc';

    expect(sortData(data, condition, sortBy)).toEqual(result);
  })

  // prueba 3
  it('order by name  A to Z', () => {
    const data = [{
        name: 'A',
      },
      {
        name: 'Z',
      },
      {
        name: 'D',
      }
    ];



    const result = [{
        name: 'Z',
      },
      {
        name: 'D',
      },
      {
        name: 'A',
      }
    ];

    const condition = 'name';
    const sortBy = 'Dsc';
    expect(sortData(data, condition, sortBy)).toEqual(result);
  })
});


describe('Order data by num test', () => {

  // prueba 1
  it('is a function', () => {
    expect(typeof sortData).toBe('function');
  });
  // prueba 2
  it('order by num asc to desc', () => {
    const data = [{
        num: 3,
      },
      {
        num: 2,
      },
      {
        num: 5,
      }
    ];
    const result = [{
        num: 2,
      },
      {
        num: 3,
      },
      {
        num: 5,
      }
    ];
    const condition = 'num';
    const sortBy = 'Asc';
    expect(sortData(data, condition, sortBy)).toEqual(result);
  })
  // prueba 3
  it('order by num desc to asc', () => {
    const data = [{
        num: 5,
      },
      {
        num: 1,
      },
      {
        num: 6,
      }
    ];
    const result = [{
        num: 6,
      },
      {
        num: 5,
      },
      {
        num: 1,
      }
    ];
    const condition = 'num';
    const sortBy = 'Dsc';
    expect(sortData(data, condition, sortBy)).toEqual(result);
  })

});

describe('Order data by cp test', () => {
  // prueba 1
  it('is a function', () => {
    expect(typeof sortData).toBe('function');
  });
  // prueba 2
  it('order by max-cp asc to desc', () => {
    const data = [{
        stats: {
          'max-cp': 30,

        }
      },
      {
        stats: {
          'max-cp': 10,

        }
      },
      {
        stats: {
          'max-cp': 20,

        }
      }
    ];
    const result = [{
        stats: {
          'max-cp': 10,
        }
      },
      {
        stats: {
          'max-cp': 20,
        }
      },
      {
        stats: {
          'max-cp': 30,
        }
      }
    ];
    const condition = 'cp';
    const sortBy = 'Asc';
    expect(sortData(data, condition, sortBy)).toEqual(result);
  })
  // prueba 3
  it('order by max-cp desc to asc', () => {
    const data = [{
        stats: {
          'max-cp': 30,

        }
      },
      {
        stats: {
          'max-cp': 10,

        }
      },
      {
        stats: {
          'max-cp': 20,

        }
      }
    ];
    const result = [{
        stats: {
          'max-cp': 30,

        }
      },
      {
        stats: {
          'max-cp': 20,

        }
      },
      {
        stats: {
          'max-cp': 10,
        }
      }
    ];

    const condition = 'cp';
    const sortBy = 'Dsc';
    expect(sortData(data, condition, sortBy)).toEqual(result);
  })
});

describe('Order data by hp test', () => {
  // prueba 1 
  it('is a function', () => {
    expect(typeof sortData).toBe('function');
  });
  // prueba 2 
  it('order by max-hp asc to desc', () => {
    const data = [{
        stats: {
          'max-hp': 30,

        }
      },
      {
        stats: {
          'max-hp': 10,

        }
      },
      {
        stats: {
          'max-hp': 20,

        }
      }
    ];
    const result = [{
        stats: {
          'max-hp': 10,
        }
      },
      {
        stats: {
          'max-hp': 20,
        }
      },
      {
        stats: {
          'max-hp': 30,
        }
      }
    ];
    const condition = 'hp';
    const sortBy = 'Asc';
    expect(sortData(data, condition, sortBy)).toEqual(result);
  })
  // prueba 3
  it('order by max-hp desc to asc', () => {
    const data = [{
        stats: {
          'max-hp': 30,

        }
      },
      {
        stats: {
          'max-hp': 10,

        }
      },
      {
        stats: {
          'max-hp': 20,

        }
      }
    ];
    const result = [{
        stats: {
          'max-hp': 30,

        }
      },
      {
        stats: {
          'max-hp': 20,

        }
      },
      {
        stats: {
          'max-hp': 10,
        }
      }
    ];

    const condition = 'hp';
    const sortBy = 'Dsc';
    expect(sortData(data, condition, sortBy)).toEqual(result);
  })
});

////////////////////////////////////////////////////////
////////////////////////////////////////////////////////


describe('Order data by hp test', () => {
  // prueba 1 
  it('is a function', () => {
    expect(typeof sortData).toBe('function');
  });
  // prueba 2 
  it('order by max-hp asc to desc', () => {
    const data = [{
        stats: {
          'max-hp': 30,

        }
      },
      {
        stats: {
          'max-hp': 10,

        }
      },
      {
        stats: {
          'max-hp': 20,

        }
      }
    ];
    const result = [{
        stats: {
          'max-hp': 10,
        }
      },
      {
        stats: {
          'max-hp': 20,
        }
      },
      {
        stats: {
          'max-hp': 30,
        }
      }
    ];
    const condition = 'hp';
    const sortBy = 'Asc';
    expect(sortData(data, condition, sortBy)).toEqual(result);
  })

  // prueba 3
  it('order by max-hp desc to asc', () => {
    const data = [{
        stats: {
          'max-hp': 30,

        }
      },
      {
        stats: {
          'max-hp': 10,

        }
      },
      {
        stats: {
          'max-hp': 20,

        }
      }
    ];
    const result = [{
        stats: {
          'max-hp': 30,

        }
      },
      {
        stats: {
          'max-hp': 20,

        }
      },
      {
        stats: {
          'max-hp': 10,
        }
      }
    ];

    const condition = 'hp';
    const sortBy = 'Dsc';
    expect(sortData(data, condition, sortBy)).toEqual(result);
  })

});

////////////////////////////////////////////////////////
//////////////////////////////////////////////////////// 


describe('Order data by nothing', () => {
  // prueba 1 
  it('order by SPAWN ASC ', () => {
    const data = [{
        'spawn-chance': 3,
      },
      {
        'spawn-chance': 2,
      },
      {
        'spawn-chance': 5,
      }
    ];
    const result = [{
        'spawn-chance': 3,
      },
      {
        'spawn-chance': 2,
      },
      {
        'spawn-chance': 5,
      }
    ];
    const condition = 'NOTHING';
    const sortBy = 'NOTHING';
    expect(sortData(data, condition, sortBy)).toEqual(result);
  })


});



describe('Order data by SPAWN test', () => {
  // prueba 1 
  it('is a function', () => {
    expect(typeof sortData).toBe('function');
  });


  // prueba SPAWN DSC
  it('order by SPAWN ASC ', () => {
    const data = [{
        'spawn-chance': 3,
      },
      {
        'spawn-chance': 2,
      },
      {
        'spawn-chance': 5,
      }
    ];
    const result = [{
        'spawn-chance': 2,
      },
      {
        'spawn-chance': 3,
      },
      {
        'spawn-chance': 5,
      }
    ];
    const condition = 'spawn';
    const sortBy = 'Asc';
    expect(sortData(data, condition, sortBy)).toEqual(result);
  })

  // prueba SPAWN DSC
  it('order by SPAWN DSC', () => {
    const data = [{
        'spawn-chance': 3,
      },
      {
        'spawn-chance': 2,
      },
      {
        'spawn-chance': 5,
      }
    ];
    const result = [{
        'spawn-chance': 5,
      },
      {
        'spawn-chance': 3,
      },
      {
        'spawn-chance': 2,
      }
    ];
    const condition = 'spawn';
    const sortBy = 'Dsc';
    expect(sortData(data, condition, sortBy)).toEqual(result);
  })


});
////////////////////////////////////////////////////////
////////////////// ATTACK NAME ////////////////////////
//////////////////////////////////////////////////////// 


describe('Return pokemons ATTACKS NAME', () => {
  // prueba 1 
  it('order by attacks name', () => {
    const data = {
      'quick-move': [{
          'name': 'vine whip',
          'type': 'grass',
          'base-damage': '7',
          'energy': '6',
          'move-duration-seg': '0.6'
        },
        {
          'name': 'tackle',
          'type': 'normal',
          'base-damage': '5',
          'energy': '5',
          'move-duration-seg': '0.5'
        }
      ]
    };

    const result = ['vine whip', 'tackle'];
    expect(attackName(data['quick-move'])).toEqual(result);
  })
});

////////////////////////////////////////////////////////
/////////////CALCULATE DMG STAB/////////////////////////
////////////////////////////////////////////////////////  

describe('CALCULATE STAB DAMAGE', () => {
  // prueba 1 
  it('CALCULATE STAB DAMAGE', () => {
    const data = {
      'quick-move': [{
          'name': 'vine whip',
          'type': 'grass',
          'base-damage': '7',
          'energy': '6',
          'move-duration-seg': '0.6'
        },
        {
          'name': 'tackle',
          'type': 'normal',
          'base-damage': '5',
          'energy': '5',
          'move-duration-seg': '0.5'
        }
      ]
    };

    const result = [8.4, 5];
    expect(calculateDmgStab(data['quick-move'], 'grass')).toEqual(result);
  })
});

////////////////////////////////////////////////////////
///////////// CALCULATE DPS /////////////////////////
////////////////////////////////////////////////////////  

describe('Return pokemons CALCULATE DPS', () => {
  // prueba 1 
  it('CALCULATE DPS DAMAGE', () => {
    const data = {
      'quick-move': [{
          'name': 'vine whip',
          'type': 'grass',
          'base-damage': '7',
          'energy': '6',
          'move-duration-seg': '0.6'
        },
        {
          'name': 'tackle',
          'type': 'normal',
          'base-damage': '5',
          'energy': '5',
          'move-duration-seg': '0.5'
        }
      ]
    };

    const result = [14, 10];
    expect(calculateDps(data['quick-move'], 'grass')).toEqual(result);
  })
});

////////////////////////////////////////////////////////
///////////// CALCULATE EPS /////////////////////////
////////////////////////////////////////////////////////  

describe('Return pokemons CALCULATE EPS', () => {
  // prueba 1 
  it('CALCULATE EPS DAMAGE', () => {
    const data = {
      'quick-move': [{
          'name': 'vine whip',
          'type': 'grass',
          'base-damage': '7',
          'energy': '6',
          'move-duration-seg': '0.6'
        },
        {
          'name': 'tackle',
          'type': 'normal',
          'base-damage': '5',
          'energy': '5',
          'move-duration-seg': '0.5'
        }
      ]
    };

    const result = [10, 10];
    expect(calculateEps(data['quick-move'], 'grass')).toEqual(result);
  })
});

////////////////////////////////////////////////////////
///////////// CALCULATE DMG STAB ///////////////////////
////////////////////////////////////////////////////////  

describe('COUNT TYPES', () => {
  // prueba 1 
  it('COUNT TYPES', () => {
    const data = [
      ['grass', 'poison'],
      ['poison'],
    ]

    const result = 1;
    expect(countTypes(data, 'grass')).toEqual(result);
  })
});


////////////////////////////////////////////////////////
///////////// CALCULATE SPAWN ///////////////////////
////////////////////////////////////////////////////////  

describe('COUNT SPAWN', () => {
  // prueba 1 
  it('COUNT TYPES', () => {
    const data = [
      {
        spawn: '0.69',
        type: ['poison'],
      },

      {
        spawn: '0.39',
        type: ['grass'],
      }, 

      {
        spawn: '1.29',
        type: ['grass', 'poison'],
      }, 
    ]

    const result = 0.84;
    expect(countTypesSpawn(data, 'grass')).toEqual(result);
  })
});
