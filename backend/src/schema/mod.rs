use async_graphql::{EmptySubscription, Schema, SimpleObject};
use std::default::Default;
pub mod mutation;
pub mod query;
pub use mutation::MutationRoot;
pub use query::QueryRoot;

pub type CryptonSchema = Schema<QueryRoot, MutationRoot, EmptySubscription>;

#[derive(Clone, SimpleObject, Default)]
struct User {
    id: String,
}

#[derive(Clone, SimpleObject, Default)]
struct Transaction {
    id: String,
}
