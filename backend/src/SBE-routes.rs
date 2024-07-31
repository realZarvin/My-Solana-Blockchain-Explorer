use actix_web::web;
mod handlers;

pub fn init(cfg: &mut web::ServiceConfig) {
    cfg.service(
        web::scope("/api")
            .route("/blocks/{block_id}", web::get().to(handlers::get_block))
            .route("/transactions/{tx_id}", web::get().to(handlers::get_transaction))
            .route("/addresses/{address}", web::get().to(handlers::get_address))
    );
}
