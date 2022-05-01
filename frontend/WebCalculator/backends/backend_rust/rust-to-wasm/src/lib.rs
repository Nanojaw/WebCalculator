mod utils;

use wasm_bindgen::prelude::*;

// When the `wee_alloc` feature is enabled, use `wee_alloc` as the global
// allocator.
#[cfg(feature = "wee_alloc")]
#[global_allocator]
static ALLOC: wee_alloc::WeeAlloc = wee_alloc::WeeAlloc::INIT;

use backend;
#[wasm_bindgen]
pub fn parse_regular_stuff(str: &str) -> f64 {
    backend::calculator_backend::parse_regular_stuff(str)
}