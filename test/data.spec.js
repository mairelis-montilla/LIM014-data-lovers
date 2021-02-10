import { filterDataByType,
  filterDataByName,
  filterDataByRegion,
  orderDataByName,
  orderDataByNum,
  orderDataByCP,
  orderDataByHP,
  filterDataByNum,
} from '../src/data.js';

//TEST FILTRAR
describe('Filter data by type  test', () => {
  it('is a function', () => {
    expect(typeof filterDataByType).toBe('function');
  });

  it('Return result to filter data by type', () => {
    const data = [{
        name:'pokemon1',
        type: 'fire',
    },
    {
      name:'pokemon2',
      type: 'grass',
  }
  ]
    const type = 'fire';
    const result = [{
      name:'pokemon1',
      type: 'fire',
  }]
    expect(filterDataByType(data, type)).toEqual(result);
  });
});


describe('filter data by name test', () => {
  it('is a function', () => {
    expect(typeof filterDataByName).toBe('function');
  });
  it('Return result to filter data by name', () => {
    const data = [{
        name:'pokemon1',
        type: 'fire',
    },
    {
      name:'pokemon2',
      type: 'grass',
  }
  ]
    const name = 'pokemon1';
    const result = [{
      name:'pokemon1',
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
        name:'pokemon1',
        num: '001',
    },
    {
      name:'pokemon2',
      num: '002',
  }
  ]
    const num = '002';
    const result = [{
      name:'pokemon2',
      num: '002',
  }]
    expect(filterDataByNum(data, num)).toEqual(result);
  });

});


describe('Filter data by region  test', () => {
  it('is a function', () => {
    expect(typeof filterDataByRegion).toBe('function');
  });
  it('Return result to filter data by type', () => {
    const data = [{
        name:'pokemon1',
        generation:{
          name: 'kanto',
    }},
    {
      name:'pokemon2',
      generation:{
        name: 'johto'
      }
  }
  ]
    const generation = 'kanto';
    const result = [{
      name:'pokemon1',
      generation:{
        name: 'kanto',
  }}];

  expect(filterDataByRegion(data, generation)).toEqual(result);
  });
});

// TEST ORDER
describe('order data by name  test', () => {
  it('is a function', () => {
    expect(typeof orderDataByName).toBe('function');
  });
  it('order by name  A to Z',()=>{
    const data = [{
      name: 'A',
    },
  {
    name: 'Z',
  },
{
name: 'D',
}];
const result = [{
  name: 'A',
},
{
name: 'D',
},
{
name: 'Z',
}];
    const condition ='nameAsc';
    expect(orderDataByName(data, condition)).toEqual(result);
  })
  it('order by name  A to Z',()=>{
    const data = [{
      name: 'A',
    },
  {
    name: 'Z',
  },
{
name: 'D',
}];
const result = [{
  name: 'Z',
},
{
name: 'D',
},
{
name: 'A',
}];
    const condition ='nameDesc';
    expect(orderDataByName(data, condition)).toEqual(result);
  })
});


describe('Order data by num test', () => {
  it('is a function', () => {
    expect(typeof orderDataByNum).toBe('function');
  });
  it('order by num asc to desc',()=>{
    const data = [{
      num: 3,
    },
  {
    num: 2,
  },
{
num: 5,
}];
const result = [{
  num: 2,
},
{
num: 3,
},
{
num: 5,
}];
    const condition ='numAsc';
    expect(orderDataByNum(data, condition)).toEqual(result);
  })
  it('order by num desc to asc',()=>{
    const data = [{
      num: 5,
    },
  {
    num: 1,
  },
{
num: 6,
}];
const result = [{
  num: 6,
},
{
num: 5,
},
{
num: 1,
}];
    const condition ='numDesc';
    expect(orderDataByNum(data, condition)).toEqual(result);
  })

});

describe('Order data by cp test', () => {
  it('is a function', () => {
    expect(typeof orderDataByCP).toBe('function');
  });
  it('order by max-cp asc to desc',()=>{
    const data = [{
      stats:{
        'max-cp': 30,

      }}
    ,
    { stats:{
      'max-cp': 10,

    }
  },
{ stats:{
    'max-cp': 20,

  }}];
const result = [{
  stats:{
    'max-cp': 10,
  }
},
{
stats:{
  'max-cp': 20,
}
},
{
stats:{
'max-cp': 30,
}}];
    const condition = 'cpAsc';
    expect(orderDataByCP(data, condition)).toEqual(result);
  })
  it('order by max-cp desc to asc',()=>{
    const data = [{
      stats:{
        'max-cp': 30,

      }
    },
  {
    stats:{
      'max-cp': 10,

    }
  },
{
  stats:{
    'max-cp': 20,

  }}];
const result = [{
  stats:{
    'max-cp': 30,

  }
},
{
stats:{
  'max-cp': 20,

}
},
{
stats:{
'max-cp': 10,
}}];
    const condition ='cpDesc';
    expect(orderDataByCP(data, condition)).toEqual(result);
  })
});

describe('Order data by hp test', () => {
  it('is a function', () => {
    expect(typeof orderDataByHP).toBe('function');
  });

  it('order by max-hp asc to desc',()=>{
    const data = [{
      stats:{
        'max-hp': 30,

      }}
    ,
    { stats:{
      'max-hp': 10,

    }
  },
{ stats:{
    'max-hp': 20,

  }}];
const result = [{
  stats:{
    'max-hp': 10,
  }
},
{
stats:{
  'max-hp': 20,
}
},
{
stats:{
'max-hp': 30,
}}];
    const condition = 'hpAsc';
    expect(orderDataByHP(data, condition)).toEqual(result);
  })
  it('order by max-hp desc to asc',()=>{
    const data = [{
      stats:{
        'max-hp': 30,

      }
    },
  {
    stats:{
      'max-hp': 10,

    }
  },
{
  stats:{
    'max-hp': 20,

  }}];
const result = [{
  stats:{
    'max-hp': 30,

  }
},
{
stats:{
  'max-hp': 20,

}
},
{
stats:{
'max-hp': 10,
}}];
    const condition ='hpDesc';
    expect(orderDataByHP(data, condition)).toEqual(result);
  })
});
