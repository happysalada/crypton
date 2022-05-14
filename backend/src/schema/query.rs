use super::{Transaction, User};

use async_graphql::{Context, Object, Result};

pub struct QueryRoot;

#[Object]
impl QueryRoot {
    async fn users<'ctx>(&self, _context: &Context<'ctx>) -> Result<Vec<User>> {
        // let pool = context
        //     .data::<SqlitePool>()
        //     .expect("failed to get connection pool");
        // // TODO find a way to type check queries with an enum in the struct
        // let agents = sqlx::query_as::<_, Agent>("SELECT * FROM agents ORDER BY inserted_at DESC")
        //     .fetch_all(pool)
        //     .await?;
        Ok(vec![User {
            id: String::from("nothing"),
        }])
    }

    async fn transactions<'ctx>(&self, _context: &Context<'ctx>) -> Result<Vec<Transaction>> {
        // let pool = context
        //     .data::<SqlitePool>()
        //     .expect("failed to get connection pool");
        // // TODO find a way to type check queries with an enum in the struct
        // let agents = sqlx::query_as::<_, Agent>("SELECT * FROM agents ORDER BY inserted_at DESC")
        //     .fetch_all(pool)
        //     .await?;
        Ok(vec![Transaction {
            id: String::from("nothing"),
        }])
    }
}
