pub mod calculator_backend {
    use evalexpr::*;

    pub fn parse_regular_stuff(expr_str: &str) -> std::string::String {
        eval_string(expr_str).unwrap()
    }
}