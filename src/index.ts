// import * as Rx  from 'rxjs';
import {Observable,of,from } from 'rxjs'
import {toArray,map,pluck,mergeMap,skip} from 'rxjs/operators'


// console.log(Rx);

const array:Array<object> = [
    { name: 'Bao', age: 31 },
    { name: 'Khoi', age: 25 },
    { name: 'Quy', age: 27 },
    { name: 'Khanh', age: 28 },
    { name: 'Thinh', age: 32 }
];

const info_arr = from(array);

//câu 3
console.log('============câu 3==========');
info_arr.pipe(
    toArray(),
    map((arr:any)=>arr.sort((a:any,b:any)=>a.age-b.age))
).subscribe(value => console.log(value));
    

//câu 4:
console.log('============câu 4==========');
info_arr.pipe(
    map((info:any) => info.age > 30 ? {...info, children: true } : info)
).subscribe(x => console.log(x));

//câu 5:
console.log('============câu 5==========');
info_arr.pipe(
    pluck('age'),
    toArray(),
    map((arr:any) => arr.reduce((a:number, b:number) => a + b) / arr.length)
).subscribe(value => console.log( 'Tuổi trung bình là: '+value));


//câu 6:
console.log('============câu 6===========');
info_arr.pipe(
    toArray(),
    map((arr:any) => arr[Math.floor(Math.random() * arr.length)].age * 2)
).subscribe(value => console.log('Tuổi 1 người random *2 là:'+value));

//câu 7:
console.log('============câu 7===========');
info_arr.pipe(
    toArray(),
    map((arr:any) =>arr.splice(0,0,{ name: 'truong', age: 20 }) && arr.concat({name: 'apple',age: 100})),
).subscribe(value => console.log(value));

//câu 8:
console.log('============câu 8===========');
info_arr.pipe(
    mergeMap((info:object) =>from([{ name: '___', age: 0 }, info]))
) .subscribe(value => console.log(value));
   

//câu 9:
console.log('============câu 19===========');
info_arr.pipe(
    skip(2)
).subscribe(value => console.log(value));