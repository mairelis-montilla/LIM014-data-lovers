import {
  filterDataByType,
  filterDataByName,
  filterDataByRegion,
  sortData,
  filterDataByNum,
} from '../src/data.js';

//TEST FILTRAR
describe('Filter data by type  test', () => {
  it('is a function', () => {
    expect(typeof filterDataByType).toBe('function');
  });

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
  it('is a function', () => {
    expect(typeof filterDataByName).toBe('function');
  });
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

describe('Filter data by num  test', () => {
  it('is a function', () => {
    expect(typeof filterDataByNum).toBe('function');
  });
  it('Return result to filter data by type', () => {
    const data = [{
        name: 'pokemon1',
        num: '001',
      },
      {
        name: 'pokemon2',
        num: '002',
      }
    ]
    const num = '002';
    const result = [{
      name: 'pokemon2',
      num: '002',
    }]
    expect(filterDataByNum(data, num)).toEqual(result);
  });

});


describe('Filter data by region test', () => {
  it('is a function', () => {
    expect(typeof filterDataByRegion).toBe('function');
  });
  it('Return result to filter data by type', () => {
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
    expect(sortData(data, condition,sortBy)).toEqual(result);
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
