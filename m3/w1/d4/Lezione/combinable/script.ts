type Combinable = number | string;
type ConversionDescriptor = boolean | string;

function combine(input1:Combinable, input2:Combinable):Combinable {



    if(typeof input1 === 'number' && typeof input2 === 'number'){

        var result:Combinable = Number(input1) + Number(input2);

    }else{

        var result:Combinable = input1.toString() + String(input2);

    }

    return result;

}