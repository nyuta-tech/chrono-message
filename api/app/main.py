from fastapi import FastAPI, Depends
from app.graphene.query import schema
from starlette_graphene3 import GraphQLApp
from app.auth import auth

app = FastAPI()


@app.get("/")
def index():
    return {"Hello": "World"}


@app.get("/users/{user_id}")
def read_item(user_id: int):
    return {"user_id": user_id}


@app.get("/me")
async def hello_user(user=Depends(auth.auth_user)):
    return {"msg": "Hello, user", "uid": user["uid"]}


app.add_route("/graphql", GraphQLApp(schema=schema))
