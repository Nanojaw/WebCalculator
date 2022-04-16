pub mod calculator_backend {
    use evalexpr::*;

    pub fn parse_regular_stuff(expr_str: &str) -> bool {
        println!("{}", expr_str);
        
        let result: EvalexprResult<String> = eval_string(expr_str);

        result.is_err()
    }
}