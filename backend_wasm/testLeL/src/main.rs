use wasmTest;

fn main() {
    println!("Hello, world!");

    println!("{}", wasmTest::parse_regular_stuff("diameterToRadius(radiusToDiameter(123))"));
}
