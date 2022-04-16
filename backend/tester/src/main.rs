use backend;

fn main() {
    println!("Gello, world!");

    println!("{}", backend::calculator_backend::parse_regular_stuff("123 * 123"));
}
