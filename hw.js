const HW =  require('./hw.json');


let allTopping_list =(function (){
                        let list = new Set();;
                        for(let i = 0; i < HW.length; i++){
                            for(let j = 0; j < HW[i].topping.length; j++)
                                list.add( HW[i].topping[j].type);
                        }
                        return list ;
                    })();


let allBatter_list =(function (){
                        let list = new Set();
                        for(let i = 0; i < HW.length; i++){
                            for(let j = 0; j < HW[i].batters.batter.length; j++)
                                list.add( HW[i].batters.batter[j].type);
                        }
                        return list ;
                    })();


let ppu_sum =(function (){
                let sum =0;
                for(let i = 0; i < HW.length; i++)
                   sum+= HW[i].ppu;
                return sum ;
             })();

             
let ppu_avg =(function(){
                 return ppu_sum/HW.length;
            })();


let ids =(function (){
            let list = new Set();
            for(let i = 0; i < HW.length; i++){
                if(HW[i].hasOwnProperty('id'))
                    list.add(HW[i].id);
                for(let j = 0; j< HW[i].topping.length; j++)
                    list.add(HW[i].topping[j].id);
                for(let k = 0; k< HW[i].batters.batter.length; k++)
                    list.add(HW[i].batters.batter[k].id);
            }
            return list ;
         })();



console.log(Array.from(allTopping_list.values()));
console.log(Array.from(allBatter_list.values()));
console.log(ppu_sum);
console.log(ppu_avg);
console.log(Array.from(ids.values()));