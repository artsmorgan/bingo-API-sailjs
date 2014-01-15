exports.createCard = function() {

    var b = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];
    var i = [16,17,18,19,20,21,22,23,24,25,26,27,28,29,30];
    var n = [31,32,33,34,35,36,37,38,39,40,41,42,43,44,45];
    var g = [46,47,48,49,50,51,52,53,54,55,56,57,58,59,60];
    var o = [61,62,63,64,65,66,67,68,69,70,71,72,73,74,75];

    function createRandomNumber(arr){
        var max = arr[0];
        var min =  arr[arr.length-1];
        return Math.floor(Math.random() * (max - min + 1)) + min;;
    }

    function createColumn(column,value){
        var arr = []
        while(arr.length < value){
            var randomnumber = createRandomNumber(column);
            var found=false;
            for(var i=0;i<arr.length;i++){
                if(arr[i]==randomnumber){found=true;break}
            }
            if(!found)arr[arr.length]=randomnumber;
        }

        return arr;
    }


    return {
            b: createColumn(b,5),
            i: createColumn(i,5),
            n: createColumn(n,4),
            g: createColumn(g,5),
            o: createColumn(o,5)
    }
};
