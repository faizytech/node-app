async function foo(){
    return "foo";
}

async function bar(){
    return ' bar';
}
//console.log(foo());

async function baz(){
    // const data_1  = await foo();
    // const data_2 = await bar();
    
    const [data_1,data_2] = await Promise.all([foo(),bar()])
    return data_1 + data_2;
}

baz().then((d) => console.log('then',d));