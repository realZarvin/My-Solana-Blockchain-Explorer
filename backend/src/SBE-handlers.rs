use actix_web::{web, HttpResponse};
use solana_client::rpc_client::RpcClient;
use solana_sdk::commitment_config::CommitmentConfig;


const SOLANA_URL: &str = "https://api.mainnet-beta.solana.com";


pub async fn get_block(web::Path(block_id): web::Path<u64>) -> HttpResponse {
    let client = RpcClient::new_with_commitment(SOLANA_URL.to_string(), CommitmentConfig::confirmed());
    match client.get_block(block_id) {
        Ok(block) => HttpResponse::Ok().json(block),
        Err(_) => HttpResponse::NotFound().body("Block not found"),
    }
}


pub async fn get_transaction(web::Path(tx_id): web::Path<String>) -> HttpResponse {
    let client = RpcClient::new_with_commitment(SOLANA_URL.to_string(), CommitmentConfig::confirmed());
    match client.get_transaction(&tx_id) {
        Ok(tx) => HttpResponse::Ok().json(tx),
        Err(_) => HttpResponse::NotFound().body("Transaction not found"),
    }
}


pub async fn get_address(web::Path(address): web::Path<String>) -> HttpResponse {
    let client = RpcClient::new_with_commitment(SOLANA_URL.to_string(), CommitmentConfig::confirmed());
    match client.get_account(&address) {
        Ok(account) => HttpResponse::Ok().json(account),
        Err(_) => HttpResponse::NotFound().body("Address not found"),
    }
          }
