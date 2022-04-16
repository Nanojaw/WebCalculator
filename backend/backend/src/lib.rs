pub mod calculator_backend {
    use evalexpr::*;

    pub fn parse_regular_stuff(expr_str: &str) -> f64 { 
        let result: EvalexprResult<FloatType> = eval_float(expr_str);

        result.unwrap()

    }
}