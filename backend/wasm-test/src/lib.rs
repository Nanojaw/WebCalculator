mod utils;

use wasm_bindgen::prelude::*;

// When the `wee_alloc` feature is enabled, use `wee_alloc` as the global
// allocator.
#[cfg(feature = "wee_alloc")]
#[global_allocator]
static ALLOC: wee_alloc::WeeAlloc = wee_alloc::WeeAlloc::INIT;

use evalexpr::*;
    
#[wasm_bindgen]
pub fn parse_regular_stuff(expr_str: &str) -> f64 { 
    let result: EvalexprResult<FloatType> = eval_float(expr_str);

    result.unwrap()

}

#[wasm_bindgen]
pub fn test() -> () {
    println!("test");
}