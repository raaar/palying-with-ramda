const Rx = require('rxjs');

const observable = Rx.Observable.from(2, 4, 6, 8);  
// observable.map(value => value * value).subscribe(result => console.log(result));

// var a = Rx.Observable.create( function onObserve(observer){
//   setInterval( function everySecond(){
//       observer.next( Math.random() );
//   }, 1000 );
// } );

// console.log(a);



// var b =
//     a.observers
//     .filter( v => v % 2 == 1 )      // only odd numbers
//     .distinctUntilChanged()         // only consecutive-distinct
//     .throttle( 100 )                // slow it down a bit
//     .map( v = v * 2 );              // double them

// b.subscribe( function onValue(v){
//     console.log( "Next:", v );
// } );

// **************************
// consumer:

// var b = a.map( function double(v){
//     return v * 2;
// } );

// b.subscribe( function onValue(v){
//     console.log( v );
// } );