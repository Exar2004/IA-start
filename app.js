function dados() {
    const ds = [
        {tag: "laranja",flk: 33},
        {tag: "banana",flk: 24},
        {tag: "melão",flk: 20},
        {tag: "morango",flk: 18},
        {tag: "manga",flk: 13}
    ]

    let tg = document.getElementById("entrada").value;

    for(let i=0; i<ds.length; i++) {
        if(tg == ds[i].tag) {
            
            console.log(ds[i].tag + ds[i].flk);

            const achou = ds[i].flk;

            if(achou == ds[0].flk) {
                console.log("Excelente");
            } else if(achou == ds[1].flk) {
                console.log("Bom");
            } else if(achou == ds[2].flk) {
                console.log("Razoável");
            }

        }
    }
    
}