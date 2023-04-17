function reversetring(ns) {

    
    let n=ns.length;

    for(let i=0;i<parseInt(n/2);i++){

        var tem=ns[i];
        console.log(tem);
        ns[i] = ns[n-1-i];
        console.log(ns[n-1-i]);
        ns[n-1-i] = tem;
        console.log(ns[n-1-i]);
        

    }

   console.log(ns);
};
reversetring("vard");